import styles from './slider.module.css'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
  {
    src: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    altText: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    caption: '109$',
    key: 1,
  },
  {
    src: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    altText: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor',
    caption: '999.99$',
    key: 2,
  },
  {
    src: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    altText: 'Solid Gold Petite Micropave',
    caption: '168$',
    key: 3,
  },
];

function Slider(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      
      <CarouselItem className={styles.carouselItem}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption className={styles.caption}

        />
        <div className={styles.altText}>{item.altText}</div>
      <div className={styles.captionText}>{item.caption}</div>
      </CarouselItem>
     
    );
  });

  return (
    <div className={styles.wrapper} >
      <Carousel 
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators 
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl 
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl 
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Slider;
