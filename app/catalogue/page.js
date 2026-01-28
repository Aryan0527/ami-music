"use client";
import React, { useState } from "react";
import Carousel from "@/components/Carousel";
import AlbumGrid from "@/components/AlbumGrid";

const Catalog = () => {
  return (
    <div>
      <Carousel />
      <AlbumGrid />
    </div>
  );
};

export default Catalog;
