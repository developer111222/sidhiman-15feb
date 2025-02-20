import React, { useState, useEffect } from 'react';
import './Section1.css'; // CSS file for styling

const slidesData = [
  {
    title: 'Home is Life',
    description: 'We build strength, stability, and self-reliance through shelter.',
    imageUrlDesktop: '/assets/img/hero-1.jpg',
    imageUrlMobile: '/assets/img/mob.jpg', // Mobile-specific image
    link: '/donation',
  },
  {
    title: 'Help for Orphans',
    description: 'One of the biggest risk factors involved in family separation.',
    imageUrlDesktop: '/assets/img/hero-2.jpg',
    imageUrlMobile: '/assets/img/mob2.jpg', // Mobile-specific image
    link: '/donation',
  },
  {
    title: 'Sponsor an Orphan',
    description: 'One of the biggest risk factors involved in family separation.',
    imageUrlDesktop: '/assets/img/hero-3.jpg',
    imageUrlMobile: '/assets/img/mob3.jpg', // Mobile-specific image
    link: '/donation',
  },
  {
    title: 'Educational Needs',
    description: 'The woman approaches the camera till we see a close up of her face.',
    imageUrlDesktop: '/assets/img/dummy4.jpg',
    imageUrlMobile: '/assets/img/mob4.jpg', // Mobile-specific image
    link: '/donation',
  },
];

const Section1 = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize to update image based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Determine which image URL to use based on screen size
  const currentImageUrl = isMobile
    ? slidesData[currentSlideIndex].imageUrlMobile
    : slidesData[currentSlideIndex].imageUrlDesktop;

  return (
    <section className="slider-one">
      <div className="slider-cont">
        <div
          className="slides item"
          style={{
            backgroundImage: `url(${currentImageUrl})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="home-life">
                  <h1>{slidesData[currentSlideIndex].title}</h1>
                  <h4>{slidesData[currentSlideIndex].description}</h4>
                  <a href={slidesData[currentSlideIndex].link} className="btn">
                    <span>Donate Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-controls">
        <button onClick={prevSlide} className="prev-button">
          &lt;
        </button>
        <button onClick={nextSlide} className="next-button">
          &gt;
        </button>
      </div>

      <div className="dots-container">
        {slidesData.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentSlideIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Section1;