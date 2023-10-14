import React from "react";
import { Backdrop, IconButton } from "@mui/material";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { Close } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const FullscreenCarousel = (props) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: 1101, backdropFilter: "blur(4px)", display:"grid", placeContent:"center"}}
      open={true} 
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            zIndex: 1102,
          }}
        >
          <IconButton
            onClick={() => {
              props.setFSC(!props.FSC);
            }}
          >
            <Close fontSize="large" />
          </IconButton>
        </div>
        <div style={{ width: "90%", height: "90%" }}>
          <Carousel
            showThumbs={false}
            infiniteLoop
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <ArrowBackIosIcon
                  onClick={onClickHandler}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    zIndex: 2,
                    fontSize: "120%",
                  }}
                />
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <ArrowForwardIosIcon
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "0",
                    zIndex: 2,
                    fontSize: "120%", // Adjust the font size to change button size
                  }}
                />
              )
            }
            style={{ width: "100%", height: "100%" }}
          >
            {props.images.map((image, index) => (
              <div key={index}>
                <Image
                  onClick={() => {
                    alert("test");
                  }}
                  src={image}
                  alt={index}
                  style={{ width: "90%", height: "90%" }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Backdrop>
  );
};

export default FullscreenCarousel;
