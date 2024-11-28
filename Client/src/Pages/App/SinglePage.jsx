import React from "react";
import ImageSlider from "../../Components/ImageSlider";
import { MdLocationPin } from "react-icons/md";

function SinglePage() {
  return (
    <div className="singlePage flex mt-16 mx-3">
      <div className="details text-white text-4xl basis-8/12 border-2">
        <div className="wrapper">
          <ImageSlider />
          <div className="postInfo">
            <div className="top info">
              <div className="post">
                <div className="address">
                  <MdLocationPin />
                  <span>Guwahati</span>
                </div>
                <div className="price">$ 1000</div>
              </div>
              <div className="user">
                <img src="src/assets/noavatar.png" alt="user avatar" />
              </div>
            </div>
            <div className="bottom info"></div>
          </div>
        </div>
      </div>
      <div className="features basis-1/3 border-2">
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default SinglePage;
