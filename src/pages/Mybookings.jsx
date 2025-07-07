import React, { useEffect, useState } from "react";
import { assets, dummyMyBookingsData } from "../assets/assets";

const Mybookings = () => {
  const [bookings, Setbookings] = useState([]);
  const currency = "$"; // Define currency symbol
  const getMybookings = async () => {
    Setbookings(dummyMyBookingsData);
  };
  

  useEffect(() => {
    getMybookings();
  }, []);
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">
      <div className="flex flex-col items-start">
        <h2 className="text-2xl md:text-3xl lg:text-4xl  font-bold text-center mb-5">
          My Bookings
        </h2>
        <p className="text-lg">View and manage your all car bookings</p>
      </div>
      <div>
      {bookings.map((booking, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12"
        >
          <div className="md:col-span-1">
            <img
              src={booking.car.image}
              alt=""
              className="w-full h-auto aspect-video object-cover"
            />
            <p className="text-lg font-medium mt-2">
              {booking.car.brand} {booking.car.model}
            </p>
            <p className="text-lg font-medium mt-2">
              {booking.car.year}. {booking.car.category} {booking.car.location}
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <p className="px-3 py-1.5 bg-light rounded">
                Booking #{index + 1}
              </p>
              <p
                className={`px-3 py1 text-xs ${
                  booking.status === "confirmed"
                    ? "bg-green-400/15 text-green-600"
                    : "bg-red-400/15 text-red-600"
                }`}
              >
                {booking.status}
              </p>
            </div>
            <div className="flex items-center gap-4 my-3">
              <img
                src={assets.calendar_icon_colored}
                alt=""
                className="w-4 h-4 mt-1"
              />
              <div className="flex flex-col  gap-3">
                <p>Rental period</p>
                <p>
                  {booking.pickupDate.split("T")[0]} To {" "}
                  {booking.returnDate.split("T")[0]}
                </p>
              </div>
            
            </div>
            
          </div>
              <div className="md:col-span-1 flex-1">
                <div className="text-sm text-gray-500 text-right">
                  <p>Total price</p>
                  <h1 className="text-2xl font-semibold text-primary">
                    {currency} {booking.price}
                  </h1>
                  <p>Booked on {booking.createdAt.split("T")[0]}</p>
                </div>
              </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Mybookings;
