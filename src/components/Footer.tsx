'use client';

import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${eventoData.contato.whatsapp.replace(/\D/g, '')}`;

  return (
    <footer className="bg-dojo-black border-t border-dojo-gray/20 text-dojo-white/60 py-12 md:py-20">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Info */}
        <div className="md:col-span-1 space-y-4">
          <h2 className="font-heading tracking-[0.2em] uppercase text-sm text-dojo-white">
            Ken Zen Ichinyō <span className="text-dojo-red">2027</span>
          </h2>
          <p className="text-xs font-light leading-relaxed">
            {t.evento.dates} <br />
            {t.evento.location} <br />
            {t.evento.city}
          </p>
        </div>

        {/* Links Rápidos */}
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-dojo-white font-medium mb-4">{t.footer.navTitle}</h3>
          <ul className="space-y-3 text-xs font-light tracking-wider">
            <li><a href="#experiencia" className="hover:text-dojo-red transition-colors">{t.footer.nav.experience}</a></li>
            <li><a href="#legado" className="hover:text-dojo-red transition-colors">{t.footer.nav.legacy}</a></li>
            <li><a href="#mosteiro" className="hover:text-dojo-red transition-colors">{t.footer.nav.monastery}</a></li>
            <li><a href="#programacao" className="hover:text-dojo-red transition-colors">{t.footer.nav.schedule}</a></li>
            <li><a href="#investimento" className="hover:text-dojo-red transition-colors">{t.footer.nav.investment}</a></li>
            <li><a href="#duvidas" className="hover:text-dojo-red transition-colors">{t.footer.nav.faq}</a></li>
          </ul>
        </div>

        {/* Contato & Redes */}
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-dojo-white font-medium mb-4">{t.footer.contactTitle}</h3>
          <ul className="space-y-3 text-xs font-light tracking-wider">
            <li>
              <a href={`mailto:${eventoData.contato.email}`} className="hover:text-dojo-red transition-colors break-all">
                {t.footer.contactLinks.email}
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-dojo-red transition-colors">
                {t.footer.contactLinks.whatsapp}
              </a>
            </li>
          </ul>
        </div>

        {/* Endereço */}
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-dojo-white font-medium mb-4">{eventoData.endereco.organizacao}</h3>
          <address className="not-italic text-xs font-light leading-relaxed tracking-wider">
            {eventoData.endereco.linhas.map((linha) => (
              <span key={linha} className="block">{linha}</span>
            ))}
          </address>
        </div>

      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-dojo-gray/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest">
        <p>{t.footer.copyright}</p>
        <p className="mt-4 md:mt-0 text-dojo-white/30">{t.footer.credit}</p>
      </div>
    </footer>
  );
}
