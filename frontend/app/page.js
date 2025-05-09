import Header from "../components/Header/Header";
import About from '../components/About/About'
import Skills from "@/components/Skills/Skills";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";


export default function Home() {
  return (
    <>   
      <Header/>
      <About/>
      <Gallery/>
      <Skills/>
      <Form/>
      <Footer/>
    </>
  );
}
