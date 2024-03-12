import React from 'react'
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FaJediOrder } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";


const Navbar = () => {
    const [nav ,setnav]=useState(false);
  return (
    <div className='max-w-[1640px] flex items-center justify-between mx-auto py-5'>
        {/* {left side} */}
        <div className='flex items-center'>
        <div onClick={()=>setnav(!nav)} className='cursor-pointer'>
        <CiMenuBurger size={30} />
        </div>
        <h1 className='text-2xl sm:3xl lg:4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='bg-black text-white rounded-full p-2 cursor-pointer'>Delivery</p>
            <p className='p-2 cursor-pointer'>Pickup</p>
        </div>
        </div>
        {/* {search input} */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:[500px]'>
        <FaSearch  size={20}/>
        <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search Food' name="" id="" />
        </div>
        {/* cart button */}
       <button className='bg-gray-200 p-4 rounded-full hidden md:flex items-center py-2'>
       <FaCartShopping />
       </button>
        
 {/* mobile <menu></menu> */}
 {/*o overlay */}
 {
    nav ?<div className=' bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
    </div> :""
 }
 
{/* side drawer menu */}
<div className={nav ?'fixed top-0 left-0 w-[360px] h-screen bg-white z-10 duration-300':'fixed top-0  w-[360px] h-screen bg-white left-[-100%] z-10 duration-300'}>
<IoCloseSharp onClick={()=>setnav(!nav)} className='absolute right-4 top-4 cursor-pointer' size={30} />
<h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
<nav>
    <ul className='flex flex-col p-4 text-gray-800'>
        <li className='text-xl flex py-4 font-bold '><FaJediOrder size={25} className='mr-4' />Orders</li>
        <li className='text-xl flex py-4 font-bold'><FaHeart  size={25} className='mr-4'/>Favourites</li>
        <li className='text-xl flex py-4 font-bold'><FaWallet size={25} className='mr-4' />Wallet</li>
        <li className='text-xl flex py-4 font-bold'><IoMdHelpCircle size={25} className='mr-4' /> Help</li>
        <li className='text-xl flex py-4 font-bold'><FaPaperPlane size={25} className='mr-4' />Permotions</li>
        <li className='text-xl flex py-4 font-bold'><SiYoutubestudio size={25} className='mr-4' />Best One</li>
        <li className='text-xl flex py-4 font-bold'><FaUserFriends size={25} className='mr-4'  />Invite Friends</li>
    </ul>
</nav>
</div>
 </div>
  
  )
}

export default Navbar