// src/components/Marquee.jsx
import { motion } from 'framer-motion';

export function Marquee({ text = "DR. DROPS // STREETWEAR SIN LÍMITES // MÁS QUE ROPA, ES ACTITUD // " }) {
  return (
    <div className="overflow-hidden bg-black border-y border-brand-border py-3 select-none flex">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 80,
        }}
      >
        <span className="text-xs md:text-sm font-light tracking-[0.25em] text-white uppercase mx-4">
          {text.repeat(6)}
        </span>
        <span className="text-xs md:text-sm font-light tracking-[0.25em] text-white uppercase mx-4">
          {text.repeat(6)}
        </span>
      </motion.div>
    </div>
  );
}