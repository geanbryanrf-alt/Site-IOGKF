'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage, type Language } from '@/i18n/LanguageContext';

// Ritmo das notificações (ms)
const ATRASO_INICIAL = 9000; // espera antes da primeira — deixa a Hero respirar
const TEMPO_VISIVEL = 6500; // quanto tempo cada aviso fica na tela
const INTERVALO = 12000; // pausa entre um aviso e o próximo

type Inscricao = (typeof eventoData.inscricao.inscricoesRecentes.itens)[number];

/** Momento da inscrição em ms. Exemplos usam `minutosAtras`; inscrições reais, `em`. */
function momento(item: Inscricao): number {
  if (typeof item.minutosAtras === 'number') return Date.now() - item.minutosAtras * 60_000;
  return item.em ? new Date(item.em).getTime() : NaN;
}

/**
 * Converte um instante em texto relativo ("há 2 horas" / "2 hours ago")
 * no idioma ativo. Retorna null se for inválido ou estiver no futuro.
 */
function tempoRelativo(quando: number, idioma: Language): string | null {
  if (Number.isNaN(quando)) return null;

  const segundos = Math.round((quando - Date.now()) / 1000);
  if (segundos > 0) return null; // data no futuro: não faz sentido exibir

  const fmt = new Intl.RelativeTimeFormat(idioma === 'pt' ? 'pt-BR' : 'en', { numeric: 'auto' });
  const minutos = Math.round(segundos / 60);
  const horas = Math.round(segundos / 3600);
  const dias = Math.round(segundos / 86400);

  if (minutos > -60) return fmt.format(Math.min(minutos, -1), 'minute');
  if (horas > -24) return fmt.format(horas, 'hour');
  return fmt.format(dias, 'day');
}

/**
 * Avisos discretos de novas inscrições, no canto inferior esquerdo.
 *
 * Os dados vêm de `eventoData.inscricao.inscricoesRecentes.itens` e devem
 * corresponder a inscrições REAIS — veja o aviso em src/data/evento.ts.
 * A lista é percorrida UMA vez por visita (sem loop infinito, que é o que
 * denuncia esse tipo de aviso como falso) e o visitante pode fechá-la.
 */
export default function NotificacoesInscricao() {
  const { t, language } = useLanguage();
  const { demonstracao, itens } = eventoData.inscricao.inscricoesRecentes;
  const semMovimento = useReducedMotion();

  const [indice, setIndice] = useState(-1); // -1 = ainda não começou
  const [visivel, setVisivel] = useState(false);
  const [encerrado, setEncerrado] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Descarta os exemplos fictícios fora do modo demonstração, e qualquer
  // entrada com data inválida ou no futuro.
  const fila = useMemo(
    () =>
      itens.filter(
        (item) => (demonstracao || !item.exemplo) && tempoRelativo(momento(item), language) !== null,
      ),
    [itens, demonstracao, language],
  );

  useEffect(() => {
    if (typeof window !== 'undefined' && demonstracao && process.env.NODE_ENV !== 'production') {
      console.warn(
        '[NotificacoesInscricao] Modo demonstração ativo: os avisos exibidos são EXEMPLOS. ' +
          'Antes de publicar, defina inscricao.inscricoesRecentes.demonstracao = false ' +
          'em src/data/evento.ts e preencha `itens` com inscrições reais.',
      );
    }
  }, [demonstracao]);

  useEffect(() => {
    if (encerrado || fila.length === 0) return;

    const agendar = (fn: () => void, ms: number) => {
      timers.current.push(setTimeout(fn, ms));
    };

    // Mostra o item `i`, esconde depois de TEMPO_VISIVEL e agenda o próximo.
    const mostrar = (i: number) => {
      if (i >= fila.length) {
        setEncerrado(true);
        return;
      }
      setIndice(i);
      setVisivel(true);
      agendar(() => {
        setVisivel(false);
        agendar(() => mostrar(i + 1), INTERVALO);
      }, TEMPO_VISIVEL);
    };

    agendar(() => mostrar(0), ATRASO_INICIAL);

    const atuais = timers.current;
    return () => {
      atuais.forEach(clearTimeout);
      timers.current = [];
    };
  }, [fila.length, encerrado]);

  const fechar = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setVisivel(false);
    setEncerrado(true);
  };

  const item = indice >= 0 ? fila[indice] : undefined;
  if (!item) return null;

  const quando = tempoRelativo(momento(item), language);
  const inicial = item.nome.trim().charAt(0).toUpperCase();

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          key={`${item.nome}-${indice}`}
          initial={semMovimento ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
          animate={semMovimento ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={semMovimento ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          role="status"
          aria-live="polite"
          /* No celular o aviso sobe acima do botão fixo de inscrição
             (bottom-6 right-6, visível só abaixo de lg) para não cobri-lo. */
          className="fixed bottom-24 sm:bottom-6 left-4 sm:left-6 z-40 max-w-[calc(100vw-2rem)] sm:max-w-xs"
        >
          <div className="relative flex items-start gap-3 bg-dojo-black/90 backdrop-blur-md border border-dojo-gray/40 shadow-lg shadow-black/50 pl-3 pr-8 py-3 sm:pl-4 sm:pr-9 sm:py-3.5">
            {/* Filete vermelho na borda esquerda */}
            <span aria-hidden className="absolute left-0 top-0 bottom-0 w-[2px] bg-dojo-red" />

            {/* Inicial do nome */}
            <span
              aria-hidden
              className="shrink-0 mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-dojo-red/50 text-dojo-red font-heading text-xs tracking-wider"
            >
              {inicial}
            </span>

            <div className="min-w-0">
              <p className="text-[9px] tracking-[0.2em] uppercase text-dojo-red/90 mb-1">
                {t.notificacoesInscricao.kicker}
              </p>
              <p className="text-xs text-dojo-white/90 font-light leading-snug">
                <span className="font-medium text-dojo-white">{item.nome}</span>{' '}
                {t.notificacoesInscricao.from}{' '}
                <span className="text-dojo-white/90">{item.cidade}</span>{' '}
                {t.notificacoesInscricao.action}
              </p>
              <div className="flex items-center gap-2 mt-1.5">
                {quando && (
                  <span className="text-[10px] tracking-wider uppercase text-dojo-lightgray/80">{quando}</span>
                )}
                <a
                  href="#inscricao"
                  onClick={fechar}
                  className="text-[10px] tracking-wider uppercase text-dojo-red hover:text-dojo-white transition-colors"
                >
                  {t.notificacoesInscricao.cta}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={fechar}
              aria-label={t.notificacoesInscricao.dismiss}
              className="absolute top-2 right-2 p-1 text-dojo-lightgray/70 hover:text-dojo-white transition-colors"
            >
              <X size={13} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
