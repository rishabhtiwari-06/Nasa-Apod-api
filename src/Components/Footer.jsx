import React from "react";

const Footer = ({toggle,handleClick, data }) => {
  return (
    <>
      <div className="absolute bottom-3 flex flex-col justify-between w-full">
        <div className=" w-full">
          <h2 className="text-gray-300 ">Apod Project</h2>
          <div className="flex justify-between">
            <h1 className="z-20 font-bold sm:text-lg flex flex-col md:text-2xl lg:text-3xl" data={data}>
              {data?.title}
            </h1>
            <button onClick={handleClick} className="mr-5">
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
