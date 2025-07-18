import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";

const Hero = () => {
  const [pickuplocation, Setpickuplocation] = useState('');
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-light text-center ">
      <h1 className="text-4xl md:text-5xl font-semibold">
        Luxury cars on Rent
      </h1>
      <form
        className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full 
        w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">
          <div className="flex flex-col items-start gap-2">
            <select
              name="pickup-location"
              id="pickup-location"
              className=""
              required
              onChange={(e)=>Setpickuplocation(e.target.value)}
            >
              <option value="">Pickup location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="px-1 text-sm text-gray-600">
              {pickuplocation ? pickuplocation : "Please select location"}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="">Pickup date</label>
            <input type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className="tex-sm text-gray-500" required />

          </div>
                <div className="flex flex-col items-start gap-2">
            <label htmlFor="">Return date</label>
            <input type="date" id="return-date" min={new Date().toISOString().split('T')[0]} className="text-sm text-gray-500" />

          </div>
          <button className="flex items-center justify-center gap-1 px-9 py-3 bg-primary hover:bg-primary-dull text-white max-sm:mt-4 rounded-full cursor-pointer">
            <img src={assets.search_icon} alt="" className="brightness-300 hover:translate-y-1 transition duration-200 "/>
            Search
          </button>
        </div>
      </form>

      <img src={assets.main_car} alt="car" className="max-h-74" />
    </div>
  );
};

export default Hero;
