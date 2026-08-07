'use client';

import { motion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';

export default function SecaoMosteiro() {
  const { t } = useLanguage();
  return (
    <section id="mosteiro" className="relative py-16 md:py-32 bg-dojo-black text-dojo-white overflow-hidden">
      {/* Background: slow cinematic pan + zoom, like a looping video */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, x: 0, y: 0 }}
          animate={{ scale: 1.22, x: '-2%', y: '-2%' }}
          transition={{ duration: 22, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${eventoData.imagens.mosteiroFundo}')` }}
        />
        {/* Véu leve só para o texto branco ter contraste; o gradiente escurece
            o topo (onde fica o título, sob o header) e a base (emenda com a
            galeria preta), deixando o miolo da foto à mostra. */}
        <div className="absolute inset-0 bg-dojo-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-dojo-black/82 via-transparent to-dojo-black/75" />
      </div>

      {/* Com a foto de fundo clara, é a sombra no texto — e não mais uma
          camada preta por cima de tudo — que garante a leitura. */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 [text-shadow:0_1px_16px_rgb(0_0_0/0.85)]">

        {/* Header */}
        <div className="max-w-4xl mx-auto mb-10 md:mb-20 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            // Sombra mais fechada que a do resto: o "No Other" é vermelho e cai
            // justo sobre o telhado avermelhado do bonsho.
            className="text-2xl sm:text-3xl md:text-5xl font-heading font-light tracking-widest uppercase mb-4 sm:mb-8 [text-shadow:0_2px_6px_rgb(0_0_0/0.95),0_0_30px_rgb(0_0_0/0.8)]"
          >
            {t.secaoMosteiro.titleLine1} <span className="text-dojo-red">{t.secaoMosteiro.titleLine2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl font-light text-dojo-white/90 leading-relaxed md:max-w-2xl"
          >
            {t.secaoMosteiro.lead}
          </motion.p>
        </div>

        {/* Grid de Atributos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-20 md:mb-32 border-y border-dojo-gray/30 py-10 sm:py-16">
          {t.secaoMosteiro.items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col space-y-4"
            >
              <div className="w-8 h-[1px] bg-dojo-red" />
              <h4 className="font-medium tracking-widest uppercase text-sm">{item.title}</h4>
              <p className="text-dojo-white/75 font-light text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
