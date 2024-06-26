import Header from "@/src/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/src/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BusMate",
  description: "BusMate is a bus tracking app for the city of Indore.",
  other: {
    "og:url": "https://webbusmate.vercel.app",
    "og:image":
      "https://webbusmate.vercel.app/_next/image?url=%2Fassets%2FlogoTransparent.png&w=640&q=75",
    "og:type": "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="min-h-[90vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
