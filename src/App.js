import NavBar from "./components/NavBar";
import Home from "./components/Home/Home.jsx";
import SocialLinks from "./components/SocialLinks";

import Contact from "./components/Contact";
import Skill from "./components/Skill/Skill.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
   
       <Projects/>
      <Skill/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
