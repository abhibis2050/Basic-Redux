import React from "react";
import bgImage from "../assets/1.jpg";
const ComponentOne = () => {
  return (
    <div>
      <div className="flex">

        <div className="w-1/2 border-4 border-black">
          <img src={"https://images.pexels.com/photos/4195324/pexels-photo-4195324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" />
        </div>
       
        <div className="h-screen justify-center items-center flex w-1/2 border-4 border-black">
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
          >
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentOne;
