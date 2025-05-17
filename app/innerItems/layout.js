"use client"
import React from "react";
import InnerItemsNav from "./ac/InnerItemsNav";
import { FilterProvider } from "./FilterContext";

export default function DashboardLayout({ children }) {

    return (
      <FilterProvider>
      <div>
        <header style={{height:"60px", background:"white"}}>
          <InnerItemsNav />
        </header>
        <main>
          {children} 
        </main>
      </div>
      </FilterProvider>
    );
  }