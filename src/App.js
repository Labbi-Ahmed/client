import "./App.css";
import Home from "./ProtfolioContainer/Home/Home";
import AboutMe from "./ProtfolioContainer/AboutMe/AboutMe";
import Resume from "./ProtfolioContainer/Resume/Resume";
import Testimonial from "./ProtfolioContainer/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Resume />
      <Testimonial />
    </div>
  );
}

export default App;
