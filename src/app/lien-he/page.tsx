import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Liên hệ – Global Connecting",
  description:
    "Liên hệ với Global Connecting để được tư vấn miễn phí về tour du lịch, vé máy bay và tổ chức sự kiện.",
};

export default function LienHePage() {
  return (
    <main>
      <PageHeader
        breadcrumb="Liên hệ"
        title="Liên Hệ Với Chúng Tôi"
        subtitle="Đội ngũ tư vấn của chúng tôi sẵn sàng hỗ trợ bạn — liên hệ ngay để được báo giá miễn phí."
      />
      <Contact />
    </main>
  );
}
