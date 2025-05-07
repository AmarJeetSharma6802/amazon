"use client"
import Image from 'next/image'
import React, { useEffect, useState,useRef } from 'react'


function Homepage() {
  const [data,setData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        // const res = await fetch("/api/itemStore",{
        const res = await fetch("https://amazon-tau-two.vercel.app/api/itemStore",{
          method:"GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        })
        const data = await res.json()
        setData(data) 
        console.log("data", data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])

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

    const handleScroll = () => {
      const carousel = carouselRef.current;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  
      // Disable left button when at the start
      setCanScrollLeft(carousel.scrollLeft > 0);
  
      // Disable right button when at the end
      setCanScrollRight(carousel.scrollLeft < maxScrollLeft);
    };
  
  return (
    <div>
         <div className="carousel-container-2 caroucel_container_bg">
                  <button
                    className="scroll-button-2 left-2"
                    onClick={() => scrollCarousel("left")}
                    disabled={!canScrollLeft}
                  >
                    <Image src="/left-arrow.png" alt="" id="left-img" width={25} height={25}  />
                  </button>
                  <div className="carousel-2" ref={carouselRef} onScroll={handleScroll}>
                    {data.map((item, index) => (
                      <div key={item._id || index}  className='carousel-item-2 carousel-item-fetch'>
                      <img src={item.image} alt={item.title || "Image"} className="carousel-image-2" />
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
  )
}

export default Homepage


