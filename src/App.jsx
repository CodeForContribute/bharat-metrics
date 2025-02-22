import './App.css'
import Navbar from "./components/NavBar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import OurTeam from "./components/OurTeam/OurTeam.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

    return (
        <div>
            <Navbar/>
            <Hero/>
            <OurTeam/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App
