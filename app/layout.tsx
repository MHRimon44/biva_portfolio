import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Mohosina Banu Biva | Software Engineering, Security & Research",
  description: "Meet Mohosina Banu Biva, a final-year Software Engineering student at Daffodil International University exploring cyber security, bioinformatics research, and teaching.",
  authors: [{ name: "Mohosina Banu Biva" }],
  icons: { icon: "/biva-icon.svg", apple: "/biva-icon.svg" },
  openGraph: {
    title: "Mohosina Banu Biva | A curious mind, at work.",
    description: "Software engineering, cyber security, bioinformatics research, and mentoring. Explore my work and get in touch.",
    type: "website", locale: "en_US",
  },
  twitter: { card: "summary", title: "Mohosina Banu Biva | Portfolio" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t;try{t=localStorage.getItem('biva-theme')}catch(e){}document.documentElement.dataset.theme=t==='dark'||t==='light'?t:window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'})()` }} />
      </head>
      {/* Extensions such as Grammarly add body attributes before hydration. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
