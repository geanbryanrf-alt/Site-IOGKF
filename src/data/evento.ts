// ============================================================
// DADOS CENTRALIZADOS DO EVENTO — Ken Zen Ichinyō 2027
// ============================================================
// Dados neutros (não traduzíveis): imagens, links e contatos.
// Todo texto de interface (títulos, parágrafos, FAQ) vive em
// src/i18n/dictionary.ts, nas versões `en` e `pt`.
// Itens marcados com TODO ainda precisam ser confirmados/fornecidos.
// ============================================================

export const eventoData = {
  nome: "Ken Zen Ichinyō 2027",
  contato: {
    email: "zemario.br@gmail.com",
    whatsapp: "+5527999216299",
    // Versão formatada para exibição na tela (o link usa `whatsapp` acima,
    // que é normalizado com replace(/\D/g, '') antes de virar URL wa.me).
    whatsappExibicao: "+55 27 99921-6299",
  },
  // Endereço oficial exibido no rodapé.
  endereco: {
    organizacao: "IOGKF Brasil",
    linhas: [
      "Rua Thereza Zanoni Caser, 168",
      "Pontal de Camburi",
      "Vitória-ES, Brasil",
    ],
  },
  links: {
    programacaoPDF: "#", // TODO: Adicionar PDF real na pasta public/ e atualizar o caminho
    hotel: "https://www.alamedavitoriahotel.com/",

    // ============================================================
    // MANIFESTAÇÃO DE INTERESSE — um formulário por idioma
    // ------------------------------------------------------------
    // A seção "Comece sua jornada" exibe os dois botões lado a lado.
    // Enquanto uma destas URLs for "#", o botão correspondente aparece
    // desabilitado com o selo "Em breve". Para colocá-lo no ar, basta
    // substituir o "#" pelo link do formulário — nada mais muda.
    // ============================================================
    formularioPt: "https://forms.gle/Gz3maUqqq2A1Nt9w9",
    formularioEn: "https://forms.gle/YqgMfDL61vtXnJJ19",
  },
  // ============================================================
  // IMAGENS
  // As imagens devem estar na pasta public/imagens/
  // Para fazer funcionar:
  //   1. Crie a pasta public/ na raiz do projeto (se não existir)
  //   2. Copie ou mova a pasta imagens/ para public/imagens/
  //      Ou crie um symlink: mklink /D "public\imagens" "..\imagens"
  // ============================================================
  imagens: {
    logoIogkf: "/imagens/logo-iogkf.png",
    hero: "/imagens/HERO%20FOTO/mosteiro%20hero.jpeg",
    // Fotos que passam no fundo da hero. Os arquivos servidos são gerados por
    // scripts/converter-hero-fundo.js — os originais chegam pré-escurecidos e
    // são clareados lá. Não aponte esta lista para os .jpg de origem.
    heroFundo: [
      "/imagens/Imagens%20Oficiais/Hero/imgs%20fundo/hero-01.webp",
      "/imagens/Imagens%20Oficiais/Hero/imgs%20fundo/hero-02.webp",
      "/imagens/Imagens%20Oficiais/Hero/imgs%20fundo/hero-03.webp",
      "/imagens/Imagens%20Oficiais/Hero/imgs%20fundo/hero-04.webp",
    ],
    // Arte "KZIG" da hero, gerada por scripts/converter-hero-kzig.js.
    heroKzigOptimized: "/imagens/kzig-hero-optimized.png",
    mosteiroFundo: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/bonsho.webp",
    secaoESe: "/imagens/Fotos%20do%20Mosteiro/WhatsApp%20Image%202026-07-14%20at%2018.47.01.jpeg",
    secaoESeCarrossel: [
      "/imagens/Imagens%20Oficiais/What%20if/what-if_01.jpg",
      "/imagens/Imagens%20Oficiais/What%20if/what-if_02.jpg",
      "/imagens/Imagens%20Oficiais/What%20if/what-if_03.jpg",
      "/imagens/Imagens%20Oficiais/What%20if/what-if_04.jpg",
    ],
    sogenRoshiSanchin: "/imagens/Fotos%20de%20Sakiyama%20Sogen%20Roshi/origem%2001.jpeg",
    sogenRoshiZen: "/imagens/Fotos%20de%20Sakiyama%20Sogen%20Roshi/origem%2002.jpeg",
    sogenRoshiWhatsapp1: "/imagens/Fotos%20de%20Sakiyama%20Sogen%20Roshi/WhatsApp%20Image%202026-07-14%20at%2018.44.32%20(1).jpeg",
    sogenRoshiWhatsapp2: "/imagens/Fotos%20de%20Sakiyama%20Sogen%20Roshi/WhatsApp%20Image%202026-07-14%20at%2018.44.33%20(1).jpeg",
    // Uma imagem por prática listada na seção "Uma tradição. Uma mente."
    // As chaves espelham `practices[].key` em src/i18n/dictionary.ts.
    praticas: {
      zazen: "/imagens/Novas%20Altera%C3%A7%C3%B5es/ONE%20TRADITION%20ONE%20MIND/ZAZEN.jpg",
      kinhin: "/imagens/Novas%20Altera%C3%A7%C3%B5es/ONE%20TRADITION%20ONE%20MIND/KINHIN.jpg",
      samu: "/imagens/Novas%20Altera%C3%A7%C3%B5es/ONE%20TRADITION%20ONE%20MIND/SAMU.jpg",
      cerimonias: "/imagens/Novas%20Altera%C3%A7%C3%B5es/ONE%20TRADITION%20ONE%20MIND/CEREMONIES.jpg",
      gojuRyu: "/imagens/Novas%20Altera%C3%A7%C3%B5es/ONE%20TRADITION%20ONE%20MIND/KARATE-GOJU-RYU.jpg",
      mondo: "/imagens/Novas%20Altera%C3%A7%C3%B5es/ONE%20TRADITION%20ONE%20MIND/MONDO.jpg",
      refeicoes: "/imagens/Novas%20Altera%C3%A7%C3%B5es/ONE%20TRADITION%20ONE%20MIND/MEALS.jpg",
      silencio: "/imagens/Novas%20Altera%C3%A7%C3%B5es/ONE%20TRADITION%20ONE%20MIND/SILENCE.jpg",
    },
    // Uma imagem por item da seção "Sua casa durante quatro dias".
    // As chaves espelham `photos[].key` em src/i18n/dictionary.ts.
    hospedagem: {
      quarto: "/imagens/Novas%20Altera%C3%A7%C3%B5es/YOUR%20HOME%20FOR%20FOUR%20DAYS/quarto.jpg",
      cozinha: "/imagens/Novas%20Altera%C3%A7%C3%B5es/YOUR%20HOME%20FOR%20FOUR%20DAYS/cozinha.jpg",
      comida: "/imagens/Novas%20Altera%C3%A7%C3%B5es/YOUR%20HOME%20FOR%20FOUR%20DAYS/comida.jpg",
      trabalho: "/imagens/Novas%20Altera%C3%A7%C3%B5es/YOUR%20HOME%20FOR%20FOUR%20DAYS/trabalho.jpg",
    },
    zazen: "/imagens/Imagens%20Oficiais/Uma%20tradi%C3%A7%C3%A3o/uma-tradi%C3%A7%C3%A3o1.jpg",
    karate: "/imagens/Fotos%20do%20sensei%20Paolo%20Taigo%20Spongia/WhatsApp%20Image%202026-07-14%20at%2018.40.53.jpeg",
    samu: "/imagens/Imagens%20Oficiais/Uma%20tradi%C3%A7%C3%A3o/uma-tradi%C3%A7%C3%A3o3.jpg",
    mosteiroAerea: "/imagens/Fotos%20do%20Mosteiro/WhatsApp%20Image%202026-07-14%20at%2018.47.01%20(1).jpeg",
    mosteiroBuda: "/imagens/Fotos%20do%20Mosteiro/WhatsApp%20Image%202026-07-14%20at%2018.47.01%20(2).jpeg",
    mosteiroInterior: "/imagens/Fotos%20do%20Mosteiro/WhatsApp%20Image%202026-07-14%20at%2018.47.01%20(3).jpeg",
    mosteiroJardim: "/imagens/Fotos%20do%20Mosteiro/WhatsApp%20Image%202026-07-14%20at%2018.47.03.jpeg",
    instrutorPaoloCarrossel: [
      "/imagens/Imagens%20Oficiais/Instrutores/Paolo_!.jpg",
      "/imagens/Imagens%20Oficiais/Instrutores/Paolo_2.jpg",
    ],
    instrutorKendoCarrossel: [
      "/imagens/Imagens%20Oficiais/Instrutores/kendo_1.jpg",
      "/imagens/Imagens%20Oficiais/Instrutores/kendo_2.jpg",
    ],
    instrutorZeMarioCarrossel: [
      "/imagens/Imagens%20Oficiais/Instrutores/ze-mario_1.jpg",
      "/imagens/Imagens%20Oficiais/Instrutores/ze-mario_2.jpg",
    ],
    sayonaraParty1: "/imagens/Sayonara%20party/WhatsApp%20Image%202026-07-14%20at%2018.48.11%20(1).jpeg",
    chamadaFinal: "/imagens/Fotos%20do%20Mosteiro/WhatsApp%20Image%202026-07-14%20at%2018.47.01%20(2).jpeg",
    hotel: "/imagens/Imagens%20Oficiais/Hotel/alameda-hotel.jpg",
    camisetaOficial: "/imagens/Imagens%20Oficiais/Camisa/camisa.jpg",
    // Galeria exibida logo abaixo da seção "A Place Like No Other".
    // Fonte: imagens/Novas Alterações/A PLACE LIKE NO OTHER/Galeria (originais
    // .jpg/.jpeg/.jfif), convertida para .webp por
    // scripts/converter-place-like-no-other.js.
    galeriaMosteiro: [
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-01.webp", largura: 1080, altura: 798 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-02.webp", largura: 1320, altura: 724 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-03.webp", largura: 1400, altura: 788 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-04.webp", largura: 1200, altura: 1600 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-05.webp", largura: 1400, altura: 788 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-06.webp", largura: 1154, altura: 1600 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-07.webp", largura: 1200, altura: 800 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-08.webp", largura: 387, altura: 516 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-09.webp", largura: 1200, altura: 800 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-10.webp", largura: 1212, altura: 909 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-11.webp", largura: 1400, altura: 788 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-12.webp", largura: 1400, altura: 788 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-13.webp", largura: 1400, altura: 1867 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-14.webp", largura: 1024, altura: 768 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-15.webp", largura: 1400, altura: 2487 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-16.webp", largura: 387, altura: 516 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-17.webp", largura: 1400, altura: 788 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-18.webp", largura: 1320, altura: 715 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-19.webp", largura: 1400, altura: 2489 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-20.webp", largura: 1200, altura: 798 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-21.webp", largura: 1200, altura: 800 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-22.webp", largura: 1400, altura: 2489 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-23.webp", largura: 1200, altura: 800 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-24.webp", largura: 768, altura: 1024 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-25.webp", largura: 1280, altura: 853 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-26.webp", largura: 1200, altura: 800 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-27.webp", largura: 1400, altura: 2489 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-28.webp", largura: 550, altura: 412 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-29.webp", largura: 1200, altura: 800 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-30.webp", largura: 1200, altura: 800 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-31.webp", largura: 1400, altura: 2489 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-32.webp", largura: 1200, altura: 800 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-33.webp", largura: 1200, altura: 1600 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-34.webp", largura: 1200, altura: 800 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-35.webp", largura: 1200, altura: 800 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-36.webp", largura: 1200, altura: 1600 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-37.webp", largura: 1400, altura: 1050 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-38.webp", largura: 1200, altura: 800 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-39.webp", largura: 1400, altura: 2489 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-40.webp", largura: 1400, altura: 1050 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-41.webp", largura: 1200, altura: 1600 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-42.webp", largura: 1200, altura: 1600 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-43.webp", largura: 1400, altura: 1050 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-44.webp", largura: 1400, altura: 1050 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-45.webp", largura: 1200, altura: 1600 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-46.webp", largura: 1400, altura: 1050 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-47.webp", largura: 1400, altura: 1050 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-48.webp", largura: 1400, altura: 1050 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-49.webp", largura: 1400, altura: 1050 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-50.webp", largura: 1400, altura: 1050 },
      { src: "/imagens/Novas%20Altera%C3%A7%C3%B5es/A%20PLACE%20LIKE%20NO%20OTHER/Galeria/place-51.webp", largura: 1200, altura: 1600 },
    ],
  },
  inscricao: {
    minimoParticipantes: 50,
    // Número de pessoas que já manifestaram interesse / se inscreveram.
    // Alimenta o contador discreto exibido na Hero.
    // TODO: SUBSTITUIR PELO NÚMERO REAL antes de publicar o site — o valor
    // abaixo é apenas um placeholder para visualizar o componente.
    // Defina como `null` para esconder o contador por completo.
    inscritosAtuais: 37 as number | null,

    // ============================================================
    // NOTIFICAÇÕES DE INSCRIÇÃO (prova social)
    // Alimentam os avisos discretos que surgem no canto inferior
    // esquerdo do site (componente NotificacoesInscricao).
    //
    // ⚠️ ATENÇÃO — LEIA ANTES DE PUBLICAR:
    //
    // 1. Todo item marcado com `exemplo: true` é fictício e existe
    //    apenas para você visualizar o layout. Eles só aparecem no site
    //    enquanto `demonstracao` for `true`.
    //    TROQUE `demonstracao` PARA `false` ANTES DE PUBLICAR: os
    //    exemplos somem sozinhos e ficam apenas as inscrições reais.
    //
    // 2. Preencha `itens` somente com inscrições REAIS. Exibir nomes
    //    inventados como se fossem pessoas inscritas é publicidade
    //    enganosa (CDC, arts. 36-37) e destrói a confiança no evento
    //    se alguém perceber.
    //
    // 3. Peça autorização à pessoa antes de exibir o nome dela, e
    //    prefira o formato "Primeiro nome + inicial" (ex.: "Marina L.").
    //    Nunca publique e-mail, telefone ou nome completo aqui.
    //
    // Como manter: a cada nova inscrição confirmada no formulário,
    // acrescente um item no TOPO da lista e remova os mais antigos
    // (a lista rende bem com 5 a 10 itens).
    //
    // `em` é a data/hora da inscrição em ISO 8601. O site converte
    // sozinho para "há 2 horas" / "2 hours ago" no idioma do visitante.
    // ============================================================
    inscricoesRecentes: {
      demonstracao: true, // TODO: mudar para false antes de publicar
      itens: [
        // --- Inscrições reais entram aqui, a mais recente no topo ---
        //   { nome: "Fulano S.", cidade: "Vitória — ES", em: "2027-02-10T14:30:00-03:00" },

        // --- Exemplos fictícios: somem quando `demonstracao` vira false ---
        // Usam `minutosAtras` em vez de `em` para nunca ficarem desatualizados
        // durante a visualização. Em inscrições reais, use sempre `em`.
        { nome: 'Marina L.', cidade: 'São Paulo — SP', minutosAtras: 12, exemplo: true },
        { nome: 'Ricardo A.', cidade: 'Vitória — ES', minutosAtras: 47, exemplo: true },
        { nome: 'Paolo B.', cidade: 'Roma — Itália', minutosAtras: 180, exemplo: true },
        { nome: 'Camila S.', cidade: 'Belo Horizonte — MG', minutosAtras: 400, exemplo: true },
        { nome: 'Eduardo M.', cidade: 'Curitiba — PR', minutosAtras: 1500, exemplo: true },
      ] as {
        nome: string;
        cidade: string;
        /** Data/hora ISO 8601 da inscrição real. */
        em?: string;
        /** Só para exemplos: quantos minutos atrás, contados na hora da visita. */
        minutosAtras?: number;
        exemplo?: boolean;
      }[],
    },
  },
};
