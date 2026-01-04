import About from "@/components/About";
import Cards from "@/components/Cards";
import Cases from "@/components/Cases";
import Contact from "@/components/Contact";
import Main from "@/components/Main";
import Numbers from "@/components/Numbers";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Main />
      <Services />
      <Cards />
      <About />
      <Numbers />
      <Cases />
      <Contact />
    </>
  );
}
