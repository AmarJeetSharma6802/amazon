import React,{useEffect, useState} from "react";
import style from "../style/header.module.css";
import { usePathname } from "next/navigation";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

function Secondheader({ navbar, setNavbar }) {
  const path = usePathname();
  // const [navbar,setNavbar] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null);



  const handleNavbar = () => {
    setNavbar(prev => !prev)
  }
  const handleClose = () => {
    setNavbar(false)
  }
  const handleLiShow = (menuName) => {
    setActiveMenu(menuName);
  };
  const handleLiShowClose = () => {
    setActiveMenu(null);
  }
  return (
    <div>
      <div className={style.secondheader_Details}>
        <div className={style.secondAll_bras} onClick={handleNavbar}>
          <p>
            <i className="fa-solid fa-bars"></i>
          </p>
          <p>All</p>
        </div>
        <div
          className={`${style.header_item}  ${
            path === "/fresh" ? style.active : ""
          }`}
        >
          Fresh
        </div>
        <div className={style.header_item}>MX Player</div>
        <div className={style.header_item}>Sell</div>
        <div className={style.header_item}>Bestsellers</div>
        <div className={style.header_item}>Mobile</div>
        <div className={style.header_item}>Today's Deals</div>
        <div className={style.header_item}>Prime</div>
        <div className={style.header_item}>Customer Service</div>
        <div className={style.header_item}>New Releases</div>
        <div className={style.header_item}>Fashion</div>
        <div className={style.header_item}> Electronics </div>
        <div className={style.header_item}> Amazon Pay</div>
        <div className={style.header_item}> Home & Kitchen </div>
        <div className={style.header_item}> Computers</div>
        <div className={style.header_item}> Books</div>
        <div className={style.header_item}> Car & Motorbike</div>
      </div>
            {
        navbar && (
            <div className={style.close} onClick={handleClose}><i className="fa-solid fa-xmark"></i></div>
        )
            }

     {
        navbar && (
            <div className={style.navbar}>
            <div className={style.navbar_item}>
              <div className={style.navbar_item_login}>
                <div className={style.navbar_item_btn}>
                <SignedIn >
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
                </div>
                {/* User not signed in => show sign in button */}
                <SignedOut>
                  <SignInButton mode="modal">
                    <div className={style.navbar_item_btn_login}>
                      <button className={style.navbar_item_singIn}>
                        <i className="fa-solid fa-circle-user"></i>
                      </button>
                      <p className={style.hello}>Hello, sign in</p>
                    </div>
                  </SignInButton>
                </SignedOut>
              </div>

                <div className={style.trending_header}>
                    <ul className={style.trending_header_ul}>
                        <li className={`${style.trending_header_li} ${style.trending_header_liBold}`}>Trending</li>
                        <li className={style.trending_header_li}>Bestsellers</li>
                        <li className={style.trending_header_li}>New Releases</li>
                        <li className={style.trending_header_li}>Movers and Shakers</li>
                    </ul>
                </div>

                <div className={style.digital_content_nav}>
                    <h3>Digital Content and Devices</h3>
                    <ul className={style.digital_content_nav_ul}>
                    <li className={style.digital_content_nav_li}>Amazon miniTV- FREE entertainment</li>
                        <li className={style.digital_content_nav_li}>
                            <div className={style.digital_content_nav_li_arrow_flex}>
                                <span>Echo & Alexa</span>
                                <span onClick={()=> handleLiShow("echo")}><i className="fa-solid fa-angle-right"></i></span>
                            </div>
                            <div className={`${style.arrow_li_page} ${activeMenu === "echo" ? style.active: ""}`}>
                               <div className={style.backArrow} onClick={handleLiShowClose}>
                                <span className={style.left_arrow}><i className="fa-solid fa-arrow-left"></i></span>
                                <span >MAIN MENU</span>
                               </div>
                               <ul className={style.main_menu_ul}>
                               <p className={style.Content_Resource} >Content & Resources</p>
                               <li className={style.main_menu_li}>Meet Alexa</li>
                               <li className={style.main_menu_li}>Alexa Skills</li>
                               </ul>
                            </div>
                        </li>

                        <li className={style.digital_content_nav_li}>
                            <div className={style.digital_content_nav_li_arrow_flex}>
                                <span>Fire TV</span>
                                <span onClick={()=> handleLiShow("Fire TV")}><i className="fa-solid fa-angle-right"></i></span>
                            </div>
                            <div className={`${style.arrow_li_page} ${activeMenu === "Fire TV" ? style.active: ""}`}>
                               <div className={style.backArrow} onClick={handleLiShowClose}>
                                <span className={style.left_arrow}><i className="fa-solid fa-arrow-left"></i></span>
                                <span >MAIN MENU</span>
                               </div>
                               <ul className={style.main_menu_ul}>
                               <p className={style.main_memu_title} >Fire TV</p>
                               <li className={style.main_menu_li}>Amazon Prime Video</li>
                               <li className={style.main_menu_li}>Fire TV Apps & Games</li>
                               <li className={style.main_menu_li}>See all Fire TV devices Skills</li>
                               </ul>
                            </div>
                        </li>

                        <li className={style.digital_content_nav_li}>
                            <div className={style.digital_content_nav_li_arrow_flex}>
                                <span>Kindle E-Readers & eBooks</span>
                                <span onClick={()=> handleLiShow("E-Readers")}><i className="fa-solid fa-angle-right"></i></span>
                            </div>
                            <div className={`${style.arrow_li_page} ${activeMenu === "E-Readers" ? style.active: ""}`}>
                               <div className={style.backArrow} onClick={handleLiShowClose}>
                                <span className={style.left_arrow}><i className="fa-solid fa-arrow-left"></i></span>
                                <span >MAIN MENU</span>
                               </div>
                               <ul className={style.main_menu_ul}>
                               <p className={style.main_memu_title} >Kindle E-readers</p>
                               <li className={style.main_menu_li}>All-new Kindle</li>
                               <li className={style.main_menu_li}>Kindle Paperwhite Starter Pack</li>
                               <li className={style.main_menu_li}>All-New Kindle Oasis</li>
                               <li className={style.main_menu_li}>Refurbished & Open Box</li>
                               <li className={style.main_menu_li}>Kindle E-Reader Accessories</li>
                               <li className={style.main_menu_li}>See all Kindle E-readers</li>
                               </ul>
                               <ul className={`${style.main_menu_ul} ${style.main_menu_ul_top_boder}`}>
                               <p className={style.main_memu_title} >Kindle E-readers</p>
                               <li className={style.main_menu_li}>All-new Kindle</li>
                               <li className={style.main_menu_li}>Kindle Paperwhite Starter Pack</li>
                               <li className={style.main_menu_li}>All-New Kindle Oasis</li>
                               <li className={style.main_menu_li}>Refurbished & Open Box</li>
                               <li className={style.main_menu_li}>Kindle E-Reader Accessories</li>
                               <li className={style.main_menu_li}>See all Kindle E-readers</li>
                               </ul>
                            </div>
                        </li>

                        <li className={style.digital_content_nav_li}>
                            <div className={style.digital_content_nav_li_arrow_flex}>
                                <span>Audible Audiobooks</span>
                                <span onClick={()=> handleLiShow("Audiobooks")}><i className="fa-solid fa-angle-right"></i></span>
                            </div>
                            <div className={`${style.arrow_li_page} ${activeMenu === "Audiobooks" ? style.active: ""}`}>
                               <div className={style.backArrow} onClick={handleLiShowClose}>
                                <span className={style.left_arrow}><i className="fa-solid fa-arrow-left"></i></span>
                                <span >MAIN MENU</span>
                               </div>
                               <ul className={style.main_menu_ul}>
                               <p className={style.main_memu_title} >Audible Audiobooks</p>
                               <li className={style.main_menu_li}>Audible Membership</li>
                               <li className={style.main_menu_li}>All Audiobooks</li>
                               <li className={style.main_menu_li}>Best Sellers</li>
                               <li className={style.main_menu_li}>New Releases</li>
                               <li className={style.main_menu_li}>Hindi Audiobooks</li>
                               </ul>
                            </div>
                        </li>

                        <li className={style.digital_content_nav_li}>
                            <div className={style.digital_content_nav_li_arrow_flex}>
                                <span>Amazon Prime Video</span>
                                <span onClick={()=> handleLiShow("AmazonPrimeVideo")}><i className="fa-solid fa-angle-right"></i></span>
                            </div>
                            <div className={`${style.arrow_li_page} ${activeMenu === "AmazonPrimeVideo" ? style.active: ""}`}>
                               <div className={style.backArrow} onClick={handleLiShowClose}>
                                <span className={style.left_arrow}><i className="fa-solid fa-arrow-left"></i></span>
                                <span >MAIN MENU</span>
                               </div>
                               <ul className={style.main_menu_ul}>
                               <p className={style.main_memu_title} >Amazon Prime Video</p>
                               <li className={style.main_menu_li}>All Videos</li>
                               <li className={style.main_menu_li}>Categories</li>
                               <li className={style.main_menu_li}>My Stuff</li>
                               </ul>
                            </div>
                        </li>

                        <li className={style.digital_content_nav_li}>
                            <div className={style.digital_content_nav_li_arrow_flex}>
                                <span>Amazon Prime Music</span>
                                <span onClick={()=> handleLiShow("Amazon Prime Video")}><i className="fa-solid fa-angle-right"></i></span>
                            </div>
                            <div className={`${style.arrow_li_page} ${activeMenu === "Amazon Prime Video" ? style.active: ""}`}>
                               <div className={style.backArrow} onClick={handleLiShowClose}>
                                <span className={style.left_arrow}><i className="fa-solid fa-arrow-left"></i></span>
                                <span >MAIN MENU</span>
                               </div>
                               <ul className={style.main_menu_ul}>
                               <p className={style.main_memu_title} >Amazon Prime Music</p>
                               <li className={style.main_menu_li}>Amazon Prime Music</li>
                               <li className={style.main_menu_li}>Open web player</li>
                               <li className={style.main_menu_li}>Voice controlled with Alexa</li>
                               <li className={style.main_menu_li}>Amazon Prime Music Apps</li>
                               <li className={style.main_menu_li}>CDs and Vinyls</li>
                               </ul>
                            </div>
                        </li>
                    </ul>
                </div>


                <div className={style.digital_content_nav}>
                    <h3>Shop by Category</h3>
                    <ul className={style.digital_content_nav_ul}>
                    <li className={style.digital_content_nav_li}>Amazon miniTV- FREE entertainment</li>
                        <li className={style.digital_content_nav_li}>
                            <div className={style.digital_content_nav_li_arrow_flex}>
                                <span>Mobiles, Computers</span>
                                <span onClick={()=> handleLiShow("MobilesComputers")}><i className="fa-solid fa-angle-right"></i></span>
                            </div>
                            <div className={`${style.arrow_li_page} ${activeMenu === "MobilesComputers" ? style.active: ""}`}>
                               <div className={style.backArrow} onClick={handleLiShowClose}>
                                <span className={style.left_arrow}><i className="fa-solid fa-arrow-left"></i></span>
                                <span >MAIN MENU</span>
                               </div>
                               <ul className={style.main_menu_ul}>
                               <p className={style.main_memu_title} >Mobiles, Tablets & More</p>
                               <li className={style.main_menu_li}>All Mobile Phones</li>
                               <li className={style.main_menu_li}>All Mobile Accessories</li>
                               <li className={style.main_menu_li}>Cases & Covers</li>
                               <li className={style.main_menu_li}>Screen Protectors</li>
                               <li className={style.main_menu_li}>Power Banks</li>
                               <li className={style.main_menu_li}>Refurbished & Open Box</li>
                               <li className={style.main_menu_li}>Tablets</li>
                               <li className={style.main_menu_li}>Wearable Devices</li>
                               <li className={style.main_menu_li}>Smart Home</li>
                               </ul>
                               <ul className={`${style.main_menu_ul} ${style.main_menu_ul_top_boder}`}>
                               <p className={style.main_memu_title} >Computers & Accessories</p>
                               <li className={style.main_menu_li}> All Computers & Accessories </li>
                               <li className={style.main_menu_li}>Laptops</li>
                               <li className={style.main_menu_li}>Drives & Storage</li>
                               <li className={style.main_menu_li}>Printers & Ink</li>
                               <li className={style.main_menu_li}>Networking Devices</li>
                               <li className={style.main_menu_li}> Computer Accessories </li>
                               <li className={style.main_menu_li}> Game Zone </li>
                               <li className={style.main_menu_li}> Monitors </li>
                               </ul>
                            </div>
                        </li>
                        <li className={style.digital_content_nav_li}>
                            <div className={style.digital_content_nav_li_arrow_flex}>
                                <span>Men's Fashion</span>
                                <span onClick={()=> handleLiShow("echo")}><i className="fa-solid fa-angle-right"></i></span>
                            </div>
                            <div className={`${style.arrow_li_page} ${activeMenu === "echo" ? style.active: ""}`}>
                               <div className={style.backArrow} onClick={handleLiShowClose}>
                                <span className={style.left_arrow}><i className="fa-solid fa-arrow-left"></i></span>
                                <span >MAIN MENU</span>
                               </div>
                               <p style={{color:"black"}}>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                        <li className={style.digital_content_nav_li}>
                            <div className={style.digital_content_nav_li_arrow_flex}>
                                <span>Women's Fashion</span>
                                <span onClick={()=> handleLiShow("echo")}><i className="fa-solid fa-angle-right"></i></span>
                            </div>
                            <div className={`${style.arrow_li_page} ${activeMenu === "echo" ? style.active: ""}`}>
                               <div className={style.backArrow} onClick={handleLiShowClose}>
                                <span className={style.left_arrow}><i className="fa-solid fa-arrow-left"></i></span>
                                <span >MAIN MENU</span>
                               </div>
                               <p style={{color:"black"}}>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </li>
                       
                       
                        </ul>
                </div>

            </div>
          </div>
        )
     }
    </div>
  );
}

export default Secondheader;
