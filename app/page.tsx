import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Music from "./components/Music";
import Gigs from "./components/Gigs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <SocialSidebar />
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Music />
      <div className="divider" />
      <Gigs />
      <div className="divider" />
      <Contact />
      <Footer />
    </main>
  );
}
