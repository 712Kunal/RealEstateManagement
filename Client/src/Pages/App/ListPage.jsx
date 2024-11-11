import React from "react";
import Filter from "../../Components/Filter";

function ListPage() {
  return (
    <div className="ListPage min-h-screen flex relative inset-x-0 top-14">
      <div className="ListContainer basis-2/3">
        <div className="wrapper flex flex-col gap-12">
          <Filter />
          
        </div>
      </div>
      <div className="MapContainer basis-2/6"></div>
    </div>
  );
}

export default ListPage;
