import type { Metadata } from "next";
import Programs from "@/components/Programs";

export const metadata: Metadata = {
  title: "Chương Trình Đã Làm – Global Connecting",
  description:
    "Các sự kiện, hội nghị, team building và chương trình MICE tiêu biểu đã được Global Connecting tổ chức thành công.",
};

export default function ChuongTrinhDaLamPage() {
  return (
    <main>
      <Programs />
    </main>
  );
}
