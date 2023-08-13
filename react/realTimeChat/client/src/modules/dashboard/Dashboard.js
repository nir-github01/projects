import React, { useState, useEffect } from "react";
import ProfileImage from "../../components/ProfileImage";
import UsersProfile from "../../components/UsersProfile";
import Chating from "../../components/Chating";

const Dashboard = () => {
       const [user,  setUser] = useState(JSON.parse(localStorage.getItem('user:details')));
       const [userConversation, setUserConversation] = useState([]);

       useEffect(() => {
         let loggedInUser = JSON.parse(localStorage.getItem("user:details"));
         let getConversation = async () => {
           let getResponse = await fetch(
             `http://localhost:8000/api/user/conversation/${loggedInUser._id} `,
             {
               method: "GET",
               headers: {
                 "Content-Type": "application/json",
               },
             }
           );
           let Conversation = await getResponse.json();
            setUserConversation(Conversation)
         
         };
         getConversation();
       }, []);

       let fetchMessages =async(conversationId)=> {
        let responseMessage = await fetch(`http://localhost:8000/api/user/message/${conversationId}`, {
                method:"GET",
                headers:{
                        "Content-Type":"application/json"
                }
        })
        let messages = await responseMessage.json();
        console.log(conversationId)
       }
  return (
    <div className="w-screen flex">
      <div className="w-[25%] h-screen border border-[#010b27] text-white text-white-500">
        <div className="mb-4">
          <ProfileImage id="text-justify ml-6" userName={user.fullName || user.name}/>
        </div>
        <hr />
        <div className="h-screen overflow-y-auto">
          <h3 className="text-justify text-xl p-5 mb-5">Message</h3>
          {userConversation.length > 0 ?  userConversation.map((userData, idx)=>{return (
                <div className="bg-[#172533] text-justify flex items-center p-2" key={idx} onClick={()=>fetchMessages(userConversation.conversationId)}>
                        <div>
                                <img
                                        className="cursor-pointer ml-2 rounded-full border borde-gray-light w-[30%]"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
                                        alt="image description"
                                />
                        </div>
                        <div className="relative right-[40%] ">
                                <span className=" cursor-pointer">{userData.user.fullName || userData.user.name}</span>
                                <br />
                                <span className=" "> Female</span>
                                <br />
                                <span className=" "> 23 </span>
                                <br />
                                <span className=" "> online </span>
                        </div>
                        <div>
                                <span className=" mr-8" id="">
                                        <svg
                                        className="w-8 h-8 bg-[#030120] p-1 text-white-800 shadow rounded-full  dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 18"
                                        >
                                        <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
                                        />
                                        </svg>
                                </span>
                        </div>
        
                </div>
                
                )}) : <div> No Conversations  </div>}
                <hr/>     
        </div>
      </div>
      <div className="w-[50%] h-screen  border-[#010b27] text-white text-white-500">
        <div>
          <div className="bg-[#01162b] rounded-full m-5 p-2 mb-5">
            <UsersProfile
              mainClass={"ml-6 flex"}
              user={"User Name"}
              pClass={"text-justify ml-5"}
              status={"online"}
              spanClass={" p-1  ml-auto mr-6 "}
              Connect={
                <svg
                  className="w-8 h-8 bg-[#030120] rounded-full shadow p-1 text-white-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
                  />
                </svg>
              }
              width={45}
            />
          </div>
        </div>
        <div>
          <Chating
            sender="Sender"
            reciever="reciever"
            senderTime="senderTime"
            recieverTime="recieverTime"
            leftTxt=" Hello bro "
            rightTxt="Hey bro .hello how are you and what ...."
          />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="search"
            id="search"
            className="static block m-auto w-[70%] p-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[45px]"
            placeholder="Type message........"
          />
          <button
            type="submit"
            className="static text-white absolute right-20 bottom-1  hover:bg-[#01162b]-800 focus:ring-4 focus:outline-none focus:ring-[#01162b]-300 font-lg rounded-lg text-sm px-4 py-2 dark:bg-[#01162b]-600 dark:hover:bg-[#01162b]-700 dark:focus:ring-[#01162b]-800 h-auto"
          >
            <svg
              className="rotate-90 w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-[25%] h-screen border border-[#010b27] text-white text-white-500">
        <div className="m-4 text-justify flex justify-center">
          <UsersProfile
            mainClass={"flex items-center text-sm m-2"}
            pClass={"ml-2"}
            user="Admin"
            status="online"
            width={45}
            height={45}
          />
        </div>
        <hr />
        <div className="h-screen overflow-y-scroll">
          <div className=" bg-[#070522] p-1  text-justify">
            <UsersProfile
              mainClass={"flex items-center mt-5 ml-6  text-[14px] m-3"}
              pClass={"ml-2"}
              user="user"
              status="online"
              width={35}
              height={35}
            />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
