import { NewNavbar } from "./components/new/NewNavbar";
import { NewHero } from "./components/new/NewHero";
import { Stats } from "./components/new/Stats";
import { Process } from "./components/new/Process";
import { NewCatalog } from "./components/new/NewCatalog";  // Используем новый каталог
import { Portfolio } from "./components/new/Portfolio";
import { Reviews } from "./components/new/Reviews";
import { FAQ } from "./components/new/FAQ";
import { NewFooter } from "./components/new/NewFooter";

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#E8DFD4' }}>
      <NewNavbar />
      <NewHero />
      <Stats />
      <NewCatalog />
      <Process />
      <Portfolio />
      <Reviews />
      <FAQ />
      <NewFooter />
    </div>
  );
}