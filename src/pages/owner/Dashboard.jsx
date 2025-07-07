import React, { useEffect, useState } from "react";
import Title from "../../components/owner/Title";
import { assets, dummyDashboardData } from "../../assets/assets";

const Dashboard = () => {
  const [data, Setdata] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    CompletedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });
  const DashboardCards = [
    { title: "Total cars", value: data.totalCars, icon: assets.carIconColored },
    {
      title: "Total Bookings",
      value: data.totalBookings,
      icon: assets.listIconColored,
    },
    {
      title: "Pending",
      value: data.pendingBookings,
      icon: assets.cautionIconColored,
    },
    {
      title: "Confirmed",
      value: data.CompletedBookings,
      icon: assets.listIconColored,
    },
  ];
  const currency = "$";
  useEffect(() => {
    Setdata(dummyDashboardData);
  }, []);
  return (
    <div className=" pt-10 px-10 flex-1">
      <Title
        title="Admin Dashboard"
        Subtitle="Monitor overall perfomance including total cars,bookings,revenue,
      and recent activities"
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6 max-w-3xl ">
        {DashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor "
          >
            <p className="text-xs text-gray-400">{card.title}</p>
            <p>{card.value}</p>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <img src={card.icon} alt="" className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-6 mb-8 w-full">
        {/* Recent Bookings Column */}
        <div className="flex-1 min-w-[300px] p-4 md:p-8 border border-borderColor rounded-md max-w-lg">
          <h1>Recent Bookings</h1>
          <p>Latest customer bookings</p>
          {(data.recentBookings || []).map((booking, index) => (
            <div
              key={index}
              className="mt-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <div>
                  <img
                    src={assets.listIconColored}
                    alt=""
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <p>
                    {booking.car.brand} {booking.car.model}
                  </p>
                  <p className="text-sm text-gray-500">
                    {booking.createdAt.split("T")[0]}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 ">
                <p>
                  {currency}
                  {booking.price}
                </p>
                <p>{booking.status}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Monthly Revenue Column */}
        <div className="flex flex-col p-4 md:p-8 mb-6 border border-borderColor rounded-md md:max-w-sm">
          <h1>Monthly revenue</h1>
          <p>Revenue for current month</p>
          <p className="text-3xl mt-6 font-semibold text-primary">{currency}{data.monthlyRevenue}</p>
     
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
