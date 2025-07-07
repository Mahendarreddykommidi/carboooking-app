import React, { useState } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets";

const Addcar = () => {
  const [image, setImage] = useState(null);
  const [car, Setcar] = useState({
    brand: "",
    model: "",
    year: 0,
    transmission: "",
    pricePerDay: 209,
    seating_capacity: 2,
    fuel_type: "",
    location: "",
    Description: "",
  });
  const currency = "$";
  const onSubmithandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Add new car"
        Subtitle="Fill in deatils to list a new car for booking,including pricing,availability,and car speciality"
      />
      <form
        onSubmit={onSubmithandler}
        className="flex flex-col gap-5 text-gray-500 text-xs mt-6 max-w-xl"
      >
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="car-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=""
              className="h-14 rounded cursor-pointer"
            />
            <input
              type="file"
              accept="/image/*"
              id="car-image"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <p className="text-sm text-gray-500">Upload picture of your car</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Brand */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-medium text-gray-700">Brand</label>
            <input
              type="text"
              placeholder="e.g. BMW, Mercedes, Audi"
              required
              className="px-3 py-2 border border-borderColor rounded-md focus:outline-primary"
              onChange={(e) => Setcar({ ...car, brand: e.target.value })}
            />
          </div>
          {/* Year */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-medium text-gray-700">Year</label>
            <input
              type="number"
              placeholder="e.g. 2023"
              required
              className="px-3 py-2 border border-borderColor rounded-md focus:outline-primary"
              onChange={(e) => Setcar({ ...car, year: e.target.value })}
            />
          </div>
          {/* Daily Price */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-medium text-gray-700">Daily price {currency}</label>
            <input
              type="number"
              placeholder="e.g. 100"
              required
              className="px-3 py-2 border border-borderColor rounded-md focus:outline-primary"
              onChange={(e) => Setcar({ ...car, pricePerDay: e.target.value })}
            />
          </div>
          {/* Category */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-medium text-gray-700">Category</label>
            <select
              onChange={(e) => Setcar({ ...car, category: e.target.value })}
              value={car.category}
              className="px-3 py-2 border border-borderColor rounded-md focus:outline-primary"
            >
              <option value="">Select a category</option>
              <option value="Sedan">Sedan</option>
              <option value="Suv">Suv</option>
              <option value="Van">Van</option>
            </select>
          </div>
          {/* Transmission */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-medium text-gray-700">Transmission</label>
            <select
              onChange={(e) => Setcar({ ...car, transmission: e.target.value })}
              value={car.transmission}
              className="px-3 py-2 border border-borderColor rounded-md focus:outline-primary"
            >
              <option value="">Select a transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-automatic">Semi-automatic</option>
            </select>
          </div>
          {/* Fuel Type */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-medium text-gray-700">Fuel type</label>
            <select
              onChange={(e) => Setcar({ ...car, fuel_type: e.target.value })}
              value={car.fuel_type}
              className="px-3 py-2 border border-borderColor rounded-md focus:outline-primary"
            >
              <option value="">Select a fuel type</option>
              <option value="Gas">Gas</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
            </select>
          </div>
          {/* Car Location */}
          <div className="w-130 max-w-3xl">
            <div className="flex flex-col w-full ">
              <label className="mb-1 font-medium text-gray-700">Car location</label>
              <select
                onChange={(e) => Setcar({ ...car, location: e.target.value })}
                value={car.location}
                className="px-3 py-2 border w-full border-borderColor rounded-md focus:outline-primary"
              >
                <option value="">Select Car location</option>
                <option value="New york">New york</option>
                <option value="Los angels">Los angels</option>
                <option value="Houston">Houston</option>
                <option value="Chicago">Chicago</option>
              </select>
            </div>
          </div>
     

        </div>
        <div className="flex flex-col w-full">
            <label className="mb-1 font-medium text-gray-700">Year</label>
            <textarea
              type="number"
              placeholder="e.g.Bmw,Mercedes,Audi 2023"
              required
              rows={5}
              className="px-3 py-2 border border-borderColor rounded-md focus:outline-primary"
              onChange={(e) => Setcar({ ...car, year: e.target.value })}
            />
          </div>
        
      </form>
      <div className="flex items-center  py-2">
   
            <button className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2">
            <img src={assets.tick_icon} alt="" className=""/>
              Add car
            </button>
          </div>
       
    </div>
  );
};

export default Addcar;
