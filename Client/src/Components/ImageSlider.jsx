import React from "react";

function ImageSlider() {
  return (
    <div className="Image Slider w-full h-[350px] flex gap-5 mb-5">
      <div className="bigImage basis-4/5">
        <img
          src="/src/assets/hero.jpg"
          alt="bigImage"
          className="w-full h-full object-cover rounded-md cursor-pointer"
        />
      </div>
      <div className="smallImages basis-1/5 flex flex-col justify-between gap-5">
        <img
          src="/src/assets/hero.jpg"
          className="w-full h-[100px] object-cover rounded-md cursor-pointer"
          alt=""
        />
        <img
          src="/src/assets/hero.jpg"
          className="w-full h-[100px] object-cover rounded-md cursor-pointer"
          alt=""
        />
        <img
          src="/src/assets/hero.jpg"
          className="w-full h-[100px] object-cover rounded-md cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
}

export default ImageSlider;
