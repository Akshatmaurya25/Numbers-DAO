// import React from 'react'
// import Image from "next/image";

// const NumCard = ({num, labal, img}: {num: string, labal: string, img: string}) => {
//   return (
//     <div className='w-full h-64 flex flex-col'>
//         <div className='bg-gradient-to-b from-[#180821] to-[#000000] w-full h-full flex justify-center items-center'>
//           <Image src={`/num${img}.png`} alt={"img"} height={500} width={500} ></Image>
//         </div>
//         <div className='bg-[#AC71C5] px-3 py-2'>
//             <p className='text-black font-black text-xl'>{num}</p>
//             <p className='text-black font-medium'>{labal}</p>
//         </div>
//     </div>
//   )
// }

// export default NumCard

import React from "react";
import Image from "next/image";

const NumCard = ({
  num,
  labal,
  img,
}: {
  num: string;
  labal: string;
  img: string;
}) => {
  return (
    <div className="w-full hover-shadow-box-animation-white transition-all duration-150 hover:scale-[1.01] h-64 flex flex-col rounded-md overflow-hidden">
      <div className="bg-white w-full h-full flex justify-center items-center">
        <Image src={`/${img}.png`} alt={"img"} height={135} width={135}></Image>
      </div>
      <div className="bg-zinc-300 px-3 py-2">
        <p className="text-black font-black text-xl">{num}</p>
        <p className="text-black font-medium">{labal}</p>
      </div>
    </div>
  );
};

export default NumCard;
