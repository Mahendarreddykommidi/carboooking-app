import React, { useState } from "react";
import { assets, dummyCarData } from "../assets/assets";
import Carcard from "../components/Carcard";

const Cars = () => {
  const [input,Setinput]=useState('')
  return (
    <div>
      <div className="flex flex-col items-center py-20 bg-light max-md:px-4 ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-10">
          Available Cars
        </h2>
        <p className="text-gray-600 text-md font-semibold">
          Browse our selection of premium vehicles available for your next
          adventure
        </p>

        <div className="flex items-center bg-white max-w-140 mt-6 w-full h-12 rounded-full shadow px-5">
          <img src={assets.search_icon} alt="" className="w-4.5 h-4.5 mr-2" />
          <input
            type="text"
            placeholder="Search by make,model features"
            className="w-full h-full outline-none"
            onChange={(e)=>Setinput(e.target.value)}
            value={input}
          />
          <img src={assets.filter_icon} alt="" className="w-4.5 h-4.5 mr-2" />
        </div>
      </div>
       <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        
        <p className="text-lg font-semibold text-gray-400">Showing {dummyCarData.length} cars</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 mt-18'>
            {dummyCarData.map((car) => (
                <div key={car._id}>
                    <Carcard car={car} />
                    </div> 
            ))}
        </div>
      
    


       </div>
    </div>
  );
};

export default Cars;
