import { React, useState, useEffect } from "react";
import Filter from "../../Components/Filter";
import Card from "../../Components/Card";
import fetchTheData from "../../lib/getPosts.js";
import Map from "../../Components/Map";
import { useLocation } from "react-router-dom";

function ListPage() {
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // CALLING THE FUNCTION TO FETCH THE POSTS FROM THE BACKEND SERVER
    fetchTheData(setPosts, setError);
  }, []);

  // GET THE LOCATION PARAM FROM THE URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const locationParam = searchParams.get("location");

  return (
    <div className="ListPage flex mt-16 mx-3">
      <div className="ListContainer basis-8/12">
        <div className="wrapper flex flex-col gap-5 pr-5">
          <Filter
            place={locationParam}
            setPosts={setPosts}
            setError={setError}
          />
          <Card posts={posts} />
        </div>
      </div>
      <div className="MapContainer basis-1/3 fixed top-16 right-3 h-[calc(100vh-4rem)] w-[calc(33.33%-12px)]">
        <Map posts={posts} />
      </div>
    </div>
  );
}

export default ListPage;
