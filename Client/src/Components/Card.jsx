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
          setPosts(response.data.AllPosts);
        } else {
          const response = await apiRequest.get("/posts");
          setPosts(response.data.AllPosts);
        }
      } catch (error) {
        console.error("Error while fetching the posts data:", error);
        setError(error.response.data.error);
      }
    };

    // CALLING THE FUNCTION TO FETCH THE POSTS FROM THE BACKEND SERVER
    fetchTheData();
  }, []);

  return (
    <div className="Card flex flex-col gap-5 w-full p-4">
      {posts.map((post) => {
        return (
          <div className="bg-slate-800 rounded-lg shadow-lg flex gap-4 justify-center items-center p-4">
            <div className="relative w-52 h-40 flex-shrink-0 rounded-lg">
              <img
                src="/src/assets/login.png"
                alt="property"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="TextContainer gap-4 w-full flex flex-col justify-between">
              <div>
                <h2 className="title text-white/90 text-xl font-sidebar font-semibold hover:transition-all duration-300 hover:text-indigo-400 hover:cursor-pointer">
                  {post.address}
                </h2>
                <p className="Address flex items-center gap-2 text-white/75">
                  <FaLocationDot className="text-white/55 text-lg" />
                  <span>{post.address}</span>
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
          </div>
        );
      })}
    </div>
  );
}

export default Card;
