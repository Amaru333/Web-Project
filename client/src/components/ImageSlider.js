import React, { useState } from 'react';
import { SliderData } from './SliderData';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import '../style/HomePage.css'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <KeyboardArrowRightIcon className='right-arrow' onClick={prevSlide} fontSize="large"/>
      <KeyboardArrowLeftIcon className='left-arrow' onClick={nextSlide} fontSize="large"/>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt={slide.alt} className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;