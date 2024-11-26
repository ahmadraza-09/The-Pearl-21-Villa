import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import HomePage from './pages/homepage';
import ContactPage from './pages/contactpage';
import GalleryPage from './pages/gallerypage';
import AboutPage from './pages/aboutpage';
import RoomsPage from './pages/rooms-page';
import Payment from './pages/paymentpage';
import PlacesToVisitPage from './pages/placestovisitpage'
import SuperDeluxeRoomWithPrivatePoolPage from './pages/super-deluxe-with-private-pool-page';
import SuperDeluxeRoomWithJaccuziTubPage from './pages/super-deluxe-room-with-jaccuzi-tub-page';
import SuperDeluxeRoomWithBalconyPage from './pages/super-deluxe-room-with-balcony-page';


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/rooms' element={<RoomsPage />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/places-to-visit' element={<PlacesToVisitPage />} />
          <Route path="/super-deluxe-room-with-balcony" element={<SuperDeluxeRoomWithBalconyPage />} />
          <Route path="/super-deluxe-with-private-pool" element={<SuperDeluxeRoomWithPrivatePoolPage />} />
          <Route path="/super-deluxe-room-with-jaccuzi-tub" element={<SuperDeluxeRoomWithJaccuziTubPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
