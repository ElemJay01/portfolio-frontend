import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />;
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
