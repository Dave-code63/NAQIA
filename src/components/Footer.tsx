import { ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-white p-2 rounded-full text-green-900">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h2 className="text-xl font-bold leading-tight">PNG Biosecurity</h2>
              <h3 className="text-sm text-green-200">Authority</h3>
            </div>
          </div>
          <p className="text-green-100 text-sm mb-6">
            Protecting animal, plant and human life from pest and diseases through the provision of quality quarantine services.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-yellow-400 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-white hover:text-yellow-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-green-700 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3 text-sm text-green-100">
            <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About NAQIA</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400 transition-colors">Our Services</Link></li>
            <li><Link to="/import-export" className="hover:text-yellow-400 transition-colors">Import & Export Guidelines</Link></li>
            <li><Link to="/news" className="hover:text-yellow-400 transition-colors">News & Media</Link></li>
            <li><Link to="/careers" className="hover:text-yellow-400 transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-green-700 pb-2 inline-block">Resources</h3>
          <ul className="space-y-3 text-sm text-green-100">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Forms & Applications</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Legislation & Policies</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Fees & Charges</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Biosecurity Alerts</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Publications</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 border-b border-green-700 pb-2 inline-block">Contact Us</h3>
          <ul className="space-y-4 text-sm text-green-100">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="mt-0.5 flex-shrink-0 text-yellow-400" />
              <span>NAQIA Head Office<br/>P.O. Box 741, Port Moresby<br/>National Capital District, PNG</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="flex-shrink-0 text-yellow-400" />
              <span>+675 311 2100</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="flex-shrink-0 text-yellow-400" />
              <span>info@naqia.gov.pg</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t border-green-800 text-center text-sm text-green-300">
        <p>&copy; {new Date().getFullYear()} Papua New Guinea National Agriculture Quarantine & Inspection Authority. All rights reserved.</p>
      </div>
    </footer>
  );
}
