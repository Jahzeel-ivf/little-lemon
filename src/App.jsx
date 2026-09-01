// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import CallToAction from './components/CallToAction.jsx';
import HomePage from './components/HomePage.jsx';
import BookingPage from './components/BookingPage.jsx';
import ConfirmedBooking from './components/ConfirmedBooking.jsx';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isBookingPage = location.pathname === '/booking';
  const isConfirmedPage = location.pathname === '/confirmed';
  
  // Ocultar CallToAction en ambas páginas
  const showCallToAction = !isBookingPage && !isConfirmedPage;

  return (
    <>
      <Header />
      {showCallToAction && <CallToAction />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/booking" 
          element={
            <Main>
              <BookingPage />
            </Main>
          } 
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;