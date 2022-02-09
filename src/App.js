// importaciones
import Navbar from "./components/Navbar";
import Start from "./components/Start";
import WhoIAm from "./components/WhoIAm";
import Skill from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import './App.css';

function App() {

  const data = [
    {text: "Inicio", id: "#idStart"}, 
    {text: "Quien Soy", id: "#idWhoIam"}, 
    {text: "Habilidades", id: "#idSkill"},
    {text: "Proyectos", id: "#idProjects"}, 
    {text: "Contacto", id: "#idContact"}
  ];

  return (
    <div className="App">
      <Navbar data={data}/>
      <Start />
      <WhoIAm />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
