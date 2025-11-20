

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';
import { ArrowUp, ArrowLeft } from 'lucide-react';

import NavBar from './NavBar';
import './NavBar.css';
import Footer from './Footer';
import './Footer.css';

import museum from './images/sig1.jpg';
import hospital from './images/sig3.jpg';
import tower from './images/sig2.jpg';
import seema from './images/sig4.jpg';
import Red_Mosque from './images/sig5.jpg';
import portcity from './images/sig.jpeg';
import colompo from './images/sig1.jpg'; 
// --- Slideshow Component ---
const Slideshow = ({ slides }) => {
  useEffect(() => {
    const carouselEl = document.getElementById('anuradhapuraCarousel');
    if (carouselEl) {
      const carousel = new Carousel(carouselEl, {
        interval: 2000, // Auto slide every 2 seconds
        ride: 'carousel',
        wrap: true,
        pause: false, // Continue even on hover
      });
      carousel.cycle();
    }
  }, []);

  return (
    <div id="anuradhapuraCarousel" className="carousel slide carousel-fade mb-5">
      <div className="carousel-inner">
        {slides.map((slide, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
            <img
              src={slide.image}
              className="d-block w-100"
              alt={`Slide ${idx + 1}`}
              style={{
                height: '450px',
                objectFit: 'cover',
                borderRadius: '15px',
              }}
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '15px',
                padding: '20px',
              }}
            >
              <h2 className="fw-bold text-white">{slide.title}</h2>
              <p className="text-white">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#anuradhapuraCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#anuradhapuraCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

// --- BackButton Component ---
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="container-fluid py-3"
      style={{ backgroundColor: '#f8f9fa', marginTop: '10px' }}
    >
      <div className="row justify-content-start ps-5">
        <div className="col-auto ps-1">
          <button
            onClick={() => navigate(-1)}
            className="back-button-style d-inline-flex align-items-center justify-content-center"
          >
            <ArrowLeft size={20} className="me-2" /> Back
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Card Component ---
const Card = ({ title, description, image }) => (
  <div className="col-md-4 mb-4">
    <div className="card shadow-lg h-100 border-0 rounded-4 card-hover-effect">
      <img
        src={image}
        alt={title}
        className="card-img-top rounded-top-4"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-uppercase text-accent-purple">{title}</h5>
        <p className="card-text text-text-primary">{description}</p>
      </div>
    </div>
  </div>
);

// --- Section Component ---
const Section = ({ title, cards, id }) => (
  <section className="mb-5" id={id}>
    <h2 className="text-center fw-bold text-uppercase text-accent-pink mb-4 display-5 section--underline">
      {title}
    </h2>
    <div className="row">
      {cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  </section>
);

// --- BackToTopButton Component ---
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);
  
};

// --- Main Page ---
const SigiriyaDetailsPage = () => {
  const slides = [
    {
      image: colompo,
      title: 'Sigiriya At A Glance',
      subtitle: 'An ancient city filled with historical and spiritual treasures.',
    },
    {
      image: tower,
      title: 'Kaudulla National Park',
      subtitle: 'One of the oldest stupas in Sri Lanka.',
    },
    {
      image: hospital,
      title: 'Pidurangala',
      subtitle: 'A vast monastery complex with ancient grandeur.',
    },
    {
      image: seema,
      title: 'Sigiriya Museum',
      subtitle: 'The Brazen Palace with majestic architecture.',
    },
  ];

  const attractions = [
    { title: 'Sigiriya At A Glance', image: museum, description: 'Discover history and heritage.' },
    { title: 'Kaudulla National Park', image: tower, description: 'An ancient stupa, one of the oldest in Sri Lanka.' },
    { title: 'Pidurangala', image: hospital, description: 'A vast monastery complex and one of the largest stupas.' },
    { title: 'Sigiriya Museum', image: seema, description: 'The Brazen Palace, a magnificent nine-storied building.' },
    { title: 'Ratnaprasadaya', image: Red_Mosque, description: 'Known for its guard stones and ancient architecture.' },
    { title: 'Minneriya National Park', image: portcity, description: 'One of the tallest brick structures in the world.' },
  ];

  return (
    <div className="min-vh-100 d-flex flex-column">
      <NavBar />
      <BackButton />
      <div className="container-fluid py-2 flex-grow-1">
        <div className="main-content-column">
          {/* --- Slideshow --- */}
          <Slideshow slides={slides} />

          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 'normal',
              fontSize: '3rem',
              color: '#333',
              textAlign: 'center',
              marginTop: '50px',
            }}
          >
            Sigiriya At A Glance
          </h1>

          <Section title="Key Attractions" cards={attractions} id="attractions" />
        </div>
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default SigiriyaDetailsPage;
















