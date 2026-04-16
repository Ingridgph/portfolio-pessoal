import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ingrid Gomes | Desenvolvedora Backend",
  description:
    "Portfólio de Ingrid Gomes Pereira — Desenvolvedora Backend com experiência em PHP, Laravel, REST APIs e MySQL.",
  keywords: ["desenvolvedora backend", "PHP", "Laravel", "portfólio", "Ingrid Gomes"],
  openGraph: {
    title: "Ingrid Gomes | Desenvolvedora Backend",
    description: "Portfólio de Ingrid Gomes Pereira — Desenvolvedora Backend.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
