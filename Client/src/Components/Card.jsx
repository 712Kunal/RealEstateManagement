import React from "react";
import { FaBed } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";

function Card() {
  return (
    <div className="Card flex gap-5 w-full bg-slate-800 rounded-lg shadow-lg p-4">
      <div className="relative w-52 h-40 flex-shrink-0">
        <img
          src="/src/assets/login.png"
          alt="property"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="TextContainer w-full flex flex-col justify-between">
        <div>
          <h2 className="title text-white/90 text-xl font-sidebar font-semibold hover:transition-all duration-300 hover:text-indigo-500 hover:cursor-pointer">
            A great appartment next to beach
          </h2>
          <p className="Address flex items-center gap-2 text-white/75">
            <FaLocationDot className="text-white/55 text-lg" />
            <span>Lorem, ipsum dolor.</span>
          </p>
        </div>
        <div className="bottom flex justify-between items-center">
          <p className="price bg-indigo-500 text-white px-4 py-2 rounded-md font-bold">
            $ 200
          </p>
          <div className="icons flex gap-4">
            <div className="icon cursor-pointer">
              <FaRegBookmark className="text-white/75 text-xl hover:text-indigo-400 transition-colors" />
            </div>
            <div className="icon cursor-pointer">
              <IoChatbubbleEllipses className="text-white/75 text-xl hover:text-indigo-400 transition-colors" />
            </div>
          </div>
        </div>
        <div className="features flex gap-3">
          <div className="feature flex items-center bg-slate-700 p-2 rounded-md gap-2 text-white/75">
            <FaBed className="text-white/75 text-lg" />
            <span>2bedrooms</span>
          </div>
          <div className="feature flex items-center bg-slate-700 p-2 rounded-md gap-2 text-white/75">
            <FaBath className="text-white/75 text-lg" />
            <span>2bathrooms</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
