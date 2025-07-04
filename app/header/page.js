"use client";
import React, { useState, useRef } from "react";
import style from "../style/header.module.css";
import Secondheader from "./Secondheader";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Header() {
  // States
  const [Allselctor, setAllSlector] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const searchBoxRef = useRef(null);
  const router = useRouter();

  
  function handleslector() {
    setAllSlector(!Allselctor);
  }

  function handlemobileView() {
    setNavbar((prev) => !prev);
  }

  async function handleSearch(query) {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSuggestions(false);
      return;
    }

    try {
      // First API (Local)
      const itemStoreRes = await fetch(`/api/itemStore/searchBar?query=${encodeURIComponent(query)}`);
      const itemStoreData = itemStoreRes.ok ? await itemStoreRes.json() : { results: [] };
      const itemStoreResults = Array.isArray(itemStoreData.results) ? itemStoreData.results : [];

      // Second API (via Proxy)
      const externalRes = await fetch(`/api/external/itemApi/search?query=${encodeURIComponent(query)}`);
      const externalData = externalRes.ok ? await externalRes.json() : { results: [] };
      const externalResults = Array.isArray(externalData.results) ? externalData.results : [];

      const combinedResults = [
        ...itemStoreResults.map((item) => ({ ...item, source: "itemStore" })),
        ...externalResults.map((item) => ({ ...item, source: "external" })),
      ];

      setSearchResults(combinedResults);
      setShowSuggestions(true);
    } catch (err) {
      console.log("Search failed:", err.message);
      setSearchResults([]);
      setShowSuggestions(false);
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim()) {
      handleSearch(value);
    } else {
      setSearchResults([]);
      setShowSuggestions(false);
    }
  }

  function handleClickOutside(event) {
    if (
      searchBoxRef.current &&
      !searchBoxRef.current.contains(event.target) &&
      !event.target.closest(`.${style.suggestionsBox}`)
    ) {
      setShowSuggestions(false);
    }
  }

  function handleHome() {
    router.push("/");
  }

  function handleSuggestionClick(item) {
    let url;
    if (item.source === "itemStore" || item.name.toLowerCase().includes("laptop")) {
      url = `/innerItems/laptop?scrollTo=${encodeURIComponent(item.name)}`;
    } else {
      url = `/innerItems/ac?scrollTo=${encodeURIComponent(item.name)}`;
    }
    router.push(url);
    setShowSuggestions(false);
    setSearchQuery(item.name);
  }

  async function handleSearchAndNavigate(query) {
    if (!query.trim()) return;
    await handleSearch(query);
    let url;
    if (query.toLowerCase().includes("laptop")) {
      url = `/innerItems/laptop?scrollTo=${encodeURIComponent(query)}`;
    } else {
      url = `/innerItems/ac?scrollTo=${encodeURIComponent(query)}`;
    }
    router.push(url);
    setShowSuggestions(false);
  }

  // Add event listeners for clicking outside
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={style.mobile_view_navbar}>
        <div className={style.mobile_view}>
          <div className={style.img_bars}>
            <span onClick={handlemobileView} className={style.mobile_bars_Span}>
              <i className="fa-solid fa-bars"></i>
            </span>
            <Image
              src="/amazonLogo.png"
              alt="amazonLogo.png"
              width={50}
              height={50}
              className={style.logo_img_mobile_view}
              onClick={handleHome}
            />
          </div>
          <div className={style.sign_Cart_view}>
            <div className={style.login}>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <div className={style.btn_login}>
                    <button className={style.singIn}>
                      <span className={style.sign_span}>sign in</span>
                      <span>
                        <i className="fa-solid fa-circle-user"></i>
                      </span>
                    </button>
                  </div>
                </SignInButton>
              </SignedOut>
            </div>
            <div className={style.cartLogo}>
              <p className={style.cart}>
                <i className="fa-solid fa-cart-shopping"></i>
              </p>
              <p className={style.count}>0</p>
            </div>
          </div>
        </div>
        <div className={style.input_slector}>
          <div className={style.slector_option}>
            <div className={style.caret_all} onClick={handleslector}>
              <p className={style.All}>All</p>
              <i className="fa-solid fa-caret-down" id={style.caret_down}></i>
            </div>
            {Allselctor && (
              <div className={style.slector}>
                <ul className={style.slector_ul}>
                  <li>Alexa Skills</li>
                  <li>Amazon Fashions</li>
                  <li>Amazon Fresh</li>
                  <li>Amazon Pharmacy</li>
                  <li>Appliances</li>
                  <li>Apps & Games</li>
                  <li>Baby</li>
                  <li>Beautys</li>
                  <li>Books</li>
                  <li>Car & Motorbike</li>
                  <li>Clothing & Accessories</li>
                  <li>Computers & Accessories</li>
                </ul>
              </div>
            )}
          </div>
          <div className={style.search} ref={searchBoxRef}>
            <input
              type="text"
              id={style.search_input}
              placeholder="Search for products"
              value={searchQuery}
              onChange={handleChange}
              onFocus={() => {
                if (searchQuery.trim()) setShowSuggestions(true);
              }}
            />
            {showSuggestions && searchResults.length > 0 && (
              <div className={style.suggestionsBox}>
                <ul>
                  {searchResults.map((item, index) => (
                    <li
                      key={index}
                      className={style.serachBar_li}
                      onClick={() => handleSuggestionClick(item)}
                      onTouchEnd={(e) => {
                        e.preventDefault();
                        handleSuggestionClick(item);
                      }}
                    >
                      <span>
                        <i className="fa-solid fa-magnifying-glass" id={style.magnifying_search}></i>
                      </span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className={style.searchLogo}
            onClick={() => handleSearchAndNavigate(searchQuery)}
            onTouchStart={() => handleSearchAndNavigate(searchQuery)}
          >
            <i className="fa-solid fa-magnifying-glass" id={style.magnifying}></i>
          </div>
        </div>
        <div className={style.shop_category_sell}>
          <p>Category</p>
          <p>Deals</p>
          <p>Sell</p>
        </div>
      </div>
      <div className={style.multiIconContainer}>
        <div className={style.multiIconContainer_img}>
          <Image src="https://m.media-amazon.com/images/I/21QHbXU96AL._SX100_SY100_.png" alt="" width={50} height={50} />
          <p className={style.multiIconContainer_para}>Fashion</p>
        </div>
        <div className={style.multiIconContainer_img}>
          <Image src="https://m.media-amazon.com/images/I/21CJrl0e7+L._SX100_SY100_.png" alt="" width={50} height={50} />
          <p className={style.multiIconContainer_para}>Groceries</p>
        </div>
        <div className={style.multiIconContainer_img}>
          <Image src="https://m.media-amazon.com/images/I/21OQCcPV0tL._SX100_SY100_.png" alt="" width={50} height={50} />
          <p className={style.multiIconContainer_para}>Mobiles</p>
        </div>
        <div className={style.multiIconContainer_img}>
          <Image src="https://m.media-amazon.com/images/I/01SZyAw7k7L._SX100_SY100_.png" alt="" width={50} height={50} />
          <p className={style.multiIconContainer_para}>MX Player</p>
        </div>
        <div className={style.multiIconContainer_img}>
          <Image src="https://m.media-amazon.com/images/I/31ICLWjUdHL._SX100_SY100_.png" alt="" width={50} height={50} />
          <p className={style.multiIconContainer_para}>Home</p>
        </div>
        <div className={style.multiIconContainer_img}>
          <Image src="https://m.media-amazon.com/images/I/11dcI5r-U6L._SX100_SY100_.png" alt="" width={50} height={50} />
          <p className={style.multiIconContainer_para}>Electronics</p>
        </div>
        <div className={style.multiIconContainer_img}>
          <Image src="https://m.media-amazon.com/images/I/21-5XYasLKL._SX100_SY100_.png" alt="" width={50} height={50} />
          <p className={style.multiIconContainer_para}>EveryDay</p>
        </div>
        <div className={style.multiIconContainer_img}>
          <Image src="https://m.media-amazon.com/images/I/312t+JcSoDL._SX100_SY100_.jpg" alt="" width={50} height={50} />
          <p className={style.multiIconContainer_para}>Deals</p>
        </div>
        <div className={style.multiIconContainer_img}>
          <Image src="https://m.media-amazon.com/images/I/21xXjwTSVIL._SX100_SY100_.png" alt="" width={50} height={50} />
          <p className={style.multiIconContainer_para}>Beauty</p>
        </div>
        <div className={style.multiIconContainer_img}>
          <Image src="https://m.media-amazon.com/images/I/11V7tDHLoyL._SX100_SY100_.jpg" alt="" width={50} height={50} />
          <p className={style.multiIconContainer_para}>Books</p>
        </div>
        <div className={style.multiIconContainer_img}>
          <Image src="https://m.media-amazon.com/images/I/118lbTsRMWL._SX100_SY100_.jpg" alt="" width={50} height={50} />
          <p className={style.multiIconContainer_para}>Appliances</p>
        </div>
        <div className={style.multiIconContainer_img}>
          <Image src="https://m.media-amazon.com/images/I/21VMZilRtoL._SX100_SY100_.png" alt="" width={50} height={50} />
          <p className={style.multiIconContainer_para}>Insurance</p>
        </div>
        <div className={style.multiIconContainer_img}>
          <Image src="https://m.media-amazon.com/images/I/215lv40sqoL._SX100_SY100_.png" alt="" width={50} height={50} />
          <p className={style.multiIconContainer_para}>Gift Cards</p>
        </div>
      </div>

      <div className={style.topHead}>
        <div className={style.logo}>
          <div className={style.image}>
            <img src="/amazonLogo.png" id={style.img_logo} onClick={handleHome} />
          </div>
          <div className={style.div_p}>
            <p className={style.in}>.in</p>
          </div>
        </div>

        <div className={style.header_address}>
          <div className={style.location_svg}>
            <img src="/locationLogo.png" id={style.location_img} />
          </div>
          <div className={style.addressLocation}>
            <p className={style.Delivering}>Delivering to Gurugram 122001</p>
            <p className={style.updateAddress}>Update Location</p>
          </div>
        </div>

        <div className={style.input_slector}>
          <div className={style.slector_option}>
            <div className={style.caret_all} onClick={handleslector}>
              <p className={style.All}>All</p>
              <i className="fa-solid fa-caret-down" id={style.caret_down}></i>
            </div>
            {Allselctor && (
              <div className={style.slector}>
                <ul className={style.slector_ul}>
                  <li>Alexa Skills</li>
                  <li>Amazon Fashions</li>
                  <li>Amazon Fresh</li>
                  <li>Amazon Pharmacy</li>
                  <li>Appliances</li>
                  <li>Apps & Games</li>
                  <li>Baby</li>
                  <li>Beautys</li>
                  <li>Books</li>
                  <li>Car & Motorbike</li>
                  <li>Clothing & Accessories</li>
                  <li>Computers & Accessories</li>
                </ul>
              </div>
            )}
          </div>

          <div className={style.search} ref={searchBoxRef}>
            <input
              type="text"
              id={style.search_input}
              placeholder="Search for products"
              value={searchQuery}
              onChange={handleChange}
              onFocus={() => {
                if (searchQuery.trim()) setShowSuggestions(true);
              }}
            />
            {showSuggestions && searchResults.length > 0 && (
              <div className={style.suggestionsBox}>
                <ul>
                  {searchResults.map((item, index) => (
                    <li
                      key={index}
                      className={style.serachBar_li}
                      onClick={() => handleSuggestionClick(item)}
                      onTouchEnd={(e) => {
                        e.preventDefault();
                        handleSuggestionClick(item);
                      }}
                    >
                      <span>
                        <i className="fa-solid fa-magnifying-glass" id={style.magnifying_search}></i>
                      </span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className={style.searchLogo}
            onClick={() => handleSearchAndNavigate(searchQuery)}
            onTouchStart={() => handleSearchAndNavigate(searchQuery)}
          >
            <i className="fa-solid fa-magnifying-glass" id={style.magnifying}></i>
          </div>
        </div>

        <div className={style.indianFlag}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/640px-Flag_of_India.svg.png"
            id={style.indiaFlag_img}
          />
          <span className={style.En}>EN</span>
        </div>

        <div className={style.login}>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <div className={style.btn_login}>
                <button className={style.singIn}>
                  Hello, <span className={style.sign_span}>sign in</span>
                </button>
                <p className={style.AccountList}>Account & List</p>
              </div>
            </SignInButton>
          </SignedOut>
        </div>
        <div className={style.return}>
          <p className={style.retruns}>Returns</p>
          <p className={style.orders}>& Orders</p>
        </div>

        <div className={style.cartLogo}>
          <p className={style.cart}>
            <i className="fa-solid fa-cart-shopping"></i>
          </p>
          <p className={style.count}>0</p>
        </div>
      </div>

      <Secondheader navbar={navbar} setNavbar={setNavbar} />
    </>
  );
}

export default Header;