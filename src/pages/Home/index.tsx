import CounterDown from "../../components/CounterDown";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";
import mock from "./mock";

export default function Home() {

  return (
    <main>
      <Hero />
      <CounterDown />
      <Gallery images={mock.slice(0, 3)}/>
      <Gallery images={mock.slice(3, 6)}/>
      <Gallery images={mock.slice(7, 9)}/>
    </main>
  );
}