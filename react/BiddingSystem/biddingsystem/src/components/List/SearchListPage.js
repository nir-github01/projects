import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UserListPage from './UserListPage';

const SearchListPage = () => {
  const [query, setQuery] = useState(); 
  const [users, setUsers] = useState([]);
  const [userslist, setUsersList] = useState([])
  
   

   let keys = ["firstName", "lastName", "email", "phone", "cities", "gender"];

  // useEffect(() => {
  
  //   let usersDetail = async() => {
  //          await axios.get(`http://localhost:8000/rout/get/v1?q=${ query}`)
  //          .then((resp) => {
  //               return resp;
  //          }).then((res) => {
  //             setUsersList(res.data)
  //          }).catch((err) => {
  //           console.log(err);
  //          })
  //   }
  
  //   usersDetail();

  // }, [query])

  // const Search = (users) => {
  //   return users.filter((item) => 
  //       keys.some((key) => item[key].toLowerCase().includes(query))
  //    );
  // }
  let handleSearch =(event) => {
    event.preventDefault();
    setQuery(event.target.value.toLowerCase());
    setUsers(event.target.value.toLowerCase());
  }
  return (

    <div>
        <div>
            <input 
              type='text'
              style={{width:"50%", margin:"auto"}}
              className='form-control'
              placeholder='search'
              name='search'
              onChange={handleSearch}

            />
        </div>
           <UserListPage query={query} users ={users} />
    </div>
  )
}

export default SearchListPage