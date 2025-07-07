import React, { useEffect, useState } from "react";
import Title from "../../components/owner/Title";
import { assets, dummyCarData } from "../../assets/assets";

const Managecars = () => {
  const [cars, Setcars] = useState([]);
  const fetchOwnercars = async () => {
    Setcars(dummyCarData);
  };
  useEffect(() => {
    fetchOwnercars();
  }, []);
  return (
    <div className="container mx-auto px-4">
      <div className="py-8 max-w-3xl">
        <Title
          title="Manage Cars"
          Subtitle="View all listed cars, update their details, or remove them from the booking platform"
        />
        <div className="mt-6 overflow-hidden rounded-lg border border-borderColor shadow-sm">
          <table className="w-full border-collapse text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="whitespace-nowrap px-4 py-3 font-medium">Car</th>
                <th className="whitespace-nowrap px-4 py-3 font-medium max-sm:hidden">Category</th>
                <th className="whitespace-nowrap px-4 py-3 font-medium">Price</th>
                <th className="whitespace-nowrap px-4 py-3 font-medium max-md:hidden">Status</th>
                <th className="whitespace-nowrap px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr
                  key={index}
                  className="border-t border-borderColor hover:bg-gray-50"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-4">
                      <img
                        src={car.image}
                        alt={`${car.brand} ${car.model}`}
                        className="h-12 w-12 rounded-md object-cover"
                      />
                      <div className="max-md:hidden space-y-1">
                        <p className="font-medium">
                          {car.brand} {car.model}
                        </p>
                        <p className="text-sm text-gray-500">
                          {car.seating_capacity} • {car.transmission}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 max-md:hidden">{car.category}</td>
                  <td className="px-4 py-3">{car.category}</td>
                  <td className="px-4 py-3 max-md:hidden">
                    <span 
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${car.isAvaliable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                    >
                      {car.isAvaliable ? "Available" : "Unavailable"}
                    </span>
                  </td>
                  <td className="flex items-center p-3">
                    <img src={car.isAvaliable ? assets.eye_close_icon :assets.eye_icon} alt="" className="cursor-pointer" />
                    <img src={car.isAvaliable ?assets.delete_icon :assets.addIcon} alt="" className="cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default Managecars;
