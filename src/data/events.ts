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
    slug: 'panasonic-hoi-nghi-khach-hang-03062026',
    client: 'Panasonic Việt Nam',
    category: 'Hội nghị khách hàng',
    title: 'Hội nghị Khách hàng Panasonic 2026',
    subtitle: 'Kết nối – Tin tưởng – Cùng phát triển tại 3 thành phố lớn',
    date: '03/06/2026',
    location: 'Hà Nội · Đà Nẵng · TP. Hồ Chí Minh',
    coverImage: '/events/panasonic-hoi-nghi-khach-hang-03062026/cover01.jpg',
    newsLink: 'https://www.panasonic.com/vn/corporate/news/articles/20260603-panasonic-to-hold-customer-conference-2026-in-hanoi-da-nang-and-ho-chi-minh-city.html',
    intro:
      'Panasonic Việt Nam tổ chức Hội nghị Khách hàng 2026 tại ba thành phố lớn — Hà Nội, Đà Nẵng và TP. Hồ Chí Minh — nhằm gặp gỡ, tri ân và chia sẻ định hướng chiến lược cùng các đối tác, nhà phân phối và khách hàng trọng điểm trên toàn quốc. Đây là sự kiện thường niên quan trọng nhất trong lịch hoạt động của Panasonic Việt Nam, khẳng định cam kết đồng hành lâu dài cùng cộng đồng đối tác.',
    stats: [
      { number: '3', label: 'Thành phố tổ chức' },
      { number: '500+', label: 'Khách hàng & đối tác' },
      { number: '1 ngày', label: 'Mỗi hội nghị' },
      { number: '2026', label: 'Năm tổ chức' },
    ],
    activities: [
      { icon: '🎯', text: 'Phiên khai mạc và phát biểu định hướng chiến lược kinh doanh 2026 từ Ban lãnh đạo Panasonic Việt Nam.' },
      { icon: '🤝', text: 'Lễ vinh danh và trao chứng nhận cho các đối tác, nhà phân phối xuất sắc năm 2025.' },
      { icon: '📊', text: 'Trình bày các dòng sản phẩm mới và giải pháp công nghệ Panasonic cho năm 2026.' },
      { icon: '🍽️', text: 'Tiệc tri ân khách hàng và hoạt động giao lưu kết nối trong không khí ấm cúng, thân mật.' },
      { icon: '🎁', text: 'Chương trình quà tặng và ưu đãi đặc biệt dành riêng cho khách hàng tham dự hội nghị.' },
    ],
    quotes: [
      {
        text: 'Hội nghị khách hàng là dịp để chúng tôi bày tỏ lòng biết ơn sâu sắc đến các đối tác đã đồng hành cùng Panasonic suốt thời gian qua. Chúng tôi cam kết tiếp tục đổi mới và mang đến những giải pháp tốt nhất.',
        author: 'Ông Taka Fujino',
        role: 'Tổng Giám đốc Panasonic Việt Nam',
      },
      {
        text: 'Mỗi năm tham dự hội nghị là một lần chúng tôi cảm nhận rõ hơn sự gắn kết và tin tưởng mà Panasonic dành cho đối tác. Đây là động lực để chúng tôi tiếp tục phát triển.',
        author: 'Đại diện Nhà phân phối',
        role: 'Đối tác chiến lược khu vực miền Bắc',
      },
      {
        text: 'Global Connecting đã chuẩn bị chu đáo cho từng chi tiết của hội nghị tại cả 3 thành phố. Sự kiện diễn ra thành công vượt mong đợi.',
        author: 'Ban Tổ chức',
        role: 'Panasonic Việt Nam',
      },
    ],
    images: [
      { src: '/events/panasonic-hoi-nghi-khach-hang-03062026/cover01.jpg', caption: 'Toàn cảnh Hội nghị Khách hàng Panasonic 2026' },
    ],
  },
  {
    slug: 'panasonic-light-up-the-future-11032026',
    client: 'Panasonic Việt Nam',
    category: 'CSR & Sự kiện cộng đồng',
    title: 'Light Up The Future',
    subtitle: 'Hành trình mang ánh sáng tới vùng đất biên giới Quảng Trị',
    date: '11–12/03/2026',
    location: 'Tà Rụt & Hướng Lập, Quảng Trị',
    coverImage: '/events/panasonic-light-up-the-future-11032026/1.jpg',
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
      { src: '/events/panasonic-light-up-the-future-11032026/Picture1.jpg', caption: 'Tổng Giám đốc Panasonic Việt Nam trao tặng tượng trưng 510 đèn cho Phó Chủ tịch UBND tỉnh Quảng Trị' },
      { src: '/events/panasonic-light-up-the-future-11032026/Picture2.jpg', caption: 'Panasonic trực tiếp trao đèn cho 100 hộ dân tại thôn Húc Nghì, xã Tà Rụt' },
      { src: '/events/panasonic-light-up-the-future-11032026/Picture3.jpg', caption: 'Ánh sáng từ đèn năng lượng mặt trời giúp trẻ em học tập tốt hơn vào ban đêm' },
      { src: '/events/panasonic-light-up-the-future-11032026/Picture4.jpg', caption: 'Tình nguyện viên Gen G trực tiếp hướng dẫn sử dụng đèn cho bà con' },
      { src: '/events/panasonic-light-up-the-future-11032026/Picture5.jpg', caption: 'Các cán bộ Tập đoàn Panasonic Holdings trực tiếp trao tặng đèn cho người dân' },
      { src: '/events/panasonic-light-up-the-future-11032026/Picture6.jpg', caption: 'Các tình nguyện viên Gen G mang đến lớp học trải nghiệm STEM cho học sinh địa phương' },
      { src: '/events/panasonic-light-up-the-future-11032026/Picture7.jpg', caption: 'Hành trình "đóng góp cho xã hội" đáng nhớ của các bạn trẻ Gen G cùng Panasonic' },
    ],
  },
  {
    slug: 'tan-phuong-dong-gala-dinner-09062026',
    client: 'Công ty Tân Phương Đông',
    category: 'Gala Dinner',
    title: 'Gala Dinner Tân Phương Đông 2026',
    subtitle: 'Đêm tiệc tri ân — Gắn kết đội ngũ miền Bắc trên đất Quy Nhơn',
    date: '09/06/2026',
    location: 'Nhà hàng Ẩm thực Việt Restaurant, Quy Nhơn',
    coverImage: '/events/tan-phuong-dong-gala-dinner-09062026/cover01.jpg',
    intro:
      'Trong không khí ấm áp và tràn đầy cảm xúc tại Nhà hàng Ẩm thực Việt Restaurant — Quy Nhơn, Công ty Tân Phương Đông tổ chức đêm Gala Dinner đặc biệt dành riêng cho toàn thể cán bộ nhân viên khu vực miền Bắc. Đây là dịp để ban lãnh đạo bày tỏ sự tri ân, ghi nhận những đóng góp xuất sắc của từng thành viên trong suốt hành trình đồng hành cùng công ty, đồng thời tạo không gian gắn kết và chia sẻ trước những chặng đường mới phía trước.',
    stats: [
      { number: '09/06', label: 'Ngày tổ chức' },
      { number: 'Quy Nhơn', label: 'Địa điểm' },
      { number: '1 đêm', label: 'Gala Dinner' },
      { number: 'Miền Bắc', label: 'Đội ngũ tham dự' },
    ],
    activities: [
      { icon: '🥂', text: 'Tiệc cocktail chào đón — khai mạc đêm Gala trong không khí sang trọng và thân mật.' },
      { icon: '🎤', text: 'Phát biểu tri ân từ Ban lãnh đạo Tân Phương Đông, ghi nhận những đóng góp nổi bật của đội ngũ miền Bắc.' },
      { icon: '🏆', text: 'Lễ vinh danh và trao thưởng cho cá nhân, nhóm xuất sắc trong năm.' },
      { icon: '🎶', text: 'Chương trình văn nghệ đặc sắc — tiết mục biểu diễn do chính cán bộ nhân viên thể hiện.' },
      { icon: '🍽️', text: 'Tiệc dinner theo phong cách ẩm thực Việt đặc trưng, thưởng thức các món đặc sản Quy Nhơn.' },
      { icon: '🎁', text: 'Mini game và bốc thăm trúng thưởng — tạo không khí vui tươi và gắn kết cho toàn thể đội ngũ.' },
    ],
    quotes: [
      {
        text: 'Chúng tôi muốn dành tặng đêm nay như một lời cảm ơn chân thành nhất đến toàn bộ anh chị em. Mỗi người trong số các bạn đều là một phần không thể thiếu trong hành trình phát triển của Tân Phương Đông.',
        author: 'Ban Lãnh đạo',
        role: 'Công ty Tân Phương Đông',
      },
    ],
    images: [
      { src: '/events/tan-phuong-dong-gala-dinner-09062026/cover01.jpg', caption: 'Toàn cảnh đêm Gala Dinner Tân Phương Đông 2026 tại Quy Nhơn' },
      { src: '/events/tan-phuong-dong-gala-dinner-09062026/00.jpg', caption: 'Không gian đêm tiệc tại Nhà hàng Ẩm thực Việt Restaurant' },
      { src: '/events/tan-phuong-dong-gala-dinner-09062026/02.jpg', caption: 'Ban lãnh đạo và toàn thể cán bộ nhân viên miền Bắc' },
      { src: '/events/tan-phuong-dong-gala-dinner-09062026/04.jpg', caption: 'Lễ vinh danh và trao thưởng cá nhân xuất sắc' },
      { src: '/events/tan-phuong-dong-gala-dinner-09062026/05.jpg', caption: 'Chương trình văn nghệ do anh chị em nhân viên biểu diễn' },
      { src: '/events/tan-phuong-dong-gala-dinner-09062026/06.jpg', caption: 'Khoảnh khắc giao lưu và kết nối trong đêm tiệc' },
      { src: '/events/tan-phuong-dong-gala-dinner-09062026/09.jpg', caption: 'Tiệc dinner với ẩm thực đặc trưng Quy Nhơn' },
      { src: '/events/tan-phuong-dong-gala-dinner-09062026/10.jpg', caption: 'Kỷ niệm chương và quà tặng tri ân đội ngũ' },
    ],
  },
  {
    slug: 'chuong-trinh-01',
    client: 'Tên khách hàng 01',
    category: 'Team Building',
    title: 'Chương trình 01',
    subtitle: 'Mô tả ngắn chương trình 01',
    date: 'DD/MM/YYYY',
    location: 'Địa điểm 01',
    coverImage: '/events/mock/mock.png',
    intro: 'Mô tả chi tiết chương trình 01.',
    stats: [
      { number: '—', label: 'Thống kê 1' },
      { number: '—', label: 'Thống kê 2' },
      { number: '—', label: 'Thống kê 3' },
      { number: '—', label: 'Thống kê 4' },
    ],
    activities: [{ icon: '🎯', text: 'Hoạt động 01' }],
    quotes: [],
    images: [{ src: '/events/mock/mock.png', caption: '' }],
  },
  {
    slug: 'chuong-trinh-02',
    client: 'Tên khách hàng 02',
    category: 'Hội nghị doanh nghiệp',
    title: 'Chương trình 02',
    subtitle: 'Mô tả ngắn chương trình 02',
    date: 'DD/MM/YYYY',
    location: 'Địa điểm 02',
    coverImage: '/events/mock/mock.png',
    intro: 'Mô tả chi tiết chương trình 02.',
    stats: [
      { number: '—', label: 'Thống kê 1' },
      { number: '—', label: 'Thống kê 2' },
      { number: '—', label: 'Thống kê 3' },
      { number: '—', label: 'Thống kê 4' },
    ],
    activities: [{ icon: '🎯', text: 'Hoạt động 02' }],
    quotes: [],
    images: [{ src: '/events/mock/mock.png', caption: '' }],
  },
  {
    slug: 'chuong-trinh-03',
    client: 'Tên khách hàng 03',
    category: 'Gala Dinner',
    title: 'Chương trình 03',
    subtitle: 'Mô tả ngắn chương trình 03',
    date: 'DD/MM/YYYY',
    location: 'Địa điểm 03',
    coverImage: '/events/mock/mock.png',
    intro: 'Mô tả chi tiết chương trình 03.',
    stats: [
      { number: '—', label: 'Thống kê 1' },
      { number: '—', label: 'Thống kê 2' },
      { number: '—', label: 'Thống kê 3' },
      { number: '—', label: 'Thống kê 4' },
    ],
    activities: [{ icon: '🎯', text: 'Hoạt động 03' }],
    quotes: [],
    images: [{ src: '/events/mock/mock.png', caption: '' }],
  },
  {
    slug: 'chuong-trinh-04',
    client: 'Tên khách hàng 04',
    category: 'CSR & Sự kiện cộng đồng',
    title: 'Chương trình 04',
    subtitle: 'Mô tả ngắn chương trình 04',
    date: 'DD/MM/YYYY',
    location: 'Địa điểm 04',
    coverImage: '/events/mock/mock.png',
    intro: 'Mô tả chi tiết chương trình 04.',
    stats: [
      { number: '—', label: 'Thống kê 1' },
      { number: '—', label: 'Thống kê 2' },
      { number: '—', label: 'Thống kê 3' },
      { number: '—', label: 'Thống kê 4' },
    ],
    activities: [{ icon: '🎯', text: 'Hoạt động 04' }],
    quotes: [],
    images: [{ src: '/events/mock/mock.png', caption: '' }],
  },
  {
    slug: 'chuong-trinh-05',
    client: 'Tên khách hàng 05',
    category: 'MICE & Incentive',
    title: 'Chương trình 05',
    subtitle: 'Mô tả ngắn chương trình 05',
    date: 'DD/MM/YYYY',
    location: 'Địa điểm 05',
    coverImage: '/events/mock/mock.png',
    intro: 'Mô tả chi tiết chương trình 05.',
    stats: [
      { number: '—', label: 'Thống kê 1' },
      { number: '—', label: 'Thống kê 2' },
      { number: '—', label: 'Thống kê 3' },
      { number: '—', label: 'Thống kê 4' },
    ],
    activities: [{ icon: '🎯', text: 'Hoạt động 05' }],
    quotes: [],
    images: [{ src: '/events/mock/mock.png', caption: '' }],
  },
  {
    slug: 'chuong-trinh-06',
    client: 'Tên khách hàng 06',
    category: 'Launch Event',
    title: 'Chương trình 06',
    subtitle: 'Mô tả ngắn chương trình 06',
    date: 'DD/MM/YYYY',
    location: 'Địa điểm 06',
    coverImage: '/events/mock/mock.png',
    intro: 'Mô tả chi tiết chương trình 06.',
    stats: [
      { number: '—', label: 'Thống kê 1' },
      { number: '—', label: 'Thống kê 2' },
      { number: '—', label: 'Thống kê 3' },
      { number: '—', label: 'Thống kê 4' },
    ],
    activities: [{ icon: '🎯', text: 'Hoạt động 06' }],
    quotes: [],
    images: [{ src: '/events/mock/mock.png', caption: '' }],
  },
  {
    slug: 'chuong-trinh-07',
    client: 'Tên khách hàng 07',
    category: 'Hội nghị khách hàng',
    title: 'Chương trình 07',
    subtitle: 'Mô tả ngắn chương trình 07',
    date: 'DD/MM/YYYY',
    location: 'Địa điểm 07',
    coverImage: '/events/mock/mock.png',
    intro: 'Mô tả chi tiết chương trình 07.',
    stats: [
      { number: '—', label: 'Thống kê 1' },
      { number: '—', label: 'Thống kê 2' },
      { number: '—', label: 'Thống kê 3' },
      { number: '—', label: 'Thống kê 4' },
    ],
    activities: [{ icon: '🎯', text: 'Hoạt động 07' }],
    quotes: [],
    images: [{ src: '/events/mock/mock.png', caption: '' }],
  },
  {
    slug: 'chuong-trinh-08',
    client: 'Tên khách hàng 08',
    category: 'Team Building',
    title: 'Chương trình 08',
    subtitle: 'Mô tả ngắn chương trình 08',
    date: 'DD/MM/YYYY',
    location: 'Địa điểm 08',
    coverImage: '/events/mock/mock.png',
    intro: 'Mô tả chi tiết chương trình 08.',
    stats: [
      { number: '—', label: 'Thống kê 1' },
      { number: '—', label: 'Thống kê 2' },
      { number: '—', label: 'Thống kê 3' },
      { number: '—', label: 'Thống kê 4' },
    ],
    activities: [{ icon: '🎯', text: 'Hoạt động 08' }],
    quotes: [],
    images: [{ src: '/events/mock/mock.png', caption: '' }],
  },
  {
    slug: 'chuong-trinh-09',
    client: 'Tên khách hàng 09',
    category: 'Gala Dinner',
    title: 'Chương trình 09',
    subtitle: 'Mô tả ngắn chương trình 09',
    date: 'DD/MM/YYYY',
    location: 'Địa điểm 09',
    coverImage: '/events/mock/mock.png',
    intro: 'Mô tả chi tiết chương trình 09.',
    stats: [
      { number: '—', label: 'Thống kê 1' },
      { number: '—', label: 'Thống kê 2' },
      { number: '—', label: 'Thống kê 3' },
      { number: '—', label: 'Thống kê 4' },
    ],
    activities: [{ icon: '🎯', text: 'Hoạt động 09' }],
    quotes: [],
    images: [{ src: '/events/mock/mock.png', caption: '' }],
  },
  {
    slug: 'chuong-trinh-10',
    client: 'Tên khách hàng 10',
    category: 'MICE & Incentive',
    title: 'Chương trình 10',
    subtitle: 'Mô tả ngắn chương trình 10',
    date: 'DD/MM/YYYY',
    location: 'Địa điểm 10',
    coverImage: '/events/mock/mock.png',
    intro: 'Mô tả chi tiết chương trình 10.',
    stats: [
      { number: '—', label: 'Thống kê 1' },
      { number: '—', label: 'Thống kê 2' },
      { number: '—', label: 'Thống kê 3' },
      { number: '—', label: 'Thống kê 4' },
    ],
    activities: [{ icon: '🎯', text: 'Hoạt động 10' }],
    quotes: [],
    images: [{ src: '/events/mock/mock.png', caption: '' }],
  },
];

export default events;

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}
