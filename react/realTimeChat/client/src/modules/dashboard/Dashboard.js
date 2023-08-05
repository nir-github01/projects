import React from 'react'
import ProfileImage from '../../components/ProfileImage'
import UsersProfile from '../../components/UsersProfile'
import Chating from '../../components/Chating'

const Dashboard = () => {
  return (
    <div className='w-screen flex'>
               <div className='w-[25%] h-screen border border-white text-white text-white-500'>
                      <div className='mb-4'>
                             <ProfileImage id='text-justify ml-6' />
                      </div>
                      <hr/>
                      <h3 className='text-justify text-xl p-5 mb-5'>Message</h3>
                      <div className='bg-[#172533]'>
                           <UsersProfile mainClass={'flex p-3 justify-around items-center'} pClass={'text-justify ml-3'} spanClass={'mx-auto cursor-pointer text-justify text-blue-600 bg-white rounded-full p-2'} Connect='Call' width={45} height={45} user='user Nmae' status='status:online' age='age:23' gender='gender:Male'/>
                </div>
               </div>
                <div className='w-[50%] h-screen border border-white text-white text-white-500'>
                    <div className='bg-[#01162b] rounded-full m-5 p-2'>
                       <UsersProfile 
                             mainClass={'flex items-center ml-10'} 
                             pClass={'text-justify ml-4'}
                             spanClass={'ml-[50%] cursor-pointer text-justify text-blue-600 bg-white rounded-full p-2'}
                             Connect='Call' 
                             width={50}
                             height={50}
                            user='userName'
                            status='online'

                          />
                    </div>
                    <div>
                      <Chating  leftTxt=' Hello bro how are you ............................................. ' rightTxt='Hey bro how are you..........................................'/>
                    </div>
                </div>
               <div className='w-[25%] h-screen border border-white text-white text-white-500'></div>

    </div>
  )
}

export default Dashboard