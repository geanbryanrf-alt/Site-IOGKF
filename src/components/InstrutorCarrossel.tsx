'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const INTERVALO_MS = 4000;

export default function InstrutorCarrossel({ imagens }: { imagens: string[] }) {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    if (imagens.length < 2) return;
    const timer = setInterval(() => {
      setAtual((i) => (i + 1) % imagens.length);
    }, INTERVALO_MS);
    return () => clearInterval(timer);
  }, [imagens.length]);

  return (
    <div className="relative aspect-[4/5] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={imagens[atual]}
          className="absolute inset-0 bg-cover bg-center grayscale contrast-125"
          style={{ backgroundImage: `url('${imagens[atual]}')` }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              opacity: { duration: 1.2, ease: 'easeInOut' },
              scale: { duration: INTERVALO_MS / 1000 + 1.2, ease: 'linear' },
            },
          }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } }}
        />
      </AnimatePresence>

      {imagens.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {imagens.map((src, index) => (
            <span
              key={src}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === atual ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
