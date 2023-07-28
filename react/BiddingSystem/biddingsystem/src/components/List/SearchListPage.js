import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UserListPage from './UserListPage';

const SearchListPage = () => {
  const [query, setQuery] = useState(); 
  const [users, setUsers] = useState([]);
  const [usersdata, setUsersdata] = useState([]);


  let handleSearch =(event) => {
    event.preventDefault();
    setQuery(event.target.value.toLowerCase());
    setUsers(event.target.value.toLowerCase());
  }

//Table Search Bar
useEffect(() => {
  let fetchUsers = async() => {
    await axios.get("http://localhost:8000/rout/get/v1")
    .then((resp) => {
        return resp;
    }).then((res) => {
      setUsersdata(res.data)
    }).catch((err) => {
    console.log(err);
    })
  }
  fetchUsers()
}, [])

let filterUsers = usersdata.filter((user) => {
if(users === " "){
return user;
}else{

let searchdata = user.firstName.toLowerCase().includes(users) ||
user.lastName.toLowerCase().includes(users)||
user.email.toLowerCase().includes(users) ||
user.gender.toLowerCase().includes(users)||
user.cities.toString().toLowerCase().includes(users)||
user.phone.toString().includes(users)


return searchdata
}
})

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

          <h5>Basic Search with using props</h5>
           <UserListPage query={query} users ={users} />

           <div>

           <h5>Table Search </h5>
           <Table striped>
            
            <thead>
              <tr>
                <th>First name </th><th>Last Name</th><th>Email</th><th>Phone</th>
                <th>Cities</th><th>Gender</th>
              </tr>
            </thead>
                <tbody>
                {
             filterUsers ? filterUsers.map((user) => {
              return (
              <tr>
              <td>{user.firstName} </td><td>{user.lastName}</td><td>{user.email}</td><td>{user.phone}</td>
                <td>{user.cities}</td><td>{user.gender}</td>
              </tr>
              )
            })
            : ""
                }
            </tbody>
          </Table>
           </div>
    </div>
  )
}

export default SearchListPage