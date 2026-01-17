import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

const TimeUnit: React.FC<{ value: number; label: string; index: number }> = ({
  value,
  label,
  index
}) => (
  <motion.div
    className="relative flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-[#24ff54]/20 blur-xl" />

      {/* Main container */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-[#24ff54]/30 bg-[#000018]/80 backdrop-blur-sm sm:h-20 sm:w-20 md:h-24 md:w-24 md:rounded-2xl">
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#24ff54]/10 to-transparent md:rounded-2xl" />

        {/* Number */}
        <motion.span
          key={value}
          className="relative font-display text-2xl text-[#24ff54] sm:text-3xl md:text-4xl"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
    </div>

    {/* Label */}
    <span className="mt-2 font-display text-[8px] uppercase tracking-[0.2em] text-white/50 sm:text-[9px] sm:tracking-[0.25em]">
      {label}
    </span>
  </motion.div>
);

const Separator: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-1.5 self-center mb-5 sm:gap-2 sm:mb-6">
    <motion.div
      className="h-1.5 w-1.5 rounded-full bg-[#24ff54]/60 sm:h-2 sm:w-2"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.div
      className="h-1.5 w-1.5 rounded-full bg-[#24ff54]/60 sm:h-2 sm:w-2"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
    />
  </div>
);

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2">
      <TimeUnit value={timeLeft.days} label="Dni" index={0} />
      <Separator />
      <TimeUnit value={timeLeft.hours} label="Godz" index={1} />
      <Separator />
      <TimeUnit value={timeLeft.minutes} label="Min" index={2} />
      <Separator />
      <TimeUnit value={timeLeft.seconds} label="Sek" index={3} />
    </div>
  );
};

