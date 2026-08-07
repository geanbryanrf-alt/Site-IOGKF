/**
 * Prepara a arte oficial da hero (o bloco "KZIG / KEN ZEN ICHINYŌ GASSHUKU /
 * KARATE AND ZEN AS ONE") para uso no site:
 *
 *   imagens/letra_oficial.png → public/imagens/kzig-hero-optimized.png
 *
 * O arquivo entregue pelo cliente vem em uma moldura 1920×1080 com muito
 * espaço vazio em volta (a arte ocupa só o miolo). Servido assim, o Hero
 * reservaria uma caixa enorme e a arte apareceria pequena no meio dela.
 * Este script recorta a moldura até a arte, mantendo uma margem proporcional
 * à que a arte anterior já usava (~2% da largura), e regrava como PNG
 * comprimido.
 *
 * As dimensões finais são impressas no fim — elas alimentam o `width`,
 * `height` e o `aspectRatio` em src/components/Hero.tsx.
 *
 * O letra_oficial.png NÃO vai para public/ (está na lista PASTAS_IGNORADAS de
 * setup-imagens.js): só o PNG gerado aqui é servido.
 *
 * Uso: node scripts/converter-hero-kzig.js
 */

/* eslint-disable @typescript-eslint/no-require-imports -- script Node CommonJS, roda fora do bundle */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const raiz = path.join(__dirname, '..');
const origem = path.join(raiz, 'imagens', 'letra_oficial.png');
const destino = path.join(raiz, 'public', 'imagens', 'kzig-hero-optimized.png');

// Margem em volta da arte, em % da largura dela. Copiada da arte anterior
// (32 px de folga para 1543 px de arte), para o Hero não mudar de respiro.
const MARGEM = 0.021;
// Abaixo disso o pixel conta como fundo transparente e não entra no recorte.
const ALFA_MINIMO = 8;

/** Menor retângulo que contém tudo que não é transparente. */
async function recorteDaArte(arquivo) {
  const { data, info } = await sharp(arquivo).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  let esquerda = width;
  let topo = height;
  let direita = -1;
  let base = -1;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * channels + 3] <= ALFA_MINIMO) continue;
      if (x < esquerda) esquerda = x;
      if (x > direita) direita = x;
      if (y < topo) topo = y;
      if (y > base) base = y;
    }
  }

  if (direita < 0) throw new Error(`${arquivo} está totalmente transparente.`);

  const margem = Math.round((direita - esquerda + 1) * MARGEM);

  return {
    left: Math.max(esquerda - margem, 0),
    top: Math.max(topo - margem, 0),
    width: Math.min(direita + margem, width - 1) - Math.max(esquerda - margem, 0) + 1,
    height: Math.min(base + margem, height - 1) - Math.max(topo - margem, 0) + 1,
  };
}

async function main() {
  if (!fs.existsSync(origem)) {
    console.error(`Arte de origem não encontrada: ${origem}`);
    process.exit(1);
  }

  const area = await recorteDaArte(origem);

  fs.mkdirSync(path.dirname(destino), { recursive: true });
  const { width, height } = await sharp(origem)
    .extract(area)
    .png({ compressionLevel: 9, palette: false })
    .toFile(destino);

  const antes = fs.statSync(origem).size;
  const depois = fs.statSync(destino).size;

  console.log(`\n  ${path.basename(origem)} (${(antes / 1024).toFixed(0)} KB) → ` +
    `${path.basename(destino)} (${(depois / 1024).toFixed(0)} KB, ${width}×${height})\n`);
  console.log('Confira em src/components/Hero.tsx:');
  console.log(`  width={${width}} height={${height}}   aspectRatio: '${width} / ${height}'\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
