import React from 'react'
import style from '../style/footer.module.css'

function SecondFooter() {
  return (
    <div>
        <div className={style.secondFooter}>
            <div className={style.secondFooter_baclk_top}>
              <p>Back to top</p>
            </div>
            <div className={style.secondFooter_content}>

              <div className={style.secondFooter_inner_content}>
                <ul className={style.secondFooter_inner_content_ul}>
                  <li className={`${style.secondFooter_inner_content_ul_li} ${style.top_li}`}>Get to Know Us</li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">About Amazon</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Careers</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Press Releases</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Amazon Science
                  </a></li>
                </ul>
              </div>
              <div className={style.secondFooter_inner_content}>
                <ul className={style.secondFooter_inner_content_ul}>
                <li className={`${style.secondFooter_inner_content_ul_li} ${style.top_li}`}>Connect with Us</li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Facebook</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Twitter</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Instagram</a></li>
                </ul>
              </div>
              <div className={style.secondFooter_inner_content}>
                <ul className={style.secondFooter_inner_content_ul}>
                <li className={`${style.secondFooter_inner_content_ul_li} ${style.top_li}`}>Make Money with Us</li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Sell on Amazon</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Sell under Amazon Accelerator</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Protect and Build Your Brand</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Amazon Global Selling</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Supply to Amazon</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Become an Affiliate</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Fulfilment by Amazon</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Advertise Your Products</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Amazon Pay on Merchants</a></li>
                </ul>
              </div>
              <div className={style.secondFooter_inner_content}>
                <ul className={style.secondFooter_inner_content_ul}>
                <li className={`${style.secondFooter_inner_content_ul_li} ${style.top_li}`}>Let Us Help You</li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Your Account</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Returns Centre</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Recalls and Product Safety Alerts</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">100% Purchase Protection</a></li>
                  <li className={style.secondFooter_inner_content_ul_li}><a href="">Amazon App Download
                  Help</a></li>
                </ul>
              </div>

            </div>
            <div className={style.language_img_state}>
              <div className={style.footer_logo_img}>
                <img src="/amazonLogo.png" alt="" className={style.amazon_img} />
              </div>
              <div className={style.language}>
                <select className={style.language_select}>
                  <option value="">🌐 English - EN</option>
                  <option value="">🌐 हिन्दी - HI</option>
                  <option value="">🌐 தமிழ் - TA</option>
                  <option value="">🌐 తెలుగు - TE</option>
                  <option value="">🌐 मराठी - MR</option>
                </select>
              </div>
              
              <div className={style.state}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/640px-Flag_of_India.svg.png" alt="" className={style.footer_flag} />
                <span>Inida</span>
              </div>
            </div>
        </div>
        <div className={style.bottom_footer}>

          <div className={style.flex_bottom_footer_first}>
            <div className={style.flex_bottom_footer_first_content}>
              <ul className={style.flex_bottom_footer_first_content_ul}>
                <h5>AbeBooks</h5>
                <li className={style.flex_bottom_footer_first_content_li}>Books, art</li>
                <li className={style.flex_bottom_footer_first_content_li}>Books, art</li>
              </ul>
            </div>

            <div className={style.flex_bottom_footer_first_content}>
              <ul className={style.flex_bottom_footer_first_content_ul}>
                <h5>Amazon Web Services</h5>
                <li className={style.flex_bottom_footer_first_content_li}>Scalable Cloud</li>
                <li className={style.flex_bottom_footer_first_content_li}>Computing Services</li>
              </ul>
            </div>
            <div className={style.flex_bottom_footer_first_content}>
              <ul className={style.flex_bottom_footer_first_content_ul}>
                <h5>Audible</h5>
                <li className={style.flex_bottom_footer_first_content_li}>Download</li>
                <li className={style.flex_bottom_footer_first_content_li}>Audio Books</li>
              </ul>
            </div>
            <div className={style.flex_bottom_footer_first_content}>
              <ul className={style.flex_bottom_footer_first_content_ul}>
                <h5>IMDb</h5>
                <li className={style.flex_bottom_footer_first_content_li}>Movies, TV</li>
                <li className={style.flex_bottom_footer_first_content_li}>& Celebrities</li>
              </ul>
            </div>

          </div>

          <div className={style.flex_bottom_footer_first}>
            <div className={style.flex_bottom_footer_first_content}>
              <ul className={style.flex_bottom_footer_first_content_ul}>
                <h5>Shopbop</h5>
                <li className={style.flex_bottom_footer_first_content_li}>Designer</li>
                <li className={style.flex_bottom_footer_first_content_li}>Fashion Brands</li>
              </ul>
            </div>

            <div className={style.flex_bottom_footer_first_content}>
              <ul className={style.flex_bottom_footer_first_content_ul}>
                <h5>	
                Amazon Business</h5>
                <li className={style.flex_bottom_footer_first_content_li}>Everything For</li>
                <li className={style.flex_bottom_footer_first_content_li}>Your Business</li>
              </ul>
            </div>
            <div className={style.flex_bottom_footer_first_content}>
              <ul className={style.flex_bottom_footer_first_content_ul}>
                <h5>Prime Now</h5>
                <li className={style.flex_bottom_footer_first_content_li}> 2-Hour Delivery</li>
                <li className={style.flex_bottom_footer_first_content_li}>on Everyday Items</li>
              </ul>
            </div>
            <div className={style.flex_bottom_footer_first_content}>
              <ul className={style.flex_bottom_footer_first_content_ul}>
                <h5>Amazon Prime Music</h5>
                <li className={style.flex_bottom_footer_first_content_li}>100 million songs, ad-free</li>
                <li className={style.flex_bottom_footer_first_content_li}>Over 15 million podcast episodes </li>
              </ul>
            </div>

          </div>

        </div>

    <div className={style.my_footer_details}>
      <div className={style.Mylogo}>
      <p>AS</p>
      </div>
      <div className={style.mydetails}>
        <div className={style.github_footer}>
        <span><i className="fa-brands fa-github"></i></span>
        <span className={style.awesomeFONT}>Github</span>
        </div>
        <div className={style.LinkedIn_footer}>
        <span><i className="fa-brands fa-linkedin-in"></i></span>
        <span className={style.awesomeFONT}>LinkedIn</span>
        </div>
        <div className={style.Portfolio_footer}>
          <a href="https://portfolio-beta-dusky-34.vercel.app/" className={style.anchor_tag_color}>
        <span><img src="https://res.cloudinary.com/futurecoder/image/upload/v1742915736/uploads/dc8yiorajevea0nrqldp.png" alt="" className={style.portfoli_img} /></span>
         <span className={style.awesomeFONT}> Portfolio </span>
         </a>
        </div>
      </div>
    </div>

        
    </div>
  )
}

export default SecondFooter