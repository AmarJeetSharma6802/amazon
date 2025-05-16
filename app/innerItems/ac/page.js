"use client"
import React,{useState} from "react";
import style from "../../style/innerItems.module.css";
import Image from "next/image";
function page() {
  const [isHoverKitch, setIsHoverKitch] = useState(false);
  const [isHoverFurniture, setIsHoverFurniture] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div className={style.amazon_items}>
        <ul className={style.amazon_items_ul}>
           <li className={style.amazon_items_li}>Amazon Home</li>
          <li className={`${style.amazon_items_li} ${style.amazon_items_li_hover}`}
           onMouseEnter={() => setIsHoverKitch (true)}
           
          > Kitchen & Home Appliances
          { 
            isHoverKitch && (
                <div className={style.inner_div}
                 onMouseEnter={() => setIsHoverKitch(true)}
                onMouseLeave={() => setIsHoverKitch(false)}
                >
              <div className={style.inner_div_left}>

              <div className={style.inner_div_child}>
                <ul className={style.inner_div_child_ul}>
                  <li className={`${style.inner_div_child_ul_li} ${style.inner_div_child_ul_li_head}`}>Kitchen Appliances</li>
                  <li className={style.inner_div_child_ul_li}>Mixer Grinders</li>
                  <li className={style.inner_div_child_ul_li}>Juicers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Blenders</li>
                  <li className={style.inner_div_child_ul_li}>Food Processors</li>
                  <li className={style.inner_div_child_ul_li}>Oven Toaster Grills</li>
                  <li className={style.inner_div_child_ul_li}>Toasters</li>
                  <li className={style.inner_div_child_ul_li}>Rice & Pasta Cookers</li>
                  <li className={style.inner_div_child_ul_li}>Deep Fryers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Mixers</li>
                </ul>
              </div>

              <div className={style.inner_div_child}>
                <ul className={style.inner_div_child_ul}>
                  <li className={`${style.inner_div_child_ul_li} ${style.inner_div_child_ul_li_head}`}>Kitchen Appliances</li>
                  <li className={style.inner_div_child_ul_li}>Mixer Grinders</li>
                  <li className={style.inner_div_child_ul_li}>Juicers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Blenders</li>
                  <li className={style.inner_div_child_ul_li}>Food Processors</li>
                  <li className={style.inner_div_child_ul_li}>Oven Toaster Grills</li>
                  <li className={style.inner_div_child_ul_li}>Toasters</li>
                  <li className={style.inner_div_child_ul_li}>Rice & Pasta Cookers</li>
                  <li className={style.inner_div_child_ul_li}>Deep Fryers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Mixers</li>
                </ul>
              </div>

              <div className={style.inner_div_child}>
                <ul className={style.inner_div_child_ul}>
                  <li className={`${style.inner_div_child_ul_li} ${style.inner_div_child_ul_li_head}`}>Kitchen Appliances</li>
                  <li className={style.inner_div_child_ul_li}>Mixer Grinders</li>
                  <li className={style.inner_div_child_ul_li}>Juicers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Blenders</li>
                  <li className={style.inner_div_child_ul_li}>Food Processors</li>
                  <li className={style.inner_div_child_ul_li}>Oven Toaster Grills</li>
                  <li className={style.inner_div_child_ul_li}>Toasters</li>
                  <li className={style.inner_div_child_ul_li}>Rice & Pasta Cookers</li>
                  <li className={style.inner_div_child_ul_li}>Deep Fryers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Mixers</li>
                </ul>
              </div>

              </div>

              <div className={style.inner_div_right}>
              <div className={style.inner_div_child}>
                <Image src="https://m.media-amazon.com/images/G/31/img16/Home-SA/1049311_recipe_380x500_1._V509410474_.jpg" alt="image" width={200} height={300} />
                <Image src="https://m.media-amazon.com/images/G/31/img16/Home-SA/1049311_fans_380x500_1._V509410474_.jpg" alt="image" width={200} height={300} />
                <Image src="https://m.media-amazon.com/images/G/31/img16/Home-SA/1049311_coolers_380x500._V509410410_.jpg" alt="image" width={200} height={300} />
              </div>
              </div>

            </div>
            )
          }
          </li>
          <li className={style.amazon_items_li}> Large Appliances</li>
          <li className={style.amazon_items_li}>Kitchen & Dining</li>
          <li className={style.amazon_items_li} onMouseEnter={() => setIsHoverFurniture (true)} >Furniture
            { 
            isHoverFurniture && (
                <div className={style.inner_div}
                 onMouseEnter={() => setIsHoverFurniture(true)}
                onMouseLeave={() => setIsHoverFurniture(false)}
                >
              <div className={style.inner_div_left}>

              <div className={style.inner_div_child}>
                <ul className={style.inner_div_child_ul}>
                  <li className={`${style.inner_div_child_ul_li} ${style.inner_div_child_ul_li_head}`}>Living Room Furniture</li>
                  <li className={style.inner_div_child_ul_li}>Mixer Grinders</li>
                  <li className={style.inner_div_child_ul_li}>Juicers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Blenders</li>
                  <li className={style.inner_div_child_ul_li}>Food Processors</li>
                  <li className={style.inner_div_child_ul_li}>Oven Toaster Grills</li>
                  <li className={style.inner_div_child_ul_li}>Toasters</li>
                  <li className={style.inner_div_child_ul_li}>Rice & Pasta Cookers</li>
                  <li className={style.inner_div_child_ul_li}>Deep Fryers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Mixers</li>
                </ul>
              </div>

              <div className={style.inner_div_child}>
                <ul className={style.inner_div_child_ul}>
                  <li className={`${style.inner_div_child_ul_li} ${style.inner_div_child_ul_li_head}`}>Bedroom Furnitures</li>
                  <li className={style.inner_div_child_ul_li}>Mixer Grinders</li>
                  <li className={style.inner_div_child_ul_li}>Juicers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Blenders</li>
                  <li className={style.inner_div_child_ul_li}>Food Processors</li>
                  <li className={style.inner_div_child_ul_li}>Oven Toaster Grills</li>
                  <li className={style.inner_div_child_ul_li}>Toasters</li>
                  <li className={style.inner_div_child_ul_li}>Rice & Pasta Cookers</li>
                  <li className={style.inner_div_child_ul_li}>Deep Fryers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Mixers</li>
                </ul>
              </div>

              <div className={style.inner_div_child}>
                <ul className={style.inner_div_child_ul}>
                  <li className={`${style.inner_div_child_ul_li} ${style.inner_div_child_ul_li_head}`}>Study Room Furniture</li>
                  <li className={style.inner_div_child_ul_li}>Mixer Grinders</li>
                  <li className={style.inner_div_child_ul_li}>Juicers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Blenders</li>
                  <li className={style.inner_div_child_ul_li}>Food Processors</li>
                  <li className={style.inner_div_child_ul_li}>Oven Toaster Grills</li>
                  <li className={style.inner_div_child_ul_li}>Toasters</li>
                  <li className={style.inner_div_child_ul_li}>Rice & Pasta Cookers</li>
                  <li className={style.inner_div_child_ul_li}>Deep Fryers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Mixers</li>
                </ul>
              </div>

              </div>

              <div className={style.inner_div_right}>
              <div className={style.inner_div_child}>
                <Image src="https://m.media-amazon.com/images/G/31/img16/furniture/megamenu/sofa._V507978361_.jpg" alt="image" width={200} height={300} />
                <Image src="https://m.media-amazon.com/images/G/31/img16/furniture/megamenu/SolidWood._V507978361_.jpg" alt="image" width={200} height={300} />
                <Image src="https://m.media-amazon.com/images/G/31/img16/furniture/megamenu/wing-chair-3._V507978360_.jpg" alt="image" width={200} height={300} />
              </div>
              </div>

            </div>
            )
          }
          </li>
          <li className={style.amazon_items_li} onMouseEnter={() => setIsHover(true)}>Home Furnishing
            { 
            isHover && (
                <div className={style.inner_div}
                 onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                >
              <div className={style.inner_div_left}>

              <div className={style.inner_div_child}>
                <ul className={style.inner_div_child_ul}>
                  <li className={`${style.inner_div_child_ul_li} ${style.inner_div_child_ul_li_head}`}>Bedroom Linen</li>
                  <li className={style.inner_div_child_ul_li}>Bedsheets</li>
                  <li className={style.inner_div_child_ul_li}>Bed Pillows</li>
                  <li className={style.inner_div_child_ul_li}>Hand Blenders</li>
                  <li className={style.inner_div_child_ul_li}>Mattress Protectors</li>
                  <li className={style.inner_div_child_ul_li}>Oven Toaster Grills</li>
                  <li className={style.inner_div_child_ul_li}>Toasters</li>
                  <li className={style.inner_div_child_ul_li}>Rice & Pasta Cookers</li>
                  <li className={style.inner_div_child_ul_li}>Deep Fryers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Mixers</li>
                </ul>
              </div>

              <div className={style.inner_div_child}>
                <ul className={style.inner_div_child_ul}>
                  <li className={`${style.inner_div_child_ul_li} ${style.inner_div_child_ul_li_head}`}>Bathroom Linen</li>
                  <li className={style.inner_div_child_ul_li}>Mixer Grinders</li>
                  <li className={style.inner_div_child_ul_li}>Juicers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Blenders</li>
                  <li className={style.inner_div_child_ul_li}>Speciality Pillows</li>
                  <li className={style.inner_div_child_ul_li}>Oven Toaster Grills</li>
                  <li className={style.inner_div_child_ul_li}>Toasters</li>
                  <li className={style.inner_div_child_ul_li}>Rice & Pasta Cookers</li>
                  <li className={style.inner_div_child_ul_li}>Deep Fryers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Mixers</li>
                </ul>
              </div>

              <div className={style.inner_div_child}>
                <ul className={style.inner_div_child_ul}>
                  <li className={`${style.inner_div_child_ul_li} ${style.inner_div_child_ul_li_head}`}>Carpets & Rugs</li>
                  <li className={style.inner_div_child_ul_li}>Mixer Grinders</li>
                  <li className={style.inner_div_child_ul_li}>Juicers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Blenders</li>
                  <li className={style.inner_div_child_ul_li}>Food Processors</li>
                  <li className={style.inner_div_child_ul_li}>Oven Toaster Grills</li>
                  <li className={style.inner_div_child_ul_li}>Toasters</li>
                  <li className={style.inner_div_child_ul_li}>Rice & Pasta Cookers</li>
                  <li className={style.inner_div_child_ul_li}>Deep Fryers</li>
                  <li className={style.inner_div_child_ul_li}>Hand Mixers</li>
                </ul>
              </div>

              </div>

              <div className={style.inner_div_right}>
              <div className={style.inner_div_child}>
                <Image src="https://m.media-amazon.com/images/G/31/img17/Home/1049382-HomeSN-380x500-Bedsheets._V507978050_.jpg" alt="image" width={200} height={300} />
                <Image src="https://m.media-amazon.com/images/G/31/img17/Home/1049382-HomeSN-380x500-Cushions_CushionCovers._V507978050_.jpg" alt="image" width={200} height={300} />
                <Image src="https://m.media-amazon.com/images/G/31/IMG20/61hXW_RrbgL_SL1200._CB1587025064_.jpg" alt="image" width={200} height={300} />
              </div>
              </div>

            </div>
            )
          }
          </li>
          <li className={style.amazon_items_li}>Home Decor</li>
          <li className={style.amazon_items_li}>Home Improvement</li>
          <li className={style.amazon_items_li}>Garden & Outdoor</li>
          <li className={style.amazon_items_li}>Storage & Organisation</li>
        </ul>
      </div>
    </>
  );
}

export default page;


