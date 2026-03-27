import { ArrowRight, ShieldAlert, Leaf, PlaneTakeoff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative bg-green-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1592982537447-6f2334208f34?q=80&w=2070&auto=format&fit=crop" 
          alt="PNG Agriculture" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-yellow-500 text-green-900 px-3 py-1 rounded-full text-sm font-bold mb-6">
            <ShieldAlert size={16} />
            <span>Protecting PNG's Biodiversity</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Safeguarding Our Agriculture & Environment
          </h1>
          <p className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl leading-relaxed">
            Protecting animal, plant and human life from pest and diseases through the provision of quality quarantine services and trade facilitation.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/services" className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-md transition-colors flex items-center space-x-2">
              <span>Our Services</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/import-export" className="bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white font-bold py-3 px-8 rounded-md transition-colors">
              Import & Export Guidelines
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="relative z-20 container mx-auto px-4 -mt-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-green-600 transform transition-transform hover:-translate-y-1">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center text-green-700 mb-4">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Plant Health</h3>
            <p className="text-gray-600 mb-4 text-sm">Protecting PNG's flora from exotic pests and diseases through rigorous inspection and quarantine.</p>
            <Link to="/services/plant" className="text-green-700 font-bold text-sm flex items-center hover:text-green-800">
              Learn more <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-yellow-500 transform transition-transform hover:-translate-y-1">
            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center text-yellow-600 mb-4">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Animal Health</h3>
            <p className="text-gray-600 mb-4 text-sm">Safeguarding livestock and native fauna through disease surveillance and strict import controls.</p>
            <Link to="/services/animal" className="text-green-700 font-bold text-sm flex items-center hover:text-green-800">
              Learn more <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-blue-600 transform transition-transform hover:-translate-y-1">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-700 mb-4">
              <PlaneTakeoff size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Border Operations</h3>
            <p className="text-gray-600 mb-4 text-sm">Managing biosecurity risks at international airports, seaports, and mail centers across PNG.</p>
            <Link to="/services/border" className="text-green-700 font-bold text-sm flex items-center hover:text-green-800">
              Learn more <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
