import Header from "../components/Header/Header";
import About from '../components/About/About'
import Carousel from "@/components/Slider/Slider";
import Competences from "@/components/Competences/Competences";
import Form from "@/components/Form/Form";

export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Carousel/>
      <Competences/>
      <Form/>
    </>
  );
}
