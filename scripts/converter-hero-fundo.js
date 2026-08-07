/**
 * Converte as 4 fotos que passam no fundo da hero:
 *
 *   imagens/Imagens Oficiais/Hero/imgs fundo/01.jpg …04.jpg
 *   → public/imagens/Imagens Oficiais/Hero/imgs fundo/hero-01.webp …hero-04.webp
 *
 * POR QUE ESTE SCRIPT EXISTE
 * As fotos chegam do cliente já com um filtro escuro queimado no arquivo:
 * nenhum canal passa de ~120 de 255 (o quimono branco e o Buda de pedra saem
 * cinza-chumbo). Somando as camadas escuras que a hero aplica por cima para o
 * texto ter contraste, a foto praticamente sumia. Aqui a foto é devolvida ao
 * brilho natural com uma multiplicação linear — o mesmo remédio que
 * scripts/converter-place-like-no-other.js aplica no bonsho.jpg.
 *
 * O fator é medido foto a foto (não é chute): cada uma é multiplicada até o
 * seu pixel mais claro chegar em ALVO_PICO. Uma foto que já chegar bem
 * exposta recebe fator 1 e passa intacta. Ou seja: trocar as fotos por
 * versões corrigidas não exige mexer em nada aqui.
 *
 * Os originais NÃO vão para public/ (a pasta está na lista ITENS_IGNORADOS de
 * setup-imagens.js): só os .webp gerados aqui são servidos.
 *
 * Uso: node scripts/converter-hero-fundo.js
 */

/* eslint-disable @typescript-eslint/no-require-imports -- script Node CommonJS, roda fora do bundle */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const raiz = path.join(__dirname, '..');
const PASTA = path.join('Imagens Oficiais', 'Hero', 'imgs fundo');
const origem = path.join(raiz, 'imagens', PASTA);
const destino = path.join(raiz, 'public', 'imagens', PASTA);

const EXTENSOES_VALIDAS = ['.jpg', '.jpeg', '.png'];
const QUALIDADE_WEBP = 74;
const LARGURA_MAXIMA = 2400; // a foto ocupa a tela inteira atrás da arte KZIG

// Onde o pixel mais claro da foto deve cair depois do clareamento. Abaixo de
// 255 de propósito: sobra folga para o branco do quimono não estourar.
const ALVO_PICO = 245;
// Teto de segurança. Uma foto tão escura que precisasse de mais que isso
// estaria com as sombras destruídas — clarear só levantaria ruído.
const FATOR_MAXIMO = 3;

function ehImagem(nome) {
  return EXTENSOES_VALIDAS.includes(path.extname(nome).toLowerCase());
}

/** Quanto multiplicar a foto para o pixel mais claro dela chegar em ALVO_PICO. */
async function fatorDeClareamento(arquivo) {
  const { channels } = await sharp(arquivo).stats();
  const pico = Math.max(...channels.slice(0, 3).map((canal) => canal.max));
  if (pico === 0) return 1;
  return Math.min(Math.max(ALVO_PICO / pico, 1), FATOR_MAXIMO);
}

async function converter(nomeOrigem, nomeDestino) {
  const caminhoOrigem = path.join(origem, nomeOrigem);
  const caminhoDestino = path.join(destino, nomeDestino);

  const fator = await fatorDeClareamento(caminhoOrigem);

  const { width, height } = await sharp(caminhoOrigem)
    .rotate() // aplica a orientação EXIF e remove os metadados
    .resize({ width: LARGURA_MAXIMA, withoutEnlargement: true })
    .linear(fator, 0)
    .webp({ quality: QUALIDADE_WEBP })
    .toFile(caminhoDestino);

  const antes = fs.statSync(caminhoOrigem).size;
  const depois = fs.statSync(caminhoDestino).size;

  console.log(
    `  → ${nomeOrigem} (${(antes / 1024).toFixed(0)} KB) → ` +
      `${nomeDestino} (${(depois / 1024).toFixed(0)} KB, ${width}×${height}, clareada ${fator.toFixed(2)}×)`
  );
}

async function main() {
  if (!fs.existsSync(origem)) {
    console.error(`Pasta de origem não encontrada: ${origem}`);
    process.exit(1);
  }

  fs.mkdirSync(destino, { recursive: true });

  const arquivos = fs
    .readdirSync(origem)
    .filter(ehImagem)
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

  console.log(`\nFundo da hero — ${arquivos.length} fotos:\n`);

  const gerados = [];
  for (let i = 0; i < arquivos.length; i++) {
    const nomeSaida = `hero-${String(i + 1).padStart(2, '0')}.webp`;
    await converter(arquivos[i], nomeSaida);
    gerados.push(nomeSaida);
  }

  const prefixo = `/imagens/${PASTA.split(path.sep).map(encodeURIComponent).join('/')}`;
  console.log('\nConfira a lista `heroFundo` em src/data/evento.ts:\n');
  console.log(gerados.map((nome) => `      "${prefixo}/${nome}",`).join('\n'));
  console.log('');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
