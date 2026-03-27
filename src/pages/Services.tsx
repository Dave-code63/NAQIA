import Header from "../components/Header";
import Footer from "../components/Footer";
import { Globe, Microscope, Map, CheckCircle2, PlaneLanding, Phone, Mail, MapPin, Laptop } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-green-900 text-white py-24">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1586771107445-d3afcb0de51f?q=80&w=2070&auto=format&fit=crop" 
              alt="NAQIA Services" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-900"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Protecting PNG's unique environment and multi-billion-kina agriculture sector from the introduction of exotic pests and diseases.
            </p>
          </div>
        </div>

        {/* Core Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* 1. Import Services & Regulation */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-100 p-4 rounded-lg text-blue-700">
                    <PlaneLanding size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">1. Import Services & Regulation</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  NAQIA strictly regulates everything coming into the country to ensure no harmful biological threats enter.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Import Permits:</strong>
                      <p className="text-gray-600 text-sm mt-1">Issuing permits for animals, plants, fish, and biological products. <span className="text-blue-600 font-medium block mt-1 bg-blue-50 p-2 rounded border border-blue-100">Note: Applications and payments must now be done online via our digital portal.</span></p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Border Inspection:</strong>
                      <p className="text-gray-600 text-sm mt-1">Physical screening of international passengers, luggage, cargo, and mail at all major airports (like Jacksons International) and seaports.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Vessel & Aircraft Clearance:</strong>
                      <p className="text-gray-600 text-sm mt-1">Inspecting and, if necessary, treating (fumigating) ships, planes, and used machinery arriving from overseas.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Risk Assessment:</strong>
                      <p className="text-gray-600 text-sm mt-1">Analyzing the biosecurity risks of new products or "priority" food items before they are allowed entry.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 2. Export Facilitation & Certification */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-green-100 p-4 rounded-lg text-green-700">
                    <Globe size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">2. Export Facilitation & Certification</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  To help PNG farmers and businesses reach global markets, NAQIA ensures local products meet international standards.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Phytosanitary Certificates:</strong>
                      <p className="text-gray-600 text-sm mt-1">Official documents for plant exports certifying they are free from pests.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Animal Health Certificates:</strong>
                      <p className="text-gray-600 text-sm mt-1">Required for the export of livestock or animal-derived products.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Compliance Inspections:</strong>
                      <p className="text-gray-600 text-sm mt-1">Checking that export commodities match the specific quarantine requirements of the destination country.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 3. Technical & Laboratory Services */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-purple-100 p-4 rounded-lg text-purple-700">
                    <Microscope size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">3. Technical & Laboratory Services</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  NAQIA operates specialized facilities to provide scientific backing for their inspections.
                </p>
                <div className="mb-6 p-5 bg-gray-50 rounded-lg border border-gray-200">
                  <strong className="text-gray-900 block mb-2 text-lg">National Animal Health and Food Testing Laboratory (NAHFTL)</strong>
                  <p className="text-gray-600 text-sm mb-4 flex items-center"><MapPin size={14} className="mr-1" /> Located at 6 Mile, Port Moresby, this lab provides:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-700"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>Veterinary diagnostic testing.</li>
                    <li className="flex items-center text-sm text-gray-700"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>Food safety testing (microbiological and chemical analysis).</li>
                    <li className="flex items-center text-sm text-gray-700"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>Surveillance for diseases like African Swine Fever or Foot and Mouth Disease.</li>
                  </ul>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Plant Pathology & Entomology:</strong>
                      <p className="text-gray-600 text-sm mt-1">Identification of insect pests and plant diseases.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 4. Domestic Biosecurity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-orange-100 p-4 rounded-lg text-orange-700">
                    <Map size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">4. Domestic Biosecurity</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  NAQIA doesn't just watch the borders; they also manage threats already inside PNG (Internal Quarantine).
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Internal Movement Control:</strong>
                      <p className="text-gray-600 text-sm mt-1">Regulating the movement of certain plants or animals between provinces to stop the spread of localized outbreaks (e.g., Coffee Berry Borer or Cocoa Pod Borer).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Surveillance & Monitoring:</strong>
                      <p className="text-gray-600 text-sm mt-1">Ongoing field surveys to detect any new "incursions" of pests or diseases early.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Emergency Response:</strong>
                      <p className="text-gray-600 text-sm mt-1">Leading the "stamping out" or management of invasive species outbreaks.</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Important Contact Information */}
        <section className="py-16 bg-green-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-green-800 rounded-2xl border border-green-700 p-8 md:p-12 shadow-xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Important Contact Information</h2>
                <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4 bg-green-900/50 p-6 rounded-xl">
                  <div className="bg-green-700 p-4 rounded-full text-yellow-400">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-green-200 text-sm font-bold uppercase tracking-wider">General Enquiries</h3>
                    <p className="text-xl font-bold">+675 311 2100</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-green-900/50 p-6 rounded-xl">
                  <div className="bg-green-700 p-4 rounded-full text-yellow-400">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="text-green-200 text-sm font-bold uppercase tracking-wider">Email</h3>
                    <a href="mailto:info@naqia.gov.pg" className="text-xl font-bold hover:text-yellow-400 transition-colors">info@naqia.gov.pg</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-green-900/50 p-6 rounded-xl">
                  <div className="bg-green-700 p-4 rounded-full text-yellow-400">
                    <Laptop size={28} />
                  </div>
                  <div>
                    <h3 className="text-green-200 text-sm font-bold uppercase tracking-wider">Online Portal</h3>
                    <a href="https://www.pngnaqia.com" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-yellow-400 transition-colors">www.pngnaqia.com</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-green-900/50 p-6 rounded-xl">
                  <div className="bg-green-700 p-4 rounded-full text-yellow-400">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-green-200 text-sm font-bold uppercase tracking-wider">Headquarters</h3>
                    <p className="text-lg font-medium">Morea Tobo Road, 6 Mile<br />Port Moresby</p>
                  </div>
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
