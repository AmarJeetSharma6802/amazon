"use client";

import { useState, useRef } from "react";
import style from "../../style/ImageGallery.module.css";
import Image from "next/image";

export default function ProductGallery({ selectedContent }) {
  const [slectedSize ,setSlectedSize] = useState(selectedContent.sizeTwo)
  const [price ,setPrice] = useState(selectedContent.price)

  const handleStorage =(priceVariant,sizeVariant)=>{
    setPrice(priceVariant)
    setSlectedSize(sizeVariant)
  }
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
                  height={200}
                  width={200}
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
              <Image
                src={selectedImage}
                alt="Main"
                className={style.main_image}
                width={400}
                height={400}
              />

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
            <p className={style.left_side_deatils_para}>
              {selectedContent?.details}
            </p>
            <p className={style.vidit_store}>visit the amazon store</p>
            <div className={style.rating}>
              <p>{selectedContent.ratingStar}</p>
              <Image
                src={selectedContent.rating}
                alt=""
                className=""
                width={80}
                height={18}
              />
              <p className={style.ratingNumber}>
                {selectedContent.ratingNumer} ratings
              </p>
            </div>
            <div className={style.bottom_boder}></div>

            <div className={style.price_offer}>
              <p className={style.offer}>{selectedContent.offer} </p>
              <p className={style.price}>
                {" "}
                <span className={style.price_sign}>₹</span>{" "}
                {/* {selectedContent.price} */}
                {price}
              </p>
            </div>
            <div className={style.offer_EMI}>
              <p>Inclusive of all taxes</p>
              <p>
                EMI starts at ₹1,399. No Cost EMI available{" "}
                <span>
                  EMI option <i className="fa-solid fa-angle-down"></i>
                </span>
              </p>
              <div className={style.offer_EMI_img} >
                <Image src="/percentage.png" alt="" width={25} height={25}/>
                <p>Offers</p>
              </div>
              <div className={style.EMI_boxes}>
                <div className={style.offer_boxes}>
                  <p className={style.offer_boxes_heading}>No Cost EMI</p>
                  <p className={style.offer_boxes_para}>
                     Upto ₹1,619.14 EMI interest savings on select
                    Credit Cards…
                  </p>
                  <p className={style.offer_boxes_btn}>
                    3 offers{" "}
                    <span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </p>
                </div>
                <div className={style.offer_boxes}>
                  <p className={style.offer_boxes_heading}>No Cost EMI</p>
                  <p className={style.offer_boxes_para}>
                   Upto ₹809.00 cashback as Amazon Pay Balance when…
                  </p>
                  <p className={style.offer_boxes_btn}>
                    3 offers{" "}
                    <span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </p>
                </div>
                <div className={style.offer_boxes}>
                  <p className={style.offer_boxes_heading}>No Cost EMI</p>
                  <p className={style.offer_boxes_para}>
                    Upto ₹1,500.00 discount on HDFC Bank Credit Cards,…
                  </p>
                  <p className={style.offer_boxes_btn}>
                    3 offers{" "}
                    <span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </p>
                </div>
                <div className={style.offer_boxes}>
                  <p className={style.offer_boxes_heading}>No Cost EMI</p>
                  <p className={style.offer_boxes_para}>
                    Get GST invoice and save up to 28% on business purchases.
                  </p>
                  <p className={style.offer_boxes_btn}>
                    3 offers{" "}
                    <span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

           <div className={style.size_storage}>
            <p className={style.slectedSize} >Size : {slectedSize} </p>
            <div className={style.size_storage_btn}>
               <button onClick={()=>handleStorage(selectedContent.storageOnePrice ,selectedContent.sizeOne)} className={`${style.sizebtn} ${slectedSize === selectedContent.sizeOne ? style.activeBtn : ""}`}>{selectedContent.sizeOne}</button>
            <button onClick={()=>handleStorage(selectedContent.price,selectedContent.sizeTwo)} className={`${style.sizebtn} ${slectedSize === selectedContent.sizeTwo ? style.activeBtn : ""}`}>{selectedContent.sizeTwo}</button>

            <button onClick={()=>handleStorage(selectedContent.storagethreePrice,selectedContent.sizeThree)}  className={`${style.sizebtn} ${slectedSize === selectedContent.sizeThree ? style.activeBtn : ""}`}>{selectedContent.sizeThree}</button>
            </div>
             </div>

             {/* COMPUTER SECTION AND LAPTOP SECTION */}
           
            {
              selectedContent.brand && (
                <div className={style.computerAndLaptop_section}>
              <div className={style.computerAndLaptop_section_width}>
                <p className={style.computerAndLaptop_section_para}><span className={style.computerAndLaptop_section_para_span} >Brand</span>  <span>{selectedContent.brand}</span></p>
                <p className={style.computerAndLaptop_section_para}><span className={style.computerAndLaptop_section_para_span} >Capacity	</span>  <span>{selectedContent.Operating}</span></p>
                <p className={style.computerAndLaptop_section_para}><span className={style.computerAndLaptop_section_para_span} >Cooling Power</span>  <span>{selectedContent.CPUModel}</span></p>
                <p className={style.computerAndLaptop_section_para}><span className={style.computerAndLaptop_section_para_span} >Special Feature</span>  <span>{selectedContent.CPUSpeed}</span></p>
                <p className={style.computerAndLaptop_section_para}><span className={style.computerAndLaptop_section_para_span} >BEE Star Rating	</span>  <span>{selectedContent.GraphicsCard}</span></p>
              </div>
            </div>
              )
            }
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
