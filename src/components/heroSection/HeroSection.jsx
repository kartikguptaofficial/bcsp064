import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HeroSection = () => {
  return (
    // <div>
    //   <img className=" h-44 lg:h-full w-full" src="../img/banner1.jpg" alt="" />
    // </div>

    <Carousel autoplay draggable arrows speed={500} className="mt-20">
      <div>
        {/* <h3 style={contentStyle}>1</h3> */}
        <img className=" h-44 lg:h-full w-full" src="../img/hero.png" alt="" />
      </div>
      <div>
        <img className=" h-44 lg:h-full w-full" src="../img/hero3.png" alt="" />
      </div>
      <div>
        <img className=" h-44 lg:h-full w-full" src="../img/hero1.png" alt="" />
      </div>
      <div>
        <img className=" h-44 lg:h-full w-full" src="../img/hero2.png" alt="" />
      </div>
    </Carousel>
  );
};

export default HeroSection;
