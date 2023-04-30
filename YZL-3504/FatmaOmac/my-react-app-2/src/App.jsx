import "./assets/styles/reset.css";
import "./assets/styles/App.css";
import { Logo } from "./components/Logo";
import { NavMain } from "./components/NavMain";
import { HomePage } from "./pages/HomePage";
import { PassingProps }  from "./pages/PassingProps";
import { ConditionalRendering } from "./pages/ConditionalRendering";

function App() {
  return (
    <>
      <header>
        <Logo/>

        <NavMain />
      </header>
      <main>
        
        <HomePage/>
        <PassingProps/>
        <ConditionalRendering/>
      </main>
      <footer>Her hakkı saklıdır &copy; 2023</footer>
    </>
  );
}

export default App;