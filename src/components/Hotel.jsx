import React from 'react'
import ruppes from './image/ruppe.png.png'
import { dataMap } from './HotelData'

const Hotel = ({selectedSection}) => {


  return (

   <>

    <div className='z-0 mt-[180px] '>
       <div className='flex gap-5 flex-wrap justify-center' >
       {dataMap[selectedSection]?.map((val,index)=> 
             <div key={index}
              className='h-[55vh] w-80  shrink-0 overflow-hidden' >
             <div className='h-72 w-full rounded-2xl overflow-hidden' >
                 <img className='h-full w-full object-cover rounded-2xl' src={val.img}/>
             </div>
             <div className='h-6 w-fullflex items-center justify-start text-lg font-semibold capitalize'>
                <h2>{val.place}</h2>
             </div>
             <div className='h-6 w-full text-lg  items-center  text-zinc-700 justify-start capitalize'>
                <h2>{val.away}kilometres away</h2>
             </div>
             <div className='h-6 w-full text-lg text-zinc-700  items-center justify-start capitalize'>
                  <h2>{val.date}</h2>
             </div>
             <div className='h-12 w-full items-center justify-start text-lg capitalize gap-1 flex'>
                  <img className='h-4' src={ruppes}/>
                  <h1 className='font-semibold' >{val.price}</h1>
                  <h2 className='ml-2 text-zinc-700 ' >night</h2>
             </div>
             </div>
          )}
       </div>
    </div>

    </>
  )
}

export default Hotel

