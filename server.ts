import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import QRCode from "qrcode";
import PDFDocument from "pdfkit";
import path from "path";
import crypto from "crypto";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock PostgreSQL Database Tables
const db = {
  users: [] as any[],
  permits: [] as any[],
  payments: [] as any[],
  product_qr_codes: [] as any[]
};

// Mock IRC Database for TIN Validation
const mockIRC = {
  "123456789": "PNG Agriculture Holdings Ltd",
  "987654321": "Highlands Coffee Exporters",
  "111222333": "Pacific Marine Products"
};

// In-memory OTP store
const otpStore = new Map<string, string>();

// 1. Validation Engine: TIN Check
app.post("/api/validate-tin", (req, res) => {
  const { tin } = req.body;
  
  if (!tin || tin.length < 9) {
    return res.status(400).json({ valid: false, error: "Invalid TIN format. Must be at least 9 digits." });
  }

  // Check against mock IRC database
  const companyName = mockIRC[tin as keyof typeof mockIRC];
  
  if (companyName) {
    res.json({ valid: true, companyName });
  } else {
    // For demo purposes, if it's not in the mock DB but is 9 digits, we'll accept it as a new valid entity
    res.json({ valid: true, companyName: `Registered Entity ${tin}` });
  }
});

// 1. Validation Engine: Email Verification (OTP)
app.post("/api/send-otp", (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore.set(email, otp);
  
  // In a real app, send via SendGrid/AWS SES
  console.log(`[EMAIL MOCK] Sent OTP ${otp} to ${email}`);
  
  res.json({ success: true, message: "OTP sent successfully. (Check server console for demo)" });
});

app.post("/api/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  
  if (otpStore.get(email) === otp) {
    otpStore.delete(email); // clear after use
    res.json({ success: true, message: "Email verified successfully" });
  } else {
    res.status(400).json({ success: false, error: "Invalid or expired OTP" });
  }
});

// 3. Payment Gateway & 4. Database Registration
app.post("/api/register", (req, res) => {
  const { accountType, tin, companyName, email, paymentMethod, amount } = req.body;
  
  // Generate IDs
  const userId = `USR-${Date.now()}`;
  const permitId = `PRMT-${Date.now()}`;
  const paymentId = `PAY-${Date.now()}`;
  const uuid = crypto.randomUUID();

  // Save to Mock DB (PostgreSQL equivalent)
  db.users.push({ id: userId, accountType, tin, companyName, email, createdAt: new Date() });
  
  db.payments.push({ id: paymentId, userId, amount, method: paymentMethod, status: "COMPLETED", date: new Date() });
  
  db.permits.push({ id: permitId, userId, uuid, status: "ACTIVE", issueDate: new Date(), expiryDate: new Date(Date.now() + 31536000000) }); // 1 year expiry

  res.json({ 
    success: true, 
    message: "Registration and payment successful",
    data: { userId, permitId, uuid, paymentId }
  });
});

// 2. Permit Generation Module (PDF + QR)
app.get("/api/permit/:uuid/pdf", async (req, res) => {
  const { uuid } = req.params;
  
  // Find permit in DB
  const permit = db.permits.find(p => p.uuid === uuid);
  if (!permit) {
    return res.status(404).json({ error: "Permit not found" });
  }

  const user = db.users.find(u => u.id === permit.userId);

  try {
    // Generate QR Code pointing to verification URL
    const verifyUrl = `https://naqia.gov.pg/verify/${uuid}`;
    const qrCodeDataUrl = await QRCode.toDataURL(verifyUrl, { margin: 1, width: 150 });
    
    // Create PDF
    const doc = new PDFDocument({ margin: 50 });
    
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=NAQIA_Permit_${uuid}.pdf`);
    
    doc.pipe(res);

    // Header
    doc.fontSize(24).fillColor("#166534").text("NAQIA", { align: "center" });
    doc.fontSize(14).fillColor("#4b5563").text("National Agriculture Quarantine & Inspection Authority", { align: "center" });
    doc.moveDown(2);

    // Title
    doc.fontSize(20).fillColor("#000000").text("OFFICIAL IMPORT/EXPORT PERMIT", { align: "center" });
    doc.moveDown(2);

    // Details
    doc.fontSize(12).text(`Permit Number: ${permit.id}`);
    doc.text(`UUID: ${uuid}`);
    doc.text(`Status: ${permit.status}`);
    doc.text(`Issue Date: ${permit.issueDate.toLocaleDateString()}`);
    doc.text(`Expiry Date: ${permit.expiryDate.toLocaleDateString()}`);
    doc.moveDown();

    doc.text(`Entity Name: ${user?.companyName || "N/A"}`);
    doc.text(`TIN: ${user?.tin || "N/A"}`);
    doc.text(`Account Type: ${user?.accountType || "N/A"}`);
    doc.moveDown(2);

    // Add QR Code
    const base64Data = qrCodeDataUrl.replace(/^data:image\/png;base64,/, "");
    const imgBuffer = Buffer.from(base64Data, "base64");
    
    doc.text("Scan to verify authenticity:", { align: "center" });
    doc.moveDown(0.5);
    // Center the image
    doc.image(imgBuffer, (doc.page.width - 150) / 2, doc.y, { width: 150 });

    doc.end();
  } catch (err) {
    console.error("PDF Generation Error:", err);
    res.status(500).json({ error: "Failed to generate permit PDF" });
  }
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
