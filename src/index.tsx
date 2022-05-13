import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GiftListShop from "./pages/GiftListShop";
import Ceremony from "./pages/Ceremony";
import OurStory from "./pages/OurStory";
import Home from "./pages/Home";
import App from './App';
import GlobalStyles from './styles/global';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="gift-list-shop" element={<GiftListShop />} />
        <Route path="ceremony" element={<Ceremony />} />
        <Route path="our-story" element={<OurStory />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
