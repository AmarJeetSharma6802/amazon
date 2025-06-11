"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { useFilter } from "../FilterContext";
import style from "../../style/innerItems.module.css";
import Image from 'next/image';

function Refrigerators() {
    const { filter, setFilter } = useFilter();
      const [price, setPrice] = useState(20000);
  
  const [dt, setDt] = useState([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();

    const handleFilterclose = () => {
    setFilter(false);
  };

  useEffect(() => {
    const ftData = async () => {
      try {
        const res = await fetch("/api/itemStore");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setDt(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    ftData();
  }, []);

  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo) {
      const id = `product-${scrollTo.replace(/\s+/g, '-')}`;
      const target = document.getElementById(id);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300); // Delay to ensure content is rendered
      }
    }
  }, [searchParams, pathname, dt]); // 🔁 jab query ya route ya data change ho

  return (
    <div>


      <div className={style.flex_content}>
        <div
          className={`${style.flex_content_left} ${filter ? style.active : ""}`}
        >
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
          <p>₹20,000 – ₹15,0000+</p>
          <input
            type="range"
            min="20000"
            max="150000"
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
          <div className={style.ac_lg}>
            <div className={style.innerAc_lg}>
              <Image
                src="https://m.media-amazon.com/images/I/518BYF8LHRL._AC_PQ70_SX320_SY1200_FMwebp_.jpg"
                width={100}
                height={100}
                alt=""
              />
              <p>Lenovo ThinkPad  E14 AMD Ryzen 5 7530U </p>
              <button>Shop now</button>
            </div>
            <div className={style.innerAc_lg}>
              <Image
                src="https://m.media-amazon.com/images/I/31m-ySetxML._AC_SR120,120_.jpg"
                width={100}
                height={100}
                alt=""
              />
              <p>LG 1.5 Ton 5 Star DUAL Inverter Split AC (Coppe...</p>
              <button>Shop now</button>
            </div>
          </div>
        </div>

        <div className={style.flex_content_right}>
         <div className={style.topDt_right_img_flex}>
                <div className={style.topDt_right_left}>
                  <Image src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/6e53cdec-f02e-4dcf-818b-169787936cdb._CR0,0,1200,628_SX810_CB1169409_QL70_.jpg" alt='mac' width={400} height={300} className={style.right_topDt_img}/>
                </div>
                <div className={style.topDt_right_right}>
                  <div>
                    <Image src="https://m.media-amazon.com/images/I/71CjP9jmqZL._AC_SR230,210_CB1169409_QL70_.jpg" alt='' width={150} height={150}/>
                    <p>₹91,990</p>
                  </div>
                  <div>
                    <Image src="https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_SR160,134_CB1169409_QL70_.jpg" alt='' width={150} height={150}/>
                    <p>₹1,35000</p>
                  </div>
                  <div>
                    <Image src="https://m.media-amazon.com/images/I/61eA9PkZ07L._AC_SR160,134_CB1169409_QL70_.jpg" alt='' width={150} height={150}/>
                    <p>₹2,01,990</p>
                  </div>
                  
                </div>
         </div>

          <div className={style.right_dt}>
              {dt.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        dt.map(item => (
          <div key={item._id}>
            <div id={`product-${item.name.replace(/\s+/g, '-')}`} className={style.dt_flex}>
            <div className={style.dt_img}>
              <img src={item.image} alt='' className={style.laptop_computer_img} />

            </div>
            <div className={style.dt_details}>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>FREE delivery Fri, 13 Jun</p>
              <p>Or fastest delivery Tomorrow, 12 Jun</p>
              <p>Service: Device Setup</p>
              <button>Add to cart</button>
              </div>
            </div>
          </div>
        ))
      )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Refrigerators;
