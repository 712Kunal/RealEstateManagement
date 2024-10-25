import React from "react";
import Navbar from "../../Components/Navbar.jsx";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/src/assets/hero.jpg')]">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>

        {/* Content */}
        <div className="relative container mx-auto flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            voluptatem, quia, voluptas, doloremque consequuntur velit
            perferendis.
          </p>
          
        </div>
      </section>
    </div>
  );
}

export default HomePage;
