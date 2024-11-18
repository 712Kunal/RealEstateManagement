import { React, useEffect, useState } from "react";
import { FaBed } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";
import apiRequest from "../lib/apiRequest";

function Card() {
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchTheData = async () => {
      try {
        const queryParams = window.location.href.split("?")[1];

        if (queryParams) {
          // SEND THE QUERY TO THE BACKEND SERVER TO FETCH THE DATA
          const response = await apiRequest.get(`/posts/Posts?${queryParams}`);
          console.log("response:", response.data);
        } else {
          const response = await apiRequest.get("/posts");
        }
      } catch (error) {
        console.error("Error while fetching the posts data:", error);
        setError(error.response.data.error);
      }
    };
    fetchTheData();
  }, []);

  return (
    <div className="Card flex gap-5 w-full bg-slate-800 rounded-lg shadow-lg p-4">
      {response.data.AllPosts.map((post) => {
        return (
          <>
            <div className="relative w-52 h-40 flex-shrink-0">
              <img
                src={post.Images[0]}
                alt="property"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="TextContainer w-full flex flex-col justify-between">
              <div>
                <h2 className="title text-white/90 text-xl font-sidebar font-semibold hover:transition-all duration-300 hover:text-indigo-400 hover:cursor-pointer">
                  {post.address}
                </h2>
                <p className="Address flex items-center gap-2 text-white/75">
                  <FaLocationDot className="text-white/55 text-lg" />
                  <span>post.address</span>
                </p>
              </div>
              <div className="bottom flex justify-between items-center">
                <p className="price bg-indigo-500 text-white px-4 py-2 rounded-md font-bold">
                  $ {post.price}
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
                  <span>{post.bedrooms}bedrooms</span>
                </div>
                <div className="feature flex items-center bg-slate-700 p-2 rounded-md gap-2 text-white/75">
                  <FaBath className="text-white/75 text-lg" />
                  <span>{post.bathrooms}bathrooms</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Card;
