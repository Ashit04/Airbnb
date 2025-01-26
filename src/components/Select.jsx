import React from 'react'
import { data } from './HotelData';

const Select = ({ setSelectedSection }) => {

  return (
    <div className='mt-[80px] fixed top-0 lef-0 w-full z-[900] bg-white' >
        <div className='w-full h-[80px] shadow-[0px_2px_3px_rgb(100,100,100,0.3)] flex justify-center items-center'>
            {data.map((val,index) => (
              <div key={index}
              className= 'h-[95%] w-[100px] flex flex-col justify-center items-center opacity-60 hover:opacity-90 '
                 onClick={() => {
                setSelectedSection(val.sectionKey);
                }}
                >
                 <div className='h-[30px] w-[30px] overflow-hidden'>
                    <img className='object-center ' src={val.img}/>
                 </div> 
                  <h2 className='h-[20%] text-[13px] tracking-tight font-semibold ' >{val.section}</h2>
              </div>
              ))}
        </div>
    </div>
  );
};

export default Select