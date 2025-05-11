"use client"
import style from "../style/home.module.css";
import Image from "next/image";
import React, { useState, useRef } from "react";
import "../globals.css";
import Homepage from "../home/Homepage.jsx"

export default function Home() {
  const imagePath = [
    {
      id: 1,
      h2: "Appliances for your home | Up to 55% off",
      imgTitle: "Air conditioners",
      imgTitle2: "Refrigerators",
      imgTitle3: "Washing Machines",
      imgTitle4: "Water Purifiers",
      btn: "See more",
      image: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
      ],
    },
    {
      id: 2,
      h2: "Revamp your home in style",
      imgTitle: "Cushion covers, bedsheets & more",
      imgTitle2: "Figurines, vases & more",
      imgTitle3: "Home storage",
      imgTitle4: "Lighting solutions",
      btn: "Explore all",
      image: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
      ],
    },
    {
      id: 3,
      imgTitle: "Starting ₹249 | boAt",
      imgTitle2: "Starting ₹649 | boult",
      imgTitle3: "Starting ₹349 | Noise ",
      imgTitle4: "Starting ₹149 | Zebronics",
      h2: "Starting ₹149 | Headphones",
      btn: "See all offer",
      image: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg",
      ],
    },
    {
      id: 4,
      imgTitle: "Cleaning accessories",
      imgTitle2: "Tyre & rim care",
      imgTitle3: "Helmets",
      imgTitle4: "Vacuum cleaner",
      h2: "Automotive essentials | Up to 60% off",
      btn: "See more",

      image: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
      ],
    },
    {
      id: 5,
      imgTitle: "Starting ₹199 | Bedsheets",
      imgTitle2: "Starting ₹199 | Curtains",
      imgTitle3: "Minimum 40% off | Ironing board & more",
      imgTitle4: "Up to 60% off | Home decor",
      h2: "Starting ₹199 | Amazon Brands & more",
      btn: "See more",

      image: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg",
      ],
    },
    {
      id: 6,
      imgTitle: "Women's Clothing",
      imgTitle2: "Footwear+Handbags",
      imgTitle3: "Watches",
      imgTitle4: "Fashion jewellery",
      h2: "Automotive essentials | Up to 60% off",
      btn: "End of season sale",

      image: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg",
      ],
    },
    {
      id: 7,
      imgTitle: "Under ₹199 | Cleaning supplies",
      imgTitle2: "Under ₹399 | Bathroom accessories",
      imgTitle3: "Under ₹499 | Home tools",
      imgTitle4: "Under ₹299 | Wallpapers",
      h2: "Under ₹499 | Deals on home improvement essentials",
      btn: "Explore more",

      image: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg",
      ],
    },
    {
      id: 8,
      imgTitle: "Min. 40% off | soft toys",
      imgTitle2: "Min. 50% off | Ride ons",
      imgTitle3: "Min. 40% off | Indoor games",
      imgTitle4: "Min. 50% off | outdoor games",
      h2: "Min. 40% off | Fun toys & games | Amazon brands",
      btn: "See all offer",

      image: [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/baby/QC_PC_186x116_9._SY116_CB563558900_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_22._SY116_CB541411275_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_13._SY116_CB541414575_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_16._SY116_CB541411275_.jpg",
      ],
    },
  ];

  const itemMember = [
    {
      id: 1,
      offer:"16% off",
      summer:"Great Summer Sale",
      price: "₹ 58,999.00" ,
      details:"Apple iPhone 15 (128 GB) - Black",
      img: "https://m.media-amazon.com/images/I/31KxpX7Xk7L._SR480,440_.jpg",
    },
    {
      id: 2,
      offer:"37% off",
      summer:"Great Summer Sale",
      price: "₹ 84,999.00" ,
      details:"Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Gray, 12GB, 256GB Storage)",
      img: "https://m.media-amazon.com/images/I/41X9qNxoJKL._SR480,440_.jpg",
    },
    {
      id: 3,
      offer:"37% off",
      summer:"Great Summer Sale",
      price: "₹ 28,998.00" ,
      details:"iQOO Neo 10R 5G (Moonknight Titanium, 8GB RAM, 256GB Storage Segment's Most Stable 90FPS for 5 Hours",
      img: "https://m.media-amazon.com/images/I/41UC0ARSbRL._SR480,440_.jpg",
    },
    {
      id: 4,
      offer:"25% off",
      summer:"Great Summer Sale",
      price: "₹ 8,799.00" ,
      details:"Redmi A4 5G (Sparkle Purple, 4GB RAM, 128GB Storage)",
      img: "https://m.media-amazon.com/images/I/4146RWmsLuL._SR480,440_.jpg",
    },
    {
      id: 5,
      offer:"27% off",
      summer:"Great Summer Sale",
      price: "₹ 28,999.00" ,
      details:"Samsung Galaxy A55 5G (Awesome Iceblue, 8GB RAM, 256GB Storage)",
      img: "https://m.media-amazon.com/images/I/41uR6Pme6NL._SR480,440_.jpg",
    },
    {
      id: 6,
      offer:"8% off",
      summer:"Great Summer Sale",
      price: "₹ 47,998.00" ,
      details:"OnePlus 13R | Smarter AI (16GB RAM, 512GB Storage Nebula Noir)",
      img: "https://m.media-amazon.com/images/I/41uPss3u3eL._SR480,440_.jpg",
    },
    {
      id: 7,
      offer:"23% off",
      summer:"Great Summer Sale",
      price: "₹ 13,499.00" ,
      details:"iQOO Z10x 5G (Ultramarine, 6GB RAM, 128GB Storage)",
      img: "https://m.media-amazon.com/images/I/41wCgprYAPL._SR480,440_.jpg",
    },
    {
      id: 8,
      offer:"23% off",
      summer:"Great Summer Sale",
      price: "₹ 13,499.00" ,
      details:"iQOO Z10 5G (Glacier Silver, 8GB RAM, 256GB Stroage) | India's Biggest Ever 7300 mAh Battery",
      img: "https://m.media-amazon.com/images/I/41ql8-0lJzL._SR480,440_.jpg",
    },
    {
      id: 9,
      offer:"13% off",
      summer:"Great Summer Sale",
      price: "₹29,498.00" ,
      details:"OnePlus Nord 4 5G (Oasis Green, 8GB RAM, 256GB Storage)",
      img: "https://m.media-amazon.com/images/I/41R3ufWRt8L._SR480,440_.jpg",
    },
    {
      id: 10,
      offer:"37% off",
      summer:"Great Summer Sale",
      price: "₹ 9,799.00" ,
      details:"Samsung Galaxy M06 5G (Sage Green, 6GB RAM, 128 GB Storage) r",
      img: "https://m.media-amazon.com/images/I/41FkP4tEU-L._SR480,440_.jpg",
    },
    
  ];
  const carouselRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll carousel function
  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount = 300;

    if (direction === "left") {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Update button states when scrolling
  const handleScroll = () => {
    const carousel = carouselRef.current;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    // Disable left button when at the start
    setCanScrollLeft(carousel.scrollLeft > 0);

    // Disable right button when at the end
    setCanScrollRight(carousel.scrollLeft < maxScrollLeft);
  };

  return (
    <>
      <div className={style.grid_flex_box_widht}>
        <div className={style.grid_flex_box}>
          {imagePath.map((item) => (
            <div key={item.id} className={style.grid_flex_item}>
              <div className={style.grid_flex_item_main_title}>
                <p className={style.grid_flex_p_main_title}>{item.h2}</p>

                <div className={style.grid_flex_item_title}>
                  {item.image.map((img, index) => (
                    <div
                      key={index}
                      className={style.grid_flex_item_title_text}
                    >
                      <Image
                        src={img}
                        alt="image"
                        width={155}
                        height={110}
                        className={style.grid_box_width_img}
                      />
                      <p className={style.grid_flex_item_inner_title}>
                        {item[`imgTitle${index + 1}`]}
                      </p>
                    </div>
                  ))}
                </div>

                <button className={style.grid_flex_item_main_title_btn}>
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.electronics}>
        <div className="carousel-container-2">
          <button
            className="scroll-button-2 left-2"
            onClick={() => scrollCarousel("left")}
            disabled={!canScrollLeft}
          >
            <Image src="/left-arrow.png" alt="" id="left-img" width={25} height={25}  />
          </button>
          <div className="carousel-2" ref={carouselRef} onScroll={handleScroll}>
            {itemMember.map((item,index) => (
              <div key={index} className="carousel-item-2">
                <a>
                  <img
                    src={item.img}
                    alt={`${item.p} item`}
                    className="carousel-image-2"
                  />
                <div className="offer-summer">
                  <p className="caroucel_offer">{item.offer}</p>
                  <p className="caroucel_summar">{item.summer}</p>
                </div>
                <div className="caroucel_price">
                  <p>{item.price}</p>
                </div>
                <div className="caroucel_product_details">
                  <p>{item.details}</p>
                </div>
                </a>
              </div>
            ))}
          </div>
          <button
            className="scroll-button-2 right-2"
            onClick={() => scrollCarousel("right")}
            disabled={!canScrollRight}
          >
             <Image src="/right-arrow.png" alt="" id="left-img" width={25} height={25}  />
          </button>
        </div>
      </div>

      <Homepage/>
    </>
  );
}
