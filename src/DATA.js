export const CATE = [
  { id: 1, name: "Oto" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Đồng hồ" },
  { id: 4, name: "Phụ kiện" },
  { id: 5, name: "Khác" },
];

export const PRODUCT = [
  {
    id: 1,
    name: "BMW I8",
    category: "Xe Oto",
    img: "https://img.tinbanxe.vn/images/bmw/bmw%20i8/ANHDAIDIEN2020_24.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adip lorem10 dolor sit amet, consectetur adip lorem10 dolor sit amet, consectetur adip lorem10 dolor sit amet, consectetur adip lorem10",
    price: 29000000,
    producer: "Apple LCI",
    quantity: 29,
  },
  {
    id: 2,
    name: "Roll Royce",
    category: "Xe Oto",
    img: "https://vcdn1-vnexpress.vnecdn.net/2022/05/17/Rolls-Royce-Phantom-1-8067-1652772439.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=TDf5cfEysIrSu6olhZNEyw",
    desc: "Lorem ipsum dolor sit amet, consectetur adip lorem10 dolor sit amet, consectetur adip lorem10 dolor sit amet, consectetur adip lorem10 dolor sit amet, consectetur adip lorem10",
    price: 29000000,
    producer: "Apple LCI",
    quantity: 22,
  },
  {
    id: 3,
    name: "Vinfast Lux A2.0",
    category: "Xe Oto",
    img: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwc1a7c1f3/images/Lux-A/hinh-anh-gia-xe-VinFast-Lux-A2.0-ban-tieu-chuan-mau-do-mystique-red.png",
    price: 29000000,
    producer: "Apple LCI",
    quantity: 99,
  },
];

export const REQUIRE = [
  {
    id: 1,
    type: "import",
    staff: {
      username: "Cuong",
      email: "cuong@gmail.com",
    },
    product: [
      {
        id: 3,
        name: "Vinfast Lux A2.0",
        category: "Xe Oto",
        img: "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwc1a7c1f3/images/Lux-A/hinh-anh-gia-xe-VinFast-Lux-A2.0-ban-tieu-chuan-mau-do-mystique-red.png",

        price: 29000000,
        producer: "Vinfast",
        quantity: 2,
      },
      {
        id: 2,
        name: "Roll Royce",
        category: "Xe Oto",
        img: "https://vcdn1-vnexpress.vnecdn.net/2022/05/17/Rolls-Royce-Phantom-1-8067-1652772439.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=TDf5cfEysIrSu6olhZNEyw",
        price: 29000000,
        producer: "Roll Royce",
        quantity: 1,
      },
    ],
    status: "PENDING...",
    date: "11AM",
  },
];

export const USER = [
  {
    id: 1,
    username: "Huu Cuong",
    password: "0",
    email: "cuong@gmail.com",
    role: "staff",
  },
  {
    id: 2,
    username: "Alice Nguyễn",
    password: "0",
    email: "jorn@gmail.com",
    role: "staff",
  },
  {
    id: 3,
    username: "Mina Ngân",
    password: "0",
    email: "jorn@gmail.com",
    role: "staff",
  },
  {
    id: 4,
    username: "Admin Cuong",
    password: "0",
    email: "admin@gmail.com",
    role: "admin",
  },
];
