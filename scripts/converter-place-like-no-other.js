/**
 * Converte as fotos de "imagens/Novas Alterações/A PLACE LIKE NO OTHER/"
 * para WEBP dentro de "public/imagens/Novas Alterações/A PLACE LIKE NO OTHER/":
 *
 *   bonsho.jpg      → bonsho.webp            (fundo da seção "A Place Like No Other")
 *   Galeria/*.jpg   → Galeria/place-01.webp… (carrossel logo abaixo da seção)
 *
 * As fotos originais (jpg/jpeg/jfif) NÃO vão para public/ — a pasta está na
 * lista PASTAS_IGNORADAS de setup-imagens.js. Só os .webp são servidos.
 *
 * Uso: node scripts/converter-place-like-no-other.js
 */

/* eslint-disable @typescript-eslint/no-require-imports -- script Node CommonJS, roda fora do bundle */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const raiz = path.join(__dirname, '..');
const PASTA = path.join('Novas Alterações', 'A PLACE LIKE NO OTHER');
const origem = path.join(raiz, 'imagens', PASTA);
const destino = path.join(raiz, 'public', 'imagens', PASTA);

const EXTENSOES_VALIDAS = ['.jpg', '.jpeg', '.png', '.jfif'];
const QUALIDADE_WEBP = 72;
const QUALIDADE_WEBP_GALERIA = 66; // são 50 fotos: peso importa mais que o detalhe
const LARGURA_MAXIMA_FUNDO = 2400; // imagem de fundo ocupa a tela inteira
const LARGURA_MAXIMA_GALERIA = 1400; // ~2x a maior largura que um card assume

// O bonsho.jpg original chega pré-escurecido (luminância média 25/255, nenhum
// canal passa de 85), como se já viesse com um filtro escuro aplicado. Somado
// às camadas escuras da seção, o fundo virava um borrão preto. Este fator
// devolve a foto ao brilho natural — 2.6 leva o pico a ~249, sem estourar.
// Se um dia trocarem a foto por uma já bem exposta, use 1.
const CLAREAMENTO_FUNDO = 2.6;

function ehImagem(nome) {
  return EXTENSOES_VALIDAS.includes(path.extname(nome).toLowerCase());
}

async function converter(caminhoOrigem, caminhoDestino, larguraMaxima, qualidade = QUALIDADE_WEBP, clareamento = 1) {
  fs.mkdirSync(path.dirname(caminhoDestino), { recursive: true });

  const { width, height } = await sharp(caminhoOrigem)
    .rotate() // aplica a orientação EXIF e remove os metadados
    .resize({ width: larguraMaxima, withoutEnlargement: true })
    .linear(clareamento, 0)
    .webp({ quality: qualidade })
    .toFile(caminhoDestino);

  const original = fs.statSync(caminhoOrigem).size;
  const convertido = fs.statSync(caminhoDestino).size;

  console.log(
    `  → ${path.basename(caminhoOrigem)} (${(original / 1024).toFixed(0)} KB) → ` +
      `${path.basename(caminhoDestino)} (${(convertido / 1024).toFixed(0)} KB, ${width}×${height})`
  );

  return { original, convertido, width, height };
}

async function main() {
  if (!fs.existsSync(origem)) {
    console.error(`Pasta de origem não encontrada: ${origem}`);
    process.exit(1);
  }

  let totalOriginal = 0;
  let totalConvertido = 0;
  const somar = ({ original, convertido }) => {
    totalOriginal += original;
    totalConvertido += convertido;
  };

  // 1. Fundo da seção
  console.log('\nFundo da seção:\n');
  somar(
    await converter(
      path.join(origem, 'bonsho.jpg'),
      path.join(destino, 'bonsho.webp'),
      LARGURA_MAXIMA_FUNDO,
      QUALIDADE_WEBP,
      CLAREAMENTO_FUNDO
    )
  );

  // 2. Galeria — ordenada pelo nome do arquivo (0001, 0002, …), que é a
  //    sequência escolhida pelo cliente.
  const origemGaleria = path.join(origem, 'Galeria');
  const destinoGaleria = path.join(destino, 'Galeria');

  const arquivos = fs
    .readdirSync(origemGaleria)
    .filter(ehImagem)
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

  console.log(`\nGaleria — ${arquivos.length} fotos:\n`);

  const gerados = [];
  for (let i = 0; i < arquivos.length; i++) {
    const nomeSaida = `place-${String(i + 1).padStart(2, '0')}.webp`;
    const resultado = await converter(
      path.join(origemGaleria, arquivos[i]),
      path.join(destinoGaleria, nomeSaida),
      LARGURA_MAXIMA_GALERIA,
      QUALIDADE_WEBP_GALERIA
    );
    somar(resultado);
    gerados.push({ nome: nomeSaida, largura: resultado.width, altura: resultado.height });
  }

  console.log(`\nTotal original:   ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total convertido: ${(totalConvertido / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Redução: ${(100 - (totalConvertido / totalOriginal) * 100).toFixed(1)}%\n`);

  // As dimensões vão para o TS junto do caminho: o carrossel reserva o espaço
  // de cada foto antes de ela carregar (sem isso o layout pula e o contador
  // "01 / 50" começa errado).
  const prefixo = `/imagens/${PASTA.split(path.sep).map(encodeURIComponent).join('/')}/Galeria`;
  const listaTs = gerados
    .map(({ nome, largura, altura }) => `      { src: "${prefixo}/${nome}", largura: ${largura}, altura: ${altura} },`)
    .join('\n');

  console.log('Cole esta lista em src/data/evento.ts:\n');
  console.log(listaTs);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
