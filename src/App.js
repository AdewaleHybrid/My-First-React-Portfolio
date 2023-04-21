import Header from "./components/HeaderComponent/Header";
import About from "./components/AboutComponent/About";
import Contact from "./components/ContactComponent/Contact";
import Experience from "./components/ExperienceComponent/Experience";
import Nav from "./components/NavComponent/Nav";
import Portfolio from "./components/PortfolioComponent/Portfolio";
import Testimonial from "./components/TestimonialComponent/Testimonial";
import Footer from "./components/FooterComponent/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
