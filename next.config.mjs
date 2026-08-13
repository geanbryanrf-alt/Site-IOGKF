/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // O site é publicado como arquivos estáticos: `npm run build` gera a pasta
  // out/, cujo conteúdo sobe para a public_html da hospedagem. Assim roda em
  // servidor comum (Hostinger, cPanel...), que não executa Node.
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
