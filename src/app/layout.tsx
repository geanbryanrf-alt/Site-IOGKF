import type { Metadata } from "next";
import { Inter, Montserrat, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["200", "300", "400", "500"], variable: "--font-montserrat" });
const notoSerifJP = Noto_Serif_JP({ subsets: ["latin"], weight: ["400"], variable: "--font-noto-serif-jp" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kenzenichinyu.com.br"),
  title: "Ken Zen Ichinyō 2027 | Karate and Zen as One",
  description: "Live four days of immersion in traditional Okinawan Goju-Ryu Karate and authentic Soto Zen practice at the Morro da Vargem Zen Monastery, in Espírito Santo, Brazil.",
  icons: {
    icon: "/imagens/logo-iogkf.png",
    shortcut: "/imagens/logo-iogkf.png",
    apple: "/imagens/logo-iogkf.png",
  },
  openGraph: {
    title: "Ken Zen Ichinyō 2027 | Karate and Zen as One",
    description: "Live four days of immersion in traditional Okinawan Goju-Ryu Karate and authentic Soto Zen practice at the Morro da Vargem Zen Monastery, in Espírito Santo, Brazil.",
    url: 'https://kenzenichinyu.com.br',
    siteName: 'Ken Zen Ichinyō 2027',
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/imagens/logo-iogkf.png" type="image/png" />
        <link rel="apple-touch-icon" href="/imagens/logo-iogkf.png" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${notoSerifJP.variable}`} suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
