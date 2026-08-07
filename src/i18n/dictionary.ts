// ============================================================
// DICIONÁRIO DE TEXTOS — Ken Zen Ichinyō 2027
// ============================================================
// Todo o texto de interface do site vive aqui, em duas versões:
// `en` (idioma original/padrão do site) e `pt` (tradução).
// Para alterar um texto, edite as duas chaves correspondentes.
// ============================================================

const en = {
  header: {
    nav: {
      experience: 'Experience',
      legacy: 'Legacy',
      monastery: 'Monastery',
      instructors: 'Instructors',
      schedule: 'Schedule',
      accommodation: 'Accommodation',
      investment: 'Investment',
      faq: 'FAQ',
    },
    cta: 'Express Interest',
    ctaMobile: 'Reserve your spot',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    emotionalText:
      'For centuries, Karate and Zen have walked the same path. Over four days, that path can be lived in its most authentic form.',
    ctaPrimary: 'Reserve your spot',
    ctaSecondary: 'Discover the experience',
    // Linha de progresso das inscrições, logo abaixo dos dois CTAs.
    progresso: {
      interested: '{count} have already expressed interest',
      remaining: '{count} more to secure the event',
      remainingSingular: '1 more to secure the event',
      confirmed: 'Minimum reached — the event is confirmed',
      barLabel: 'Progress toward the {min} expressions of interest needed to confirm the event',
    },
  },
  notificacoesInscricao: {
    kicker: 'New registration',
    action: 'has just expressed interest',
    from: 'from',
    cta: 'Join them',
    dismiss: 'Dismiss notification',
  },
  secaoESe: {
    title: 'What If...',
    lead: [
      'What if Karate could be more than technique?',
      'What if silence could teach as much as movement?',
      'What if stepping away from routine for just four days could transform the way you understand your practice?',
    ],
    body: [
      'Ken Zen Ichinyō is not just another international Karate seminar.',
      'It is an invitation to live the routine of a traditional Zen monastery while practicing authentic Okinawan Goju-Ryu under the guidance of internationally respected instructors.',
    ],
    boldLines: ['For four days, you will not be a visitor.', 'You will not be a tourist.', 'You will be part of the monastery.'],
    list: ['Wake before sunrise.', 'Meditate with the monks.', 'Share meals.', 'Work alongside them.', 'Train.', 'Listen.', 'Reflect.', 'Practice.'],
    closing: 'You may discover that some of Karate’s greatest lessons are found in silence.',
  },
  secaoLegado: {
    kicker: 'The Origin',
    title: 'Ken Zen Ichinyō',
    subtitle: 'Karate and Zen as one.',
    captionName: 'Sakiyama Sogen Roshi',
    captionLines: ['Disciple of Chojun Miyagi', 'Goju-Ryu Master', 'Zen Master'],
    body: [
      'Chojun Miyagi, the founder of Goju-Ryu Karate, understood that a martial artist’s true strength lies not only in the physical body, but in the mind and spirit.',
      'One of his closest disciples was **Sakiyama Sogen Roshi**. After his dedication to the rigorous training of Goju-Ryu in Okinawa, Sakiyama Roshi followed a profound path in the monastic tradition, becoming a respected Zen Master as well.',
      'His life was a living testament that Karate is not merely technique. It is also discipline, awareness, humility, and absolute presence. For him, rigorous physical training and silent meditation were two expressions of the same path toward self-knowledge.',
    ],
    tribute: ['This event was born as a tribute to that legacy.', 'Not simply speaking of it...', 'But living it.'],
    quote: '"Dedicated to the memory of Sakiyama Sogen Roshi, whose life reminds us that Karate and Zen have always been a single path."',
  },
  secaoExperiencia: {
    titleLine1: 'One tradition.',
    titleLine2: 'One mind.',
    lead: [
      'There are many Karate seminars.',
      'There are many meditation retreats.',
      'Ken Zen Ichinyō is neither.',
      'It is a rare opportunity to experience both traditions exactly where they naturally meet.',
    ],
    // `key` liga cada prática à sua foto em eventoData.imagens.praticas.
    practices: [
      { key: 'zazen', label: 'Zazen' },
      { key: 'kinhin', label: 'Kinhin' },
      { key: 'samu', label: 'Samu' },
      { key: 'cerimonias', label: 'Ceremonies' },
      { key: 'gojuRyu', label: 'Goju-Ryu Karate' },
      { key: 'mondo', label: 'Mondo' },
      { key: 'refeicoes', label: 'Meals' },
      { key: 'silencio', label: 'Silence' },
    ],
    highlight: ['There will be no audience.', 'There will be no performance.', 'There will only be practice.'],
    footer: ['The goal is not to escape the world.', 'It is to return to it with more clarity.'],
  },
  secaoMosteiro: {
    titleLine1: 'A Place Like',
    titleLine2: 'No Other',
    lead: 'Nestled in the mountains of Espírito Santo, surrounded by the rich biodiversity of the Atlantic Forest, lies the first Zen monastery in South America.',
    items: [
      {
        title: 'Morro da Vargem Zen Monastery',
        desc: 'A pioneer and one of the largest centers for practice and environmental and spiritual preservation in Brazil.',
      },
      {
        title: 'The Great Buddha of Ibiraçu',
        desc: 'The largest Buddha statue in the Western world, welcoming visitors at the entrance of the monastery.',
      },
      {
        title: 'Atlantic Forest & Silence',
        desc: 'An environment where discipline meets deep contemplation of nature and self-knowledge.',
      },
    ],
  },
  // Galeria logo abaixo de "A Place Like No Other".
  // `prevBtn`/`nextBtn` também são usados pelo carrossel de práticas.
  secaoGaleria: {
    title: 'The monastery in images',
    photoAlt: 'Monastery photo',
    prevBtn: 'Previous photo',
    nextBtn: 'Next photo',
    hint: 'Drag sideways to see more photos',
  },
  secaoInstrutores: {
    title: 'Meet Your Instructors',
    paolo: {
      name: 'Sensei Paolo Taigō Spongia',
      credentials: ['IOGKF Italy Chief Instructor (8th Dan)', 'IOGKF International Technical Committee Member (Gijutsu Iinkai)', 'Zen Soto Monk and Zen Master'],
      body: [
        'Having dedicated his life to the development of traditional Okinawan Goju-Ryu Karate, Sensei Spongia is an international reference within the IOGKF. His journey in the martial arts led him not only to technical excellence, but also to a profound spiritual search.',
        'As a Zen Master, he is the embodiment of the concept “Ken Zen Ichinyō.” He integrates the rigor and martial discipline of Okinawa with the serenity and presence of Soto Zen meditation.',
      ],
    },
    kendo: {
      name: 'Rev. Kendo Bitti',
      credentials: ['International Missionary, Soto Zen Buddhism', 'Abbot, Zenkoji – Morro da Vargem Zen Monastery'],
      body: [
        'After several years training at Kotaiji Monastery in Japan, he returned to Brazil to lead, as abbot, the Morro da Vargem Zen Monastery. A monk of the Soto Zen tradition and abbot of the first Zen monastery in Latin America, located in Ibiraçu (ES).',
        'He dedicates his life to the practice, teaching, and spread of Zen in Brazil, leading retreats, talks, and activities focused on human and spiritual development.',
      ],
    },
    zeMario: {
      name: 'Sensei Zé Mário',
      credentials: ['IOGKF Brazil Chief Instructor (5th Dan)', 'Organizer of Ken Zen Ichinyō 2027'],
      body: [
        'Chief instructor of the IOGKF in Brazil, Sensei Zé Mário has led the preservation of Chojun Miyagi’s essence and teachings in the country.',
        'His constant dedication to technical growth and to promoting Karate as a philosophy of life inspired him to live the transformative experience of combining Dojo discipline with monastic routine, giving rise to Ken Zen Ichinyō.',
        'He lives in the city of Vitória, Espírito Santo, where he built, with his own hands, a replica of an old Okinawan house, which serves as the honbu dojo of IOGKF Brazil.',
      ],
    },
  },
  programacaoDiaria: {
    title: 'A day inside the',
    titleHighlight: 'monastery',
    lead: [
      'Each day inside the monastery follows a rhythm that has remained largely unchanged for generations.',
      'Life begins before sunrise.',
      'Every activity has a purpose. Every moment is part of the practice.',
    ],
    periods: { morning: 'MORNING', midday: 'MIDDAY', afternoon: 'AFTERNOON', evening: 'EVENING' },
    activities: {
      wake: 'Wake up',
      zazen: 'Zazen',
      choka: 'Choka — Morning ceremony',
      kinhin: 'Kinhin — Walking meditation',
      breakfast: 'Breakfast',
      samu: 'Samu — Mindful work',
      karateTraining: 'Karate training',
      bath: 'Bath',
      lunch: 'Lunch',
      rest: 'Rest',
      mondo: 'Mondo and Zen teachings',
      lightMeal: 'Light meal',
      dinner: 'Dinner',
      dharma: 'Dharma teaching',
      silence: 'Silence',
    },
    downloadCta: 'Download full schedule',
    disclaimer: 'This schedule is subject to change',
  },
  secaoHospedagem: {
    title: 'Your home for',
    titleHighlight: 'four days',
    body: [
      'Staying at the monastery is not a conventional accommodation. It is a fundamental part of the experience. **Simplicity**, **respect**, **community**, and **monastic life** guide every moment.',
      'Participants will stay at the monastery from the afternoon of the 23rd until the morning of the 26th of August.',
    ],
    detailsTitle: 'Accommodation Details',
    details: [
      'Rooms shared by two or three people.',
      'Mattress, pillow, sheets, and blankets included.',
      'Ovo-lacto vegetarian meals included.',
      'Meals prepared by the monks with the participation of guests.',
      'Community work (Samu) is a fundamental part of the experience.',
    ],
    // `key` liga cada foto à sua imagem em eventoData.imagens.hospedagem.
    photos: [
      { key: 'quarto', label: 'Rooms' },
      { key: 'cozinha', label: 'Kitchen' },
      { key: 'comida', label: 'Meals' },
      { key: 'trabalho', label: 'Community work' },
    ],
  },
  secaoHotel: {
    title: 'Before and After the Event',
    lead: 'For participants who wish to arrive in Vitória before the event or stay in the city afterward, the recommended official hotel is **Alameda Vitória Hotel**.',
    description: 'Alameda Vitória Hotel offers very good value for money and location. It faces the beach, on one of Vitória’s most beautiful boardwalks.',
    cta: 'Visit hotel website',
    footnote: 'Information about reservations and special conditions will be updated soon.',
  },
  secaoTransporte: {
    title: 'How to Get There',
    lead: [
      'The nearest airport is **Vitória Airport — VIX**.',
      'The monastery is located approximately one hour by car from the airport.',
    ],
    options: [
      { label: 'Uber', desc: 'A convenient option directly from the airport' },
      { label: 'Taxi', desc: 'Available in the arrivals area' },
      { label: 'Shared Van', desc: 'Will be organized if there is sufficient demand among participants' },
    ],
    footnote: 'Detailed transportation guidance will be sent to registered participants.',
  },
  secaoExtras: {
    title: 'More than a souvenir',
    shirt: {
      title: 'Official T-Shirt',
      body: [
        'Every participant will receive an official Ken Zen Ichinyō 2027 commemorative t-shirt.',
        'The t-shirt is **included in the registration fee**, and the size can be chosen while completing your registration.',
      ],
    },
    sayonara: {
      title: 'Sayonara Party',
      body: 'A moment of celebration, friendship, and farewell after the intense days of immersion.',
      list: ['Will take place in Vitória', 'Held on August 26, 2027', 'Optional participation', 'Chosen during registration'],
    },
  },
  secaoInscricaoAntecipada: {
    title: 'Expression of Interest',
    intro: [
      'Ken Zen Ichinyō has been designed as an intimate international gathering, where **every participant contributes to the unique atmosphere of the experience**.',
      'To ensure the event can be organized to the highest possible standard, we are currently collecting Expressions of Interest from practitioners who genuinely intend to participate.',
    ],
    noPayment: 'There is no payment required at this stage.',
    threshold: 'The event will be confirmed once at least {min} committed participants have submitted their Expression of Interest by {date}.',
    invitation: 'If this minimum is reached, all participants who submitted an Expression of Interest will receive an invitation to complete their official registration and payment.',
    steps: [
      { step: 'Step 1', title: 'Complete the form', desc: 'Complete the online Expression of Interest form.' },
      { step: 'Step 2', title: 'Wait for the deadline', desc: 'Wait until the Expression of Interest period closes on {date}.' },
      { step: 'Step 3', title: 'Official invitation', desc: 'If the minimum number of participants is reached, you will receive an invitation to complete your official registration and payment, along with all the necessary information.' },
    ],
    whyTitle: 'Why an Expression of Interest?',
    why: [
      'Organizing an international event of this nature requires careful planning and coordination.',
      'By submitting your Expression of Interest, you help us assess the level of commitment within the international karate community and determine whether the event can move forward.',
      'Your submission **does not represent a financial commitment**, but it does reflect your genuine intention to participate should the event be confirmed.',
    ],
    paymentMethodsTitle: 'Anticipated payment methods',
    paymentNote: '* Payment details will only be sent with the official registration invitation, if the event is confirmed.',
  },
  investimento: {
    title: 'Investment',
    perParticipant: 'per participant',
    includesTitle: 'Includes',
    gasshuku: {
      title: 'Ken Zen Ichinyō Gasshuku',
      price: 'USD 450',
      includes: [
        '4 days of Karate and Zen practice',
        'Accommodation at the Morro da Vargem Zen Monastery',
        'All meals during the event',
        'Official event t-shirt',
      ],
    },
    sayonara: {
      title: 'Sayonara Party',
      optional: 'Optional',
      price: 'USD 60',
      note: 'Held on the closing night, in the city of Vitória-ES.',
    },
    note: 'Participation in the event begins with the Expression of Interest, **with no payment required at this stage**.',
  },
  formularioInscricao: {
    title: 'Begin your journey',
    lead: 'Your Expression of Interest is submitted through our official form.',
    // Escolha de idioma do formulário. Os rótulos ficam no próprio idioma
    // de destino para serem reconhecíveis com o site em qualquer língua.
    escolhaIdioma: 'Choose the language you would like to fill out the form in:',
    ctaPt: 'Formulário em Português',
    ctaEn: 'Form in English',
    emBreve: 'Coming soon',
    footnote: 'No payment is required at this stage. If the event is confirmed, you will receive an invitation to official registration.',
  },
  perguntasFrequentes: {
    title: 'Before You Come',
  },
  secaoContato: {
    title: 'Get in Touch',
    lead: 'If you have questions about travel, registration, or the event, we’ll be happy to help.',
    whatsapp: 'WhatsApp',
    email: 'Email',
    whatsappMessage: 'Hello! I would like more information about Ken Zen Ichinyō 2027.',
  },
  chamadaFinal: {
    title: 'See you in',
    titleHighlight: 'Brazil',
    body: ['For centuries, Karate and Zen have shared the same path.', 'Now, for four days, that path will be yours.'],
    closing: ['We look forward to welcoming you to Brazil.', 'We look forward to welcoming you to Ken Zen Ichinyō 2027.'],
    cta: 'Submit your Expression of Interest',
    footer: ['Express your interest.', 'Begin your journey.'],
  },
  footer: {
    navTitle: 'Navigation',
    nav: { experience: 'The Experience', legacy: 'The Legacy', monastery: 'The Monastery', schedule: 'Schedule', investment: 'Investment', faq: 'FAQ' },
    contactTitle: 'Contact',
    contactLinks: { email: 'Email', whatsapp: 'WhatsApp' },
    copyright: '© 2027 IOGKF Brazil. All rights reserved.',
    credit: 'Developed with excellence Gean Bryan +5527996959751',
  },
  botaoInscricaoFixo: {
    cta: 'Express Interest',
  },
  languageSwitcher: {
    labelEn: 'Switch to English',
    labelPt: 'Mudar para Português',
  },
  evento: {
    subtitulo: 'Where Karate and Zen become one',
    dates: 'August 23–26, 2027',
    location: 'Morro da Vargem Zen Monastery',
    city: 'Ibiraçu — Espírito Santo — Brazil',
    interestDeadline: 'April 30, 2027',
    paymentMethods: ['PayPal', 'International bank transfer'],
  },
  faq: [
    {
      question: 'Do I need prior experience with Zen?',
      answer: 'No. The event was designed for both newcomers to Zen practice and experienced practitioners alike. All necessary instructions will be given at the monastery.',
    },
    {
      question: 'Can practitioners from other Karate organizations participate?',
      answer: 'The event’s main focus is traditional Okinawan Goju-Ryu Karate, but dedicated practitioners from other organizations with a genuine interest in the proposed practices are welcome. All training will follow IOGKF methodology.',
    },
    {
      question: 'Can family members or friends stay at the monastery?',
      answer: 'The monastery is an environment dedicated to immersion and practice. The number of spots is limited to event participants. We recommend that companions stay in the city of Vitória.',
    },
    {
      question: 'What language will the event be conducted in?',
      answer: 'All activities, talks, and Karate instruction will be conducted in English.',
    },
    {
      question: 'What should I bring?',
      answer: 'We recommend: a Karate-gi, light and comfortable clothing, white socks, a bath towel, slippers or sandals, personal hygiene items, and a jacket or warm layer. The monastery sits at roughly 470 meters of altitude, and mornings can be cold.',
    },
    {
      question: 'What kind of food will be served?',
      answer: 'Ovo-lacto vegetarian meals will be served, prepared with simplicity and care by the monks and participants themselves, as part of the Samu experience.',
    },
    {
      question: 'When should I arrive, and when does the event end?',
      answer: 'Arrival at the monastery should take place on the afternoon of August 23. The event will conclude on the morning of August 26.',
    },
    {
      question: 'Which airport should I use?',
      answer: 'The nearest and recommended airport is Vitória Airport (VIX), located approximately one hour by car from the monastery.',
    },
    {
      question: 'Is Wi-Fi available?',
      answer: 'To encourage silence, contemplation, and disconnection from routine, we encourage minimizing the use of electronic devices. Specific Wi-Fi guidelines will be provided on site.',
    },
  ],
};

