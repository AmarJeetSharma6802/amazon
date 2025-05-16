"use client"
import React,{useRef, useState} from "react";
import style from "../../style/innerItems.module.css";
import Image from "next/image";

function InnerItemsNav() {
  const [isHoverKitch, setIsHoverKitch] = useState(false);
  const [isHoverFurniture, setIsHoverFurniture] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [nav ,setNav] = useState(false)

//   const ref =useRef ({
// Kitchen :null,
// HomeFurnishing:null,
// Furniture:null
//   })

  // const handleDrop=(section)=>{
  //   ref.current[section]?.classList.toggle('show');
  // }


  const handleNav =()=>{
    setNav(prev => !prev)
  }
  

  return (
    <>
    <div className={style.mobile_view_amazon_items_filters}>
      <div className={style.mobile_view_amazon_items_details} onClick={handleNav} >
        <span><i className="fa-solid fa-bars"></i></span>
        <span>Amazon Home </span>
      </div>
      <div className={style.mobile_view_amazon_items_filters_details} >
        <span>Filter </span>
        <span><i className="fa-solid fa-sliders"></i></span>
      </div>
    </div>
      <div className={`${style.amazon_items} ${nav ? style.active:""}`}>
        <ul className={style.amazon_items_ul}>
           <li className={style.amazon_items_li}><div className={style.felx_arrow}>
            Amazon Home <span className={style.mobile_view_down_arrow}><i className="fa-solid fa-angle-down"></i></span>
            </div></li>
          <li className={`${style.amazon_items_li} ${style.amazon_items_li_hover}`}
           onMouseEnter={() => setIsHoverKitch (true)}
            // onClick={() => handleDrop("Kitchen")}
            // ref={(el) => (ref.current.Kitchen = el)}
          ><div className={style.felx_arrow}> Kitchen & Home Appliances <span className={style.mobile_view_down_arrow}><i className="fa-solid fa-angle-down"></i></span></div>
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
                <Image src="https://m.media-amazon.com/images/G/31/img16/Home-SA/1049311_recipe_380x500_1._V509410474_.jpg" alt="image" width={200} height={300} className={style.mobile_view_width_img} />
                <Image src="https://m.media-amazon.com/images/G/31/img16/Home-SA/1049311_fans_380x500_1._V509410474_.jpg" alt="image" width={200} height={300} className={style.mobile_view_width_img}  />
                <Image src="https://m.media-amazon.com/images/G/31/img16/Home-SA/1049311_coolers_380x500._V509410410_.jpg" alt="image" width={200} height={300} className={style.mobile_view_width_img} />
              </div>
              </div>

            </div>
            )
          }
          </li>
          <li className={style.amazon_items_li}> <div className={style.felx_arrow}>
            Large Appliances <span className={style.mobile_view_down_arrow}><i className="fa-solid fa-angle-down"></i></span></div></li>
          <li className={style.amazon_items_li}><div className={style.felx_arrow}>Kitchen & Dining <span className={style.mobile_view_down_arrow}><i className="fa-solid fa-angle-down"></i></span></div></li>
          <li className={style.amazon_items_li}onClick={()=>handleDrop("Furniture")} onMouseEnter={() => setIsHoverFurniture (true)} ><div className={style.felx_arrow}>Furniture <span className={style.mobile_view_down_arrow}><i className="fa-solid fa-angle-down"></i></span></div>
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
                <Image src="https://m.media-amazon.com/images/G/31/img16/furniture/megamenu/sofa._V507978361_.jpg" alt="image" width={200} height={300} className={style.mobile_view_width_img}  />
                <Image src="https://m.media-amazon.com/images/G/31/img16/furniture/megamenu/SolidWood._V507978361_.jpg" alt="image" width={200} height={300} className={style.mobile_view_width_img}  />
                <Image src="https://m.media-amazon.com/images/G/31/img16/furniture/megamenu/wing-chair-3._V507978360_.jpg" alt="image" width={200} height={300} className={style.mobile_view_width_img}  />
              </div>
              </div>

            </div>
            )
          }
          </li>
          <li className={style.amazon_items_li} onClick={()=>handleDrop("HomeFurnishing")} onMouseEnter={() => setIsHover(true)}> <div className={style.felx_arrow}>Home Furnishing <span className={style.mobile_view_down_arrow}><i className="fa-solid fa-angle-down"></i></span></div>
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
                <Image src="https://m.media-amazon.com/images/G/31/img17/Home/1049382-HomeSN-380x500-Bedsheets._V507978050_.jpg" alt="image" width={200} height={300} className={style.mobile_view_width_img}  />
                <Image src="https://m.media-amazon.com/images/G/31/img17/Home/1049382-HomeSN-380x500-Cushions_CushionCovers._V507978050_.jpg" alt="image" width={200} height={300} className={style.mobile_view_width_img}  />
                <Image src="https://m.media-amazon.com/images/G/31/IMG20/61hXW_RrbgL_SL1200._CB1587025064_.jpg" alt="image" width={200} height={300} className={style.mobile_view_width_img}  />
              </div>
              </div>

            </div>
            )
          }
          </li>
          <li className={style.amazon_items_li}> <div className={style.felx_arrow}>
            Home Decor <span className={style.mobile_view_down_arrow}><i className="fa-solid fa-angle-down"></i></span></div></li>
          <li className={style.amazon_items_li}><div className={style.felx_arrow}>Home Improvement <span className={style.mobile_view_down_arrow}><i className="fa-solid fa-angle-down"></i></span></div></li>
          <li className={style.amazon_items_li}><div className={style.felx_arrow}>Garden & Outdoor <span className={style.mobile_view_down_arrow}><i className="fa-solid fa-angle-down"></i></span> </div></li>
          <li className={style.amazon_items_li}><div className={style.felx_arrow}>Storage & Organisation <span className={style.mobile_view_down_arrow}><i className="fa-solid fa-angle-down"></i></span></div></li>
        </ul>
      </div>
    </>
  );
}

export default InnerItemsNav;


