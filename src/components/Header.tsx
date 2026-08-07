'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.header.nav.experience, href: '#experiencia' },
    { label: t.header.nav.legacy, href: '#legado' },
    { label: t.header.nav.monastery, href: '#mosteiro' },
    { label: t.header.nav.instructors, href: '#instrutores' },
    { label: t.header.nav.schedule, href: '#programacao' },
    { label: t.header.nav.accommodation, href: '#hospedagem' },
    { label: t.header.nav.investment, href: '#investimento' },
    { label: t.header.nav.faq, href: '#duvidas' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={
        // Sem rolagem o header fica sobre a foto da hero, que é clara: o véu
        // de topo e a sombra no texto são o que separam o menu (e o vermelho
        // do botão) da imagem. Rolando, o fundo sólido já dá conta.
        `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dojo-black/95 backdrop-blur-md border-b border-dojo-gray/30 py-4'
            : 'bg-gradient-to-b from-black/45 via-black/25 to-transparent py-6 [text-shadow:0_1px_4px_rgb(0_0_0/0.9)]'
        }`
      }
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo/Name + Language Switcher */}
        <div className="flex items-center gap-3 sm:gap-4 mr-6 xl:mr-0">
          <a href="#" className="group flex items-center gap-2.5 sm:gap-3">
            <Image
              src={eventoData.imagens.logoIogkf}
              alt="IOGKF — International Okinawan Goju-ryu Karate-do Federation"
              width={155}
              height={155}
              priority
              className={`w-auto shrink-0 object-contain transition-all duration-500 ${
                isScrolled ? 'h-8 lg:h-9' : 'h-9 lg:h-10'
              }`}
            />
            <span className="font-heading tracking-[0.2em] uppercase text-sm lg:text-base text-dojo-white transition-colors duration-300 whitespace-nowrap">
              {/* A sigla KZIG (a mesma que assina a hero) entra nas duas faixas
                  onde o nome por extenso não cabe: abaixo de sm, porque ele
                  passava por baixo das bandeiras e comia o "2027"; e entre xl e
                  2xl, onde o container trava em 1280px e não sobra largura ao
                  lado dos 8 itens do menu. */}
              <span className="hidden sm:inline xl:hidden 2xl:inline">Ken Zen Ichinyō </span>
              <span className="sm:hidden xl:inline 2xl:hidden">KZIG </span>
              <span className="text-dojo-red group-hover:text-dojo-darkred transition-colors">2027</span>
            </span>
          </a>
          <LanguageSwitcher />
        </div>

        {/* Desktop Nav */}
        {/* Nav desktop a partir de xl (1280px), não lg (1024px): com 8 itens +
            botão não há largura para o nav em 1024px — o logo enrolava em várias
            linhas e o botão ficava cortado. Entre 1024 e 1279px usa-se o menu. */}
        <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-6 ml-4 2xl:ml-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-wider transition-colors duration-300 hover:text-dojo-red ${
                isScrolled ? 'text-dojo-white/80' : 'text-dojo-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inscricao"
            // O bg-black/30 é o que segura o vermelho do botão quando o header
            // está transparente sobre a foto clara da hero; no header já rolado
            // (quase preto) ele não muda nada.
            className="border border-dojo-red bg-black/30 text-dojo-red hover:bg-dojo-red hover:text-white px-5 py-2 text-xs uppercase tracking-widest whitespace-nowrap transition-all duration-300"
          >
            {t.header.cta}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden text-dojo-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? t.header.closeMenu : t.header.openMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden absolute top-full left-0 right-0 bg-dojo-black/95 backdrop-blur-md border-b border-dojo-gray/30 py-6 px-6 flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-dojo-white/80 uppercase tracking-widest text-sm hover:text-dojo-red transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-dojo-red text-white text-center py-4 text-xs uppercase tracking-widest w-full hover:bg-dojo-darkred transition-colors block"
            >
              {t.header.ctaMobile}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
