import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { CatalogGrid } from "./components/CatalogGrid";
import { Gallery } from "./components/Gallery";
import { CustomOrder } from "./components/CustomOrder";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function App() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Fixed Sidebar */}
      <Sidebar onNavigate={handleNavigate} />

      {/* Main Scrolling Content */}
      <main className="lg:ml-[30%] min-h-screen pt-16 lg:pt-0">
        <Hero />
        <CatalogGrid />
        <Gallery />
        <CustomOrder />
        <About />
        <Footer />
      </main>
    </div>
  );
}