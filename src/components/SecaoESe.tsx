'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';

const INTERVALO_MS = 4500;

/**
 * Imagens quadradas (380x380): no mobile usamos proporção em vez de altura em `vh`,
 * evitando corte agressivo e o "pulo" de layout causado pela barra do navegador.
 */
const MOLDURA_IMAGEM =
  'relative w-full overflow-hidden aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[70vh]';

function CarrosselContemplativo({ imagens }: { imagens: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const visivel = useInView(containerRef, { margin: '0px 0px -10% 0px' });
  const [atual, setAtual] = useState(0);

  // Só roda enquanto o carrossel está na tela — evita animação em segundo plano no mobile.
  useEffect(() => {
    if (!visivel) return;
    const timer = setInterval(() => {
      setAtual((i) => (i + 1) % imagens.length);
    }, INTERVALO_MS);
    return () => clearInterval(timer);
  }, [imagens.length, visivel]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={imagens[atual]}
          className="absolute inset-0 bg-cover bg-center grayscale"
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

      {/* Vinheta sutil para dar profundidade */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.25)] sm:shadow-[inset_0_0_60px_rgba(0,0,0,0.25)]" />

      {/* Indicadores de progresso */}
      <div aria-hidden className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {imagens.map((src, index) => (
          <span
            key={src}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === atual ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function SecaoESe() {
  const { t } = useLanguage();
  const imagens = eventoData.imagens.secaoESeCarrossel;
  // Primeiro bloco alterna entre as 2 primeiras imagens; segundo bloco, entre as 2 últimas.
  const imagensBloco1 = imagens.slice(0, 2);
  const imagensBloco2 = imagens.slice(2, 4);

  return (
    <section id="experiencia" className="relative py-16 md:py-32 bg-dojo-ivory">
      <div className="container mx-auto px-6 lg:px-12 space-y-14 md:space-y-28">

        {/* Bloco 1 - "What If..." */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* Textos (vêm PRIMEIRO em mobile) */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 md:space-y-12 lg:pl-10 order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-light tracking-widest text-dojo-red uppercase"
            >
              {t.secaoESe.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-4 sm:space-y-6 text-lg sm:text-xl md:text-2xl font-light text-dojo-black leading-relaxed text-balance"
            >
              {t.secaoESe.lead.map((linha) => (
                <p key={linha}>{linha}</p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-12 h-[1px] bg-dojo-red"
            />
          </div>

          {/* Imagens contemplativas (vêm DEPOIS em mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9 }}
            className={`${MOLDURA_IMAGEM} order-2 lg:order-1`}
          >
            <CarrosselContemplativo imagens={imagensBloco1} />
          </motion.div>

        </div>

        {/* Bloco 2 - "Ken Zen Ichinyō is not just another..." */}
        {/* Em mobile o wrapper vira `contents`: a imagem entra entre o texto de abertura e a lista. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          <div className="contents lg:flex lg:flex-col lg:justify-center lg:space-y-12 lg:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="order-1 space-y-4 sm:space-y-6 text-sm sm:text-base text-dojo-gray leading-relaxed font-light max-w-lg"
            >
              {t.secaoESe.body.map((linha) => (
                <p key={linha}>{linha}</p>
              ))}
              <p className="font-medium text-dojo-black">
                {t.secaoESe.boldLines.map((linha, index) => (
                  <span key={linha}>
                    {linha}
                    {index < t.secaoESe.boldLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9 }}
              className="order-3 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-dojo-red font-medium space-y-2.5 sm:space-y-4"
            >
              {t.secaoESe.list.map((linha) => (
                <p key={linha}>{linha}</p>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="order-4 text-base sm:text-lg md:text-xl font-light italic text-dojo-black text-balance"
            >
              {t.secaoESe.closing}
            </motion.p>
          </div>

          {/* Imagens contemplativas */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9 }}
            className={`${MOLDURA_IMAGEM} order-2`}
          >
            <CarrosselContemplativo imagens={imagensBloco2} />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
