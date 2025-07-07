import React from "react";
import { assets } from "../assets/assets";

const Testimonials = () => {
  return (
    <>
      <div className="px-6 sm:px-16 lg:px-24 xl:44 mx-auto py-15">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl font-semibold">What Our Customers Say</h1>
          <p>
            Discover why discerning travelers choose StayVenture for their
            luxury accommodations around the world.
          </p>
        </div>
        <div>
            
        <div className="flex md:flex-row flex-col gap-5 py-20 px-10 mx-auto p">
          <div className="w-80 flex flex-col items-center border border-gray-300 p-10 rounded-lg">
            <img
              className="h-20 w-20 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="userImage1"
            />
            <h2 className="text-lg text-gray-900 font-medium mt-2">
              Donald Jackman
            </h2>
            <p className="text-sm text-gray-500">Graphic Designer</p>
            <div className="flex items-start justify-center mt-3 gap-1">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={assets.star_icon} alt="star" />
              ))}
            </div>
            <p className="text-center text-[15px] mt-3 text-gray-500">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
          </div>

          <div className="w-80 flex flex-col items-center border border-gray-300 p-10 rounded-lg">
            <img
              className="h-20 w-20 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="userImage2"
            />
            <h2 className="text-lg text-gray-900 font-medium mt-2">
              Richard Nelson
            </h2>
            <p className="text-sm text-gray-500">Content Creator</p>
            <div className="flex items-center justify-center mt-3 gap-1">
            {[...Array(5)].map((_, i) => (
                <img key={i} src={assets.star_icon} alt="star" />
              ))}
            </div>
            <p className="text-center text-[15px] mt-3 text-gray-500">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
          </div>

          <div className="w-80 flex flex-col items-center border border-gray-300 p-10 rounded-lg">
            <img
              className="h-20 w-20 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
              alt="userImage3"
            />
            <h2 className="text-lg text-gray-900 font-medium mt-2">
              James Washington
            </h2>
            <p className="text-sm text-gray-500">Co-founder</p>
            <div className="flex items-start justify-start mt-3 gap-1">
            {[...Array(5)].map((_, i) => (
                <img key={i} src={assets.star_icon} alt="star" />
              ))}
            </div>
            <p className="text-center text-[15px] mt-3 text-gray-500">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
          </div>
        </div>






        </div>

      </div>

    
    </>
  );
};

export default Testimonials;
