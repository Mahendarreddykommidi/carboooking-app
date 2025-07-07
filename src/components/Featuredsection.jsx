import React from 'react'
import { assets, dummyCarData } from '../assets/assets'
import Carcard from './Carcard'
import { useNavigate } from 'react-router-dom'

const Featuredsection = () => {
  const navigate=useNavigate()
  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-10'>Featured Cars</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 mt-18'>
            {dummyCarData.map((car) => (
                <div key={car._id}>
                    <Carcard car={car}  />
                    </div> 
            ))}
        </div>
        <div className='py-10'>
        <button onClick={()=>{navigate("/cars"),scrollTo(0,0)}} className="flex items-center justify-center gap-2 px-6 py-2 border border-borderColor bg-light hover:bg-gray-100 ">
        Explore all cars
        <img src={assets.arrow_icon} alt="" />
      </button>

        </div>
     
    </div>
  )
}

export default Featuredsection