export type Venue = {
  slug: string;
  name: string;
  shortName: string;
  address: string;
  category: string;
  capacity: string;
  highlight: string;
  coverImage: string;
  images: string[];
  intro: string;
  body: string;
  tags: string[];
  publishedAt: string;
};

export const venues: Venue[] = [
  {
    slug: 'trung-tam-hoi-nghi-quoc-gia',
    name: 'Trung tâm Hội nghị Quốc gia',
    shortName: 'NCC',
    address: '57 Phạm Hùng, Mễ Trì, Nam Từ Liêm, Hà Nội',
    category: 'Trung tâm hội nghị',
    capacity: 'Lên đến 3.700 người',
    highlight: 'Trung tâm hội nghị lớn nhất Việt Nam, đạt chuẩn quốc tế',
    coverImage: '/doi tac/ncc/cover01.jpg',
    images: ['/doi tac/ncc/cover01.jpg'],
    publishedAt: '2026-06-20',
    tags: ['hội nghị quốc tế', 'gala dinner', 'triển lãm', 'Hà Nội'],
    intro: 'Nằm trên trục đường Phạm Hùng sầm uất, Trung tâm Hội nghị Quốc gia (NCC) là công trình biểu tượng cho nền ngoại giao và sự kiện tầm cỡ của Việt Nam. Với sức chứa lên đến 3.700 người và hệ thống cơ sở vật chất đạt chuẩn quốc tế, đây là lựa chọn hàng đầu cho các sự kiện quy mô lớn tại Hà Nội.',
    body: `
Trung tâm Hội nghị Quốc gia (National Convention Center – NCC) khánh thành năm 2006, tọa lạc tại số 57 Phạm Hùng, quận Nam Từ Liêm, Hà Nội. Với tổng diện tích sàn lên đến 35.000 m², đây là trung tâm hội nghị lớn nhất Việt Nam tính đến thời điểm hiện tại.

## Không gian & Sức chứa

NCC sở hữu hệ thống không gian đa dạng, đáp ứng mọi quy mô sự kiện:

- **Sảnh chính (Grand Hall):** Sức chứa 3.700 người tiệc đứng hoặc 2.500 người hội nghị — lý tưởng cho đại hội, lễ trao giải, gala dinner hoành tráng.
- **Hội trường A:** ~1.200 chỗ ngồi, trang bị âm thanh ánh sáng chuyên nghiệp.
- **Hội trường B:** ~600 chỗ, phù hợp hội thảo và hội nghị doanh nghiệp.
- **Hội trường C & D:** 200–300 chỗ, linh hoạt cho các sự kiện vừa.
- **Phòng họp nhỏ:** Hơn 12 phòng từ 20–80 người.

## Tiện ích đẳng cấp quốc tế

Điều làm NCC khác biệt so với nhiều trung tâm hội nghị trong nước chính là hệ thống kỹ thuật được đầu tư bài bản:

- Hệ thống phiên dịch đồng thời **30 ngôn ngữ**
- Màn hình LED khổ lớn và thiết bị hội nghị trực tuyến hiện đại
- Trung tâm báo chí tích hợp, phục vụ các sự kiện có truyền thông quy mô lớn
- Bãi đỗ xe hơn **1.000 chỗ**, giảm áp lực di chuyển cho khách mời
- WiFi tốc độ cao phủ sóng toàn khu
- Dịch vụ catering chuyên nghiệp tại chỗ

## Dấu ấn quốc tế

NCC từng là đơn vị đăng cai nhiều sự kiện quốc tế mang tầm ảnh hưởng lớn:

- **APEC 2006** — Diễn đàn Hợp tác Kinh tế châu Á–Thái Bình Dương
- **WEF ASEAN 2018** — Diễn đàn Kinh tế Thế giới khu vực ASEAN
- **Hội nghị thượng đỉnh Mỹ–Triều lần 2 (2019)** — sự kiện ngoại giao thu hút truyền thông toàn cầu

Những dấu mốc này khẳng định NCC không chỉ là không gian tổ chức sự kiện — mà là biểu tượng của uy tín và năng lực tổ chức sự kiện đỉnh cao của Việt Nam.

## Phù hợp với loại sự kiện nào?

NCC là lựa chọn lý tưởng cho:

- Hội nghị, hội thảo quốc tế từ 500 khách trở lên
- Đại hội cổ đông, họp toàn thể doanh nghiệp lớn
- Gala dinner, lễ trao giải, tiệc kỷ niệm hoành tráng
- Triển lãm, hội chợ thương mại
- Sự kiện cần hình ảnh uy tín và tầm vóc chuyên nghiệp

## Lưu ý khi lên kế hoạch

Do nhu cầu đặt phòng lớn, khuyến khích liên hệ đặt chỗ **trước 3–6 tháng** với sự kiện quy mô từ 1.000 khách trở lên. Với các sự kiện nhỏ hơn, thời gian đặt trước 4–8 tuần thường là đủ.
    `.trim(),
  },
  {
    slug: 'chloe-gallery',
    name: 'Chloe Gallery',
    shortName: 'Chloe Gallery',
    address: '36 Bà Huyện Thanh Quan, Quận 3, TP. Hồ Chí Minh',
    category: 'Event venue cao cấp',
    capacity: 'Lên đến 300 khách',
    highlight: 'Boutique venue phong cách Pháp giữa lòng quận 3',
    coverImage: '/doi tac/chloe gallery/cover01.jpg',
    images: ['/doi tac/chloe gallery/cover01.jpg'],
    publishedAt: '2026-06-20',
    tags: ['event venue', 'quận 3', 'luxury', 'product launch', 'gala dinner', 'TP.HCM'],
    intro: 'Ẩn mình trong một villa cổ điển Pháp trên phố Bà Huyện Thanh Quan, Chloe Gallery là không gian sự kiện boutique hiếm có tại TP. Hồ Chí Minh — nơi kiến trúc tinh tế gặp gỡ dịch vụ đẳng cấp, tạo nên bối cảnh hoàn hảo cho những sự kiện muốn để lại dấu ấn.',
    body: `
Chloe Gallery tọa lạc tại số 36 Bà Huyện Thanh Quan, quận 3 — một trong những con phố xanh mát và sang trọng bậc nhất Sài Gòn. Không gian mang kiến trúc villa Pháp cổ điển, kết hợp ánh sáng nghệ thuật và nội thất chọn lọc, tạo nên bầu không khí vừa ấm áp vừa tinh tế khó tìm ở bất kỳ địa điểm nào khác.

## Không gian & Sức chứa

Với tổng diện tích khoảng 700 m², Chloe Gallery có thể linh hoạt đáp ứng nhiều quy mô sự kiện:

- **Tiệc đứng (cocktail):** Lên đến 300 khách — lý tưởng cho product launch, brand activation, triển lãm
- **Tiệc ngồi (banquet/gala):** 150–180 khách — phù hợp gala dinner thân mật, tiệc VIP
- **Không gian chia nhỏ:** Có thể bố trí thành nhiều khu vực riêng biệt tùy concept sự kiện

## Điểm khác biệt

Điều làm Chloe Gallery trở thành lựa chọn ưa thích của các thương hiệu cao cấp chính là **tính photogenic vượt trội**. Mỗi góc tường, mỗi khung cửa, mỗi chi tiết trang trí đều được chăm chút để tạo ra những khung hình đẹp tự nhiên — không cần dàn dựng phức tạp, ảnh và video sự kiện vẫn đẹp như editorial.

- Ánh sáng tự nhiên ban ngày đổ qua cửa sổ lớn, tạo hiệu ứng warm tone sang trọng
- Đèn nghệ thuật và nến tạo không khí lãng mạn, tinh tế về đêm
- Hệ thống âm thanh ánh sáng sự kiện tích hợp, không cần thuê ngoài
- Đội ngũ phục vụ chuyên nghiệp, dịch vụ catering linh hoạt theo concept

## Phù hợp với loại sự kiện nào?

Chloe Gallery là lựa chọn lý tưởng cho:

- **Ra mắt sản phẩm** — thời trang, mỹ phẩm, lifestyle, F&B cao cấp
- **Brand activation & PR event** — cần không gian đẹp, photogenic cho truyền thông
- **Gala dinner thân mật** — tiệc kỷ niệm, tri ân khách hàng VIP
- **Triển lãm nghệ thuật** — không gian gallery thuần túy hoặc kết hợp sự kiện
- **Workshop & masterclass** — các chương trình đào tạo nhỏ, exclusive

## Vị trí & Di chuyển

Quận 3 là trung tâm kết nối, thuận tiện di chuyển từ mọi khu vực TP.HCM. Cách sân bay Tân Sơn Nhất khoảng 20 phút, gần nhiều khách sạn 5 sao và trung tâm thương mại lớn — thuận lợi cho khách mời từ xa.

## Lưu ý khi lên kế hoạch

Do quy mô vừa phải và nhu cầu đặt chỗ cao, nên liên hệ **trước 4–8 tuần** với sự kiện dưới 200 khách. Với sự kiện trên 200 khách hoặc cần thuê nguyên ngày, nên đặt trước **2–3 tháng** để có lịch và concept tốt nhất.
    `.trim(),
  },
  {
    slug: 'vec',
    name: 'VEC – Vietnam Exhibition Center',
    shortName: 'VEC',
    address: '148 Giảng Võ, Ba Đình, Hà Nội',
    category: 'Trung tâm triển lãm',
    capacity: 'Lên đến 2.000 người',
    highlight: 'Trung tâm triển lãm & hội nghị lớn tại trung tâm Hà Nội',
    coverImage: '/doi tac/vec/cover01.jpg',
    images: ['/doi tac/vec/cover01.jpg'],
    publishedAt: '2026-06-20',
    tags: ['triển lãm', 'hội chợ', 'hội nghị', 'Ba Đình', 'Hà Nội'],
    intro: 'Tọa lạc ngay tại trục Giảng Võ – trung tâm Ba Đình, VEC (Vietnam Exhibition Center) là một trong những địa chỉ triển lãm và hội nghị uy tín hàng đầu Hà Nội, nơi hàng chục hội chợ quốc tế và sự kiện doanh nghiệp quy mô lớn đã diễn ra thành công qua nhiều thập kỷ.',
    body: `
VEC – Vietnam Exhibition Center (Trung tâm Triển lãm Việt Nam) nằm tại số 148 Giảng Võ, quận Ba Đình, Hà Nội. Với vị trí đắc địa ngay trung tâm hành chính – chính trị của thủ đô, VEC là lựa chọn hàng đầu cho các sự kiện cần sức chứa lớn, hạ tầng chuyên nghiệp và uy tín thương hiệu địa điểm.

## Không gian & Sức chứa

VEC sở hữu diện tích sàn triển lãm hơn 10.000 m² với hệ thống không gian đa dạng:

- **Sảnh hội nghị chính:** Lên đến 2.000 người, phù hợp đại hội, hội nghị, lễ trao giải quy mô lớn
- **Khu triển lãm trong nhà:** Chia thành nhiều gian hàng linh hoạt, đáp ứng từ vài chục đến hàng trăm gian
- **Sân ngoài trời:** Không gian mở phục vụ activation, outdoor event, lễ khai mạc hoành tráng
- **Phòng họp và hội thảo:** Nhiều phòng nhỏ từ 50–300 người cho workshop và seminar

## Hạ tầng kỹ thuật

Với kinh nghiệm vận hành hàng trăm sự kiện lớn, hạ tầng kỹ thuật tại VEC được đầu tư bài bản:

- Hệ thống điện 3 pha công suất lớn, đáp ứng sự kiện cần nhiều thiết bị kỹ thuật
- Âm thanh, ánh sáng hội nghị và triển lãm chuyên nghiệp
- Loading dock và cửa vào lớn, thuận tiện vận chuyển thiết bị triển lãm
- Bãi đỗ xe rộng rãi cho cả xe con và xe tải
- WiFi tốc độ cao phủ sóng toàn khu

## Dấu ấn sự kiện tiêu biểu

VEC từng là đơn vị đăng cai nhiều sự kiện thương mại và doanh nghiệp nổi bật:

- Hội chợ quốc tế ngành xây dựng, nội thất, và công nghiệp
- Triển lãm ô tô, hàng tiêu dùng và thực phẩm quốc tế
- Hội nghị và đại hội ngành của các tập đoàn đa quốc gia tại Việt Nam

## Phù hợp với loại hình sự kiện nào?

VEC là địa điểm lý tưởng cho:

- **Triển lãm thương mại & hội chợ quốc tế** — từ 50 đến hàng trăm gian hàng
- **Hội nghị, đại hội doanh nghiệp** — quy mô 500 đến 2.000 người
- **Lễ trao giải, gala dinner hoành tráng** — cần không gian rộng và hạ tầng mạnh
- **Launch event sản phẩm quy mô lớn** — cần diện tích dàn dựng rộng, hiệu ứng kỹ thuật cao
- **Team building & outdoor activation** — tận dụng sân ngoài trời

## Lưu ý khi lên kế hoạch

Do nhu cầu đặt chỗ cao trong mùa hội chợ (tháng 3–5 và tháng 9–11), khuyến khích liên hệ **trước 2–4 tháng**. Với các sự kiện triển lãm cần nhiều ngày lắp dựng, nên tính thêm 1–2 ngày setup trước ngày khai mạc.
    `.trim(),
  },
  {
    slug: 'jw-marriott-hanoi',
    name: 'JW Marriott Hotel Hanoi',
    shortName: 'JW Marriott',
    address: '8 Đỗ Đức Dục, Mễ Trì, Nam Từ Liêm, Hà Nội',
    category: 'Khách sạn 5 sao',
    capacity: 'Lên đến 2.000 người',
    highlight: 'Grand Ballroom lớn nhất Hà Nội trong hệ thống khách sạn 5 sao',
    coverImage: '/doi tac/jw-marriott/cover01.jpg',
    images: ['/doi tac/jw-marriott/cover01.jpg'],
    publishedAt: '2026-06-20',
    tags: ['khách sạn 5 sao', 'MICE', 'gala dinner', 'hội nghị quốc tế', 'Nam Từ Liêm', 'Hà Nội'],
    intro: 'Tọa lạc tại Mễ Trì với kiến trúc lấy cảm hứng từ rùa hồ Hoàn Kiếm, JW Marriott Hanoi sở hữu Grand Ballroom lớn nhất Hà Nội trong hệ thống khách sạn 5 sao — không gian lý tưởng cho hội nghị quốc tế, gala dinner doanh nghiệp và các sự kiện MICE đẳng cấp.',
    body: `
JW Marriott Hotel Hanoi khai trương năm 2013, nhanh chóng trở thành địa chỉ MICE hàng đầu của thủ đô. Với hơn 3.700 m² không gian sự kiện và thương hiệu JW Marriott uy tín toàn cầu, đây là lựa chọn mặc định cho các tập đoàn quốc tế khi tổ chức sự kiện quy mô lớn tại Hà Nội.

## Không gian & Sức chứa

JW Marriott Hanoi sở hữu hệ thống không gian sự kiện toàn diện nhất trong khối khách sạn Hà Nội:

- **Grand Ballroom:** Sức chứa 2.000 người tiệc đứng hoặc 1.500 người hội nghị — lớn nhất thành phố trong hệ thống 5 sao
- **Junior Ballroom:** ~600 người, linh hoạt chia đôi thành 2 phòng độc lập
- **17 phòng họp và hội thảo:** Từ 20 đến 300 người, đầy đủ thiết bị AV
- **Sảnh ngoài trời:** Phù hợp cocktail reception và sự kiện kết hợp thiên nhiên

## Dịch vụ sự kiện 5 sao

Điều tạo nên sự khác biệt tại JW Marriott không chỉ là quy mô — mà là hệ thống dịch vụ đồng bộ từ đầu đến cuối:

- Đội ngũ **Event Planner chuyên trách** hỗ trợ thiết kế concept, logistics và vận hành sự kiện
- Hệ thống AV, âm thanh ánh sáng đẳng cấp quốc tế, sẵn sàng cho sự kiện hybrid/virtual
- Dịch vụ **catering 5 sao** với menu Á–Âu–Fusion đa dạng, phù hợp tiệc đa văn hóa
- **450 phòng nghỉ** cao cấp ngay trong khách sạn, tiện lợi cho sự kiện nhiều ngày
- Hỗ trợ phiên dịch đồng thời và thiết bị hội nghị quốc tế

## Vị trí chiến lược

JW Marriott tọa lạc tại Mễ Trì — cách Trung tâm Hội nghị Quốc gia (NCC) chỉ 5 phút đi xe. Điều này tạo nên lợi thế đặc biệt cho các sự kiện lớn cần sử dụng cả hai địa điểm: phiên hội nghị chính tại NCC và tiệc gala/cocktail tại JW Marriott. Ngoài ra, vị trí gần sân bay Nội Bài (~25 phút) cũng rất thuận tiện cho đại biểu quốc tế.

## Phù hợp với loại sự kiện nào?

- Hội nghị quốc tế từ 500–2.000 người
- Gala dinner doanh nghiệp cao cấp
- Lễ trao giải uy tín
- MICE: incentive trip kết hợp hội nghị
- Ra mắt sản phẩm quy mô lớn cần thương hiệu venue mạnh

## Lưu ý khi lên kế hoạch

Grand Ballroom thường kín lịch vào mùa hội nghị (tháng 3–5, tháng 9–11). Nên đặt chỗ **trước 3–6 tháng** với sự kiện trên 500 người để có lựa chọn ngày và package tốt nhất.
    `.trim(),
  },
  {
    slug: 'cung-huu-nghi',
    name: 'Cung Văn hóa Hữu nghị Việt–Xô',
    shortName: 'Cung Hữu Nghị',
    address: '91 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội',
    category: 'Cung văn hóa',
    capacity: 'Lên đến 1.200 chỗ ngồi',
    highlight: 'Biểu tượng kiến trúc Soviet giữa lòng Hà Nội',
    coverImage: '/doi tac/cung-huu-nghi/cover01.jpg',
    images: ['/doi tac/cung-huu-nghi/cover01.jpg'],
    publishedAt: '2026-06-20',
    tags: ['cung văn hóa', 'lễ trao giải', 'biểu diễn', 'Hoàn Kiếm', 'Hà Nội', 'kiến trúc'],
    intro: 'Tọa lạc trên phố Trần Hưng Đạo lịch sử, Cung Văn hóa Hữu nghị Việt–Xô là công trình kiến trúc Soviet biểu tượng của Hà Nội — khán phòng 1.200 chỗ kiểu nhà hát kết hợp dấu ấn văn hóa độc đáo, tạo nên bối cảnh không thể tìm thấy ở bất kỳ venue hiện đại nào.',
    body: `
Cung Văn hóa Hữu nghị Việt–Xô (Vietnam-Soviet Friendship Cultural Palace) khánh thành năm 1985, là món quà của Liên Xô tặng nhân dân Việt Nam. Qua hơn 40 năm, công trình này trở thành một phần không thể tách rời của Hà Nội — không chỉ là địa điểm tổ chức sự kiện mà còn là biểu tượng văn hóa – lịch sử của thủ đô.

## Không gian & Sức chứa

Kiến trúc Cung Hữu Nghị được thiết kế theo phong cách Socialist Modernism đặc trưng của Liên Xô:

- **Khán phòng chính:** ~1.200 ghế cố định kiểu nhà hát với sân khấu lớn — lý tưởng cho lễ trao giải, hội nghị có biểu diễn
- **Sảnh lớn tầng trệt:** Không gian mở phù hợp triển lãm, reception, networking (~500 người đứng)
- **Nhiều phòng hội thảo:** Từ 50–200 người, phù hợp workshop và seminar
- **Sân ngoài trời rộng:** Tổ chức sự kiện ngoài trời, outdoor activation

## Điểm đặc biệt không nơi nào có

Điều làm Cung Hữu Nghị không thể thay thế chính là **tính biểu tượng**. Khán phòng với hàng ghế đỏ, trần cao vút, ánh đèn vàng ấm áp tạo nên cảm giác long trọng, trang nghiêm mà các venue hiện đại khó tái tạo được.

Sân khấu lớn với hệ thống đèn sân khấu chuyên nghiệp đặc biệt phù hợp cho:
- Các sự kiện có tiết mục nghệ thuật, ca nhạc, kịch nghệ
- Lễ trao giải cần không khí trang trọng kiểu "Oscar"
- Hội nghị truyền thống của tổ chức, hiệp hội

## Vị trí & Di chuyển

Tại số 91 Trần Hưng Đạo, Hoàn Kiếm — một trong những con phố trung tâm của Hà Nội. Cách Hồ Hoàn Kiếm ~10 phút đi bộ, gần nhiều khách sạn tầm trung và cao cấp, thuận tiện cho khách mời từ mọi khu vực.

## Phù hợp với loại sự kiện nào?

- **Lễ trao giải, vinh danh** — cần không khí trang nghiêm, sân khấu hoành tráng
- **Hội nghị truyền thống** — đại hội, hội nghị ngành, họp toàn thể
- **Sự kiện có biểu diễn nghệ thuật** — gala kết hợp ca nhạc, kịch
- **Sự kiện muốn tạo dấu ấn văn hóa** — không gian lịch sử làm tăng giá trị thương hiệu

## Lưu ý khi lên kế hoạch

Cung Hữu Nghị có chi phí thuê hợp lý hơn so với các khách sạn 5 sao, nhưng cần tự lo phần lớn dịch vụ (catering, AV ngoài hệ thống có sẵn). Nên đặt trước **6–8 tuần** và kiểm tra kỹ lịch trùng với các sự kiện công cộng.
    `.trim(),
  },
  {
    slug: 'intercontinental-westlake-hanoi',
    name: 'InterContinental Hanoi Westlake',
    shortName: 'InterContinental Westlake',
    address: '5 Từ Hoa, Quảng An, Tây Hồ, Hà Nội',
    category: 'Khách sạn 5 sao',
    capacity: 'Lên đến 800 khách',
    highlight: 'Khách sạn 5 sao duy nhất xây trên mặt nước Hồ Tây',
    coverImage: '/doi tac/intercontinental-westlake/InterContinental.jpg',
    images: ['/doi tac/intercontinental-westlake/InterContinental.jpg'],
    publishedAt: '2026-06-20',
    tags: ['khách sạn 5 sao', 'Hồ Tây', 'resort', 'VIP', 'gala dinner', 'Hà Nội'],
    intro: 'Nằm trên mặt nước Hồ Tây thơ mộng, InterContinental Hanoi Westlake là khách sạn 5 sao duy nhất tại Hà Nội được xây dựng trên hồ — mang đến không gian sự kiện với tầm nhìn Hồ Tây 360° không nơi nào sánh được, lý tưởng cho gala dinner VIP và executive retreat.',
    body: `
InterContinental Hanoi Westlake mở cửa năm 2008, chiếm một vị trí hoàn toàn độc nhất khi được xây dựng một phần trên mặt nước Hồ Tây — hồ nước ngọt lớn nhất nội thành Hà Nội. Sự kết hợp giữa không gian resort yên tĩnh và tiêu chuẩn dịch vụ InterContinental tạo nên trải nghiệm tổ chức sự kiện khác biệt hoàn toàn so với các venue trung tâm thành phố.

## Không gian & Sức chứa

- **Grand Ballroom:** ~800 người tiệc đứng, ~500 người banquet — không gian sang trọng với tầm nhìn hướng hồ
- **Hơn 2.000 m² không gian sự kiện** linh hoạt theo nhiều format
- **8 phòng họp và hội thảo:** Từ 20–200 người, đầy đủ AV
- **Terrace & sân thượng ngoài trời:** Tổ chức cocktail party với view Hồ Tây tuyệt đẹp về hoàng hôn
- **Khu bungalow trên mặt hồ:** Không gian thân mật cho meeting VIP nhỏ

## Điểm không nơi nào có — View Hồ Tây

Yếu tố làm InterContinental Westlake vượt trội hoàn toàn là **cảnh quan**. Ảnh và video sự kiện tại đây luôn nổi bật với phông nền Hồ Tây — mặt nước phản chiếu ánh hoàng hôn, Tháp Hà Nội xa xa, hàng sen trong mùa hoa. Không một venue nào trong nội đô Hà Nội có thể tạo ra khung cảnh tương tự.

## Kết hợp hội nghị & Nghỉ dưỡng

InterContinental Westlake là lựa chọn hàng đầu cho mô hình **MICE retreat** — kết hợp hội nghị với nghỉ dưỡng:

- **359 phòng nghỉ cao cấp**, bao gồm phòng hướng hồ
- Spa L'OCCITANE và bể bơi ngoài trời
- Nhà hàng Sunset Bar trên mặt nước, lý tưởng cho dinner sau hội nghị
- Khu vực resort riêng biệt giúp đoàn tập trung, tránh phân tâm

## Phù hợp với loại sự kiện nào?

- **Executive retreat & board meeting** — lãnh đạo cấp cao, cần không gian riêng tư và đẳng cấp
- **Gala dinner VIP thân mật** — quy mô 100–500 khách, muốn trải nghiệm khác biệt
- **Team building kết hợp nghỉ dưỡng** — đặc biệt phù hợp nhóm từ 50–200 người
- **Brand activation cao cấp** — muốn background Hồ Tây cho ảnh/video truyền thông

## Lưu ý khi lên kế hoạch

Vị trí Tây Hồ cách trung tâm Hoàn Kiếm ~20 phút. Nên lên kế hoạch đón tiễn đoàn hoặc đặt xe riêng. Mùa đẹp nhất để tổ chức sự kiện ngoài trời: tháng 3–4 và tháng 9–10.
    `.trim(),
  },
  {
    slug: 'sofitel-metropole-hanoi',
    name: 'Sofitel Legend Metropole Hanoi',
    shortName: 'Metropole Hanoi',
    address: '15 Ngô Quyền, Hoàn Kiếm, Hà Nội',
    category: 'Khách sạn 5 sao huyền thoại',
    capacity: 'Lên đến 350 người',
    highlight: 'Khách sạn lâu đời nhất Hà Nội — biểu tượng 120 năm lịch sử',
    coverImage: '/doi tac/metropole-hanoi/Sofitel_Metropole.jpg',
    images: ['/doi tac/metropole-hanoi/Sofitel_Metropole.jpg'],
    publishedAt: '2026-06-20',
    tags: ['heritage hotel', 'luxury', 'VIP', 'gala dinner', 'Hoàn Kiếm', 'Hà Nội', 'lịch sử'],
    intro: 'Khai trương từ năm 1901, Sofitel Legend Metropole Hanoi là khách sạn lâu đời và uy tín nhất Hà Nội — nơi Charlie Chaplin hưởng tuần trăng mật, nơi các nguyên thủ quốc gia lưu trú qua các thời kỳ lịch sử. Tổ chức sự kiện tại đây không chỉ là thuê không gian — mà là được mang thương hiệu của một huyền thoại 120 năm.',
    body: `
Sofitel Legend Metropole Hanoi mở cửa năm 1901 dưới thời Pháp thuộc, là một trong số ít khách sạn ở Đông Nam Á tồn tại và hoạt động liên tục hơn 120 năm. Tòa nhà màu trắng với kiến trúc Beaux-Arts Pháp cổ điển — cùng các cánh cửa gỗ nặng, hành lang vòm, khu vườn trung tâm yên tĩnh — tạo nên cảm giác lùi về một Hà Nội của thế kỷ trước.

## Không gian & Sức chứa

Phù hợp nhất với sự kiện quy mô vừa và thân mật cao cấp:

- **Phòng Điện Biên Phủ (hội trường chính):** ~350 người tiệc đứng, ~200 người banquet — không gian cổ điển Pháp sang trọng
- **Phòng họp Bảo Đại & Opera:** 20–80 người — thân mật, đẳng cấp, thích hợp board meeting và dinner VIP nhỏ
- **La Terrasse (sân vườn):** ~150 người cocktail ngoài trời — cây xanh bao quanh, ánh đèn fairy light, hoàn toàn riêng tư
- **The Bamboo Bar:** Networking informal sau sự kiện

## Tại sao chọn Metropole?

**Thương hiệu** là lý do số một. Khi thiệp mời sự kiện của bạn ghi địa điểm "Sofitel Legend Metropole Hanoi" — không cần nói thêm gì nữa. Khách mời hiểu ngay đẳng cấp và sự trân trọng mà bạn dành cho họ.

Ngoài ra:
- **Dịch vụ butler cá nhân** — tiêu chuẩn "Legend" cao nhất trong hệ thống Sofitel toàn cầu
- **Nhà hàng Le Beaulieu** nổi tiếng: ẩm thực Pháp cổ điển, hầm rượu hơn 350 nhãn
- **Hầm bom lịch sử** (từ thời chiến tranh): điểm tham quan độc đáo có thể tích hợp vào chương trình sự kiện
- **Spa L'Apogée**: dịch vụ relax sau sự kiện cho khách VIP

## Vị trí & Di chuyển

Số 15 Ngô Quyền — cách Hồ Hoàn Kiếm 5 phút đi bộ, cạnh Nhà hát Lớn Hà Nội. Lý tưởng để kết hợp: xem concert tại Nhà hát Lớn rồi gala dinner tại Metropole. Vị trí trung tâm Hoàn Kiếm cũng thuận tiện nhất cho khách mời quốc tế.

## Phù hợp với loại sự kiện nào?

- **Sự kiện VIP thân mật cao cấp** — quy mô 50–200 khách, ưu tiên chất lượng hơn số lượng
- **Tiệc kỷ niệm thương hiệu luxury** — ra mắt BST, đối tác chiến lược, kỷ niệm thành lập
- **Dinner dành cho lãnh đạo cấp cao** — CEO roundtable, executive dinner
- **Sự kiện muốn nhấn mạnh lịch sử và đẳng cấp** — khi câu chuyện thương hiệu venue quan trọng không kém nội dung sự kiện

## Lưu ý khi lên kế hoạch

Metropole không phải lựa chọn cho sự kiện đại trà hay quy mô lớn. Chi phí thuê là cao nhất Hà Nội. Nhưng với đúng loại sự kiện — đặc biệt là sự kiện của thương hiệu luxury hoặc muốn để lại ấn tượng không thể quên — không có venue nào xứng đáng hơn.
    `.trim(),
  },
];

export function getVenueBySlug(slug: string): Venue | undefined {
  return venues.find((v) => v.slug === slug);
}
