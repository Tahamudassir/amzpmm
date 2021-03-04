export const dataSource = [
  {
    key: "1",
    sellerName: "Mike",
    market: "DE",
    saleLimit: 10,
    remainingOrder: 5,
    commision: 1000,
    keyword: "Indoor Tv",
    productId: 6653,
    image:
      "https://static-01.daraz.pk/p/d7a19370d9512fedfeaa1cc5c9e14577.jpg_340x340q80.jpg",
  },
  {
    key: "2",
    sellerName: "Mike",
    market: "DE",
    saleLimit: 10,
    remainingOrder: 5,
    commision: 1000,
    keyword: "Indoor Tv",
    productId: 6653,
    image:
      "https://static-01.daraz.pk/p/d7a19370d9512fedfeaa1cc5c9e14577.jpg_340x340q80.jpg",
  },
  {
    key: "3",
    sellerName: "Mike",
    market: "DE",
    saleLimit: 10,
    remainingOrder: 5,
    commision: 1000,
    keyword: "Indoor Tv",
    productId: 6653,
    image:
      "https://static-01.daraz.pk/p/d7a19370d9512fedfeaa1cc5c9e14577.jpg_340x340q80.jpg",
  },
  {
    key: "4",
    sellerName: "Mike",
    market: "DE",
    saleLimit: 10,
    remainingOrder: 5,
    commision: 1000,
    keyword: "Indoor Tv",
    productId: 6653,
    image:
      "https://static-01.daraz.pk/p/d7a19370d9512fedfeaa1cc5c9e14577.jpg_340x340q80.jpg",
  },
];

export const ordersSource = [
  {
    key: "1",
    sellerName: "Mike",
    productNo: 3456,
    orderNo: 332,
    market: "DE",
    customerEmail: "saadraza@gmail.com",
    reviewDate: "02-06-2020",
    status: "Reviewed",
    productImg:
      "https://static-01.daraz.pk/p/d7a19370d9512fedfeaa1cc5c9e14577.jpg_340x340q80.jpg",
  },
  {
    key: "2",
    sellerName: "Mike",
    productNo: 3456,
    orderNo: 332,
    market: "DE",
    customerEmail: "saadraza@gmail.com",
    reviewDate: "02-06-2020",
    status: "Reviewed",
    productImg:
      "https://static-01.daraz.pk/p/d7a19370d9512fedfeaa1cc5c9e14577.jpg_340x340q80.jpg",
  },
  {
    key: "3",
    sellerName: "Mike",
    productNo: 3456,
    orderNo: 332,
    market: "DE",
    customerEmail: "saadraza@gmail.com",
    reviewDate: "02-06-2020",
    status: "Reviewed",
    productImg:
      "https://static-01.daraz.pk/p/d7a19370d9512fedfeaa1cc5c9e14577.jpg_340x340q80.jpg",
  },
];

export const reservationSource = [
  {
    key: "1",
    sellerName: "Mike",
    productId: 3456,
    creationTime: "02-04-2020",
    orderNo: 332,
    productImg:
      "https://static-01.daraz.pk/p/d7a19370d9512fedfeaa1cc5c9e14577.jpg_340x340q80.jpg",
  },
];

export const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};
