import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
