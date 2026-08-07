'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

type Pratica = { key: string; label: string };

export default function PraticasCarrossel({
  praticas,
  imagens,
}: {
  praticas: readonly Pratica[];
  imagens: Record<string, string>;
}) {
  const { t } = useLanguage();
  const trilhoRef = useRef<HTMLDivElement>(null);
  const [podeVoltar, setPodeVoltar] = useState(false);
  const [podeAvancar, setPodeAvancar] = useState(true);
  const [progresso, setProgresso] = useState(0);

  // Largura de um card + o gap entre eles: é o quanto cada seta avança.
  const passo = () => {
    const trilho = trilhoRef.current;
    if (!trilho) return 0;
    const primeiro = trilho.firstElementChild as HTMLElement | null;
    if (!primeiro) return trilho.clientWidth;
    const gap = parseFloat(window.getComputedStyle(trilho).columnGap) || 0;
    return primeiro.getBoundingClientRect().width + gap;
  };

  const atualizarEstado = useCallback(() => {
    const trilho = trilhoRef.current;
    if (!trilho) return;
    const maximo = trilho.scrollWidth - trilho.clientWidth;
    setPodeVoltar(trilho.scrollLeft > 1);
    setPodeAvancar(trilho.scrollLeft < maximo - 1);
    setProgresso(maximo > 0 ? trilho.scrollLeft / maximo : 0);
  }, []);

  useEffect(() => {
    atualizarEstado();
    window.addEventListener('resize', atualizarEstado);
    return () => window.removeEventListener('resize', atualizarEstado);
  }, [atualizarEstado]);

  const mover = (direcao: -1 | 1) => {
    trilhoRef.current?.scrollBy({ left: direcao * passo(), behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mb-12 md:mb-24"
    >
      <div
        ref={trilhoRef}
        onScroll={atualizarEstado}
        className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none' }}
      >
        {praticas.map((pratica) => (
          <div
            key={pratica.key}
            className="shrink-0 basis-[72%] sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(25%-0.75rem)] aspect-[4/5] snap-start relative overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center select-none transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url('${imagens[pratica.key]}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white font-medium tracking-widest uppercase text-xs sm:text-sm leading-tight">
              {pratica.label}
            </div>
          </div>
        ))}
      </div>

      {/* Setas */}
      <button
        type="button"
        aria-label={t.secaoGaleria.prevBtn}
        onClick={() => mover(-1)}
        disabled={!podeVoltar}
        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-dojo-white/90 backdrop-blur-sm text-dojo-black shadow-lg transition-all duration-300 hover:bg-dojo-red hover:text-dojo-white disabled:opacity-0 disabled:pointer-events-none"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        type="button"
        aria-label={t.secaoGaleria.nextBtn}
        onClick={() => mover(1)}
        disabled={!podeAvancar}
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-dojo-white/90 backdrop-blur-sm text-dojo-black shadow-lg transition-all duration-300 hover:bg-dojo-red hover:text-dojo-white disabled:opacity-0 disabled:pointer-events-none"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Barra de progresso */}
      <div className="mt-6 h-px bg-dojo-gray/20 max-w-xs mx-auto">
        <div
          className="h-px bg-dojo-red transition-[width,margin] duration-300"
          style={{ width: '25%', marginLeft: `${progresso * 75}%` }}
        />
      </div>
    </motion.div>
  );
}
