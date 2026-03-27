import { Microscope, FileText, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Laboratory Services",
      description: "State-of-the-art diagnostic testing for animal and plant diseases to support surveillance and certification.",
      icon: <Microscope size={32} />,
      color: "bg-purple-100 text-purple-700"
    },
    {
      title: "Import Permits",
      description: "Processing applications and issuing permits for the importation of live animals, plants, and their products.",
      icon: <FileText size={32} />,
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Export Certification",
      description: "Providing phytosanitary and veterinary health certificates for PNG's agricultural exports.",
      icon: <Globe size={32} />,
      color: "bg-green-100 text-green-700"
    },
    {
      title: "Quarantine Operations",
      description: "Inspection and clearance of passengers, cargo, vessels, and aircraft arriving in Papua New Guinea.",
      icon: <ShieldCheck size={32} />,
      color: "bg-red-100 text-red-700"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Functions</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            NAQIA provides essential biosecurity services to protect Papua New Guinea's unique environment, agriculture sector, and economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a href="#" className="font-semibold text-green-700 hover:text-green-800 inline-flex items-center group">
                Read more 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-green-800 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need an Import Permit?</h3>
            <p className="text-green-100 text-lg mb-6 max-w-2xl">
              All live animals, plants, and their products require an import permit before arriving in Papua New Guinea. Apply online through our portal.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center space-x-2">
                <CheckCircle2 size={20} className="text-yellow-400" />
                <span>Check import conditions</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 size={20} className="text-yellow-400" />
                <span>Submit application online</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 size={20} className="text-yellow-400" />
                <span>Track permit status</span>
              </li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-md transition-colors">
              Apply Now
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white/10 p-6 rounded-full border-4 border-white/20">
              <FileText size={120} className="text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
