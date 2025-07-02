import './globals.css'
import LenisProvider from '@/components/LenisProvider'
import WhatsappChatWidget from '@/components/WhatsAppWidget/WhatsAppWidget';
import localFont from 'next/font/local'

const helveticaNowDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/HelveticaNowDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HelveticaNowDisplay-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HelveticaNowDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HelveticaNowDisplay-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },

  ],
  variable: '--font-helvetica-now',
  display: 'swap',
})

export const metadata = {
  title: "Dune Abroad | Study Abroad Consultants in Mangalore",
  description:
    "Dune Abroad is a trusted study abroad consultancy in Mangalore, guiding students to top universities across the globe. Personalized counseling, visa support, and more.",
  keywords: [
    "Study Abroad Mangalore",
    "Dune Abroad",
    "Abroad Education Consultants Mangalore",
    "Student Visa Assistance",
    "Overseas Education",
    "Study in UK USA Canada Australia",
    "Best Study Abroad Agency Mangalore"
  ],
  authors: [{ name: "Dune Abroad", url: "https://duneabroad.com" }],
  creator: "Dune Abroad",
  publisher: "Dune Abroad",
  robots: "index, follow",
  openGraph: {
    title: "Dune Abroad | Top Study Abroad Agency in Mangalore",
    description:
      "Looking to study abroad? Dune Abroad in Mangalore offers expert guidance, university admissions, visa processing, and career counseling for global education.",
    url: "https://duneabroad.com",
    siteName: "Dune Abroad",
    images: [
      {
        url: "https://duneabroad.com/og-image.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Dune Abroad Study Abroad Consultants Mangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dune Abroad | Study Abroad Consultants in Mangalore",
    description:
      "Get expert help to study abroad with Dune Abroad in Mangalore. University selection, admission process, visa guidance, and more!",
    images: ["https://duneabroad.com/og-image.jpg"], // Replace with actual image
    creator: "@duneabroad",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
      className={`${helveticaNowDisplay.variable} antialiased`}
      >
        <GoogleTagManager gtmId="GTM-TTXP42SK" />
        <LenisProvider />
        {children}
      
      </body>
    </html>
  )
}
