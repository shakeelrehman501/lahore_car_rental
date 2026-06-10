import Navbar from "@/components/navbar/Navbar";
import { bricolage, poppins } from "@/lib/fonts";
import "./globals.css";
import Footer from "@/components/service/Footer";
import { BsWhatsapp } from "react-icons/bs";
import AppLoader from "@/components/ui/AppLoader";

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
        <Navbar />
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
        </AppLoader>
      </body>
    </html>
  );
}
