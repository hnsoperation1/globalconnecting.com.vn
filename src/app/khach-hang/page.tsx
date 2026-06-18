import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Clients from "@/components/Clients";

export const metadata: Metadata = {
  title: "Khách hàng – Global Connecting",
  description:
    "Hàng trăm khách hàng và đối tác tin tưởng Global Connecting trong suốt hành trình phát triển.",
};

export default function KhachHangPage() {
  return (
    <main>
      <PageHeader
        breadcrumb="Khách hàng & Đối tác"
        title="Khách Hàng Của Chúng Tôi"
        subtitle="Chúng tôi tự hào phục vụ hàng trăm doanh nghiệp, tổ chức và cá nhân trên khắp Việt Nam."
      />
      <Clients />
    </main>
  );
}
