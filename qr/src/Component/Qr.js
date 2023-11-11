import React from 'react';
import scanner from '../images/iqr.png'

function Qr() {
  return (
    <div>
<div className='bg-white h-max rounded-md  ' >
          <div className=' '>
            <img className='rounded-xl ' src={scanner}  alt='QR'></img>
          </div>
          <div className='pt-3 '>
            <div className='text-[15px] font-bold pt-3  text-center '>Imporve your frontend skill by creating projects</div>
            <p className=' pt-3  text-xs text-center text-gray-400'>Scan the QR code to visit Frontend Mentor and take your coding skill to the next level</p>
          </div>
        </div>

    </div>
  )
}

export default Qr