import React from 'react'

const Headlinecard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='text-3xl text-white font-bold px-2 pt-4'>Sun's out Bogo's out</p>
                <p className='text-xl text-white font-bold px-2 pt-4'>Through 8/24</p>
                <button className='bg-white border-white text-black mx-2 absolute bottom-4 text-2xl font-bold rounded-lg px-2 '>Ordered Now</button>

            </div>
            <img className='max-h-[160px] md: max-h[200px ] w-full object-cover rounded-xl ' src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
         {/* card */}
         <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='text-3xl text-white font-bold px-2 pt-4'>Sun's out Bogo's out</p>
                <p className='text-xl text-white font-bold px-2 pt-4'>Through 8/24</p>
                <button className='bg-white border-white text-black mx-2 absolute bottom-4 text-2xl font-bold rounded-lg px-2 '>Ordered Now</button>

            </div>
            <img className='max-h-[160px] md: max-h[200px ] w-full object-cover rounded-xl ' src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
         {/* card */}
         <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='text-3xl text-white font-bold px-2 pt-4'>Sun's out Bogo's out</p>
                <p className='text-xl text-white font-bold px-2 pt-4'>Through 8/24</p>
                <button className='bg-white border-white text-black mx-2 absolute bottom-4 text-2xl font-bold rounded-lg px-2 '>Ordered Now</button>

            </div>
            <img className='max-h-[160px] md: max-h[200px ] w-full object-cover rounded-xl ' src="https://images.pexels.com/photos/699544/pexels-photo-699544.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
    </div>
  )
}

export default Headlinecard