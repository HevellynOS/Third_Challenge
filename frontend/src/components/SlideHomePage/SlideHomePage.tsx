import React, { useEffect, useState, useRef } from 'react';
import dish01 from '../../assets/images/dish01.png';
import dish02 from '../../assets/images/dish02.png';
import dish03 from '../../assets/images/dish03.jpg';
import dish04 from '../../assets/images/dish04.jpg';
import classes from './slidehomepage.module.css';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const SlideHomePage: React.FC = () => {
  const images = [dish01, dish02, dish03, dish04];

  const [width, setWidth] = useState<number>(0);
  const slide = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (slide.current) {
      const slideWidth = slide.current.scrollWidth;
      setWidth(slideWidth);
    }
  }, []);

  const dragX = useMotionValue(0);
  const dragConstraints = { right: 0, left: -width };

  const scaleRange = [1, 1.2]; // Adjust the scale range as needed

  const scale = useTransform(dragX, [0, width], scaleRange);

  return (
    <article className={classes.container}>
      <motion.div ref={slide} className={classes.slideContainer} style={{ cursor: 'grab' }}>
        <motion.div
          className={classes.inner}
          style={{ x: dragX }}
          drag="x"
          dragConstraints={dragConstraints}
        >
          {images.map((image, index) => (
            <motion.div
              className={classes.items}
              key={index}
              style={{
                scale: scale,
              }}
            >
              <img src={image} alt="images" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </article>
  );
};

export default SlideHomePage;
