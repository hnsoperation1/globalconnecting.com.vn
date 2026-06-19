export type Activity = { icon: string; text: string };
export type Quote = { text: string; author: string; role: string };
export type Stat = { number: string; label: string };

export type Event = {
  slug: string;
  client: string;
  category: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  coverImage: string;
  intro: string;
  stats: Stat[];
  activities: Activity[];
  quotes: Quote[];
  images: { src: string; caption: string }[];
  newsLink?: string;
};

const events: Event[] = [
  {
    slug: 'light-up-the-future',
    client: 'Panasonic Việt Nam',
    category: 'CSR & Sự kiện cộng đồng',
    title: 'Light Up The Future',
    subtitle: 'Hành trình mang ánh sáng tới vùng đất biên giới Quảng Trị',
    date: '11–12/03/2026',
    location: 'Tà Rụt & Hướng Lập, Quảng Trị',
    coverImage: '/events/light-up-the-future/1.jpg',
    newsLink: 'https://www.panasonic.com/vn/corporate/news/articles/20260312-solar-lantern-donation-program-in-quang-tri.html',
    intro:
      'Panasonic Việt Nam và 20 bạn trẻ tình nguyện viên Gen G đã trao tặng 510 đèn năng lượng mặt trời cho 510 hộ gia đình tại hai xã biên giới Tà Rụt và Hướng Lập, tỉnh Quảng Trị. Đây là địa bàn miền núi, địa hình chia cắt và thường xuyên chịu ảnh hưởng của mưa lũ, khiến nhiều hộ đồng bào dân tộc thiểu số gặp khó khăn trong việc tiếp cận điện lưới quốc gia. Mỗi chiếc đèn được trao đi không chỉ là ánh sáng, mà còn là hy vọng cho một ngày mai tốt đẹp hơn.',
    stats: [
      { number: '510', label: 'Đèn năng lượng mặt trời' },
      { number: '510', label: 'Hộ gia đình được hỗ trợ' },
      { number: '150+', label: 'Học sinh tham gia STEM' },
      { number: '20', label: 'Tình nguyện viên Gen G' },
    ],
    activities: [
      { icon: '🌞', text: 'Trực tiếp trao tặng và hướng dẫn sử dụng đèn cho hơn 100 hộ dân tại thôn Húc Nghì, xã Tà Rụt.' },
      { icon: '🏫', text: 'Trao tặng và lắp đặt 10 quạt trần Panasonic cho Trường Tiểu học Húc Nghì, cải thiện môi trường học tập.' },
      { icon: '📚', text: 'Tặng sách cho thư viện Trường Tiểu học Húc Nghì, phối hợp cùng Nhà Xuất bản San Hô Books.' },
      { icon: '🔬', text: 'Tổ chức lớp học STEM & môi trường cho gần 150 học sinh, giúp các em tiếp cận kiến thức về năng lượng xanh.' },
      { icon: '♻️', text: 'Thu gom pin cũ – đổi pin sinh thái, nâng cao ý thức bảo vệ sức khỏe và môi trường.' },
    ],
    quotes: [
      {
        text: 'Chương trình "Light up the Future" là một sáng kiến toàn cầu của Panasonic nhằm hỗ trợ các cộng đồng chưa có điều kiện tiếp cận điện năng. Chúng tôi mong muốn góp phần hiện thực hóa tầm nhìn về sức khỏe, hạnh phúc và sự phát triển bền vững của Việt Nam.',
        author: 'Ông Taka Fujino',
        role: 'Tổng Giám đốc Panasonic Việt Nam',
      },
      {
        text: 'Sự hỗ trợ này của Panasonic sẽ mang đến ánh sáng cho người dân, giúp nâng cao đời sống, đóng góp vào sự phát triển kinh tế xã hội của địa phương.',
        author: 'Ông Hoàng Xuân Tân',
        role: 'Phó Chủ tịch UBND tỉnh Quảng Trị',
      },
      {
        text: 'Chuyến đi vô cùng ý nghĩa, em không chỉ được gặp gỡ, kết nối với các bạn thanh niên mà còn có cơ hội trực tiếp góp phần hỗ trợ người dân và các bạn học sinh tại địa phương.',
        author: 'Nguyễn Phương Uyên',
        role: 'Sinh viên ĐH Ngoại thương – Tình nguyện viên Gen G',
      },
    ],
    images: [
      { src: '/events/light-up-the-future/Picture1.jpg', caption: 'Tổng Giám đốc Panasonic Việt Nam trao tặng tượng trưng 510 đèn cho Phó Chủ tịch UBND tỉnh Quảng Trị' },
      { src: '/events/light-up-the-future/Picture2.jpg', caption: 'Panasonic trực tiếp trao đèn cho 100 hộ dân tại thôn Húc Nghì, xã Tà Rụt' },
      { src: '/events/light-up-the-future/Picture3.jpg', caption: 'Ánh sáng từ đèn năng lượng mặt trời giúp trẻ em học tập tốt hơn vào ban đêm' },
      { src: '/events/light-up-the-future/Picture4.jpg', caption: 'Tình nguyện viên Gen G trực tiếp hướng dẫn sử dụng đèn cho bà con' },
      { src: '/events/light-up-the-future/Picture5.jpg', caption: 'Các cán bộ Tập đoàn Panasonic Holdings trực tiếp trao tặng đèn cho người dân' },
      { src: '/events/light-up-the-future/Picture6.jpg', caption: 'Các tình nguyện viên Gen G mang đến lớp học trải nghiệm STEM cho học sinh địa phương' },
      { src: '/events/light-up-the-future/Picture7.jpg', caption: 'Hành trình "đóng góp cho xã hội" đáng nhớ của các bạn trẻ Gen G cùng Panasonic' },
    ],
  },
];

export default events;

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}
