import React from 'react'

const Chating = ({
  rightClass, leftClass, leftTxt, rightTxt,
  sender, reciever, senderTime, recieverTime
}) => {
  return (
    <div className='m-6'>
        <div className=' ml-2 text-justify text-white w-[50%] '>
         <p className='text-justify text-sm text-[#a3020a] shadow p-[1px] bg-[#132435] w-fit p-1 mb-2 rounded-full'>{sender}</p>
          <p className='text-justify text-[12px] bg-[#132435] p-1 w-fit rounded-tr-xl rounded-bl-xl rounded-br rounded-br-lg'>{leftTxt}</p>
          <p className='text-center text-[#a3020a] text-sm bg-[#132435] w-fit p-1 mt-2 rounded-full '>{senderTime}</p>
        </div>
        <div className='w-[50%] p-1 text-black text-justify ml-[60%] '>
          <p className='text-justify text-sm text-[#a3020a] shadow bg-[#132435] w-fit p-1 mb-2 rounded-full'>{reciever}</p>
          <p className='text-justify text-[12px] bg-[#3194f8] w-fit p-[4px]  rounded-tl-xl rounded-bl-xl rounded-br rounded-br-xl'>{rightTxt}</p>
          <p className='text-center text-[#a3020a] text-sm bg-[#132435] w-fit p-1 mt-2 rounded-full'>{recieverTime}</p>
        </div>
    </div>
  )
}

export default Chating;