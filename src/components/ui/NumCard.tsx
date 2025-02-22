import React from 'react'

const NumCard = ({num, labal}: {num: string, labal: string}) => {
  return (
    <div className='w-full h-64 flex flex-col'>
        <div className='bg-gradient-to-b from-[#25003E] to-[#0A0010] w-full h-full'></div>
        <div className='bg-[#AC71C5] px-3 py-2'> 
            <p className='text-black font-black text-xl'>{num}</p>
            <p className='text-black font-medium'>{labal}</p>
        </div>
    </div>
  )
}

export default NumCard