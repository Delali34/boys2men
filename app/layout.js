import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  metadataBase: new URL("https://boys2men-six.vercel.app"),
  title: "Boys2Men | Navigating Manhood — Accra, Ghana 2026",
  description:
    "A two-day intensive for young men learning to navigate manhood — on their own terms, in real conversation. Ages 18–30, Accra Ghana.",
  openGraph: {
    title: "Boys2Men | Navigating Manhood — Accra, Ghana 2026",
    description:
      "A two-day intensive for young men learning to navigate manhood — on their own terms, in real conversation. Ages 18–30, Accra Ghana.",
    url: "https://boys2men-six.vercel.app",
    siteName: "Boys2Men",
    images: [
      {
        url: "/og-image.png",
        width: 1280,
        height: 720,
        alt: "Boys2Men — Navigating Manhood",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boys2Men | Navigating Manhood — Accra, Ghana 2026",
    description:
      "A two-day intensive for young men learning to navigate manhood — on their own terms, in real conversation. Ages 18–30, Accra Ghana.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
