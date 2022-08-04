import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Animator, ScrollContainer, ScrollPage } from "react-scroll-motion";
import About from "./components/About";

function App() {
  return (
    <ScrollContainer>
      <Header />
      <ScrollPage page={1}>
        <Animator>
          <Banner />
        </Animator>
      </ScrollPage>
      <About />
      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </ScrollContainer>
  );
}

export default App;
