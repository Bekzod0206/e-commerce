import { Chair, GamePad, Monitor, Keyboard, Coat, Bag, VideoCard, Shelf, DogFood, Camera2, Laptop, Cream, ToyCar, Sneakers, GamePad2, Jacket } from "~/assets/img";
export const categoryArr = reactive<string[]>([
  "Women's fashion",
  "Men's fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Home & Beauty"
]);

export const productDataArr = [
  {
    name: 'Havit HV-G92 Gamepad',
    img: GamePad,
    price: 120,
    oldPrice: 160,
    rate: 5,
    ratePoint: 88,
    discount: 40
  },
  {
    name: 'AK-900 wired keyboard',
    img: Keyboard,
    price: 960,
    oldPrice: 1120,
    rate: 4.5,
    ratePoint: 75,
    discount: 35
  },
  {
    name: 'IPS LCD Gaming Monitor',
    img: Monitor,
    price: 370,
    oldPrice: 400,
    rate: 5,
    ratePoint: 99,
    discount: 30
  },
  {
    name: 'S-Series comfort chair',
    img: Chair,
    price: 375,
    oldPrice: 400,
    rate: 4.7,
    ratePoint: 99,
    discount: 25
  }
]

export const bestSellerArr = [
  {
    name: 'The north coat',
    img: Coat,
    price: 260,
    oldPrice: 360,
    rate: 5,
    ratePoint: 65,
    discount: 0
  },
  {
    name: 'Gucci duffle bag',
    img: Bag,
    price: 960,
    oldPrice: 1160,
    rate: 4.7,
    ratePoint: 65,
    discount: 0
  },
  {
    name: 'RGB Liquid CPU cooler',
    img: VideoCard,
    price: 160,
    oldPrice: 170,
    rate: 4.5,
    ratePoint: 65,
    discount: 0
  },
  {
    name: 'Small Book Shelf',
    img: Shelf,
    price: 360,
    oldPrice: 0,
    rate: 5,
    ratePoint: 65,
    discount: 0
  }
]

export const generalProductsArr = [
  {
    name: 'Breed Dry Dog Food',
    img: DogFood,
    price: 100,
    oldPrice: 0,
    rate: 3,
    ratePoint: 35,
    discount: 0
  },
  {
    name: 'Canon Camera',
    img: Camera2,
    price: 360,
    oldPrice: 0,
    rate: 4,
    ratePoint: 95,
    discount: 0
  },
  {
    name: 'Asus FHD Gaming Laptop',
    img: Laptop,
    price: 700,
    oldPrice: 0,
    rate: 5,
    ratePoint: 325,
    discount: 0
  },
  {
    name: 'Curology Produt Set',
    img: Cream,
    price: 500,
    oldPrice: 0,
    rate: 4,
    ratePoint: 145,
    discount: 0
  },
  {
    name: 'Kids Electric Car',
    img: ToyCar,
    price: 960,
    oldPrice: 0,
    rate: 5,
    ratePoint: 65,
    discount: 0
  },
  {
    name: 'Jr. Zoom Soccer Cleats',
    img: Sneakers,
    price: 1160,
    oldPrice: 0,
    rate: 5,
    ratePoint: 35,
    discount: 0
  },
  {
    name: 'GP11 Shooter USB Gamepad',
    img: GamePad2,
    price: 660,
    oldPrice: 0,
    rate: 4.7,
    ratePoint: 55,
    discount: 0
  },
  {
    name: 'Quilted Satin Jacket',
    img: Jacket,
    price: 660,
    oldPrice: 0,
    rate: 4.3,
    ratePoint: 55,
    discount: 0,
    colors: ['red', 'gray']
  }
]
export const serviceDataArr = [
  {
    id: 'delivery',
    name: 'Free and fast delivery',
    description: 'Free delivery for all orders over $140'
  },
  {
    id: 'call-center',
    name: '24/7 customer service',
    description: 'Friendly 24/7 customer support'
  },
  {
    id: 'guarantee',
    name: 'Money back guarantee',
    description: 'We return money within 30 days'
  }
]

export const totaProductsArray = [...productDataArr, ...bestSellerArr, ...generalProductsArr]