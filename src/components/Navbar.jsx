import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({SetshowLogin}) => {
  const location=useLocation()
  const [open,Setopen]=useState(false)

  const navigate=useNavigate()
  return (
    <div className={`px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between border-b py-4 border border-borderColor relative transition-all ${location.pathname==="/" && "bg-light"}    `}>
      <Link to="/">
        <img src={assets.logo} alt="" />
      </Link>
      <div className={` max-sm:w-full max-sm:h-screen max-sm:fixed max-sm:top-16 max-sm:border-t right-0 flex flex-col sm:flex-row 
        items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${location.pathname==="/"?"bg-light":"bg-white"} ${open ? "max-sm:translate-x-0":"max-sm:translate-x-full"}`}>
        {menuLinks.map((menu,index)=>(
          <div key={index}>
            <ul>
          <li><NavLink to={menu.path}>{menu.name}</NavLink></li>
            </ul>

          </div>
        ))}
     
      <div className='hidden lg:flex items-center text-sm gap-2 border-borderColor px-3 rounded-full max-w-56'>
        <input type="text" className='py-1.5 w-full bg-transparent outline-none placeholder-gray-500'  placeholder='Search products'/>
        <img src={assets.search_icon} alt="" />
        </div>
    
      <div className='flex max-sm:flex-col items-start sm:items-center gap-6'>
        <button onClick={()=>navigate('/owner/dashboard')} className='cursor-pointer '>Dashboard</button>
        <button onClick={()=>SetshowLogin(true)} className='cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull rounded-lg text-white'>Login</button>
      </div>
      
      </div>
      <div>
            <button className='sm:hidden cursor-pointer ' aria-label='Menu' onClick={()=>Setopen(!open)}>
        <img src={open ? assets.close_icon :assets.menu_icon} alt="" />

      </button>


      </div>
    
    


      </div>
    

    


  
  )
}

export default Navbar