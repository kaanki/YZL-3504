import { FeaturedWorks } from "./components/FeaturedWorks";
import { SectionContact } from "./components/SectionContact";
import "./assets/styles/reset.css";
import "./assets/styles/App.css";
import  Logo from "./components/Logo";
import  NavMain, {NavLink, NavAdvancedLink}  from "./components/NavMain";


export function App() {
  return (
    <>
      <header>
          <Logo/>
          <NavMain/>
      </header>
      <main>
        orta
        <FeaturedWorks />
        <SectionContact />
      </main>
      <footer>alt</footer>
    </>
  );
}
