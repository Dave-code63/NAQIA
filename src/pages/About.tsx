import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShieldCheck, Target, Eye, CheckCircle2, Leaf, PlaneTakeoff } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-green-900 text-white py-24">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop" 
              alt="PNG Landscape" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-900"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About NAQIA</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Protecting Papua New Guinea's agriculture, environment, and people through vigilant biosecurity.
            </p>
          </div>
        </div>

        {/* What is NAQIA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1592982537447-6f2334208f34?q=80&w=2070&auto=format&fit=crop" 
                  alt="Agriculture in PNG" 
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is NAQIA?</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The National Agriculture Quarantine and Inspection Authority (NAQIA) is a statutory body established under the NAQIA Act 1997. We are the premier biosecurity agency of Papua New Guinea.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our primary mandate is to protect Papua New Guinea's animal and plant health, facilitate international trade, and safeguard the environment and human health from the introduction and spread of exotic pests and diseases.
                </p>
                <div className="flex items-center space-x-4 bg-green-50 p-4 rounded-lg border-l-4 border-green-700">
                  <ShieldCheck className="text-green-700 flex-shrink-0" size={32} />
                  <p className="text-green-900 font-medium">
                    "Vigilance in Biosecurity for a Prosperous Papua New Guinea."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 text-center transform transition-transform hover:-translate-y-1">
                <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Eye className="text-blue-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be a premier biosecurity agency in the Asia-Pacific region, ensuring a safe and prosperous Papua New Guinea.
                </p>
              </div>
              
              <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 text-center transform transition-transform hover:-translate-y-1">
                <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="text-yellow-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide effective and efficient biosecurity services that protect our agriculture, environment, and facilitate safe trade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Objectives</h2>
              <div className="w-24 h-1 bg-green-700 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Prevent the introduction and spread of exotic pests and diseases.",
                "Protect PNG's flora and fauna, and the natural environment.",
                "Facilitate safe international trade of agricultural products.",
                "Provide scientific and technical advice on biosecurity matters.",
                "Ensure compliance with international sanitary and phytosanitary standards.",
                "Promote public awareness on biosecurity and quarantine requirements."
              ].map((objective, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 font-medium">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Functions */}
        <section className="py-20 bg-green-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Functions</h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-green-100 max-w-2xl mx-auto">
                NAQIA operates through several key divisions to execute its mandate across the country.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-800 p-8 rounded-xl border border-green-700 hover:bg-green-700 transition-colors">
                <Leaf className="text-yellow-400 mb-6" size={48} />
                <h3 className="text-xl font-bold mb-4">Plant Health</h3>
                <p className="text-green-100 mb-4">
                  Conducts surveillance, pest risk analysis, and provides phytosanitary certification to protect PNG's plant life and agricultural crops.
                </p>
              </div>
              
              <div className="bg-green-800 p-8 rounded-xl border border-green-700 hover:bg-green-700 transition-colors">
                <ShieldCheck className="text-yellow-400 mb-6" size={48} />
                <h3 className="text-xl font-bold mb-4">Animal Health</h3>
                <p className="text-green-100 mb-4">
                  Monitors and manages animal diseases, ensures animal welfare standards, and provides veterinary certification for exports.
                </p>
              </div>
              
              <div className="bg-green-800 p-8 rounded-xl border border-green-700 hover:bg-green-700 transition-colors">
                <PlaneTakeoff className="text-yellow-400 mb-6" size={48} />
                <h3 className="text-xl font-bold mb-4">Quarantine Operations</h3>
                <p className="text-green-100 mb-4">
                  Frontline defense at international airports, seaports, and land borders. Inspects passengers, cargo, and mail for biosecurity risks.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
