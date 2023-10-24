import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
  <div>
    <NavBar/>
    <Home/>
    <SocialLinks/>
    <Portfolio/>
    <AboutMe/>
    <Contact/>
  </div>
  );
}

export default App;