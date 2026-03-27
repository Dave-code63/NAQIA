import Header from "../components/Header";
import Footer from "../components/Footer";
import { FileText, UserCheck, QrCode, PlaneLanding, Ship, AlertTriangle, CheckCircle, ArrowRight, Download } from "lucide-react";

export default function ImportExport() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-green-900 text-white py-24">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
              alt="Cargo Ship" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-900"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Import & Export Guidelines</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Essential information and procedures for importing and exporting agricultural, animal, and plant products in Papua New Guinea.
            </p>
          </div>
        </div>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Main Content */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
                  <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-4">Online Membership and Permit Facilities</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    NAQIA has transitioned to a digital portal to streamline the application process for import permits. All importers and overseas suppliers must now register for an online membership account before applying for permits or shipping goods to Papua New Guinea.
                  </p>

                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold border-2 border-green-600">1</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                          <UserCheck className="mr-2 text-green-600" size={20} />
                          How to Apply for Importer Membership Account
                        </h3>
                        <p className="text-gray-600 mb-3">Local businesses and individuals wishing to import regulated goods must create an Importer Membership Account.</p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Visit the NAQIA Online Portal.</li>
                          <li>Select "Register as Importer".</li>
                          <li>Provide your IPA (Investment Promotion Authority) registration certificate.</li>
                          <li>Submit valid identification (Passport, NID, or Driver's License).</li>
                          <li>Pay the annual membership fee via the online payment gateway.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold border-2 border-green-600">2</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                          <Ship className="mr-2 text-blue-600" size={20} />
                          How to Apply for Supplier Membership Account
                        </h3>
                        <p className="text-gray-600 mb-3">Overseas manufacturers and suppliers exporting to PNG must also be registered in our system to ensure traceability and compliance.</p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Select "Register as Overseas Supplier" on the portal.</li>
                          <li>Provide business registration details from the country of origin.</li>
                          <li>Upload relevant health and safety certifications (e.g., HACCP, ISO).</li>
                          <li>Once approved, the supplier will receive a unique Supplier ID.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold border-2 border-green-600">3</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                          <QrCode className="mr-2 text-purple-600" size={20} />
                          How to Apply for Supplier Product QR Code
                        </h3>
                        <p className="text-gray-600 mb-3">To expedite border clearance, approved products from registered suppliers can be assigned a unique NAQIA QR Code.</p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Log in to the Supplier or Importer dashboard.</li>
                          <li>Register the specific product line (e.g., Frozen Chicken, Canned Beef).</li>
                          <li>Upload the product's ingredient list and processing methods.</li>
                          <li>Upon approval, a QR code is generated to be printed on the shipping labels.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <h2 className="text-3xl font-bold text-green-900 mb-6 border-b pb-4">Exporting from PNG</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    NAQIA facilitates the export of Papua New Guinea's agricultural products by providing necessary health and phytosanitary certifications required by destination countries.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <h4 className="font-bold text-green-900 mb-2 flex items-center">
                        <FileText className="mr-2 text-green-600" size={18} />
                        Phytosanitary Certificates
                      </h4>
                      <p className="text-sm text-gray-700">Required for exporting plants, plant products, timber, and coffee. Certifies that the shipment has been inspected and is free from quarantine pests.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                        <FileText className="mr-2 text-blue-600" size={18} />
                        Animal Health Certificates
                      </h4>
                      <p className="text-sm text-gray-700">Required for exporting live animals, meat, dairy, and marine products. Certifies the health status of the animals and safety of the products.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3 space-y-6">
                <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertTriangle className="text-yellow-600" size={24} />
                    <h3 className="text-lg font-bold text-yellow-900">Important Notice</h3>
                  </div>
                  <p className="text-sm text-yellow-800 mb-4">
                    Importing regulated goods without a valid NAQIA Import Permit is a serious offense under the Biosecurity Act. Goods will be confiscated and destroyed at the importer's expense.
                  </p>
                  <a href="#" className="inline-flex items-center text-sm font-bold text-yellow-700 hover:text-yellow-900">
                    Read the Biosecurity Act <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Downloads</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-center text-sm text-gray-600 hover:text-green-700 group">
                        <Download size={16} className="mr-2 text-gray-400 group-hover:text-green-600" />
                        Fee Schedule 2024 (PDF)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-sm text-gray-600 hover:text-green-700 group">
                        <Download size={16} className="mr-2 text-gray-400 group-hover:text-green-600" />
                        Prohibited Imports List (PDF)
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-sm text-gray-600 hover:text-green-700 group">
                        <Download size={16} className="mr-2 text-gray-400 group-hover:text-green-600" />
                        Manual Application Form (PDF)
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-900 rounded-xl p-6 text-white shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Need Help?</h3>
                  <p className="text-green-100 text-sm mb-4">Our permit officers are available to assist you with your application process.</p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center"><strong className="w-16">Phone:</strong> +675 311 2100</p>
                    <p className="flex items-center"><strong className="w-16">Email:</strong> permits@naqia.gov.pg</p>
                  </div>
                  <a href="/portal" className="mt-6 w-full bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-2 px-4 rounded transition-colors block text-center">
                    Access Online Portal
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
