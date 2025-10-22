import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Chatbot from "./Components/Chatbot";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Chatbot />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact /> 
    </div>
  );
}
