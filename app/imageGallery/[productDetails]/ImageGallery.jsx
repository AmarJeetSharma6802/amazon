"use client";

import { useState, useRef } from "react";
import style from "../../style/ImageGallery.module.css"
import Image from "next/image";

export default function ProductGallery({selectedContent}) {
 
   const images = selectedContent?.gallery || [];


  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [zoomVisible, setZoomVisible] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [zoomStyle, setZoomStyle] = useState({});
  const mainImageRef = useRef(null);

  const lensWidth = 60;
  const lensHeight = 50;
  const zoomFactor = 2;

  const handleMouseMove = (e) => {
    const rect = mainImageRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left - lensWidth / 2;
    let y = e.clientY - rect.top - lensHeight / 2;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > rect.width - lensWidth) x = rect.width - lensWidth;
    if (y > rect.height - lensHeight) y = rect.height - lensHeight;

    setLensPos({ x, y });

    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;

    setZoomStyle({
      backgroundPosition: `${bgX}% ${bgY}%`,
    });
  };

  return (
    <div className={style.main_content}>
    <div className={style.gallery_flex}>

    <div className={style.gallery_right_side}>
    <div className={style.gallery_container}>
      {/* Thumbnails */}
      <div className={style.thumbnails}>
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`Thumb ${idx}`}
            className={style.thumbnail_img}
            onMouseEnter={() => setSelectedImage(img)}
            width={60}
            height={60}
          />
        ))}
      </div>

      {/* Main Image + Lens */}
      <div
        className={style.main_image_container}
        ref={mainImageRef}
        onMouseEnter={() => setZoomVisible(true)}
        onMouseLeave={() => setZoomVisible(false)}
        onMouseMove={handleMouseMove}
      >
        <img src={selectedImage} alt="Main" className={style.main_image} />

        {zoomVisible && (
          <div
            className={style.lens}
            style={{
              left: `${lensPos.x}px`,
              top: `${lensPos.y}px`,
              width: `${lensWidth}px`,
              height: `${lensHeight}px`,
            }}
          ></div>
        )}
      </div>

     
    </div>
    </div>

    <div className={style.gallery_left_side}>
        <div className={style.left_side_deatils}>
           <p className={style.left_side_deatils_para}>{selectedContent?.details}</p>
           <p className={style.vidit_store}>visit the amazon store</p>
        <div className={style.rating}>
          <p>{selectedContent.ratingStar}</p>
           <Image src={selectedContent.rating} alt="" className="" width={90} height={18} />
           <p className={style.ratingNumber}>{selectedContent.ratingNumer} ratings</p>
        </div>
        <div className={style.bottom_boder}></div>

        <div className={style.price_offer}>
        <p className={style.offer}>{selectedContent.offer} </p>
      
        <p className={style.price}>   <span className={style.price_sign}>₹</span> {selectedContent.price} </p>
        </div>
        </div>

         {/* Zoom Window */}
      {zoomVisible && (
        <div
          className={style.zoom_result}
          style={{
            backgroundImage: `url(${selectedImage})`,
            backgroundSize: `${100 * zoomFactor}%`,
            ...zoomStyle,
          }}
        ></div>
      )}
    </div>

    </div>
    </div>
  );
}
