import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import FullscreenCarousel from "./FullscreenCarousel";

const ImageCarousel = (props) => {
  const [FSC,setFSC] = useState(false);

  const importAll = (r) => {
    let images = [];
    const regexPattern = /^\.\/[0-9]\.png$/;
    r.keys().forEach((key) => {
      if (regexPattern.test(key)) {
        images.push(r(key).default);
      }
    });
    return images;
  };
  let ImageContext;
  if('hsem'===props.imagesFolder){
    ImageContext = require.context("@/public/project/hsem", false, /\.png$/);
  }
  else if('a247'===props.imagesFolder){
    ImageContext = require.context("@/public/project/a247", false, /\.png$/);
  }
  
  else if('gym'===props.imagesFolder){
    ImageContext = require.context("@/public/project/gym", false, /\.png$/);
  }
  
  else if('skin'===props.imagesFolder){
    ImageContext = require.context("@/public/project/skin", false, /\.png$/);
  }

  else if('dev'===props.imagesFolder){
    ImageContext = require.context("@/public/project/dev", false, /\.png$/);
  }

  else if('port'===props.imagesFolder){
    ImageContext = require.context("@/public/project/port", false, /\.png$/);
  }
  const images = importAll(ImageContext);
  

  return (
    <div>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop interval={5000} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50}>
        {images.map((image, index) => (
          <div onClick={()=>{setFSC(!FSC)}} key={index}>
            <Image onClick={()=>{alert("test")}} src={image} alt={index} style={{ height: "40%" }} />
          </div>
        ))}
      </Carousel>
      {FSC && <FullscreenCarousel images={images} FSC={FSC} setFSC={setFSC}/>}
    </div>
  );
};

export default ImageCarousel;
