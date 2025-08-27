import { Cairo } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/shared/WhatsAppButton";

const cairo = Cairo({
  subsets: ["arabic", "latin"], // اختار الـ subsets اللي تحتاجها
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "فجر الخير",
  description: "فجر الخير | جمعية حفر الآبار والأعمال الخيرية",
  icons: {
    icon: "/LOGO.jpg",
    shortcut: "/LOGO.jpg",
    apple: "/LOGO.jpg",
  },
  images: [
    {
      url: "/LOGO.jpg",
      width: 900,
      height: 900,
      alt: "شعار فجر الخير",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
      {/* تستخدم className للخط */}
      <body className={`${cairo.variable} font-sans`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
