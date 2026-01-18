import { motion } from 'framer-motion';

// Import obrazów sphere i square z katalogu assets (PNG)
import sphere1 from '../../assets/sphere 1.png';
import sphere2 from '../../assets/sphere2 1.png';
import sphere3 from '../../assets/sphere3 1.png';
import square1 from '../../assets/square 1.png';
import square2 from '../../assets/square 2.png';
import square3 from '../../assets/square 3.png';

interface Shape {
  id: number;
  image: string;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  duration: number;
  delay: number;
  moveX: number;
  moveY: number;
}

// Kolory z poprzedniej palety
const COLORS = {
  purple: '#6715ff',
  magenta: '#fd00ff',
  green: '#24ff54',
  lavender: '#d2aeff',
  darkPurple: '#66147a',
  deepPurple: '#32136c',
};

// Funkcja zwracająca filtr CSS do kolorowania obrazu na dany kolor
// Zakładamy, że obrazy PNG są białe/jasne
const getColorFilter = (color: string): string => {
  switch (color) {
    case COLORS.purple:
      // Fioletowy #6715ff
      return 'brightness(0) saturate(100%) invert(15%) sepia(95%) saturate(6000%) hue-rotate(265deg) brightness(1.1)';
    case COLORS.magenta:
      // Magenta #fd00ff
      return 'brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(7000%) hue-rotate(295deg) brightness(1.2)';
    case COLORS.green:
      // Zielony #24ff54
      return 'brightness(0) saturate(100%) invert(70%) sepia(90%) saturate(1000%) hue-rotate(80deg) brightness(1.1)';
    case COLORS.lavender:
      // Lawendowy #d2aeff
      return 'brightness(0) saturate(100%) invert(75%) sepia(30%) saturate(800%) hue-rotate(220deg) brightness(1.3)';
    case COLORS.darkPurple:
      // Ciemny fiolet #66147a
      return 'brightness(0) saturate(100%) invert(12%) sepia(80%) saturate(4000%) hue-rotate(280deg) brightness(0.9)';
    case COLORS.deepPurple:
      // Głęboki fiolet #32136c
      return 'brightness(0) saturate(100%) invert(10%) sepia(90%) saturate(5000%) hue-rotate(250deg) brightness(0.7)';
    default:
      return 'none';
  }
};

// Figury rozmieszczone losowo z dużym zakresem ruchu
// Unikają centralnej strefy (30-70% x, 35-65% y) gdzie jest tekst
const SHAPES: Shape[] = [
  // Górna strefa (y: 0-30%)
  { id: 1, image: sphere1, x: 5, y: 5, size: 55, color: COLORS.purple, opacity: 0.6, duration: 20, delay: 0, moveX: 80, moveY: 40 },
  { id: 2, image: square1, x: 25, y: 10, size: 40, color: COLORS.magenta, opacity: 0.5, duration: 25, delay: -3, moveX: -60, moveY: 35 },
  { id: 3, image: sphere2, x: 50, y: 3, size: 35, color: COLORS.green, opacity: 0.45, duration: 18, delay: -6, moveX: 70, moveY: 45 },
  { id: 4, image: square2, x: 75, y: 8, size: 45, color: COLORS.lavender, opacity: 0.5, duration: 22, delay: -2, moveX: -55, moveY: 38 },
  { id: 5, image: sphere3, x: 90, y: 12, size: 50, color: COLORS.purple, opacity: 0.55, duration: 24, delay: -5, moveX: -75, moveY: 42 },

  // Lewa strefa (x: 0-25%)
  { id: 6, image: square3, x: 3, y: 35, size: 45, color: COLORS.green, opacity: 0.5, duration: 26, delay: -4, moveX: 50, moveY: -60 },
  { id: 7, image: sphere1, x: 8, y: 50, size: 40, color: COLORS.magenta, opacity: 0.45, duration: 19, delay: -7, moveX: 45, moveY: 70 },
  { id: 8, image: square1, x: 2, y: 65, size: 35, color: COLORS.deepPurple, opacity: 0.4, duration: 23, delay: -1, moveX: 55, moveY: -50 },

  // Prawa strefa (x: 75-100%)
  { id: 9, image: sphere2, x: 88, y: 38, size: 50, color: COLORS.lavender, opacity: 0.5, duration: 21, delay: -8, moveX: -50, moveY: 65 },
  { id: 10, image: square2, x: 92, y: 52, size: 38, color: COLORS.purple, opacity: 0.45, duration: 27, delay: -3, moveX: -60, moveY: -55 },
  { id: 11, image: sphere3, x: 85, y: 68, size: 42, color: COLORS.green, opacity: 0.4, duration: 20, delay: -6, moveX: -45, moveY: 50 },

  // Dolna strefa (y: 70-100%)
  { id: 12, image: square3, x: 8, y: 78, size: 48, color: COLORS.magenta, opacity: 0.55, duration: 24, delay: -2, moveX: 75, moveY: -45 },
  { id: 13, image: sphere1, x: 30, y: 85, size: 40, color: COLORS.darkPurple, opacity: 0.45, duration: 22, delay: -5, moveX: -65, moveY: -40 },
  { id: 14, image: square1, x: 55, y: 82, size: 35, color: COLORS.lavender, opacity: 0.4, duration: 19, delay: -8, moveX: 55, moveY: -50 },
  { id: 15, image: sphere2, x: 78, y: 88, size: 45, color: COLORS.purple, opacity: 0.5, duration: 25, delay: -1, moveX: -70, moveY: -42 },
  { id: 16, image: square2, x: 92, y: 80, size: 38, color: COLORS.green, opacity: 0.45, duration: 21, delay: -4, moveX: -60, moveY: -55 },

  // Dodatkowe małe kształty w rogach
  { id: 17, image: sphere3, x: 15, y: 20, size: 30, color: COLORS.deepPurple, opacity: 0.35, duration: 28, delay: -9, moveX: 50, moveY: 45 },
  { id: 18, image: square3, x: 82, y: 22, size: 28, color: COLORS.darkPurple, opacity: 0.35, duration: 23, delay: -11, moveX: -55, moveY: 50 },
  { id: 19, image: sphere1, x: 12, y: 72, size: 32, color: COLORS.lavender, opacity: 0.35, duration: 26, delay: -7, moveX: 60, moveY: -48 },
  { id: 20, image: square1, x: 85, y: 75, size: 30, color: COLORS.magenta, opacity: 0.35, duration: 20, delay: -10, moveX: -52, moveY: -52 },
];

export const RetroShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
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
            opacity: shape.opacity,
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
          <div
            style={{
              width: shape.size,
              height: shape.size,
              position: 'relative',
              filter: `drop-shadow(0 0 20px ${shape.color}) drop-shadow(0 0 40px ${shape.color})`,
            }}
          >
            <img
              src={shape.image}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: getColorFilter(shape.color),
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
