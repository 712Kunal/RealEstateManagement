import React from "react";
import { FaBed } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { IoBookmarkSharp } from "react-icons/io5";
import { IoChatbubbleEllipses } from "react-icons/io5";

function Card() {
  return (
    <div className="Card flex gap-5 w-full border-2 border-white">
      <div className="relative w-64 h-48 flex-shrink-0">
        <img
          src="/src/assets/login.png"
          alt="property"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="TextContainer basis-1/3 flex flex-col justify-between gap-2">
        <h2 className="title text-white/75 text-xl font-sidebar font-semibold hover:transition-all duration-300 hover:text-indigo-400 hover:cursor-pointer">
          A great appartment next to beach
        </h2>
        <p className="Address flex items-center gap-1">
          <FaLocationDot className="text-white/55 text-2xl" />
          <span className="text-white/55">Lorem, ipsum dolor.</span>
        </p>
        <p className="price text-white p-2 rounded-lg bg-slate-800 font-bold">
          $ 200
        </p>
        <div className="bottom flex justify-between items-center">
          <div className="features flex gap-2">
            <FaBed className="text-white/75 text-2xl" />
            <span className="text-white/75">2 bedrooms</span>
          </div>
          <div className="features flex gap-2">
            <FaBath className="text-white/75 text-2xl" />
            <span className="text-white/75">2 bathrooms</span>
          </div>
          <div className="icon">
            <IoBookmarkSharp className="text-white/75 text-2xl" />
          </div>
          <div className="icon">
            <IoChatbubbleEllipses className="text-white/75 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
