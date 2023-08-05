import React from 'react'

const Chating = ({
  rightClass, leftClass, leftTxt, rightTxt 
}) => {
  return (
    <div className='flex justify-between items-between'>
        <div className=' mr-5 bg-[#132435] text-white mx-w-[40%] min-w-[10px] p-1 ml-10'>
          <p>{leftTxt}</p>
        </div>
        <div className='bg-[#3194f8] text-black mr-10 max-w-[40%] min-w-[40]'>
          <p>{rightTxt}</p>
        </div>
    </div>
  )
}

export default Chating