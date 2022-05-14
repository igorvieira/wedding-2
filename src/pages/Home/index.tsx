import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";
import mock from "./mock";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery images={mock.slice(0, 3)}/>
      <Gallery images={mock.slice(4, 7)}/>
      <Gallery images={mock.slice(8, 11)}/>
    </main>
  );
}