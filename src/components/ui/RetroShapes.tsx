import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Import oryginalnych plików SVG z Figmy
import sphere1 from '../../assets/sphere 1.svg';
import sphere2 from '../../assets/sphere2 1.svg';
import square1 from '../../assets/square 1.svg';
import square2 from '../../assets/square 2.svg';
import square3 from '../../assets/square 3.svg';

interface Shape {
  id: number;
  image: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  moveX: number;
  moveY: number;
  variant?: 'blue' | 'green';
}


// Desktop shapes - all 8 shapes
// Figury rozmieszczone losowo z dużym zakresem ruchu
// Unikają centralnej strefy (30-70% x, 35-65% y) gdzie jest tekst
const DESKTOP_SHAPES: Shape[] = [
  // Górna strefa (y: 0-30%)
  { id: 1, image: sphere1, x: 5, y: 20, size: 80, opacity: 0.6, duration: 20, delay: 0, moveX: 80, moveY: 40 },
  { id: 2, image: square1, x: 25, y: 10, size: 60, opacity: 0.5, duration: 25, delay: -3, moveX: -60, moveY: 35, variant: 'green' },
  { id: 3, image: square2, x: 75, y: 15, size: 55, opacity: 0.5, duration: 22, delay: -2, moveX: -55, moveY: 38 },

  // Lewa strefa (x: 0-25%)
  { id: 4, image: square1, x: 10, y: 55, size: 35, opacity: 0.4, duration: 23, delay: -1, moveX: 55, moveY: -50, variant: 'green' },

  // Prawa strefa (x: 75-100%)
  { id: 5, image: square2, x: 95, y: 52, size: 200, opacity: 0.45, duration: 27, delay: -3, moveX: 45, moveY: -55 },

  // Dolna strefa (y: 70-100%)
  { id: 6, image: square3, x: 5, y: 80, size: 300, opacity: 0.55, duration: 24, delay: -2, moveX: -40, moveY: -35, variant: 'blue' },
  { id: 7, image: square1, x: 55, y: 90, size: 45, opacity: 0.4, duration: 19, delay: -8, moveX: 55, moveY: -50, variant: 'green' },
  { id: 8, image: sphere2, x: 78, y: 88, size: 55, opacity: 0.5, duration: 25, delay: -1, moveX: -70, moveY: -42, variant: 'blue' },
];

// Mobile shapes - (top 20% and bottom 20%)
const MOBILE_SHAPES: Shape[] = [
  // Top safe zone (y: 0-20%) - 2 shapes
  { id: 1, image: square2, x: 75, y: 10, size: 55, opacity: 0.5, duration: 19, delay: -2, moveX: -30, moveY: 10 },
  { id: 2, image: square1, x: 15, y: 15, size: 35, opacity: 0.4, duration: 22, delay: -1, moveX: 25, moveY: 8, variant: 'green' },

  // Bottom safe zone (y: 80-100%) - 2 shapes
  { id: 3, image: square1, x: 20, y: 88, size: 45, opacity: 0.4, duration: 20, delay: -8, moveX: 30, moveY: -8, variant: 'green' },
  { id: 4, image: sphere2, x: 78, y: 90, size: 55, opacity: 0.5, duration: 19, delay: -1, moveX: -25, moveY: -8, variant: 'blue' },
];

export const RetroShapes = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shapes = isMobile ? MOBILE_SHAPES : DESKTOP_SHAPES;
  return (
    <div className="absolute inset-0 pointer-events-none z-[2]">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `calc(${shape.x}vw - ${shape.size / 2}px)`,
            top: `calc(${shape.y}vh - ${shape.size / 2}px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.9,
            x: [
              0,
              shape.moveX * 0.3,
              shape.moveX * 0.8,
              shape.moveX,
              shape.moveX * 0.5,
              -shape.moveX * 0.2,
              -shape.moveX * 0.6,
              -shape.moveX * 0.4,
              0
            ],
            y: [
              0,
              shape.moveY * 0.5,
              shape.moveY * 0.2,
              shape.moveY,
              shape.moveY * 0.7,
              -shape.moveY * 0.3,
              -shape.moveY * 0.8,
              -shape.moveY * 0.5,
              0
            ],
            scale: [1, 1.05, 1.1, 1.05, 1, 0.98, 0.95, 0.98, 1],
            rotate: [0, 10, 15, 10, 5, -10, -15, -10, 0],
          }}
          transition={{
            opacity: { duration: 2, delay: 0.5 },
            x: {
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            },
            y: {
              duration: shape.duration * 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            },
            scale: {
              duration: shape.duration * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            },
            rotate: {
              duration: shape.duration * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            },
          }}
        >
          <img
            src={shape.image}
            alt=""
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              maxWidth: 'none',
              maxHeight: 'none',
              // dont judge
              filter: shape.variant === 'blue' ? 'hue-rotate(-120deg)' : shape.variant === 'green' ? 'hue-rotate(-240deg)' : undefined,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
