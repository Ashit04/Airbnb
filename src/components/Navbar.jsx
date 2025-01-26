import React from 'react'
import airbnblogo from './image/pngwing.com.png'
import search from './image/search_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg'
import world from './image/language_24dp_000_FILL0_wght400_GRAD0_opsz24.svg'
import menu from './image/menu_24dp_000_FILL0_wght400_GRAD0_opsz24.svg'
import profile from './image/account_circle_24dp_000_FILL0_wght400_GRAD0_opsz24.svg'

const Navbar = () => {
    const place = 'AnyWhere'
    const time = 'Any week'
    const add = 'Add guests'
  return (
    <>
      <div className="h-20 w-screen bg-white p-2 flex items-center px-14 pr-24 shadow-[0px_0px_3px_rgb(100,100,100,0.3)] justify-between fixed top-0 z-[1000]" >
          <div className='flex w-2xs' >
             <img className='h-[50px]' src={airbnblogo}/>
             <h1 className='text-[25px] -ml-4 mt-1 font-bold text-[#FF385C] -tracking-[1.5px] '>airbnb</h1>
          </div>
           <div className='w-[398px] h-[47px] px-[24px]'>
               <div className='w-full h-full rounded-full shadow-[0px_0px_5px_rgb(100,100,100,0.5)] px-[10px]  flex justify-start items-center'>
                    <div className='w-1/3 h-[25px] px-2 flex items-center justify-center border-r-1 border-zinc-300'>
                          <h2 className='font-semibold text-[15px]'>{place}</h2>
                    </div>
                    <div className='w-1/3 h-[25px] px-2 flex items-center justify-center border-r-1 border-zinc-300'>
                          <h2 className='font-semibold text-[15px]'>{time}</h2>
                    </div>
                    <div className='w-1/2 h-[25px] pl-4 flex items-center justify-between '>
                          <h2 className='font-semibold text-[15px] text-zinc-500'>{add}</h2>
                          <div className='h-[30px] w-[30px] bg-[#FF385C] rounded-full flex items-center justify-center' >
                            <img className='h-[20px] ' src={search}/>
                          </div>
                    </div>
               </div>
           </div>
           <div className='w-[270px] h-[50px]'>
                <div className='h-full flex justify-between items-center'>
                    <div className='px-2 py-1 rounded-full font-semibold '>
                         <h2 className='text-[15px] -tracking-[0.5px] text-zinc-800 ' >Airbnb your home</h2>
                    </div>
                    <div className='w-[30px]'>
                          <img className='h-[20px] opacity-80' src={world} />
                    </div>
                    <div className='flex h-[45px] justify-between items-center px-2 shadow-[0px_0px_5px_rgb(100,100,100,0.5)] rounded-full gap-3 '>
                         <div>
                            <img className='h-[18px]' src={menu}/>
                         </div>
                         <div>
                            <img className='h-[35px] opacity-70' src={profile}/>
                         </div>
                    </div>
                </div>
           </div>
      </div>
    </>
  )
}

export default Navbar