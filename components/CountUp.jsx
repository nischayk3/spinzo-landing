"use client";
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export const CountUp = ({ target, isDecimal = false, duration = 2000 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * target;

      if (isDecimal) {
        setCount(Math.round(currentCount * 10) / 10);
      } else {
        setCount(Math.floor(currentCount));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

  }, [isInView, target, isDecimal, duration]);

  return <span ref={ref}>{isDecimal ? count.toFixed(1) : count.toLocaleString()}</span>;
};