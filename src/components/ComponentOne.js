import React from "react";

const ComponentOne = () => {
  return (
    <div>
      <div className="h-screen justify-center items-center flex">
        <div
          className="w-2/5 h-1/5
          xs:w-2/5
          sm:w-3/5
          bg-red-900
          xs:bg-yellow-300
           sm:bg-blue-600
          md:bg-red-500
           lg:bg-green-500
           xl:bg-purple-950
           2xl:bg-black
           "
           
        ></div>
      </div>
      <button className="btn-primary">add button</button>
    </div>
  );
};

export default ComponentOne;
