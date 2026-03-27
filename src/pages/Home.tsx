import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Alerts from "../components/Alerts";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Alerts />
      </main>
      <Footer />
    </div>
  );
}
