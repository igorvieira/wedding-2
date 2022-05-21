import CounterDown from "../../components/CounterDown";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";
import mock from "./mock";
import * as S from './styles'

export default function Home() {

  return (
    <main>
      <Hero />

      <S.HomeContent>
        <CounterDown />
        <S.WavesUp xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <S.Parallax>
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="#6e4a82" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="#430759" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="#00053b" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#042d62" />
            </S.Parallax>
        </S.WavesUp>
        <S.WavesLow xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <S.Parallax>
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="#6e4a82" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="#430759" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="#00053b" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#042d62" />
            </S.Parallax>
        </S.WavesLow>
      </S.HomeContent>


      <Gallery images={mock.slice(0, 3)}/>
      <Gallery images={mock.slice(3, 6)}/>
      <Gallery images={mock.slice(7, 9)}/>
    </main>
  );
}