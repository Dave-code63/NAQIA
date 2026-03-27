import Header from "../components/Header";
import Footer from "../components/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const regionalOffices = [
    {
      region: "Momase & Highlands Regional Office",
      address: "Lae, Morobe Province",
      phone: "+675 472 4464",
      email: "momase@naqia.gov.pg"
    },
    {
      region: "New Guinea Islands Regional Office",
      address: "Kokopo, East New Britain",
      phone: "+675 982 8411",
      email: "ngi@naqia.gov.pg"
    },
    {
      region: "Southern Regional Office",
      address: "Port Moresby, NCD",
      phone: "+675 321 2644",
      email: "southern@naqia.gov.pg"
    },
    {
      region: "National Veterinary Laboratory",
      address: "Kila Kila, Port Moresby",
      phone: "+675 320 0442",
      email: "nvl@naqia.gov.pg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-green-900 text-white py-24">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop" 
              alt="Contact NAQIA" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-900"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Get in touch with the National Agriculture Quarantine and Inspection Authority. We are here to assist you.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Contact Information */}
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Head Office</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-700 flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">Location</h3>
                      <p className="text-gray-600">
                        NAQIA Head Office<br />
                        Section 35, Allotment 16, Morea Tobo Road<br />
                        6 Mile, Port Moresby<br />
                        National Capital District, Papua New Guinea
                      </p>
                      <p className="text-gray-600 mt-2">
                        <strong>Postal:</strong> PO Box 741, Port Moresby
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-700 flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">Phone</h3>
                      <p className="text-gray-600">+675 311 2100</p>
                      <p className="text-gray-600">+675 311 2104</p>
                      <p className="text-green-700 font-bold mt-2">Toll-Free: 180 1332</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-700 flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
                      <p className="text-gray-600">info@naqia.gov.pg</p>
                      <p className="text-gray-600">enquiries@naqia.gov.pg</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-700 flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">Operating Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:06 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                      <p className="text-gray-600">Public Holidays: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-2/3">
                <div className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                          placeholder="+675 XXXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select 
                        id="subject" 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select a subject...</option>
                        <option value="import">Import Enquiries</option>
                        <option value="export">Export Enquiries</option>
                        <option value="biosecurity">Biosecurity Alert / Report</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 px-6 rounded-md transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Regional Offices */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Offices</h2>
              <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                NAQIA has regional offices and operational presence across Papua New Guinea to ensure effective biosecurity coverage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regionalOffices.map((office, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-green-800 text-lg mb-4 leading-tight">{office.region}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone size={16} className="text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail size={16} className="text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600">{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
