import React, { useState, useEffect } from 'react';
import './Section1.css'; // Assuming you have a separate CSS file for styling


const slidesData = [
  {
    title: 'Home is Life',
    description: 'We build strength, stability, and self-reliance through shelter.',
    imageUrl: '/assets/img/hero-1.jpg',
    link: '/donation',
  },
  {
    title: 'Help for Orphans',
    description: 'One of the biggest risk factors involved in family separation.',
    imageUrl: '/assets/img/hero-2.jpg',
    link: '/donation',
  },
  {
    title: 'Sponsor an Orphan',
    description: 'One of the biggest risk factors involved in family separation.',
    imageUrl: '/assets/img/hero-3.jpg',
    link: '/donation',
  },
  {
    title: 'Educational Needs',
    description: 'The woman approaches the camera till we see a close up of her face.',
    imageUrl: 'assets/img/dummy4.jpg',
    link: '/donation',
  },
];

const Section1 = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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
    const interval = setInterval(nextSlide, 5000); // Automatically change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slider-one">
      <div className="slider-cont">
        <div
          className="slides item"
          style={{
            backgroundImage: `url(${slidesData[currentSlideIndex].imageUrl})`,
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
