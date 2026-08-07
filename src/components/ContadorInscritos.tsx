'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { eventoData } from '@/data/evento';
import { useLanguage } from '@/i18n/LanguageContext';

const CONTAGEM_DURACAO = 1400; // ms da animação de contagem

type Props = {
  /** Atraso, em segundos, antes do bloco aparecer (para encadear com as animações da Hero). */
  delay?: number;
  className?: string;
};

/**
 * Progresso das inscrições, exibido logo abaixo dos dois CTAs da Hero.
 *
 * Mostra quantas pessoas já manifestaram interesse e quantas ainda faltam
 * para atingir o mínimo que confirma o evento — ambos números REAIS, vindos
 * de `eventoData.inscricao` (`inscritosAtuais` e `minimoParticipantes`).
 * Se `inscritosAtuais` for `null`, o componente não renderiza nada.
 */
export default function ContadorInscritos({ delay = 1.1, className = '' }: Props) {
  const { t } = useLanguage();
  const semMovimento = useReducedMotion();
  const total = eventoData.inscricao.inscritosAtuais;
  const minimo = eventoData.inscricao.minimoParticipantes;

  const [valor, setValor] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Sem animação de contagem: o valor final é derivado direto na renderização.
    if (total === null || semMovimento) return;

    const inicio = performance.now() + delay * 1000;

    const passo = (agora: number) => {
      const decorrido = agora - inicio;
      if (decorrido < 0) {
        frameRef.current = requestAnimationFrame(passo);
        return;
      }
      const progresso = Math.min(decorrido / CONTAGEM_DURACAO, 1);
      // easeOutCubic — desacelera no fim
      const suave = 1 - Math.pow(1 - progresso, 3);
      setValor(Math.round(suave * total));
      if (progresso < 1) {
        frameRef.current = requestAnimationFrame(passo);
      }
    };

    frameRef.current = requestAnimationFrame(passo);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [total, delay, semMovimento]);

  if (total === null) return null;

  const exibido = semMovimento ? total : valor;
  const faltam = Math.max(minimo - total, 0);
  const pct = Math.min(Math.round((total / minimo) * 100), 100);

  const { interested, remaining, remainingSingular, confirmed, barLabel } = t.hero.progresso;
  const [antes, depois] = interested.split('{count}');
  const restante =
    faltam === 0 ? confirmed : faltam === 1 ? remainingSingular : remaining.replace('{count}', String(faltam));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={`flex flex-col items-center gap-2 ${className}`}
    >
      <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-dojo-white/55 font-light text-center">
        {/* Ponto pulsante — sinal sutil de "acontecendo agora" */}
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="absolute inline-flex h-full w-full rounded-full bg-dojo-red opacity-70 motion-safe:animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-dojo-red" />
        </span>
        <span>
          {antes}
          <span className="text-dojo-white/85 font-medium tabular-nums">{exibido}</span>
          {depois}
        </span>
        {/* Separador só quando as duas frases cabem na mesma linha */}
        <span aria-hidden className="hidden sm:inline text-dojo-white/25">·</span>
        <span className={faltam === 0 ? 'text-dojo-red/90' : 'text-dojo-white/70'}>{restante}</span>
      </p>

      {/* Barra fina de progresso rumo ao mínimo que confirma o evento */}
      <div
        role="progressbar"
        aria-valuenow={total}
        aria-valuemin={0}
        aria-valuemax={minimo}
        aria-label={barLabel.replace('{min}', String(minimo))}
        className="h-[2px] w-full max-w-[240px] sm:max-w-[280px] bg-dojo-white/15 overflow-hidden rounded-full"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: semMovimento ? 0 : 1.4, delay: semMovimento ? 0 : delay, ease: 'easeOut' }}
          className="h-full bg-dojo-red"
        />
      </div>
    </motion.div>
  );
}
