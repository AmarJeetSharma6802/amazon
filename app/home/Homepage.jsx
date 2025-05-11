"use client"
import Image from 'next/image'
import React, { useEffect, useState, useRef } from 'react'
import style from "../style/home.module.css"

function Homepage() {
  const [data, setData] = useState([])

  const watchItem = [
    { id: 1, img: "https://m.media-amazon.com/images/I/81oS2scJ5GL._AC_SY200_.jpg" },
    { id: 2, img: "https://m.media-amazon.com/images/I/61-vRq2ulOL._AC_SY200_.jpg" },
    { id: 3, img: "https://m.media-amazon.com/images/I/61bm7UEdGAL._AC_SY200_.jpg" },
    { id: 4, img: "https://m.media-amazon.com/images/I/61QiBo-sPTL._AC_SY200_.jpg" },
    { id: 5, img: "https://m.media-amazon.com/images/I/610BF3kqBZL._AC_SY200_.jpg" },
    { id: 6, img: "https://m.media-amazon.com/images/I/61ATaTpvEQL._AC_SY200_.jpg" },
    { id: 7, img: "https://m.media-amazon.com/images/I/61akt30bJsL._AC_SY200_.jpg" },
    { id: 8, img: "https://m.media-amazon.com/images/I/61q0ZgCYoJL._AC_SY200_.jpg" },
    { id: 9, img: "https://m.media-amazon.com/images/I/61akt30bJsL._AC_SY200_.jpg" },
    { id: 10, img: "https://m.media-amazon.com/images/I/719NDsHC59L._AC_SY200_.jpg" },
    { id: 11, img: "https://m.media-amazon.com/images/I/71ICbdiFLxL._AC_SY200_.jpg" },
    { id: 12, img: "https://m.media-amazon.com/images/I/71SuFsBkLgL._AC_SY200_.jpg" },
    { id: 13, img: "https://m.media-amazon.com/images/I/71FFcbkVcML._AC_SY200_.jpg" },
    { id: 14, img: "https://m.media-amazon.com/images/I/71ejV7TaDfL._AC_SY200_.jpg" },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/itemStore", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        })
        const data = await res.json()
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  // Carousel 1 refs and states
  const carouselRef1 = useRef(null)
  const [canScrollLeft1, setCanScrollLeft1] = useState(false)
  const [canScrollRight1, setCanScrollRight1] = useState(true)

  // Carousel 2 refs and states
  const carouselRef2 = useRef(null)
  const [canScrollLeft2, setCanScrollLeft2] = useState(false)
  const [canScrollRight2, setCanScrollRight2] = useState(true)

  const scrollCarousel = (ref, direction) => {
    const carousel = ref.current
    const scrollAmount = 300

    carousel.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  const handleScroll = (ref, setLeft, setRight) => {
    const carousel = ref.current
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth
    setLeft(carousel.scrollLeft > 0)
    setRight(carousel.scrollLeft < maxScrollLeft)
  }

  return (
    <div>
      {/* Carousel 1 */}
      <div className={style.bg}>
      <p className={style.elctronics_title}>Electronics </p>
      <div className="carousel-container-2 caroucel_container_bg">
        <button
          className="scroll-button-2 left-2"
          onClick={() => scrollCarousel(carouselRef1, "left")}
          disabled={!canScrollLeft1}
        >
          <Image src="/left-arrow.png" alt="" width={25} height={25} />
        </button>
        <div
          className="carousel-2"
          ref={carouselRef1}
          onScroll={() => handleScroll(carouselRef1, setCanScrollLeft1, setCanScrollRight1)}
        >
          {data.map((item, index) => (
            <div key={item._id || index} className="carousel-item-2 carousel-item-fetch">
              <img src={item.image} alt={item.title || "Image"} className="carousel-image-2" />
            </div>
          ))}
        </div>
        <button
          className="scroll-button-2 right-2"
          onClick={() => scrollCarousel(carouselRef1, "right")}
          disabled={!canScrollRight1}
        >
          <Image src="/right-arrow.png" alt="" width={25} height={25} />
        </button>
      </div>
</div>
      {/* Carousel 2 */}
      <div className="carousel-container-2 caroucel_container_bg">
        <button
          className="scroll-button-2 left-2"
          onClick={() => scrollCarousel(carouselRef2, "left")}
          disabled={!canScrollLeft2}
        >
          <Image src="/left-arrow.png" alt="" width={25} height={25} />
        </button>
        <div
          className="carousel-2"
          ref={carouselRef2}
          onScroll={() => handleScroll(carouselRef2, setCanScrollLeft2, setCanScrollRight2)}
        >
          {watchItem.map((item, index) => (
            <div key={item.id} className="carousel-item-2 carousel-item-fetch watch_item_size">
              <Image
                src={item.img}
                alt={item.title || "Image"}
                width={100}
                height={200}
                className="carousel-image-2 watch_height"
              />
            </div>
          ))}
        </div>
        <button
          className="scroll-button-2 right-2"
          onClick={() => scrollCarousel(carouselRef2, "right")}
          disabled={!canScrollRight2}
        >
          <Image src="/right-arrow.png" alt="" width={25} height={25} />
        </button>
      </div>


    </div>
  )
}

export default Homepage
