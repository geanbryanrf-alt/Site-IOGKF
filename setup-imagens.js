/**
 * setup-imagens.js
 * 
 * Execute este script UMA VEZ após clonar o projeto para copiar as imagens
 * da pasta raiz para dentro de public/ onde o Next.js consegue servi-las.
 * 
 * Como usar:
 *   node setup-imagens.js
 */

const fs = require('fs');
const path = require('path');

const origem = path.join(__dirname, 'imagens');
const destino = path.join(__dirname, 'public', 'imagens');

// Pastas e arquivos de origem que NÃO devem ser copiados crus para public/.
// São fotos-fonte, pesadas, já tratadas por um script próprio (ver scripts/)
// e gravadas direto em public/imagens/... — copiar os originais aqui
// duplicaria peso e, pior, sobrescreveria o arquivo já tratado.
const ITENS_IGNORADOS = [
  path.join('Imagens Oficiais', 'Mosteiro (galeria)'),
  // Fonte de scripts/converter-place-like-no-other.js (fundo + galeria da
  // seção "A Place Like No Other").
  path.join('Novas Alterações', 'A PLACE LIKE NO OTHER'),
  // Fonte de scripts/converter-hero-fundo.js (as 4 fotos que passam no fundo
  // da hero, que chegam pré-escurecidas e são clareadas lá).
  path.join('Imagens Oficiais', 'Hero', 'imgs fundo'),
  // Fonte de scripts/converter-hero-kzig.js (a arte "KZIG" da hero).
  'letra_oficial.png',
];

// Só imagem vai para dentro do site. Tudo que está em public/ fica baixável
// por qualquer visitante, então um briefing, PDF ou planilha deixado em
// imagens/ viraria arquivo público sem ninguém perceber. Esses ficam apenas
// no projeto, onde devem estar.
const EXTENSOES_DE_IMAGEM = new Set([
  '.jpg', '.jpeg', '.jfif', '.png', '.webp', '.gif', '.svg', '.avif', '.ico',
]);

function copiarRecursivo(src, dest) {
  const itens = fs.readdirSync(src);
  for (const item of itens) {
    const caminhoSrc = path.join(src, item);
    const caminhoDest = path.join(dest, item);
    const relativo = path.relative(origem, caminhoSrc);

    if (ITENS_IGNORADOS.includes(relativo)) {
      console.log(`  ⏭ Ignorado (tratado por um script em scripts/): ${relativo}`);
      continue;
    }

    const stat = fs.statSync(caminhoSrc);

    if (stat.isDirectory()) {
      copiarRecursivo(caminhoSrc, caminhoDest);
      continue;
    }

    if (!EXTENSOES_DE_IMAGEM.has(path.extname(item).toLowerCase())) {
      console.log(`  ⏭ Ignorado (não é imagem, não vai para o site): ${relativo}`);
      continue;
    }

    // A pasta de destino só nasce quando há de fato uma imagem para pôr
    // dentro dela — assim uma pasta só de documentos não deixa um diretório
    // vazio em public/imagens/.
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
      console.log(`✓ Criada pasta: ${dest}`);
    }

    fs.copyFileSync(caminhoSrc, caminhoDest);
    console.log(`  → Copiado: ${item}`);
  }
}

console.log('\n🥋 Ken Zen Ichinyō 2027 — Setup de Imagens\n');

if (!fs.existsSync(origem)) {
  console.warn('⚠️ Pasta "imagens" não encontrada na raiz. Mantendo imagens de public/imagens/.');
  process.exit(0);
}

copiarRecursivo(origem, destino);
console.log('\n✅ Imagens copiadas com sucesso para public/imagens/\n');
console.log('Agora execute: npm install && npm run dev\n');
