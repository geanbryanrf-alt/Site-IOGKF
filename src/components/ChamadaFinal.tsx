'use client';

import { motion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ChamadaFinal() {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 md:py-40 overflow-hidden bg-dojo-black flex items-center justify-center text-center">
      
      {/* Background Image */}
      {/* A foto ficava com opacity-60 sobre preto E ainda levava um véu de 60%
          por cima: sobrava menos de um quarto do brilho dela e a seção virava
          um retângulo quase preto. Agora a foto entra inteira e só o véu
          controla o contraste; a leitura do texto vem da sombra abaixo. */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center grayscale"
          style={{ backgroundImage: `url('${eventoData.imagens.chamadaFinal}')` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/35" />
      </div>

      <div className="relative z-20 container mx-auto px-6 max-w-4xl flex flex-col items-center [text-shadow:0_1px_3px_rgb(0_0_0/0.9),0_0_22px_rgb(0_0_0/0.7)]">
        
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-light tracking-[0.2em] text-dojo-white uppercase mb-8 sm:mb-12"
        >
          {t.chamadaFinal.title} <span className="text-dojo-red">{t.chamadaFinal.titleHighlight}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm sm:text-lg md:text-xl font-light text-dojo-white/90 leading-relaxed mb-10 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <p>{t.chamadaFinal.body[0]}</p>
          <p className="font-medium">{t.chamadaFinal.body[1]}</p>
          <p className="pt-4 text-dojo-lightgray italic">
            {t.chamadaFinal.closing[0]} <br />
            {t.chamadaFinal.closing[1]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center space-y-6"
        >
          <a
            href="#inscricao"
            // O botão é sólido: herdar a sombra dos textos só borraria o rótulo.
            className="bg-dojo-red text-white px-12 py-5 text-sm tracking-widest uppercase hover:bg-dojo-darkred transition-colors duration-300 block [text-shadow:none]"
          >
            {t.chamadaFinal.cta}
          </a>
          <div className="text-xs tracking-[0.2em] uppercase text-dojo-white/50 space-y-1">
            <p>{t.chamadaFinal.footer[0]}</p>
            <p>{t.chamadaFinal.footer[1]}</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
