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
      "https://m.media-amazon.com/images/I/51brdXeugJL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/712CBkmhLhL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61f4dTush1L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81BnjSLm2oL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/617JW0DrG8L._SX679_.jpg",
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
    rating: "/rating.png",
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