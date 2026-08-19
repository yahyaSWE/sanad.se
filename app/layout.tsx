import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "./site-components";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sanad.se"),
  title: "Sanad Gaza - Humanitär hjälp till Gaza",
  description: "Sanad Gaza är en ideell organisation som levererar humanitär hjälp till människor i nöd i Gaza.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Sanad Gaza - Humanitär hjälp till Gaza",
    description: "Stöd vårt arbete med att hjälpa familjer i Gaza. Varje donation gör skillnad.",
    images: ["/og-image.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
