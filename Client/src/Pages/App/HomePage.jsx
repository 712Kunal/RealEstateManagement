import React from "react";
import SearchBar from "../../Components/SearchBar.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser, selectUser } from "../../Features/Auth/AuthSlice.js";

function HomePage() {
  // STORING THE USER TO THE REDUX STORE
  const user = useSelector(selectUser);

  useEffect(() => {
    console.log("Current user data in Redux store:", user);
  }, [user]);

  return (
    <div className="min-h-screen">
      <section className="relative w-full overflow-x-hidden overflow-y-auto h-screen bg-cover bg-center bg-no-repeat bg-[url('/src/assets/hero.jpg')]">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>

        {/* Content */}
        <div className="relative container mx-auto flex flex-col items-center justify-center h-full px-0 md:px-4 gap-5 md:gap-7 lg:gap-9 text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 max-w-3xl">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p className="text-white/90 text-lg font-semibold md:text-xl max-w-2xl font-sidebar">
            Discover a seamless way to find and manage your perfect property
            with our cutting-edge real estate platform.
          </p>
          <SearchBar />
          <div className="boxes hidden w-full md:flex gap-5 justify-center items-center flex-wrap md:gap-16 lg:gap-20 text-white ">
            <div className="box border border-slate-50 p-2 rounded-lg">
              <h1 className="text-2xl font-bold">16 +</h1>
              <h2 className="text-xl font-semibold">Years Of Experience</h2>
            </div>

            <div className="box border border-slate-50 p-2 rounded-lg">
              <h1 className="text-2xl font-bold">200</h1>
              <h2 className="text-xl font-semibold">Award Gained</h2>
            </div>

            <div className="box border border-slate-50 p-2 rounded-lg">
              <h1 className="text-2xl font-bold">2000 +</h1>
              <h2 className="text-xl font-semibold">Property Ready</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
