import React, { useState } from 'react';
import './App.css';

const slides = [
  {
    title: "The Problem – Imagine the Worst-Case Scenario",
    content: "Picture this: It's 3 a.m. in a small village in rural India...",
    icon: (
      <svg viewBox="0 0 24 24" width="100" height="100">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
    )
  },
  {
    title: "The Hero We Need – The Automated Drug Delivery Machine (DDM)",
    content: "But what if—just like we have ATMs for cash—we had an ATM for medicines?...",
    icon: (
      <svg viewBox="0 0 24 24" width="100" height="100">
        <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
      </svg>
    )
  },
  // Add icons for the rest of your slides...
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');

  const nextSlide = () => {
    setDirection('next');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="App">
      <div className={`slide ${direction}`}>
        {slides[currentSlide].icon}
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].content}</p>
      </div>
      <div className="controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

export default App;