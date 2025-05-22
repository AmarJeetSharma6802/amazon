"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

function Refrigerators() {
  const [dt, setDt] = useState([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();

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
      <h1>Page Refrigerators</h1>

      <img 
        src="/_next/image?url=https%3A%2F%2Fimages-eu.ssl-images-amazon.com%2Fimages%2FG%2F31%2FIMG15%2FIrfan%2FGATEWAY%2FMSO%2FAppliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg&w=384&q=75" 
        alt="Refrigerators" 
      />

      {dt.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        dt.map(item => (
          <div key={item._id}>
            <ul id={`product-${item.name.replace(/\s+/g, '-')}`}>
              <li style={{ padding: "10px" }}>{item.name || "No Name Available"}</li>
              <img src={item.image} alt='' />
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default Refrigerators;
