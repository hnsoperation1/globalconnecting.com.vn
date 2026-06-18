import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "Giới thiệu – Global Connecting",
  description:
    "Tìm hiểu về Công ty TNHH Kết Nối Du Lịch Việt Nam Toàn Cầu — lịch sử, sứ mệnh và đội ngũ của chúng tôi.",
};

export default function GioiThieuPage() {
  return (
    <main>
      <PageHeader
        breadcrumb="Về chúng tôi"
        title="Giới Thiệu Công Ty"
        subtitle="Thành lập từ năm 2018, chúng tôi đồng hành cùng hàng trăm khách hàng trên mọi hành trình."
      />
      <About />
    </main>
  );
}
