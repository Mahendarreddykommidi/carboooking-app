import React, { useState } from "react";
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, Setimage] = useState("");
  const updateimage = async () => {
    user.image = URL.createObjectURL(image);
    Setimage("");
  };
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white max-w-20 md:max-w-60 w-full border-r border-borderColor ">
      <div className="group relative ">
        <label htmlFor="image" className="">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image
                ? user.image
                : "https://media.istockphoto.com/id/1131285202/photo/portrait-of-a-handsome-man.jpg?s=1024x1024&w=is&k=20&c=NcZXm6dcKQPzIFUiIL4ofF9HhhTAWA0AHQuOoulKkug="
            }
            alt=""
            className="h-16 w-16 md:h-20 md:w-20 mx-auto rounded-full"
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => Setimage(e.target.files[0])}
          />
          <div className="absolute top-0 bottom-0  right-0 left-0  rounded-full group-hover: flex items-center justify-center">
            <img src={assets.edit_icon} alt="Edit" className="h-6 w-6" />
          </div>
        </label>

        {image && (
          <button className="absolute top-0 right-0 px-2 rounded-lg p-2 gap-2 bg-primary/10 text-primary cursor-pointer">
            save{" "}
            <img
              src={assets.check_icon}
              width={13}
              alt=""
              onClick={updateimage}
            />
          </button>
        )}

        <p className="mt-4 mb-2 text-base md:text-lg font-semibold text-gray-800 text-center">
          {user?.name}
        </p>
        <div className="w-full mt-2">
          {ownerMenuLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={`relative flex items-center gap-3 w-full py-3 pl-4 my-1 rounded-lg transition-all duration-200 ${
                link.path === location.pathname
                  ? "bg-primary/10 text-primary font-semibold shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-primary"
              }`}
            >
              <img
                src={link.path === location.pathname ? link.coloredIcon : link.icon}
                alt=""
                className="h-5 w-5"
              />
              <span className="max-md:hidden">{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
