import "./App.css";
import Home from "./ProtfolioContainer/Home/Home";
import AboutMe from "./ProtfolioContainer/AboutMe/AboutMe";
import Resume from "./ProtfolioContainer/Resume/Resume";
import Testimonial from "./ProtfolioContainer/Testimonial/Testimonial";
import ContactMe from "./ProtfolioContainer/ContactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Resume />
      <Testimonial />
      {/* <ContactMe /> */}
    </div>
  );
}

export default App;
