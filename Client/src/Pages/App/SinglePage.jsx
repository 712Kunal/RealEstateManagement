import React from "react";
import ImageSlider from "../../Components/ImageSlider";
import { MdLocationPin } from "react-icons/md";
import Map from "../../Components/Map";
import { BsTools } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { TbRulerMeasure } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa6";
import { TbBusStop } from "react-icons/tb";
import { HiMiniBuildingStorefront } from "react-icons/hi2";

function SinglePage() {
  return (
    <div className="singlePage flex mt-16 mx-3">
      <div className="details text-gray-200 basis-8/12">
        <div className="wrapper pr-12">
          <ImageSlider />
          <div className="postInfo flex flex-col gap-5">
            <div className="top info flex justify-between">
              <div className="post flex flex-col gap-2">
                <h1 className="text-4xl font-old">Luxirious Flat</h1>
                <div className="address flex items-center text-gray-400">
                  <MdLocationPin className="text-lg" />
                  <span>Guwahati</span>
                </div>
                <div className="price p-1 font-medium text-xl rounded-lg bg-blue-800 w-max">
                  $ 1000
                </div>
              </div>
              <div className="user flex flex-col items-center justify-center px-7 py-0 gap-2 rounded-lg font-semibold bg-blue-800">
                <img
                  src="/src/assets/noavatar.png"
                  alt="user avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span>John Doe</span>
              </div>
            </div>
            <div className="bottom info mt-5 text-gray-400 leading-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              culpa nulla quas repudiandae iusto itaque incidunt iste tenetur
              rerum perspiciatis maiores quibusdam nostrum excepturi ex rem.
              Odit, quia perferendis. Consequatur sequi error ratione eum aut.
              Laudantium cupiditate tempore omnis impedit dolorum ea veritatis.
              Impedit quod cupiditate quia, corrupti tempora sunt!
            </div>
          </div>
        </div>
      </div>

      <div className="features basis-1/3 text-white">
        <div className="h-full bg-[#164E63]/10 rounded-lg px-3 py-0 flex flex-col gap-3">
          <>
            <p className="title font-exo text-xl">General</p>
            <div className="generals flex flex-col bg-[#034078] rounded-md gap-1 p-2">
              <div className="features flex items-center gap-2 bg-[#0a1128] p-1 rounded-lg">
                <BsTools className="text-white/95 text-2xl" />
                <div className="featureText flex flex-col justify-center">
                  <span>Utilities</span>
                  <p className="text-xs text-white/70">Renter is responsible</p>
                </div>
              </div>

              <div className="features flex items-center gap-2 bg-[#0a1128] p-1 rounded-lg">
                <MdPets className="text-white/95 text-2xl" />
                <div className="featureText flex flex-col justify-center">
                  <span>Pet Policy</span>
                  <p className="text-xs text-white/70">Pets allowed</p>
                </div>
              </div>

              <div className="features flex items-center gap-2 bg-[#0a1128] p-1 rounded-lg">
                <GiReceiveMoney className="text-white/95 text-2xl" />
                <div className="featureText flex flex-col justify-center">
                  <span>Property Fees</span>
                  <p className="text-xs text-white/70">
                    Must have 3x the rent in total household income
                  </p>
                </div>
              </div>
            </div>
          </>

          <>
            <p className="title font-exo text-xl">Room Sizes</p>
            <div className="horizontalList generals flex bg-[#034078] rounded-md gap-2 p-2">
              <div className="features flex bg-[#0a1128] items-center rounded-lg p-1 gap-1">
                <TbRulerMeasure className="text-white/95 text-2xl" />
                <span>80 sqm(861 sqft)</span>
              </div>

              <div className="features flex bg-[#0a1128] items-center rounded-lg p-1 gap-1">
                <IoBedOutline className="text-white/95 text-2xl" />
                <span>2 Beds</span>
              </div>

              <div className="features flex bg-[#0a1128] items-center rounded-lg p-1 gap-1">
                <FaBath className="text-white/95 text-2xl" />
                <span>2 Bathrooms</span>
              </div>
            </div>
          </>
          <>
            <p className="title font-exo text-xl">Nearby Places</p>
            <div className="horizontalList generals flex bg-[#034078] justify-center items-center rounded-md gap-2 p-2">
              <div className="features flex items-center gap-2 bg-[#0a1128] px-2 py-1 rounded-lg">
                <FaSchool className="text-white/95 text-2xl" />
                <div className="featureText flex flex-col justify-center">
                  <span>School</span>
                  <p className="text-xs text-white/70">250m away</p>
                </div>
              </div>

              <div className="features flex items-center gap-2 bg-[#0a1128] px-2 py-1 rounded-lg">
                <TbBusStop className="text-white/95 text-2xl" />
                <div className="featureText flex flex-col justify-center">
                  <span>Bus Stop</span>
                  <p className="text-xs text-white/70">100m away</p>
                </div>
              </div>

              <div className="features flex items-center gap-2 bg-[#0a1128] px-2 py-1 rounded-lg">
                <HiMiniBuildingStorefront className="text-white/95 text-2xl" />
                <div className="featureText flex flex-col justify-center">
                  <span>Restaurant</span>
                  <p className="text-xs text-white/70">200m away</p>
                </div>
              </div>
            </div>
          </>

          <p className="title font-exo text-xl">Location</p>
          <div className="mapContainer">{/* <Map /> */}</div>
          <div className="buttons"></div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
