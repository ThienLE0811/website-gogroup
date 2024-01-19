import { FACEBOOK_ICON_IMG, YOUTUBE_ICON_IMG } from "./img";

type IntroduceHomeInfoListProps = {
  id: number;
  text: string;
};

export const INTRODUCE_HOME_INFO_TEXT =
  "Công ty Cổ phần GoGroup được thành lập từ tháng 11 năm 2017 do sở kế hoạch và đầu tư thành phố Hà Nội cấp. Lĩnh vực hoạt động chính.";

export const INTRODUCE_HOME_INFO_LIST: Array<IntroduceHomeInfoListProps> = [
  {
    id: 1,
    text: "Tư vấn & thiệt kế giải pháp công nghệ thông tin",
  },
  {
    id: 2,
    text: "Xây dựng phần mềm",
  },
  {
    id: 3,
    text: "Giải pháp Telesales và chăm sóc khách hàng.",
  },
  {
    id: 4,
    text: "Môi giới tài chính và bất động sản",
  },
  {
    id: 5,
    text: "Tư vấn và triển khai các dịch vụ DigiTal Marketing",
  },
];

export const HOME_CORE_VALUE_INFO_TEXT = `
  Khách hàng là ông chủ duy nhất và có thể đuổi việc bất kỳ ai trong công ty, kể cả giám đốc. Bằng cách sử dụng dịch vụ hoặc mua hàng của công ty khác.
<br/><br/>
  Nhân viên GoGroup không phân biệt bộ phận, vai trò, vị trí. Tất cả đều có nghĩa vụ, trách nhiệm mang lại lợi ích, làm hài lòng và vượt trên sự mong đợi của khách hàng.
  `;

export const HOME_CORE_VALUE_INFO_LIST: Array<IntroduceHomeInfoListProps> = [
  {
    id: 1,
    text: "Chất lượng sản phẩm dịch vụ tốt nhất",
  },
  {
    id: 2,
    text: "Tiêu chí làm việc của GoGroup",
  },
  {
    id: 3,
    text: "Năng động sáng tạo và nhân văn",
  },
  {
    id: 4,
    text: "Chia sẻ lợi ích hợp tác dài lâu",
  },
];

type ListInfoSocialProps = {
  id: number;
  url: string;
  src?: unknown | any;
  alt: string;
};

export const LIST_INFO_SOCIAL: ListInfoSocialProps[] = [
  {
    id: 1,
    url: "https://www.facebook.com/seabankcareers",
    src: FACEBOOK_ICON_IMG,
    alt: "link facebook",
  },
  {
    id: 2,
    url: "https://www.youtube.com/@NganhangSeABankOfficial",
    src: YOUTUBE_ICON_IMG,
    alt: "link youtube",
  },
];

type InfoConfigProps = {
  id: number;
  content: string;
};

export const INFO_CONFIG: InfoConfigProps[] = [
  {
    id: 1,
    content: "info@gogroup.vn",
  },
  {
    id: 2,
    content: "+84 024 6684 8844",
  },
  {
    id: 3,
    content: "https://gogroup.vn/",
  },
  {
    id: 4,
    content: "385 Nguyễn Văn Cừ, Long Biên, Hà Nội, Việt Nam",
  },
];

type IntroduceHomeInfoListProps2 = {
  id: number;
  title: string;
  content: string;
};

export const INTRODUCE_HOME_INFO_LIST_2: IntroduceHomeInfoListProps2[] = [
  {
    id: 1,
    title: "Kinh nghiệm",
    content:
      "Với gần 10 năm kinh nghiệm trong thiết kế, xây dựng phát triển hệ thống phần mềm. Gogroup luôn tự tin cho ra những sản phẩm tốt nhất.",
  },
  {
    id: 2,
    title: "Nhân viên nhiệt huyết",
    content:
      "Nhân viên được đạo tạo bài bản, năng động, nhiệt huyết có độ chuyên môn sâu. Chất lượng phần mềm luôn được các bạn trẻ chăm chuốt bằng cả đam mê",
  },
  {
    id: 3,
    title: "Làm chủ công nghệ",
    content:
      "Chúng tôi sở hữu hệ thống Server đặt tại datacenter với nền tảng ảo hóa Xen Server. Đảm bảo khả năng đáp ứng tức thì các nhu cầu của dự án.",
  },
  {
    id: 4,
    title: "Liên kết toàn quốc",
    content:
      "Chúng tôi có nhiều năm kinh nghiệm làm việc với các đối tác lớn trên toàn quốc. Trong đó có các dự án như: Sea Bank, PV Bank, PTF, Tima, F88 … .",
  },
  {
    id: 5,
    title: "Chi phí hợp lý",
    content:
      "Chi phí thiết kế phần mềm hợp lý phù hợp với trị giá sản phẩm. Gogroup xây dựng những đội nhóm chuyên môn cao, gắn kết và hiệu quả giúp loại bỏ các chi phí quản lý bất hợp lý.",
  },
  {
    id: 6,
    title: "Lắng nghe",
    content:
      "Chúng tôi luôn luôn lắng nghe thấu hiểu ý kiến và sự góp ý của khách hàng. Từ đó có thể nắm rõ được nhu cầu của người dùng và cho ra những sản phẩm giá trị cao..",
  },
];
