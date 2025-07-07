import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center gap-3 px-6 md:px-16'>
      <h1 className='text-black font-bold text-4xl'>Never Miss a Deal</h1>
      <p className=' text-lg text-gray-600 font-medium'>Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
      <form className='flex items-center justify-between md:h-13 h-12 max-w-2xl   w-full  '>
        <input type="text"  placeholder='Enter your email id' className='border outline-none border-gray-300 h-full w-full border-r-0 text-gray-600  '/>
      <button type="submit" className="md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none" fdprocessedid="kct1wo">Subscribe</button>

      </form>
    </div>
  )
}

export default Newsletter