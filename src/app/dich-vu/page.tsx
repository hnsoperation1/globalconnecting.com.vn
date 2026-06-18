import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Dịch vụ – Global Connecting",
  description:
    "Tour du lịch trong nước & quốc tế, vé máy bay, tổ chức sự kiện và giải pháp MICE chuyên nghiệp từ Global Connecting.",
};

export default function DichVuPage() {
  return (
    <main>
      <PageHeader
        breadcrumb="Dịch vụ"
        title="Dịch Vụ Của Chúng Tôi"
        subtitle="Giải pháp du lịch toàn diện cho cá nhân, doanh nghiệp và tổ chức trên khắp Việt Nam."
      />
      <Services />
    </main>
  );
}
