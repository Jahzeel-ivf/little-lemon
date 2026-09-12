// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import CallToAction from './components/CallToAction.jsx';
import HomePage from './components/HomePage.jsx';
import BookingPage from './components/BookingPage.jsx';
import ConfirmedBooking from './components/ConfirmedBooking.jsx';


function AppContent() {
  const location = useLocation();
  const isBookingPage = location.pathname === '/booking';
  const isConfirmedPage = location.pathname === '/confirmed';

  return (
    <>
      <Header />
      {!isBookingPage && !isConfirmedPage && <CallToAction />}
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </Main>
      <Footer/>
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