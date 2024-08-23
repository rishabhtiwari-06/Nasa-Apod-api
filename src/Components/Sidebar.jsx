import React from "react";

const Sidebar = ({ handleClick, data }) => {
  return (
    <div className="madrid fixed p-2 pl-3 bg-gray-800 flex flex-col top-0 border justify-center items-center border-red-200 w-2/3 md:w-1/3 right-0 z-10 gap-1">
      <div className="sidebar-con">
        <h1 className="text-xl md:text-3xl font-bold">{data?.title}</h1>
        <div className="flex flex-col gap-1 mt-2">
          <h2 className="md:text-xl font-semibold">Description</h2>
          <p>{data?.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
