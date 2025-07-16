import HomeDynamic from "./HomeDynamic.jsx";

const images = [
  {
    id: 1,
    details: "Apple iPhone 15 (128 GB) - Black",
    offer: "16% off",
    price: "58,999.00",
    rating: "/rating.png",
    ratingStar: "3.9",
    ratingNumer: "2,109",
    gallery: [
      "https://m.media-amazon.com/images/I/71657TiFeHL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81QGKn2LCfL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51fg3w--ZLL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81U8DQGrBNL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71J1xlk3ICL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/813yL92JRpL._SX679_.jpg",
    ],
  },
  {
    id: 2,
    details: "Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage)",
    offer: "37% off",
    price: "84999",
    rating: "/rating.png",
    ratingStar: "4.2",
    ratingNumer: "1500",
    gallery: [
      "https://m.media-amazon.com/images/I/41X9qNxoJKL._SX679_.jpg",
      // Add more image URLs
    ],
  },
  {
    id: 3,
    details: "Daikin 0.8 Ton 3 Star, Fixed Speed Split AC (Copper, PM 2.5 Filter, 2022 Model, FTL28U, White)",
    offer: "-35%",
    price: "37990",
    rating: "/rating.png",
    ratingStar: "4.0",
    ratingNumer: "1,879",
    gallery: [
      "https://m.media-amazon.com/images/I/61mOVGinDdL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81yqXFEqIML._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51fg3w--ZLL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/619jkA1AmRL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/717q7DTu0iL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81s6kDRXccL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/812sgiHEtQL._SX679_.jpg",
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