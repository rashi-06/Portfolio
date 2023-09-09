import { BrowserRouter as Router } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

function App() {
  
  return (
    <Router>
      <div className="relative bg-primary z-0">
        <div className="bg-hero-pattern bg-no-repeat bg-center bg-cover ">
            <Navbar/>
            <Hero />
        </div>
        <About/>
        <Experience/>
        <Tech />
        <Works/>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas/>
        </div>
      </div>
        
    </Router>
  )
}

export default App
