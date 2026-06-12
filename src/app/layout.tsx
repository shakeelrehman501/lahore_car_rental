import Navbar from "@/components/navbar/Navbar";
import { bricolage, poppins } from "@/lib/fonts";
import "./globals.css";
import Footer from "@/components/service/Footer";
import { BsWhatsapp } from "react-icons/bs";
import AppLoader from "@/components/ui/AppLoader";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  metadataBase: new URL("https://lahorecarrent.com"),
  title: "Rent a Car in Lahore | Car Rent Lahore ",
  description: "Best car rental in Lahore",
  icons: {
    icon: "/others/fav_icon.jpeg",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "google-site-verification": "XDPj6IxXk0oZizE8lLVtNfhIL2li0sB_jWUHzdqZ33g",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` flex flex-col  ${bricolage.variable} ${poppins.variable} `}
      >
        <AppLoader>
        <div className="w-full bg-blue-700">
        <Navbar />
        </div>
        <main>{children}</main>
        <a
          href="https://wa.me/923004611570"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="whatsapp-btn animate-whatsappPulse fixed bottom-7 right-7 lg:bottom-8 lg:right-8 z-50 rounded-full  shadow-lg hover:shadow-xl transition-all duration-300 bg-[#25D366] hover:bg-[#20BA5A] p-2.5 cursor-pointer"
            aria-label="Contact us on WhatsApp"
          >
            <BsWhatsapp className="w-10 h-10 text-white" />
          </button>
        </a>

        <Footer />
        <SpeedInsights/>
        </AppLoader>
      </body>
    </html>
  );
}
