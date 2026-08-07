'use client';

import { motion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';
import GaleriaMosteiro from './GaleriaMosteiro';

/**
 * Galeria de fotos do mosteiro — continuação visual da seção
 * "A Place Like No Other" (por isso o mesmo fundo preto, sem padding no topo).
 */
export default function SecaoGaleria() {
  const { t } = useLanguage();
  return (
    <section id="galeria" className="pb-16 md:pb-32 bg-dojo-black text-dojo-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-4 mb-8 sm:mb-12"
        >
          <div className="w-8 h-[1px] bg-dojo-red" />
          <h3 className="text-sm sm:text-base font-medium tracking-widest uppercase text-dojo-white/80">
            {t.secaoGaleria.title}
          </h3>
        </motion.div>

        <GaleriaMosteiro imagens={eventoData.imagens.galeriaMosteiro} />

      </div>
    </section>
  );
}
