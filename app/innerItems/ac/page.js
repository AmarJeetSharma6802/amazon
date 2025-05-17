"use client"
import React,{useState} from "react";
import style from "../../style/innerItems.module.css";
function page() {
   const [price, setPrice] = useState(31000);
  return (
    <>
      <div className={style.flex_content}>
        <div className={style.flex_content_left}>
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
          <ul className={style.flex_content_left_ul}>
            <li className={style.flex_content_left_ul_li}> <span><i className="fa-solid fa-star"></i></span></li>
            <li className={style.flex_content_left_ul_li}> <span><i className="fa-solid fa-star"></i></span></li>
            <li className={style.flex_content_left_ul_li}> <span><i className="fa-solid fa-star"></i></span></li>
            <li className={style.flex_content_left_ul_li}> <span><i className="fa-solid fa-star"></i></span></li>
            <li className={style.flex_content_left_ul_li}> <span><i className="fa-regular fa-star"></i></span></li>
           
          </ul>
          <p className={style.flex_content_left_para}>Item Condition</p>
          <p>Selected Price: ₹{price}</p>
          <p>₹31,000 – ₹52,300+</p>
           <input
                type="range"
                min="31000"
                max="52300"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{ width: '100px' }}
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

        </div>
        <div className={style.flex_content_right}></div>
      </div>
    </>
  );
}

export default page;
