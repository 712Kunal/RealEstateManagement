import { React, useState, useEffect } from "react";
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
import { useSearchParams } from "react-router-dom";
import apiRequest from "../../lib/apiRequest.js";
import LoadingOverlay from "../Auth/LoadingOverlay.jsx";

function SinglePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isloading, setIsloading] = useState(true);
  const [message, setmessage] = useState("");
  const [postData, setPostData] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setmessage("Fetching Data . . .");
        const postId = searchParams.get("post"); // STORED POST ID

        // BACKEND REQUEST FOR FETCHING POSTS
        const response = await apiRequest.get(`/posts/fetchingPost/${postId}`);
        if (response.data) {
          setPostData(response.data.SinglePost);

          // FETCHING RELATED USER INFORMATION FROM THE BACKEND
          const relatedUser = await apiRequest.get(
            `/user/${response.data.SinglePost.userId}`
          );
          setUserInfo(relatedUser.data);

          setIsloading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, []);

  return (
    <div className="singlePage flex-row md:flex mt-16 mx-3">
      {isloading ? (
        <LoadingOverlay message={message} />
      ) : (
        <>
          <div className="details text-gray-200 basis-8/12">
            {/* LEFT SECTION */}
            <div className="wrapper pr-0 md:pr-12">
              <ImageSlider />
              <div className="postInfo flex flex-col gap-5">
                <div className="top info flex justify-between">
                  <div className="post flex flex-col gap-2">
                    <h1 className="text-3xl sm:text-4xl font-old">{postData.title}</h1>
                    <div className="address flex items-center text-gray-400">
                      <MdLocationPin className="text-lg" />
                      <span>{postData.address}</span>
                    </div>
                    <div className="price p-1 font-medium text-xl rounded-lg bg-blue-800 w-max">
                      $ {postData.price}
                    </div>
                  </div>
                  <div className="user flex flex-col items-center justify-center px-2 sm:px-7 py-0 gap-2 rounded-lg font-semibold bg-blue-800">
                    <img
                      src={userInfo.User.avatar || "/src/assets/noavatar.png"}
                      alt="user avatar"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span>{userInfo.User.username}</span>
                  </div>
                </div>
                <div className="bottom info mt-5 text-xl text-gray-400 text-justify">
                  {postData.postDetail.desc}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="features mt-5 sm:basis-1/3 text-white">
            <div className="h-full bg-[#164E63]/10 rounded-lg px-3 py-0 flex flex-col gap-3">
              <>
                {/* GENERAL SECTION */}
                <p className="title font-exo text-xl">General</p>
                <div className="generals flex flex-col bg-[#034078] rounded-md gap-1 p-2">
                  <div className="features flex items-center gap-2 bg-[#0a1128] p-1 rounded-lg">
                    <BsTools className="text-white/95 text-2xl" />
                    <div className="featureText flex flex-col justify-center">
                      <span>Utilities</span>
                      <p className="text-xs text-white/70">
                        {postData.postDetail.utilities}
                      </p>
                    </div>
                  </div>

                  <div className="features flex items-center gap-2 bg-[#0a1128] p-1 rounded-lg">
                    <MdPets className="text-white/95 text-2xl" />
                    <div className="featureText flex flex-col justify-center">
                      <span>Pet Policy</span>
                      <p className="text-xs text-white/70">
                        Pets {postData.postDetail.pet}
                      </p>
                    </div>
                  </div>

                  <div className="features flex items-center gap-2 bg-[#0a1128] p-1 rounded-lg">
                    <GiReceiveMoney className="text-white/95 text-2xl" />
                    <div className="featureText flex flex-col justify-center">
                      <span>Property Fees</span>
                      <p className="text-xs text-white/70">
                        Must have {postData.postDetail.income} the rent in total
                        household income
                      </p>
                    </div>
                  </div>
                </div>
              </>
              {/* ROOM SIZE SECTION */}
              <>
                <p className="title font-exo text-xl">Room Sizes</p>
                <div className="horizontalList generals flex bg-[#034078] rounded-md gap-2 p-2">
                  <div className="features flex bg-[#0a1128] items-center rounded-lg p-1 gap-1">
                    <TbRulerMeasure className="text-white/95 text-2xl" />
                    <span>{postData.postDetail.size} sqm(861 sqft)</span>
                  </div>

                  <div className="features flex bg-[#0a1128] items-center rounded-lg p-1 gap-1">
                    <IoBedOutline className="text-white/95 text-2xl" />
                    <span>{postData.bedrooms} Beds</span>
                  </div>

                  <div className="features flex bg-[#0a1128] items-center rounded-lg p-1 gap-1">
                    <FaBath className="text-white/95 text-2xl" />
                    <span>{postData.bathrooms} Bathrooms</span>
                  </div>
                </div>
              </>
              {/* NEARBY PLACES SECTION */}
              <>
                <p className="title font-exo text-xl">Nearby Places</p>
                <div className="horizontalList generals flex bg-[#034078] justify-center items-center rounded-md gap-2 p-2">
                  <div className="features flex items-center gap-2 bg-[#0a1128] px-2 py-1 rounded-lg">
                    <FaSchool className="text-white/95 text-2xl" />
                    <div className="featureText flex flex-col justify-center">
                      <span>School</span>
                      <p className="text-xs text-white/70">
                        {postData.postDetail.school}m away
                      </p>
                    </div>
                  </div>

                  <div className="features flex items-center gap-2 bg-[#0a1128] px-2 py-1 rounded-lg">
                    <TbBusStop className="text-white/95 text-2xl" />
                    <div className="featureText flex flex-col justify-center">
                      <span>Bus Stop</span>
                      <p className="text-xs text-white/70">
                        {postData.postDetail.bus}m away
                      </p>
                    </div>
                  </div>

                  <div className="features flex items-center gap-2 bg-[#0a1128] px-2 py-1 rounded-lg">
                    <HiMiniBuildingStorefront className="text-white/95 text-2xl" />
                    <div className="featureText flex flex-col justify-center">
                      <span>Restaurant</span>
                      <p className="text-xs text-white/70">
                        {postData.postDetail.restaurant}m away
                      </p>
                    </div>
                  </div>
                </div>
              </>
              {/* MAP SECTION */}
              <p className="title font-exo text-xl">Location</p>
              <div className="MapContainer md:block w-full h-52">
                <Map posts={postData} />
              </div>
              <div className="buttons"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SinglePage;
