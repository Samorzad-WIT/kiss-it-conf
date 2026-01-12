import { motion } from 'framer-motion';

interface Shape {
  id: number;
  type: 'square' | 'rectangle' | 'pixelBlock' | 'lShape' | 'tShape' | 'cross';
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

// jakies ksztalty lepsze by byly gotowe svg albo cos
const SHAPES: Shape[] = [
  { id: 1, type: 'square', x: 5, y: 10, size: 40, color: '#6715ff', opacity: 0.25, duration: 25, delay: 0, moveX: 60, moveY: 40 },
  { id: 2, type: 'rectangle', x: 85, y: 15, size: 35, color: '#fd00ff', opacity: 0.20, duration: 30, delay: -5, moveX: -50, moveY: 35 },
  { id: 3, type: 'pixelBlock', x: 15, y: 75, size: 45, color: '#24ff54', opacity: 0.18, duration: 35, delay: -10, moveX: 45, moveY: -40 },
  { id: 4, type: 'lShape', x: 90, y: 60, size: 38, color: '#d2aeff', opacity: 0.28, duration: 28, delay: -3, moveX: -60, moveY: -25 },
  { id: 5, type: 'tShape', x: 70, y: 85, size: 42, color: '#66147a', opacity: 0.22, duration: 32, delay: -8, moveX: -35, moveY: -45 },
  { id: 6, type: 'cross', x: 25, y: 35, size: 32, color: '#32136c', opacity: 0.30, duration: 38, delay: -12, moveX: 50, moveY: 35 },
  { id: 7, type: 'square', x: 60, y: 5, size: 30, color: '#fd00ff', opacity: 0.20, duration: 26, delay: -2, moveX: -30, moveY: 50 },
  { id: 8, type: 'rectangle', x: 40, y: 90, size: 48, color: '#6715ff', opacity: 0.18, duration: 34, delay: -15, moveX: 40, moveY: -35 },
  { id: 9, type: 'pixelBlock', x: 95, y: 40, size: 36, color: '#24ff54', opacity: 0.22, duration: 24, delay: -7, moveX: -70, moveY: 25 },
  { id: 10, type: 'lShape', x: 10, y: 55, size: 34, color: '#d2aeff', opacity: 0.26, duration: 36, delay: -18, moveX: 65, moveY: -20 },
  { id: 11, type: 'cross', x: 50, y: 25, size: 28, color: '#66147a', opacity: 0.20, duration: 30, delay: -4, moveX: -25, moveY: 45 },
  { id: 12, type: 'tShape', x: 30, y: 65, size: 40, color: '#32136c', opacity: 0.24, duration: 40, delay: -20, moveX: 35, moveY: -40 },
  { id: 13, type: 'square', x: 75, y: 45, size: 32, color: '#fd00ff', opacity: 0.18, duration: 32, delay: -9, moveX: -45, moveY: 30 },
  { id: 14, type: 'rectangle', x: 3, y: 85, size: 38, color: '#6715ff', opacity: 0.28, duration: 22, delay: -1, moveX: 75, moveY: -25 },
  { id: 15, type: 'pixelBlock', x: 55, y: 70, size: 30, color: '#24ff54', opacity: 0.20, duration: 42, delay: -14, moveX: -30, moveY: 40 },
  { id: 16, type: 'lShape', x: 80, y: 30, size: 44, color: '#d2aeff', opacity: 0.22, duration: 28, delay: -6, moveX: -55, moveY: -35 },
  { id: 17, type: 'cross', x: 20, y: 15, size: 36, color: '#66147a', opacity: 0.18, duration: 36, delay: -16, moveX: 45, moveY: 50 },
  { id: 18, type: 'tShape', x: 45, y: 50, size: 28, color: '#32136c', opacity: 0.20, duration: 26, delay: -11, moveX: -40, moveY: -45 },
  { id: 19, type: 'square', x: 65, y: 95, size: 34, color: '#fd00ff', opacity: 0.26, duration: 34, delay: -19, moveX: 25, moveY: -55 },
  { id: 20, type: 'rectangle', x: 35, y: 8, size: 42, color: '#6715ff', opacity: 0.20, duration: 38, delay: -13, moveX: -50, moveY: 45 },
];


const ShapeComponent = ({ type, size, color }: { type: Shape['type']; size: number; color: string }) => {
  switch (type) {
    case 'square':
      return (
        <rect 
          width={size} 
          height={size} 
          fill={color}
        />
      );
    case 'rectangle':
      return (
        <rect 
          width={size * 1.5} 
          height={size * 0.5} 
          fill={color}
        />
      );
    case 'pixelBlock':
      // 2x2 pixel block pattern
      return (
        <g>
          <rect x={0} y={0} width={size / 2} height={size / 2} fill={color} />
          <rect x={size / 2} y={size / 2} width={size / 2} height={size / 2} fill={color} />
        </g>
      );
    case 'lShape':
      // L-shaped tetris block
      return (
        <g>
          <rect x={0} y={0} width={size / 3} height={size} fill={color} />
          <rect x={size / 3} y={size * 2 / 3} width={size * 2 / 3} height={size / 3} fill={color} />
        </g>
      );
    case 'tShape':
      // T-shaped block
      return (
        <g>
          <rect x={0} y={0} width={size} height={size / 3} fill={color} />
          <rect x={size / 3} y={size / 3} width={size / 3} height={size * 2 / 3} fill={color} />
        </g>
      );
    case 'cross':
      // Plus/cross shape
      return (
        <g>
          <rect x={size / 3} y={0} width={size / 3} height={size} fill={color} />
          <rect x={0} y={size / 3} width={size} height={size / 3} fill={color} />
        </g>
      );
    default:
      return <rect width={size} height={size} fill={color} />;
  }
};

export const RetroShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {SHAPES.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            x: [0, shape.moveX, shape.moveX * 0.3, -shape.moveX * 0.5, -shape.moveX * 0.2, 0],
            y: [0, shape.moveY * 0.5, shape.moveY, -shape.moveY * 0.3, -shape.moveY * 0.7, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width={shape.size * 1.5}
            height={shape.size}
            style={{ opacity: shape.opacity }}
            className="drop-shadow-sm"
          >
            <ShapeComponent 
              type={shape.type} 
              size={shape.size} 
              color={shape.color} 
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