type DeepEnglish = typeof en;

const pt: DeepEnglish = {
  header: {
    nav: {
      experience: 'Experiência',
      legacy: 'Legado',
      monastery: 'Mosteiro',
      instructors: 'Instrutores',
      schedule: 'Programação',
      accommodation: 'Hospedagem',
      investment: 'Investimento',
      faq: 'Dúvidas',
    },
    cta: 'Manifeste Interesse',
    ctaMobile: 'Reserve sua vaga',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  hero: {
    emotionalText:
      'Há séculos, o Karatê e o Zen percorrem o mesmo caminho. Durante quatro dias, esse caminho poderá ser vivido em sua forma mais autêntica.',
    ctaPrimary: 'Reserve sua vaga',
    ctaSecondary: 'Conheça a experiência',
    // Linha de progresso das inscrições, logo abaixo dos dois CTAs.
    progresso: {
      interested: '{count} já manifestaram interesse',
      remaining: 'faltam {count} para confirmar o evento',
      remainingSingular: 'falta 1 para confirmar o evento',
      confirmed: 'Mínimo atingido — evento confirmado',
      barLabel: 'Progresso rumo às {min} manifestações de interesse necessárias para confirmar o evento',
    },
  },
  notificacoesInscricao: {
    kicker: 'Nova inscrição',
    action: 'acabou de manifestar interesse',
    from: 'de',
    cta: 'Participe também',
    dismiss: 'Fechar notificação',
  },
  secaoESe: {
    title: 'E Se...',
    lead: [
      'E se o Karatê pudesse ser mais do que técnica?',
      'E se o silêncio pudesse ensinar tanto quanto o movimento?',
      'E se afastar-se da rotina por apenas quatro dias pudesse transformar a maneira como você compreende sua prática?',
    ],
    body: [
      'O Ken Zen Ichinyō não é apenas mais um seminário internacional de Karatê.',
      'É um convite para vivenciar a rotina de um mosteiro Zen tradicional enquanto se pratica o autêntico Goju-Ryu de Okinawa sob a orientação de instrutores internacionalmente respeitados.',
    ],
    boldLines: ['Durante quatro dias, você não será um visitante.', 'Não será um turista.', 'Você fará parte do mosteiro.'],
    list: ['Acordar antes do nascer do sol.', 'Meditar com os monges.', 'Compartilhar as refeições.', 'Trabalhar ao lado deles.', 'Treinar.', 'Escutar.', 'Refletir.', 'Praticar.'],
    closing: 'Talvez você descubra que algumas das maiores lições do Karatê são encontradas no silêncio.',
  },
  secaoLegado: {
    kicker: 'A Origem',
    title: 'Ken Zen Ichinyō',
    subtitle: 'O Karatê e o Zen são um.',
    captionName: 'Sakiyama Sogen Roshi',
    captionLines: ['Discípulo de Chojun Miyagi', 'Mestre de Goju-Ryu', 'Mestre Zen'],
    body: [
      'Chojun Miyagi, o fundador do Karatê Goju-Ryu, compreendia que a verdadeira força de um artista marcial não reside apenas no corpo físico, mas na mente e no espírito.',
      'Um de seus discípulos mais próximos foi **Sakiyama Sogen Roshi**. Após sua dedicação ao treinamento árduo do Goju-Ryu em Okinawa, Sakiyama Roshi seguiu um caminho profundo na tradição monástica, tornando-se também um respeitado Mestre do Zen.',
      'Sua vida foi um testemunho vivo de que o Karatê não é apenas técnica. É também disciplina, consciência, humildade e presença absoluta. Para ele, o treinamento físico rígido e a meditação silenciosa eram duas expressões do mesmo caminho em direção ao autoconhecimento.',
    ],
    tribute: ['Este evento nasceu como uma homenagem a esse legado.', 'Não apenas falando sobre ele...', 'Mas vivendo-o.'],
    quote: '"Dedicado à memória de Sakiyama Sogen Roshi, cuja vida nos recorda que o Karatê e o Zen sempre foram um único caminho."',
  },
  secaoExperiencia: {
    titleLine1: 'Uma tradição.',
    titleLine2: 'Uma mente.',
    lead: [
      'Existem muitos seminários de Karatê.',
      'Existem muitos retiros de meditação.',
      'O Ken Zen Ichinyō não é nenhum dos dois.',
      'É uma oportunidade rara de vivenciar essas duas tradições exatamente onde elas naturalmente se encontram.',
    ],
    practices: [
      { key: 'zazen', label: 'Zazen' },
      { key: 'kinhin', label: 'Kinhin' },
      { key: 'samu', label: 'Samu' },
      { key: 'cerimonias', label: 'Cerimônias' },
      { key: 'gojuRyu', label: 'Karatê Goju-Ryu' },
      { key: 'mondo', label: 'Mondo' },
      { key: 'refeicoes', label: 'Refeições' },
      { key: 'silencio', label: 'Silêncio' },
    ],
    highlight: ['Não haverá plateia.', 'Não haverá apresentação.', 'Haverá apenas prática.'],
    footer: ['O objetivo não é fugir do mundo.', 'É retornar a ele com mais clareza.'],
  },
  secaoMosteiro: {
    titleLine1: 'Um Lugar Como',
    titleLine2: 'Nenhum Outro',
    lead: 'Encravado nas montanhas do Espírito Santo, cercado pela rica biodiversidade da Mata Atlântica, encontra-se o primeiro mosteiro Zen da América do Sul.',
    items: [
      {
        title: 'Mosteiro Zen Morro da Vargem',
        desc: 'O pioneiro e um dos maiores centros de prática e preservação ambiental e espiritual do Brasil.',
      },
      {
        title: 'Grande Buda de Ibiraçu',
        desc: 'A maior estátua de Buda do Ocidente, que dá as boas-vindas na entrada do mosteiro.',
      },
      {
        title: 'Mata Atlântica & Silêncio',
        desc: 'Um ambiente onde a disciplina se une à contemplação profunda da natureza e do autoconhecimento.',
      },
    ],
  },
  secaoGaleria: {
    title: 'O mosteiro em imagens',
    photoAlt: 'Foto do mosteiro',
    prevBtn: 'Foto anterior',
    nextBtn: 'Próxima foto',
    hint: 'Arraste para o lado para ver mais fotos',
  },
  secaoInstrutores: {
    title: 'Conheça seus instrutores',
    paolo: {
      name: 'Sensei Paolo Taigō Spongia',
      credentials: ['IOGKF Italy Chief Instructor (8º Dan)', 'IOGKF International Technical Committee Member (Gijutsu Iinkai)', 'Zen Soto Monk and Zen Master'],
      body: [
        'Dedicando sua vida ao desenvolvimento do Karatê Goju-Ryu tradicional de Okinawa, Sensei Spongia é uma referência internacional da IOGKF. Sua jornada nas artes marciais o levou não apenas à excelência técnica, mas também a uma busca espiritual profunda.',
        'Como Mestre Zen, ele é a personificação do conceito “Ken Zen Ichinyō”. Ele integra a rigidez e a disciplina marcial de Okinawa com a serenidade e a presença da meditação Zen Soto.',
      ],
    },
    kendo: {
      name: 'Rev. Kendo Bitti',
      credentials: ['International Missionary, Soto Zen Buddhism', 'Abbot, Zenkoji – Morro da Vargem Zen Monastery'],
      body: [
        'Após uma estadia de vários anos se formando no Mosteiro Kotaiji, no Japão, volta ao Brasil para, como abade, dirigir o Mosteiro Zen Morro da Vargem. Monge da tradição Soto Zen e abade do Mosteiro Zen Morro da Vargem, em Ibiraçu (ES), o primeiro mosteiro zen da América Latina.',
        'Dedica sua vida à prática, ao ensino e à difusão do Zen no Brasil, conduzindo retiros, palestras e atividades voltadas ao desenvolvimento humano e espiritual.',
      ],
    },
    zeMario: {
      name: 'Sensei Zé Mário',
      credentials: ['Instrutor-chefe da IOGKF Brasil (5º Dan)', 'Organizador do Ken Zen Ichinyō 2027'],
      body: [
        'Instrutor chefe da IOGKF no Brasil, Sensei Zé Mário tem liderado a preservação da essência e do ensinamento de Chojun Miyagi no país.',
        'Sua dedicação constante à evolução técnica e à promoção do Karatê como filosofia de vida o inspirou a viver a experiência transformadora de aliar a disciplina do Dojô à rotina monástica, idealizando o Ken Zen Ichinyō.',
        'Vive na cidade de Vitória, Espírito Santo, onde construiu com as próprias mãos uma réplica de uma casa antiga okinawana, que serve de honbu dojo da IOGKF Brasil.',
      ],
    },
  },
  programacaoDiaria: {
    title: 'Um dia dentro do',
    titleHighlight: 'mosteiro',
    lead: [
      'Cada dia dentro do mosteiro segue um ritmo que permanece praticamente inalterado há gerações.',
      'A vida começa antes do nascer do sol.',
      'Cada atividade possui um propósito. Cada momento faz parte da prática.',
    ],
    periods: { morning: 'MANHÃ', midday: 'MEIO-DIA', afternoon: 'TARDE', evening: 'NOITE' },
    activities: {
      wake: 'Despertar',
      zazen: 'Zazen',
      choka: 'Choka — Cerimônia da manhã',
      kinhin: 'Kinhin — Meditação caminhando',
      breakfast: 'Café da manhã',
      samu: 'Samu — Trabalho consciente',
      karateTraining: 'Treinamento de Karatê',
      bath: 'Banho',
      lunch: 'Almoço',
      rest: 'Descanso',
      mondo: 'Mondo e ensinamentos Zen',
      lightMeal: 'Refeição leve',
      dinner: 'Jantar',
      dharma: 'Ensinamento do Dharma',
      silence: 'Silêncio',
    },
    downloadCta: 'Baixar programação completa',
    disclaimer: 'Esta programação pode sofrer alterações',
  },
  secaoHospedagem: {
    title: 'Sua casa durante',
    titleHighlight: 'quatro dias',
    body: [
      'A estadia no mosteiro não é uma hospedagem convencional. É parte fundamental da experiência. A **simplicidade**, o **respeito**, a **comunidade** e a **vida monástica** guiam cada momento.',
      'Os participantes permanecerão no mosteiro desde a tarde do dia 23 até a manhã do dia 26 de agosto.',
    ],
    detailsTitle: 'Detalhes da Acomodação',
    details: [
      'Quartos compartilhados por duas ou três pessoas.',
      'Inclui colchão, travesseiro, lençóis e cobertores.',
      'Alimentação ovo-lacto vegetariana inclusa.',
      'Refeições preparadas pelos monges com a participação dos presentes.',
      'O trabalho comunitário (Samu) é parte fundamental da experiência.',
    ],
    photos: [
      { key: 'quarto', label: 'Quartos' },
      { key: 'cozinha', label: 'Cozinha' },
      { key: 'comida', label: 'Refeições' },
      { key: 'trabalho', label: 'Trabalho comunitário' },
    ],
  },
  secaoHotel: {
    title: 'Antes e Depois do Evento',
    lead: 'Para os participantes que desejam chegar a Vitória antes do evento ou permanecer na cidade após o encerramento, o hotel oficial recomendado é o **Alameda Vitória Hotel**.',
    description: 'O Alameda Vitória Hotel tem uma relação preço/qualidade e localização muito boa. Se encontra frente para a praia, numa das mais bonitas orlas (calçadão) de Vitória.',
    cta: 'Acessar site do hotel',
    footnote: 'Informações sobre reservas e condições especiais serão atualizadas em breve.',
  },
  secaoTransporte: {
    title: 'Como Chegar',
    lead: [
      'O aeroporto mais próximo é o **Aeroporto de Vitória — VIX**.',
      'O mosteiro está localizado a aproximadamente uma hora de carro do aeroporto.',
    ],
    options: [
      { label: 'Uber', desc: 'Opção prática diretamente do aeroporto' },
      { label: 'Táxi', desc: 'Disponível na área de desembarque' },
      { label: 'Van Compartilhada', desc: 'Será organizada caso exista demanda suficiente entre os participantes' },
    ],
    footnote: 'Orientações detalhadas de transporte serão enviadas aos inscritos.',
  },
  secaoExtras: {
    title: 'Mais do que uma lembrança',
    shirt: {
      title: 'Camiseta Oficial',
      body: [
        'Cada participante receberá uma camiseta comemorativa oficial do Ken Zen Ichinyō 2027.',
        'A camiseta está **incluída no valor da inscrição** e o tamanho poderá ser escolhido durante o preenchimento do seu cadastro.',
      ],
    },
    sayonara: {
      title: 'Sayonara Party',
      body: 'Um momento de celebração, amizade e despedida após os dias intensos de imersão.',
      list: ['Ocorrerá em Vitória', 'Realizada em 26 de agosto de 2027', 'Participação opcional', 'Escolha feita na inscrição'],
    },
  },
  secaoInscricaoAntecipada: {
    title: 'Manifestação de Interesse',
    intro: [
      'O Ken Zen Ichinyō foi concebido como um encontro internacional intimista, no qual **cada participante contribui para a atmosfera única da experiência**.',
      'Para garantir que o evento seja organizado com o mais alto padrão possível, estamos reunindo Manifestações de Interesse de praticantes que genuinamente pretendem participar.',
    ],
    noPayment: 'Não é necessário nenhum pagamento nesta etapa.',
    threshold: 'O evento será confirmado assim que pelo menos {min} participantes comprometidos tiverem enviado sua Manifestação de Interesse até {date}.',
    invitation: 'Caso esse número mínimo seja alcançado, todos os participantes que enviaram sua Manifestação de Interesse receberão um convite para concluir sua inscrição oficial e realizar o pagamento.',
    steps: [
      { step: 'Passo 1', title: 'Preencha o formulário', desc: 'Preencha o formulário on-line de Manifestação de Interesse.' },
      { step: 'Passo 2', title: 'Aguarde o encerramento', desc: 'Aguarde até o encerramento do período de Manifestação de Interesse, em {date}.' },
      { step: 'Passo 3', title: 'Convite oficial', desc: 'Se o número mínimo de participantes for atingido, você receberá um convite para concluir sua inscrição oficial e pagamento, com todas as informações necessárias.' },
    ],
    whyTitle: 'Por que uma Manifestação de Interesse?',
    why: [
      'Organizar um evento internacional dessa natureza exige planejamento e coordenação cuidadosos.',
      'Ao enviar sua Manifestação de Interesse, você nos ajuda a avaliar o nível de comprometimento da comunidade internacional de karatê e a determinar se o evento poderá ser realizado.',
      'Seu envio **não representa um compromisso financeiro**, mas expressa sua intenção genuína de participar caso o evento seja confirmado.',
    ],
    paymentMethodsTitle: 'Métodos de pagamento previstos',
    paymentNote: '* Os detalhes de pagamento serão enviados apenas no convite de inscrição oficial, caso o evento seja confirmado.',
  },
  investimento: {
    title: 'Investimento',
    perParticipant: 'por participante',
    includesTitle: 'Inclui',
    gasshuku: {
      title: 'Ken Zen Ichinyō Gasshuku',
      price: 'USD 450',
      includes: [
        '4 dias de prática de Karate e Zen',
        'Alojamento no Mosteiro Zen Morro da Vargem',
        'Todas as refeições durante o evento',
        'Camiseta oficial do evento',
      ],
    },
    sayonara: {
      title: 'Sayonara Party',
      optional: 'Opcional',
      price: 'USD 60',
      note: 'Realizada na noite de encerramento, na cidade de Vitória-ES.',
    },
    note: 'A participação no evento inicia-se através da Manifestação de Interesse, **sem qualquer pagamento nesta fase**.',
  },
  formularioInscricao: {
    title: 'Comece sua jornada',
    lead: 'Sua Manifestação de Interesse é feita através do nosso formulário oficial.',
    escolhaIdioma: 'Escolha o idioma em que deseja preencher o formulário:',
    ctaPt: 'Formulário em Português',
    ctaEn: 'Form in English',
    emBreve: 'Em breve',
    footnote: 'Não é necessário nenhum pagamento nesta etapa. Se o evento for confirmado, você receberá um convite para a inscrição oficial.',
  },
  perguntasFrequentes: {
    title: 'Antes de vir',
  },
  secaoContato: {
    title: 'Entre em contato',
    lead: 'Caso tenha dúvidas sobre viagem, inscrição ou sobre o evento, teremos satisfação em ajudar.',
    whatsapp: 'WhatsApp',
    email: 'E-mail',
    whatsappMessage: 'Olá! Gostaria de receber mais informações sobre o Ken Zen Ichinyō 2027.',
  },
  chamadaFinal: {
    title: 'Nos vemos no',
    titleHighlight: 'Brasil',
    body: ['Há séculos, o Karatê e o Zen compartilham o mesmo caminho.', 'Agora, durante quatro dias, esse caminho será seu.'],
    closing: ['Esperamos receber você no Brasil.', 'Esperamos receber você no Ken Zen Ichinyō 2027.'],
    cta: 'Envie sua Manifestação de Interesse',
    footer: ['Manifeste seu interesse.', 'Comece sua jornada.'],
  },
  footer: {
    navTitle: 'Navegação',
    nav: { experience: 'A Experiência', legacy: 'O Legado', monastery: 'O Mosteiro', schedule: 'Programação', investment: 'Investimento', faq: 'Dúvidas Frequentes' },
    contactTitle: 'Contato',
    contactLinks: { email: 'E-mail', whatsapp: 'WhatsApp' },
    copyright: '© 2027 IOGKF Brasil. Todos os direitos reservados.',
    credit: 'Desenvolvido com excelência Gean Bryan +5527996959751',
  },
  botaoInscricaoFixo: {
    cta: 'Manifeste Interesse',
  },
  languageSwitcher: {
    labelEn: 'Switch to English',
    labelPt: 'Mudar para Português',
  },
  evento: {
    subtitulo: 'Onde o Karatê e o Zen se tornam um',
    dates: '23 a 26 de agosto de 2027',
    location: 'Mosteiro Zen Morro da Vargem',
    city: 'Ibiraçu — Espírito Santo — Brasil',
    interestDeadline: '30 de abril de 2027',
    paymentMethods: ['PayPal', 'Transferência bancária internacional'],
  },
  faq: [
    {
      question: 'Preciso ter experiência anterior com Zen?',
      answer: 'Não. O evento foi desenhado tanto para iniciantes na prática do Zen quanto para praticantes experientes. Todas as instruções necessárias serão dadas no mosteiro.',
    },
    {
      question: 'Praticantes de outras organizações de Karatê podem participar?',
      answer: 'O evento tem como foco principal o Karatê Goju-Ryu tradicional de Okinawa, mas praticantes dedicados de outras organizações que tenham interesse genuíno nas práticas propostas são bem-vindos. Todo o treinamento seguirá a metodologia da IOGKF.',
    },
    {
      question: 'Familiares ou amigos podem se hospedar no mosteiro?',
      answer: 'O mosteiro é um ambiente dedicado à imersão e prática. O número de vagas é limitado aos participantes do evento. Recomendamos que acompanhantes se hospedem na cidade de Vitória.',
    },
    {
      question: 'Em qual idioma o evento será conduzido?',
      answer: 'Todas as atividades, palestras e instruções de Karatê serão conduzidas em inglês.',
    },
    {
      question: 'O que devo levar?',
      answer: 'Recomendamos: Karatê-gi, roupas leves e confortáveis, meias brancas, toalha de banho, chinelos ou sandálias, itens de higiene pessoal e um casaco ou agasalho. O mosteiro está a cerca de 470 metros de altitude e as manhãs podem ser frias.',
    },
    {
      question: 'Que tipo de alimentação será servida?',
      answer: 'Será servida uma alimentação ovo-lacto vegetariana, preparada com simplicidade e atenção pelos próprios monges e participantes, como parte da experiência do Samu.',
    },
    {
      question: 'Quando devo chegar e quando o evento termina?',
      answer: 'A chegada ao mosteiro deve ocorrer na tarde do dia 23 de agosto. O evento será encerrado na manhã do dia 26 de agosto.',
    },
    {
      question: 'Qual aeroporto devo utilizar?',
      answer: 'O aeroporto mais próximo e recomendado é o Aeroporto de Vitória (VIX), localizado a aproximadamente uma hora de carro do mosteiro.',
    },
    {
      question: 'Há Wi-Fi disponível?',
      answer: 'Para favorecer o silêncio, a contemplação e a desconexão da rotina, encorajamos que o uso de aparelhos eletrônicos seja minimizado. As regras específicas de uso de Wi-Fi serão orientadas no local.',
    },
  ],
};

export const dictionary = { en, pt };
export type Dictionary = typeof en;
