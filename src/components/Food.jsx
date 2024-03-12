import React, { useState } from 'react'
import { data } from '../data/Data'
const Food = () => {
   const [food, setfood] =useState(data)
//    filter burger pizza and etc
const filter=(category)=>{
    setfood(
        data.filter((item)=>{
            return item.category===category;
        })
    )


}
// filter price
const pricefilter=(price)=>{
    setfood(
        data.filter((item)=>{
            return item.price===price;
        })
    )


}

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* filter row */}
        <div className='flex flex-col lg:flex-row justify-beteen mt-10'>

        {/* filter type */}
        <div>
            <p className='font-bold text-gray-700 text-2xl'>Filter Type</p>
            <div className='flex justify-between flex-wrap gap-4'>
            <button onClick={()=>setfood(data)} className='border-orange-600 text-orange-600 rounded-lg hover:bg-black text-white p-6 '>All</button>
            <button onClick={()=>filter("burger")} className='border-orange-600 text-orange-600  hover:bg-black text-white p-6  rounded-md '>Burger</button>
            <button onClick={()=>filter("pizza")} className='border-orange-600 text-orange-600  hover:bg-black text-white p-6 rounded-md  '>Pizza </button>
            <button onClick={()=>filter("salad")} className='border-orange-600 text-orange-600  hover:bg-black text-white p-6  rounded-md '>Salad</button>
            <button onClick={()=>filter("chicken")} className='border-orange-600 text-orange-600  hover:bg-black text-white p-6  rounded-md '>Chickens</button>
            </div>
            

        </div>
        {/* fiter price */}
        <br />
        <div className='ml-10'>
            <p className='font-bold text-gray-700 text-2xl'>Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full gap-4'>
           < button onClick={()=>pricefilter('$')} className='border-orange-600 text-yellow-600 font-bold  hover:bg-black text-white p-6 rounded-md  '>$</button>
            <button onClick={()=>pricefilter('$')} className='border-orange-600 text-orange-600  hover:bg-black text-white p-6 rounded-md   '>$$</button>

            <button onClick={()=>pricefilter('$$$')} className='border-orange-600 text-orange-600   hover:bg-black text-white p-6  rounded-md '>$$$</button>
            <button onClick={()=>pricefilter('$$$$')} className='border-orange-600 text-orange-600  hover:bg-black text-white p-6  rounded-md  '> $$$$</button>
            </div>
           

            
 </div>
        </div>
        {/* display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {food.map((item,index)=>(
            <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration duration-300'>
                <img src={item.image} alt={item.name} 
                className='w-full h-[200px] object-cover rounded-t-lg'/>
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{item.name}</p>
                    <p>
                        <span className='bg-orange-500 text-white p-1'>{item.price}</span></p>
                </div>
            </div>
        ))}
            
        </div>

    </div>
  )
}

export default Food