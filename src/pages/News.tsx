import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, ArrowRight, AlertOctagon, Info, Newspaper } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      id: 1,
      type: "alert",
      title: "URGENT: African Swine Fever (ASF) Movement Restrictions",
      date: "March 15, 2026",
      excerpt: "Strict movement controls are currently in place for all live pigs and pork products moving out of the Highlands region to prevent the spread of ASF.",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop"
    },
    {
      id: 2,
      type: "alert",
      title: "Coffee Berry Borer (CBB) Quarantine Zones Updated",
      date: "March 10, 2026",
      excerpt: "New quarantine checkpoints have been established. Transporting unroasted coffee beans across provincial borders without a permit is strictly prohibited.",
      image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      type: "news",
      title: "NAQIA Launches New Digital Import Permit Portal",
      date: "February 28, 2026",
      excerpt: "In a move to modernize biosecurity clearance, NAQIA has officially launched its new online portal for Importer and Supplier memberships.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: 4,
      type: "news",
      title: "Biosecurity Officers Intercept Illegal Meat Imports at Seaport",
      date: "February 15, 2026",
      excerpt: "A joint operation between NAQIA and Customs resulted in the seizure of 2 tonnes of undeclared poultry products lacking proper health certification.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      type: "news",
      title: "Training Workshop for Export Certification Officers",
      date: "January 22, 2026",
      excerpt: "Over 30 NAQIA officers completed an intensive workshop on the latest international phytosanitary standards to better support PNG's agricultural exporters.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      type: "info",
      title: "Public Consultation: Revised Biosecurity Fees 2026",
      date: "January 10, 2026",
      excerpt: "NAQIA invites stakeholders to review and provide feedback on the proposed adjustments to import inspection and certification fees.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-green-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Alerts</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Stay updated with the latest biosecurity alerts, press releases, and organizational news from NAQIA.
            </p>
          </div>
        </div>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            
            {/* Filter/Tabs (Visual only for now) */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-6 py-2 bg-green-800 text-white rounded-full font-medium text-sm shadow-sm">All Updates</button>
              <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 rounded-full font-medium text-sm shadow-sm transition-colors">Biosecurity Alerts</button>
              <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 rounded-full font-medium text-sm shadow-sm transition-colors">Press Releases</button>
              <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 rounded-full font-medium text-sm shadow-sm transition-colors">Public Notices</button>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      {item.type === 'alert' && (
                        <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md">
                          <AlertOctagon size={14} className="mr-1" /> ALERT
                        </span>
                      )}
                      {item.type === 'news' && (
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md">
                          <Newspaper size={14} className="mr-1" /> NEWS
                        </span>
                      )}
                      {item.type === 'info' && (
                        <span className="bg-yellow-500 text-green-900 text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md">
                          <Info size={14} className="mr-1" /> NOTICE
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-gray-500 text-xs mb-3 font-medium">
                      <Calendar size={14} className="mr-1" />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      {item.excerpt}
                    </p>
                    <a href="#" className="inline-flex items-center text-green-700 font-bold text-sm hover:text-green-800 mt-auto">
                      Read Full Story <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
                  &laquo;
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-md bg-green-800 text-white font-medium">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
                  3
                </button>
                <span className="text-gray-500">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                  &raquo;
                </button>
              </nav>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
