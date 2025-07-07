import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";

const Cardetails = () => {
  const { id } = useParams();
  const [car, Setcar] = useState(null);
  const navigate = useNavigate();
  const currency = "$";

  useEffect(() => {
    Setcar(dummyCarData.find((car) => car._id === id));
  }, []);
  const onsubmithandler=async(e)=>{
    e.preventDefault()

  }

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 ">
      <button
        onClick={() => navigate("/cars")}
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
      >
        <img src={assets.arrow_icon} alt="" className="rotate-180" />
        Back to all cars
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2 my-10">
          <img
            src={car.image}
            alt=""
            className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
          />
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-semibold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {car.category} . {car.year}
              </p>
            </div>
            <hr className="border-borderColor my-6" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  icon: assets.users_icon,
                  text: `${car.seating_capacity} seats`,
                },
                { icon: assets.fuel_icon, text: car.fuel_type },
                { icon: assets.car_icon, text: car.transmission },
                { icon: assets.location_icon, text: `${car.location} ` },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-light p-4 rounded-lg"
                >
                  <img src={item.icon} alt="" className="h-8 w-8 mb-2" />
                  <span className="text-gray-700 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col mb-3 space-y-4">
              <p className="text-2xl font-medium">Description</p>
              <p className="text-gray-500  ">{car.description}</p>
            </div>
            <div className="">
              <h1 className="text-xl font-medium mb-3">Features</h1>
              <ul className="grid grid-cols-3 sm:grid-cols-2 gap-2">
                {[
                  "360 camera",
                  "GPS",
                  "Rear view Mirror",
                  "Bluetooth",
                  "Heated seats",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <img src={assets.check_icon} alt="" className="w-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={onsubmithandler} className="shadow-lg bg-white h-max sticky top-18 rounded-xl p-6 text-gray-500 space-y-3">
            <p className="flex items-center justify-between font-semibold text-2xl text-gray-800">
              {currency}
              {car.pricePerDay}
              <span className="text-gray-400 font-normal">per day </span>
            </p>
            <hr className="border border-borderColor my-6" />
            <div className="flex flex-col gap-2">
              <label htmlFor="">Pickup date</label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="border border-borderColor px-3 py-2 rounded-l rounded-lg"
                id="pickup-date"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Return date</label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="border border-borderColor px-3 py-2 rounded-l rounded-lg"
                id="pickup-date"
                required
              />
            </div>
            <button className="w-full bg-primary hover:bg-primary-dull transition-all py-3 font-medium text-white rounded-xl cursor-pointer">
              Book now
            </button>
            <p className="text-center">No credit card required to reserve</p>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <p>loading</p>
    </div>
  );
};

export default Cardetails;
