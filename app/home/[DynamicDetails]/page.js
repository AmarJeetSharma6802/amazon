import HomeDynamic from "./HomeDynamic.jsx";

const images = [
  {
    id: 1,
    details: "Apple iPhone 15 (128 GB) - Black",
    offer: "16% off",
    price: "58,999",
    rating: "/rating4.4.png",
    ratingStar: "4.5",
    ratingNumer: "2,109",
    sizeOne:"128GB",
    sizeTwo:"256GB",
    sizeThree:"512GB",
    storageOnePrice:"60,500",
    storagethreePrice:"82,900",
    gallery: [
      "https://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51brdXeugJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/712CBkmhLhL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61f4dTush1L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81BnjSLm2oL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/617JW0DrG8L._SX679_.jpg",
    ],
  },
  {
    id: 2,
    details:
        "Samsung Galaxy S24 Ultra 5G AI Smartphone with Galaxy AI (Titanium Gray, 12GB, 256GB Storage), Snapdragon 8 Gen 3, 200 MP Camera with ProVisual Engine and 5000mAh Battery",
    offer: "37% off",
    price: "84,999",
    rating: "/rating.png",
    ratingStar: "4.2",
    ratingNumer: "1500",
    sizeOne:" Titanium Black | 12GB + 256GB ",
    sizeTwo:"Titanium Gray | 12GB + 256GB",
    sizeThree:" Titanium Black | 12GB + 512GB ",
    storageOnePrice:"85,999",
    storagethreePrice:"1,39,999",
    gallery: [
      "https://m.media-amazon.com/images/I/717Q2swzhBL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71WCPYr4ZmL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71nqP9tkAcL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71TSysiBmrL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81sQQ98D8FL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81zz+FAZ9XL._SL1500_.jpg",
    ],
  },
  {
    id: 3,
    details:
        "iQOO Neo 10R 5G (Moonknight Titanium, 8GB RAM, 256GB Storage Segment's Most Stable 90FPS for 5 Hours",
    offer: "-15%",
    price: " 28,998.00",
    rating: "/rating4.4.png",
    ratingStar: "4.4",
    ratingNumer: "1,912",
    gallery: [
      "https://m.media-amazon.com/images/I/610NUM9jlxL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71I3dnZ3eOL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61T-WBv27iL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71M1Se+WlIL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61zZATvUU2L._SX679_.jpg",

    ],
  },
  {
    id: 4,
    details: "Redmi A4 5G (Sparkle Purple, 4GB RAM, 128GB Storage) | Global Debut SD 4s Gen 2 | Segment Largest 6.88in 120Hz | 50MP Dual Camera | 18W Fast Charging",
    offer: "-27%",
    price: " 8,799.00",
    rating: "/rating.png",
    ratingStar: "4.0",
    ratingNumer: "4,513",
    gallery: [
      "https://m.media-amazon.com/images/I/81BGKLI+cWL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81ncbaMp+lL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81P7bWuGIlL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71PNpGSF9mL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81GL8Y5GK9L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81ccWRdu9uL._SL1500_.jpg",

    ],
  },
  {
    id: 5,
     details:
        "Samsung Galaxy A55 5G (Awesome Iceblue, 8GB RAM, 256GB Storage) | AI | Metal Frame | 50 MP Main Camera (OIS) | Super HDR Video| Nightography | IP67 | Corning Gorilla Glass Victus+ | sAMOLED Display",
    offer: "-33%",
    price: " 28,999.00",
    rating: "/rating.png",
    ratingStar: "4.2",
    ratingNumer: "1,433",
    storageOnePrice:"26,999",
    storagethreePrice:"33,999",
    sizeOne:"8GB + 128GB",
    sizeTwo:"8GB + 256GB",
    sizeThree:"12GB + 256GB",
    gallery: [
      "https://m.media-amazon.com/images/I/71oZ2oEeD4L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71O6Op16zKL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81bt09h1FWL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81QmFAoFJ5L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71HdS-wAxWL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81hpmXMKUfL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81KrqpQZf7L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Vj3ezeSmL._SL1500_.jpg",

    ],
  },
];

const slugify = (details) => {
  return details
    .trim()
    .toLowerCase()
    .replace(/[,]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

async function page({ params }) {
  const { DynamicDetails } = params;
  // console.log("Available slugs:", images.map((item) => slugify(item.details)));

  const selectedContent = images.find(
    (item) => slugify(item.details) === DynamicDetails
  );

  if (!selectedContent) {
    // console.log("No match found for:", DynamicDetails); 
    return <p>No content found!</p>;
  }
  return (
    <div>
      <HomeDynamic selectedContent={selectedContent} />
    </div>
  );
}

export default page;