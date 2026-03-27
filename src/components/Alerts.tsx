import { AlertTriangle, Calendar, ChevronRight, PhoneCall } from "lucide-react";

export default function Alerts() {
  const alerts = [
    {
      id: 1,
      title: "ASF Containment Zones Enforced",
      date: "Current",
      type: "Critical Alert",
      summary: "Movement of live pigs and pork products out of infected provinces (Southern Highlands, Enga, Hela, Jiwaka, Western Highlands, Simbu) is strictly prohibited.",
      color: "border-red-600 bg-red-50 text-red-900"
    },
    {
      id: 2,
      title: "Report Sick or Dead Pigs",
      date: "Urgent",
      type: "Action Required",
      summary: "If your pigs are dying unexpectedly, do not move or sell them. Call the NAQIA Toll-Free number 180 1332 immediately.",
      color: "border-orange-500 bg-orange-50 text-orange-900"
    },
    {
      id: 3,
      title: "Biosecurity Checkpoints Active",
      date: "Ongoing",
      type: "Notice",
      summary: "All vehicles traveling along the Highlands Highway are subject to search for illegal pork products by NAQIA and Police.",
      color: "border-yellow-500 bg-yellow-50 text-yellow-900"
    }
  ];

  const news = [
    {
      id: 1,
      title: "NAQIA and Partners Launch 'Stopim ASF' Awareness Campaign in the Highlands",
      date: "Mar 12, 2026",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop" // Pig farming
    },
    {
      id: 2,
      title: "Training of Village Livestock Officers to Detect ASF Symptoms Early",
      date: "Feb 28, 2026",
      image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=1974&auto=format&fit=crop" // Agriculture/Community
    },
    {
      id: 3,
      title: "Confiscation of Illegal Pork Products at Domestic Airport Checkpoints",
      date: "Feb 15, 2026",
      image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1974&auto=format&fit=crop" // Airport security
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stopim ASF Campaign</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            African Swine Fever (ASF) is a deadly pig disease. It does not affect humans, but it kills pigs and can destroy our livelihoods and culture. Help us stop the spread.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Biosecurity Alerts */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <AlertTriangle className="text-red-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">ASF Alerts</h2>
            </div>
            
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className={`border-l-4 p-5 rounded-r-lg ${alert.color}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider">{alert.type}</span>
                    <span className="text-xs flex items-center"><Calendar size={12} className="mr-1" /> {alert.date}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{alert.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{alert.summary}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-green-800 text-white p-5 rounded-lg flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-green-200 uppercase tracking-wider mb-1">Toll-Free Hotline</h4>
                <p className="text-2xl font-bold">180 1332</p>
              </div>
              <PhoneCall size={36} className="text-yellow-400 opacity-80" />
            </div>
          </div>

          {/* Latest News */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Campaign News & Updates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Featured News */}
              <div className="md:col-span-2 relative rounded-xl overflow-hidden group cursor-pointer shadow-md">
                <div className="aspect-[2/1] w-full">
                  <img 
                    src={news[0].image} 
                    alt={news[0].title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <span className="text-yellow-400 text-sm font-bold mb-2 flex items-center">
                    <Calendar size={14} className="mr-2" /> {news[0].date}
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-yellow-400 transition-colors">
                    {news[0].title}
                  </h3>
                  <span className="text-white font-medium flex items-center">
                    Read Article <ChevronRight size={18} className="ml-1" />
                  </span>
                </div>
              </div>

              {/* Secondary News */}
              {news.slice(1).map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-green-700 text-xs font-bold mb-2 flex items-center">
                      <Calendar size={12} className="mr-1" /> {item.date}
                    </span>
                    <h3 className="text-gray-900 font-bold text-lg mb-3 leading-tight group-hover:text-green-700 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-gray-600 text-sm font-medium flex items-center">
                      Read more <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center md:text-left">
              <a href="https://www.facebook.com/StopimASF/" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2 px-6 rounded-md transition-colors">
                Follow Stopim ASF on Facebook
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
