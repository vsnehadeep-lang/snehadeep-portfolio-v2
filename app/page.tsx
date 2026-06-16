import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Academics />
        <WorkExperience />
        <Skills />
        <Hobbies />
        <Footer />
      </main>
    </>
  );
}