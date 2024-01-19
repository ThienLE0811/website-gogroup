type IHeaderNavBar = {
  id: number;
  url: string;
  text: string;
};

export const HEADER_NAVBAR: Array<IHeaderNavBar> = [
  {
    id: 1,
    url: "/",
    text: "Trang Chủ ",
  },
  {
    id: 2,
    url: "/product",
    text: "Sản Phẩm & Dịch Vụ ",
  },
  {
    id: 3,
    url: "/partner",
    text: "Đối Tác ",
  },
  {
    id: 4,
    url: "/about",
    text: "Về Chúng Tôi ",
  },
  {
    id: 5,
    url: "/blog",
    text: "Blog",
  },
  {
    id: 6,
    url: "/contact",
    text: "Liên Hệ ",
  },
];

export const CONTENT_INTRODUCE =
  "Chúng tôi sử dụng công nghệ số để tạo ra những bước nhảy vọt trong việc cải thiện năng suất lao động, tốc độ và hiệu quả.  Đồng thời áp dụng các tiêu chuẩn ISO 9001 và ISO 21001 vào tất cả các sản phẩm.";
