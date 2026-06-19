import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Programs from "@/components/Programs";

export const metadata: Metadata = {
  title: "Chương Trình Đã Làm – Global Connecting",
  description:
    "Các sự kiện, hội nghị, team building và chương trình MICE tiêu biểu đã được Global Connecting tổ chức thành công.",
};

export default function ChuongTrinhDaLamPage() {
  return (
    <main>
      <PageHeader
        breadcrumb="Thực tế đã làm"
        title="Chương Trình Đã Làm"
        subtitle="Hàng trăm sự kiện được tổ chức thành công — từ hội nghị doanh nghiệp đến gala dinner và team building quy mô lớn."
      />
      <Programs />
    </main>
  );
}
