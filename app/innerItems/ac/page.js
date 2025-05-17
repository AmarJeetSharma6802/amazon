"use client";
import React, { useState } from "react";
import style from "../../style/innerItems.module.css";
import Image from "next/image";
import { useFilter } from "../FilterContext";

function Page() {
  const {filter,setFilter} = useFilter()

  const [price, setPrice] = useState(31000);
  const handleFilterclose =()=>{
setFilter(false)
  }

  const ProductItems = [
    {
      id:1,
      details:"Daikin 1.5 Ton 3 Star Inverter Split AC (Copper, PM 2.5 Filter, Triple Display, Dew Clean",
      stars:"★ ★ ★ ★ ",
      lastStars:<i className="fa-regular fa-star"></i>,
      offer:"36%",
      p:"FREE delivery as soon as Sat, 24 May, 7 am - 9 pm",
      paid:"Service: Paid Installation",
      img:"https://m.media-amazon.com/images/I/61JyEPdw3UL._AC_UL320_.jpg",
      price:"37,490"
    },
    {
      id:2,
      details:"Daikin 1.5 Ton 5 Star Inverter Split AC (Copper, PM 2.5 Filter, MTKM50U, White)",
      stars:"★ ★ ★ ★ ",
      lastStars:<i className="fa-regular fa-star"></i>,
      offer:"36%",
      p:"FREE delivery as soon as Sat, 24 May, 7 am - 9 pm",
      paid:"Service: Paid Installation",
      img:"https://m.media-amazon.com/images/I/6179B4CYGTL._AC_UL320_.jpg",
      price:"45,990"
    },
    {
      id:3,
      details:"Daikin 0.8 Ton 3 Star, Fixed Speed Split AC (Copper, PM 2.5 Filter, 2022 Model, FTL28U, White)",
      stars:"★ ★ ★ ★ ",
      lastStars:<i className="fa-regular fa-star"></i>,
      offer:"40%",
      p:"FREE delivery as soon as Sat, 24 May, 7 am - 9 pm",
      paid:"Service: Paid Installation",
      img:"https://m.media-amazon.com/images/I/61mOVGinDdL._AC_UL320_.jpg",
      price:"26,490"
    },
    {
      id:4,
      details:"Lloyd 1.0 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White with Chrome Deco Strip, GLS12I3FWAEV/WAEA)",
      stars:"★ ★ ★ ★ ",
      lastStars:<i className="fa-regular fa-star"></i>,
      offer:"29%",
      p:"FREE delivery as soon as Sat, 24 May, 7 am - 9 pm",
      paid:"Service: Paid Installation",
      img:"https://m.media-amazon.com/images/I/41BJCIurt6L._AC_UL320_.jpg",
      price:"29,990"
    },
    {
      id:5,
      details:"Lloyd 1.0 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White with Chrome Deco Strip, GLS12I3FWAEV/WAEA)",
      stars:"★ ★ ★ ★ ",
      lastStars:<i className="fa-regular fa-star"></i>,
      offer:"29%",
      p:"FREE delivery as soon as Sat, 24 May, 7 am - 9 pm",
      paid:"Service: Paid Installation",
      img:"https://m.media-amazon.com/images/I/41BJCIurt6L._AC_UL320_.jpg",
      price:"29,990"
    },
    {
      id:6,
      details:"Lloyd 1.0 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White with Chrome Deco Strip, GLS12I3FWAEV/WAEA)",
      stars:"★ ★ ★ ★ ",
      lastStars:<i className="fa-regular fa-star"></i>,
      offer:"29%",
      p:"FREE delivery as soon as Sat, 24 May, 7 am - 9 pm",
      paid:"Service: Paid Installation",
      img:"https://m.media-amazon.com/images/I/41BJCIurt6L._AC_UL320_.jpg",
      price:"29,990"
    },
    {
      id:7,
      details:"Lloyd 1.0 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White with Chrome Deco Strip, GLS12I3FWAEV/WAEA)",
      stars:"★ ★ ★ ★ ",
      lastStars:<i className="fa-regular fa-star"></i>,
      offer:"29%",
      p:"FREE delivery as soon as Sat, 24 May, 7 am - 9 pm",
      paid:"Service: Paid Installation",
      img:"https://m.media-amazon.com/images/I/41BJCIurt6L._AC_UL320_.jpg",
      price:"29,990"
    },
    {
      id:8,
      details:"Lloyd 1.0 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White with Chrome Deco Strip, GLS12I3FWAEV/WAEA)",
      stars:"★ ★ ★ ★ ",
      lastStars:<i className="fa-regular fa-star"></i>,
      offer:"29%",
      p:"FREE delivery as soon as Sat, 24 May, 7 am - 9 pm",
      paid:"Service: Paid Installation",
      img:"https://m.media-amazon.com/images/I/41BJCIurt6L._AC_UL320_.jpg",
      price:"29,990"
    },
  ]
  return (
    <>
      <div className={style.flex_content}>
        <div className={`${style.flex_content_left} ${filter ? style.active:""}`}>
           <button className={style.close_fliter} onClick={handleFilterclose}>
  <i className="fa-solid fa-xmark"></i>
</button>
          <p className={style.flex_content_left_para}>Category</p>
          <ul className={style.flex_content_left_ul}>
            <p>Home & Kitchen</p>
            <li className={style.flex_content_left_ul_li}>
              Deals on Air Conditioners - Great Summer Sale
            </li>
            <li className={style.flex_content_left_ul_li}>
              Heating, Cooling & Air Quality Kitchen & Home Appliances
            </li>
          </ul>
          <p className={style.flex_content_left_para}>Customer Reviews</p>
          <ul
            className={`${style.flex_content_left_ul} ${style.flex_content_left_ul_flex}`}
          >
            <li className={style.flex_content_left_ul_li}>
              {" "}
              <span className={style.star_span}>
                <i className="fa-solid fa-star"></i>
              </span>
            </li>
            <li className={style.flex_content_left_ul_li}>
              {" "}
              <span className={style.star_span}>
                <i className="fa-solid fa-star"></i>
              </span>
            </li>
            <li className={style.flex_content_left_ul_li}>
              {" "}
              <span className={style.star_span}>
                <i className="fa-solid fa-star"></i>
              </span>
            </li>
            <li className={style.flex_content_left_ul_li}>
              {" "}
              <span className={style.star_span}>
                <i className="fa-solid fa-star"></i>
              </span>
            </li>
            <li className={style.flex_content_left_ul_li}>
              {" "}
              <span className={style.star_span}>
                <i className="fa-regular fa-star"></i>
              </span>
            </li>
          </ul>
          <p className={style.flex_content_left_para}>Item Condition</p>
          <p className={style.price_para}>Selected Price: ₹{price}</p>
          <p>₹31,000 – ₹52,300+</p>
          <input
            type="range"
            min="31000"
            max="52300"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={style.input_price}
          />
          <p className={style.flex_content_left_para}>Pay On Delivery</p>
          <ul className={style.flex_content_left_ul}>
            <p>Discount</p>
            <li className={style.flex_content_left_ul_li}>10% Off or more</li>
            <li className={style.flex_content_left_ul_li}> 25% Off or more</li>
            <li className={style.flex_content_left_ul_li}>35% Off or more</li>
            <li className={style.flex_content_left_ul_li}>50% Off or more</li>
            <li className={style.flex_content_left_ul_li}>60% Off or more</li>
            <li className={style.flex_content_left_ul_li}>70% Off or more</li>
          </ul>

          <p className={style.flex_content_left_para}>Seller</p>
          <ul className={style.flex_content_left_ul}>
            <p>Discount</p>
            <li
              className={`${style.flex_content_left_ul_li} ${style.flex_content_left_ul_li_inputBox}`}
            >
              <span className={style.input_box_sapn}>
                <input type="checkbox" />
              </span>{" "}
              Appliances Seller
            </li>
            <li
              className={`${style.flex_content_left_ul_li} ${style.flex_content_left_ul_li_inputBox}`}
            >
              <span className={style.input_box_sapn}>
                <input type="checkbox" />
              </span>{" "}
              25% Off or more
            </li>
            <li
              className={`${style.flex_content_left_ul_li} ${style.flex_content_left_ul_li_inputBox}`}
            >
              <span className={style.input_box_sapn}>
                <input type="checkbox" />
              </span>
              35% Off or more
            </li>
            <li
              className={`${style.flex_content_left_ul_li} ${style.flex_content_left_ul_li_inputBox}`}
            >
              <span className={style.input_box_sapn}>
                <input type="checkbox" />
              </span>
              50% Off or more
            </li>
            <li
              className={`${style.flex_content_left_ul_li} ${style.flex_content_left_ul_li_inputBox}`}
            >
              <span className={style.input_box_sapn}>
                <input type="checkbox" />
              </span>
              60% Off or more
            </li>
            <li
              className={`${style.flex_content_left_ul_li} ${style.flex_content_left_ul_li_inputBox}`}
            >
              <span className={style.input_box_sapn}>
                <input type="checkbox" />
              </span>
              70% Off or more
            </li>
          </ul>
        </div>
        <div className={style.flex_content_right}>
          <div className={style.right_grid}>
          {
            ProductItems.map((item)=>{
              return(
               <div key={item.id} className={style.product_right_side}>
                
                  <Image src={item.img} width={100} height={100} className={style.image_right_side} alt={item.details}/>
                  <p>{item.details}</p>
                  <p> <span>{item.stars}</span> <span>{item.lastStars}</span></p>
                  <p><span className={style.price_sign}>₹</span> <span className={style.price} >{item.price}</span></p>
                  <p>{item.offer}</p>
                  <p>{item.p}</p>
                  <p>{item.paid}</p>
                  <button>Add to cart</button>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
