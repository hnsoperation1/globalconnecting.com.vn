import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Dịch vụ – Global Connecting",
  description:
    "Tổ chức hội nghị, hội thảo, gala dinner, team building, MICE và incentive trip — cùng dịch vụ tour du lịch và vé máy bay từ Global Connecting.",
};

export default function DichVuPage() {
  return (
    <main>
      <PageHeader
        breadcrumb="Dịch vụ"
        title="Dịch Vụ Của Chúng Tôi"
        subtitle="Chuyên tổ chức sự kiện doanh nghiệp chuyên nghiệp — từ hội nghị, team building đến MICE trọn gói."
      />
      <Services />
    </main>
  );
}
