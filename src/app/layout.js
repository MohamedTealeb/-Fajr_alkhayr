import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"], // اختار الـ subsets اللي تحتاجها
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "فجر الخير",
  description: "Solutions de rénovation modernes pour maisons et appartements",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
      {/* تستخدم className للخط */}
      <body className={`${cairo.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
