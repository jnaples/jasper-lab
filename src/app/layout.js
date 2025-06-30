import { Figtree, Libre_Baskerville } from "next/font/google";

import "./globals.css";

const figTreeSans = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
});

const playfair = Libre_Baskerville({
  variable: "--font-fancy",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "JasperLab",
  description: "Design that drives customers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#f97316" />
      </head>
      <body
        className={`${figTreeSans.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
