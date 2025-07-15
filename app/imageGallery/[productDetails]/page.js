import React from 'react';
import ImageGallery from "../[productDetails]/ImageGallery";

const images = [
  {
    id: 1,
    details: "Daikin 1.5 Ton 3 Star Inverter Split AC Copper, PM 2.5 Filter, Triple Display, Dew Clean",
    offer:"-35%",
    price:"37990",
    gallery: [
      'https://m.media-amazon.com/images/I/61JyEPdw3UL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81QGKn2LCfL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61JyEPdw3UL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/813yL92JRpL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/61JyEPdw3UL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/813yL92JRpL._SX679_.jpg',
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