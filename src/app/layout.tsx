import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Global Connecting – Tổ Chức Sự Kiện Doanh Nghiệp Chuyên Nghiệp",
  description:
    "Công ty TNHH Kết Nối Du Lịch Việt Nam Toàn Cầu — chuyên tổ chức hội nghị, hội thảo, gala dinner, team building, MICE và incentive trip cho doanh nghiệp.",
  keywords: [
    "tổ chức sự kiện",
    "tổ chức hội nghị",
    "team building",
    "MICE",
    "gala dinner",
    "Global Connecting",
    "sự kiện doanh nghiệp Hà Nội",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
