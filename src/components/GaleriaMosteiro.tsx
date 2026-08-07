'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

export type FotoGaleria = { src: string; largura: number; altura: number };

/**
 * Carrossel da galeria do mosteiro (seção "A Place Like No Other").
 *
 * As fotos têm orientações diferentes (retrato e paisagem), por isso os cards
 * têm ALTURA fixa e largura livre: cada foto entra inteira, sem corte, como
 * em uma tira de filme. A proporção de cada card vem de `largura`/`altura`
 * (medidas na conversão para .webp), então o espaço já nasce reservado — sem
 * isso o trilho começa todo espremido e o contador aponta a foto errada.
 *
 * As imagens usam `loading="lazy"`: sem isso as 50 fotos seriam baixadas de
 * uma vez assim que a seção entrasse na tela.
 */
export default function GaleriaMosteiro({ imagens }: { imagens: readonly FotoGaleria[] }) {
  const { t } = useLanguage();
  const trilhoRef = useRef<HTMLDivElement>(null);
  const itensRef = useRef<(HTMLDivElement | null)[]>([]);
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  // Ativo = o card cujo centro está mais próximo do centro do trilho.
  const atualizarIndice = useCallback(() => {
    const trilho = trilhoRef.current;
    if (!trilho) return;

    const centroVisivel = trilho.scrollLeft + trilho.clientWidth / 2;
    let maisProximo = 0;
    let menorDistancia = Infinity;

    itensRef.current.forEach((item, indice) => {
      if (!item) return;
      const distancia = Math.abs(item.offsetLeft + item.offsetWidth / 2 - centroVisivel);
      if (distancia < menorDistancia) {
        menorDistancia = distancia;
        maisProximo = indice;
      }
    });

    setIndiceAtivo(maisProximo);
  }, []);

  useEffect(() => {
    atualizarIndice();
    window.addEventListener('resize', atualizarIndice);
    return () => window.removeEventListener('resize', atualizarIndice);
  }, [atualizarIndice]);

  const irParaSlide = (indice: number) => {
    const trilho = trilhoRef.current;
    const item = itensRef.current[indice];
    if (!trilho || !item) return;
    trilho.scrollTo({
      left: item.offsetLeft - (trilho.clientWidth - item.offsetWidth) / 2,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div
        ref={trilhoRef}
        onScroll={atualizarIndice}
        className="relative flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 pb-4 -mx-6 px-6 lg:-mx-12 lg:px-12 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none' }}
      >
        {imagens.map((foto, index) => (
          <div
            key={foto.src}
            ref={(el) => {
              itensRef.current[index] = el;
            }}
            style={{ aspectRatio: `${foto.largura} / ${foto.altura}` }}
            // No celular, uma foto deitada ficaria mais larga que a tela: o
            // max-w segura o card na largura do conteúdo (o object-cover corta
            // o excedente) para nenhuma foto sangrar pelas bordas.
            className="shrink-0 h-[300px] sm:h-[420px] lg:h-[520px] max-w-[calc(100vw-3rem)] sm:max-w-none snap-center overflow-hidden bg-dojo-white/5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element --
                o site é exportado estático com images.unoptimized, então
                next/image não traria ganho aqui. */}
            <img
              src={foto.src}
              alt={`${t.secaoGaleria.photoAlt} ${index + 1}`}
              width={foto.largura}
              height={foto.altura}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-full w-full object-cover select-none"
            />
          </div>
        ))}
      </div>

      {/* Progresso */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          aria-label={t.secaoGaleria.prevBtn}
          onClick={() => irParaSlide(Math.max(indiceAtivo - 1, 0))}
          className="text-dojo-white/60 hover:text-dojo-red transition-colors duration-300 text-lg leading-none disabled:opacity-30"
          disabled={indiceAtivo === 0}
        >
          ←
        </button>
        <span className="text-xs tracking-widest uppercase text-dojo-white/60 tabular-nums">
          {String(indiceAtivo + 1).padStart(2, '0')} / {String(imagens.length).padStart(2, '0')}
        </span>
        <button
          type="button"
          aria-label={t.secaoGaleria.nextBtn}
          onClick={() => irParaSlide(Math.min(indiceAtivo + 1, imagens.length - 1))}
          className="text-dojo-white/60 hover:text-dojo-red transition-colors duration-300 text-lg leading-none disabled:opacity-30"
          disabled={indiceAtivo === imagens.length - 1}
        >
          →
        </button>
      </div>
      <p className="text-center text-[10px] sm:text-xs tracking-widest uppercase text-dojo-white/40 mt-3">
        {t.secaoGaleria.hint}
      </p>
    </motion.div>
  );
}
