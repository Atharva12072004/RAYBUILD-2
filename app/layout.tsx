// CSS is processed by Next.js at build time and has no runtime module typings.
// @ts-expect-error -- side-effect CSS import handled by the Next.js bundler.
import "./globals.css";
import type {Metadata} from "next";

export const metadata:Metadata={title:{default:"RAYBUILD GROUP",template:"%s | RAYBUILD GROUP"},icons: {
    icon: "/logo/favicon.svg",
    apple: "/logo/favicon.svg",
  },description:"RAYBUILD GROUP — Raybuild Solar and Raybuild Construction.",metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000")};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
