import Header from "../components/Header/Header";
import About from '../components/About/About'
import Skills from "@/components/Skills/Skills";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Priscilla Goessens, Developpeuse front end
        </title>
        <meta name="description" content="Priscilla Goessens Portfolio" key="desc" />
      </Head>
    
      <Header/>
      <About/>
      <Gallery/>
      <Skills/>
      <Form/>
      <Footer/>
    </>
  );
}
