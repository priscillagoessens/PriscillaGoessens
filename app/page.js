import Header from "../components/Header/Header";
import About from '../components/About/About'
import Carousel from "@/components/Slider/Slider";
import Skills from "@/components/Skills/Skills";
import Form from "@/components/Form/Form";

export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Carousel/>
      <Skills/>
      <Form/>
    </>
  );
}
