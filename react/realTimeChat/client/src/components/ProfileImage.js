import React from 'react'

const ProfileImage = ({src, alt, id, className, accountId}) => {
  return (
    <div className='flex justify-center items-center p-4 cursor-pointer'>
            <img className="w-[25%] rounded-full border borde-gray-light " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' alt="image description"></img>
            <div>
            <span className='relative top-1 left-2 text-[16px]'  >User name</span>
            <p className='relative top-2 left-2 text-[14px]'  >My account</p>
            </div>
    </div>
  )
}

export default ProfileImage