'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';
import ContadorInscritos from './ContadorInscritos';

const SLIDE_DURATION = 6000;

export default function Hero() {
  const { t } = useLanguage();
  const slides = eventoData.imagens.heroFundo;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-dojo-black">
      {/* Background photography */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: 'easeInOut' },
              scale: { duration: SLIDE_DURATION / 1000 + 1.5, ease: 'linear' },
            }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[activeSlide]}')` }}
          />
        </AnimatePresence>

        {/* As fotos já chegam na medida certa de scripts/converter-hero-fundo.js,
            então aqui basta um véu leve: quem garante a leitura do texto é a
            sombra aplicada em cada bloco abaixo, não uma camada preta cobrindo
            a foto inteira. */}
        <div className="absolute inset-0 bg-black/22" />
        {/* Gradiente: escurece o topo (o header transparente fica em cima da
            foto) e a base (onde ficam os botões), deixando o miolo à mostra. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/50" />
        {/* Véu suave atrás da coluna de conteúdo. Escurece só o miolo, onde o
            texto cai, e some antes das bordas — assim a foto continua clara
            nas laterais em vez de levar mais uma camada preta por inteiro. */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_52%_at_50%_44%,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.16)_55%,transparent_80%)]" />
        {/* Vinheta lateral sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.28)_100%)]" />
      </div>

      <div className="relative z-20 text-center flex flex-col items-center px-4 sm:px-6 max-w-4xl mx-auto pt-24 sm:pt-28 pb-10 sm:pb-12 w-full">

        {/* KZIG art — main visual element */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="w-[90vw] sm:w-[78vw] md:w-[48vw] mb-6 sm:mb-8"
          style={{
            maxWidth: 'clamp(340px, 48vw, 860px)',
            maxHeight: '34vh',
            // Proporção do arquivo gerado por scripts/converter-hero-kzig.js:
            // reserva o espaço da arte antes de ela carregar.
            aspectRatio: '1231 / 675',
            // A arte é linha fina branca + letra vermelha sobre foto colorida.
            // O drop-shadow segue o recorte da arte (e não uma caixa), então
            // destaca cada traço sem precisar escurecer a foto atrás.
            // São três: um contorno curto e opaco (é ele que salva o vermelho
            // sobre quimono branco, onde escurecer o fundo só aproximaria as
            // duas luminâncias) e dois halos macios para dar profundidade.
            filter:
              'drop-shadow(0 0 3px rgb(0 0 0 / 1)) drop-shadow(0 2px 6px rgb(0 0 0 / 0.7)) drop-shadow(0 0 26px rgb(0 0 0 / 0.6))',
          }}
        >
          <Image
            src={eventoData.imagens.heroKzigOptimized}
            alt="KZIG — Ken Zen Ichinyō Gasshuku — IOGKF Brasil — Karate and Zen As One"
            width={1231}
            height={675}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 78vw, 48vw"
            className="w-full h-full object-contain"
            priority
          />
        </motion.div>

        {/* Date and location */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          // Mesma lógica do drop-shadow da arte: o contorno curto e opaco vem
          // primeiro, para a data em vermelho não sumir sobre fundo claro.
          className="mt-6 sm:mt-8 mb-5 sm:mb-6 [text-shadow:0_0_4px_rgb(0_0_0/0.95),0_1px_2px_rgb(0_0_0/0.95),0_0_20px_rgb(0_0_0/0.75)]"
        >
          <p className="tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm md:text-base text-dojo-white font-medium mb-1.5">
            <span className="text-dojo-red font-semibold">{t.evento.dates}</span>
          </p>
          <p className="tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[11px] sm:text-xs md:text-sm text-dojo-white/85 font-light">
            {t.evento.location}
          </p>
          <p className="tracking-widest uppercase text-[10px] sm:text-xs text-dojo-white/60 font-light mt-1">
            {t.evento.city}
          </p>
        </motion.div>

        {/* Short emotional text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
          className="text-dojo-white/90 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-[680px] mb-6 sm:mb-8 [text-shadow:0_1px_3px_rgb(0_0_0/0.9),0_0_20px_rgb(0_0_0/0.7)]"
        >
          {t.hero.emotionalText}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto mt-6 sm:mt-8"
        >
          <a
            href="#inscricao"
            className="min-h-[48px] flex items-center justify-center w-full sm:w-auto bg-dojo-red text-white px-8 sm:px-10 text-xs tracking-widest uppercase rounded-sm hover:bg-dojo-darkred transition-colors duration-300 text-center"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#experiencia"
            className="min-h-[48px] flex items-center justify-center w-full sm:w-auto border border-dojo-white/40 text-dojo-white px-8 sm:px-10 text-xs tracking-widest uppercase rounded-sm hover:bg-white/10 transition-colors duration-300 text-center"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        {/* Progresso das inscrições, logo abaixo dos CTAs */}
        <ContadorInscritos
          delay={1.2}
          className="mt-5 sm:mt-6 w-full [text-shadow:0_1px_3px_rgb(0_0_0/0.9)]"
        />
      </div>
    </section>
  );
}
