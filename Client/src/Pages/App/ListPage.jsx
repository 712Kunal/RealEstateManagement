import React from "react";
import Filter from "../../Components/Filter";
import Card from "../../Components/Card";
import Map from "../../Components/Map";

function ListPage() {
  return (
    <div className="ListPage flex mt-16 mx-3 border-2">
      <div className="ListContainer basis-8/12">
        <div className="wrapper flex flex-col gap-12 overflow-y-scroll pr-5">
          <Filter />
          <Card />
        </div>
      </div>
      <div className="MapContainer basis-1/3 fixed top-16 right-3 h-[calc(100vh-4rem)] w-[calc(33.33%-12px)]">
        <Map />
      </div>
    </div>
  );
}

export default ListPage;
