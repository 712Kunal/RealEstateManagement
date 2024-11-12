import React from "react";
import Filter from "../../Components/Filter";
import Card from "../../Components/Card";
import Map from "../../Components/Map";


function ListPage() {
  return (
    <div className="ListPage min-h-screen flex relative inset-x-0 top-14 m-3">
      <div className="ListContainer basis-7/12">
        <div className="wrapper flex flex-col gap-12">
          <Filter />
          <Card />
        </div>
      </div>
      <div className="MapContainer basis-5/12">
        <Map />
      </div>
    </div>
  );
}

export default ListPage;
