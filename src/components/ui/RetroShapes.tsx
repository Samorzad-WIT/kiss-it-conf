import { motion } from 'framer-motion';

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


// Figury rozmieszczone losowo z dużym zakresem ruchu
// Unikają centralnej strefy (30-70% x, 35-65% y) gdzie jest tekst
const SHAPES: Shape[] = [
  // Górna strefa (y: 0-30%)
  { id: 1, image: sphere1, x: 5, y: 15, size: 80, opacity: 0.6, duration: 20, delay: 0, moveX: 80, moveY: 40 },
  { id: 2, image: square1, x: 25, y: 10, size: 60, opacity: 0.5, duration: 25, delay: -3, moveX: -60, moveY: 35, variant: 'green' },
  { id: 3, image: square2, x: 75, y: 8, size: 55, opacity: 0.5, duration: 22, delay: -2, moveX: -55, moveY: 38 },

  // Lewa strefa (x: 0-25%)
  { id: 4, image: square1, x: 10, y: 55, size: 35, opacity: 0.4, duration: 23, delay: -1, moveX: 55, moveY: -50, variant: 'green' },

  // Prawa strefa (x: 75-100%)
  { id: 5, image: square2, x: 85, y: 52, size: 230, opacity: 0.45, duration: 27, delay: -3, moveX: 65, moveY: -55 },

  // Dolna strefa (y: 70-100%)
  { id: 6, image: square3, x: -10, y: 70, size: 300, opacity: 0.55, duration: 24, delay: -2, moveX: -40, moveY: -35, variant: 'blue' },
  { id: 7, image: square1, x: 55, y: 90, size: 45, opacity: 0.4, duration: 19, delay: -8, moveX: 55, moveY: -50, variant: 'green' },
  { id: 8, image: sphere2, x: 78, y: 88, size: 55, opacity: 0.5, duration: 25, delay: -1, moveX: -70, moveY: -42, variant: 'blue' },
];

export const RetroShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-[2]">
      {SHAPES.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
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
            rotate: [0, 5, 10, 5, 0, -5, -10, -5, 0],
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
              width: shape.size,
              height: shape.size,
              objectFit: 'contain',
              // dont judge
              filter: shape.variant === 'blue' ? 'hue-rotate(-120deg)' : shape.variant === 'green' ? 'hue-rotate(-240deg)' : undefined,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
