import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import HomePage from './pages/homepage';
import ContactPage from './pages/contactpage';
import GalleryPage from './pages/gallerypage';
import AboutPage from './pages/aboutpage';
// import FaqPage from './pages/faqpage';
import RoomsPage from './pages/rooms-page';
import Payment from './pages/paymentpage';
import PlacesToVisitPage from './pages/placestovisitpage'
import SuperDeluxeRoom from './pages/super-deluxe-room';
import FamilyRoom from './pages/family-room';
import PremiumRoom from './pages/premium-room-page';
import RoomPage from './pages/roompage';


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/about' element={<AboutPage />} />
          {/* <Route path='/faq' element={<FaqPage />} /> */}
          {/* <Route path='/rooms' element={<RoomsPage />} /> */}
          <Route path='/rooms' element={<RoomPage />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/places-to-visit' element={<PlacesToVisitPage />} />
          <Route path="/premium-room" element={<PremiumRoom />} />
          <Route path="/super-deluxe-room" element={<SuperDeluxeRoom />} />
          <Route path="/family-room" element={<FamilyRoom />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
