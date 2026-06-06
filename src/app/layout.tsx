import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Organized Habitat | Professional Home Organization Services',
  description: 'Transform your home into a calm, functional, and beautiful space with Organized Habitat\'s expert home organization and decluttering services. Serving [Your City/Region].',
  keywords: ["home organization, decluttering, professional organizer, tidy home, minimalist living, space planning, kitchen organization, closet organization"],
  openGraph: {
    "title": "Organized Habitat | Professional Home Organization Services",
    "description": "Transform your home into a calm, functional, and beautiful space with Organized Habitat's expert home organization and decluttering services.",
    "url": "https://www.organizedhabitat.com",
    "siteName": "Organized Habitat",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/potted-plant-floor-new-home_637285-12372.jpg",
        "alt": "Beautifully organized modern living room"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Organized Habitat | Professional Home Organization Services",
    "description": "Transform your home into a calm, functional, and beautiful space with Organized Habitat's expert home organization and decluttering services.",
    "images": [
      "http://img.b2bpic.net/free-photo/potted-plant-floor-new-home_637285-12372.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"]
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
