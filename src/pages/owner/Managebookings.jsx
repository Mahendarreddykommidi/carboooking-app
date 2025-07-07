import React, { useEffect, useState } from 'react'
import Title from '../../components/owner/Title'
import { dummyMyBookingsData } from '../../assets/assets';

const Managebookings = () => {
    const [bookings, Setbookings] = useState([]);
    const fetchMybookings = async () => {
      Setbookings(dummyMyBookingsData);
    };
    useEffect(() => {
      fetchMybookings();
    }, []);
    const currency="$"
  return (
    <div>
           <div className=" px-4 pt-10 md:px-10 flex-1">
      <Title
        title="Manage Bookings"
        Subtitle="Track all customer bookings, approve or cancel requests, and manage booking statuses"
      />
      <div className=' max-w-3xl w-full mt-6 overflow-hidden rounded-lg border border-borderColor shadow-sm'>

      <table className="w-full border-collapse text-left text-sm text-gray-600 ">
        <thead className="text-gray-500">
          <tr>
            <th className='p-3 font-medium'>Car</th>
            <th className='p-3 font-medium max-md:hidden'>Date range</th>
            <th className='p-3 font-medium'>Total</th>
            <th className='p-3 font-medium  max-md:hidden'>Payment</th>
            <th className='p-3 font-medium'>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking,index)=>(
            <tr key={index} className='border border-t border-borderColor px-3 py-2'>
               <td className="p-3 flex items-center gap-3">
                  
                      <img
                        src={booking.car.image}
                      alt=''
                        className="h-12 w-12 rounded-md object-cover"
                      />
                    <p>{booking.car.brand}{booking.car.model}</p>
                     
 
              </td>
              <td className='p-3 max-md:hidden' >{booking.createdAt.split("T")[0]} to {booking.returnDate.split("T")[0]}</td>
               <td className='p-3'>{currency}{booking.price}</td>
               <td className='p-3 max-md:hidden'>
                <span className='bg-gray-100 px-3 py-1 rounded-full text-xs'>Offline</span>
               </td>
               <td className="p-3">
                {booking.status==="pending" ?(
                  <select value={booking.status} className='px-2 py-1.5 mt-1 text-gray-500 border border-borderColor rounded-md outline-none'>
                    <option value="pending">Pending</option>
                    <option value="pending">Cancelled</option>
                    <option value="pending">Confirmed</option>

                  </select>
                ): (
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status==='confirmed' ? 'bg-green-100 text-green-500' :"bg-red-100 text-red-500"}`}>
                    {booking.status}
                  </span>
                )}
               </td>
            </tr>

          ))}

        </tbody>

      </table>

      </div>

      
      </div>

    </div>
  )
}

export default Managebookings