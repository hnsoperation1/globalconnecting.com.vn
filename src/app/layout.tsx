import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Global Connecting – Kết Nối Du Lịch Việt Nam Toàn Cầu",
  description:
    "Công ty TNHH Kết Nối Du Lịch Việt Nam Toàn Cầu cung cấp dịch vụ tour du lịch, vé máy bay giá tốt, tổ chức sự kiện và giải pháp MICE chuyên nghiệp.",
  keywords: [
    "tour du lịch",
    "vé máy bay",
    "tổ chức sự kiện",
    "MICE",
    "Global Connecting",
    "du lịch Việt Nam",
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
