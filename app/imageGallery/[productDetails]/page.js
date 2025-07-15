import React from 'react';
import ImageGallery from "../[productDetails]/ImageGallery";

const images = [
  {
    id: 1,
    details: "Daikin 1.5 Ton 3 Star Inverter Split AC Copper, PM 2.5 Filter, Triple Display, Dew Clean",
    offer:"-35%",
    price:"37990",
    rating:"/rating.png",
    ratingNumber:"3.9",
    gallery: [
      'https://m.media-amazon.com/images/I/61JyEPdw3UL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81QGKn2LCfL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/51fg3w--ZLL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81U8DQGrBNL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/71J1xlk3ICL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/813yL92JRpL._SX679_.jpg',
    ],
  },
  {
    id: 2,
     details:"Daikin 1.5 Ton 5 Star Inverter Split AC (Copper, PM 2.5 Filter, MTKM50U, White)",
    offer:"-35%",
    price:"37990",
    rating:"/rating.png",
    ratingNumber:"3.9",
    gallery: [
      'https://m.media-amazon.com/images/I/6179B4CYGTL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81QGKn2LCfL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/51fg3w--ZLL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81U8DQGrBNL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/71J1xlk3ICL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/813yL92JRpL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/812sgiHEtQL._SX679_.jpg',
    ],
  },
  {
    id: 3,
    details:"Daikin 0.8 Ton 3 Star, Fixed Speed Split AC (Copper, PM 2.5 Filter, 2022 Model, FTL28U, White)",
    offer:"-35%",
    price:"37990",
    rating:"/rating.png",
    ratingNumber:"3.9",
    gallery: [
      'https://m.media-amazon.com/images/I/61mOVGinDdL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81yqXFEqIML._SX679_.jpg',
      'https://m.media-amazon.com/images/I/51fg3w--ZLL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/619jkA1AmRL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/717q7DTu0iL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81s6kDRXccL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/812sgiHEtQL._SX679_.jpg',
    ],
  },
];

const slugify = (details) => {
  return details
    .toLowerCase()
    .replace(/[,]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

async function page({ params }) {
  const { productDetails } = params; // Destructure the correct parameter
  // console.log('URL Param:', productDetails);

  const selectedContent = images.find(
    (item) => slugify(item.details) === productDetails
  );

  if (!selectedContent) {
    return <p>No content found!</p>;
  }
  return (
    <div>
      <ImageGallery selectedContent={selectedContent} />
    </div>
  );
}

export default page;