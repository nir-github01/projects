import { Table } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { data } from './Datatest';


const UserListPage = ({users, query}) => {

  const [usersdata, setUsersdata] = useState([]);

  const filterdata = data.filter((item) => { 
        if(query === ' ')
        {
          return item
        }else{
          return  item.text.toLowerCase().includes(query)
        }
      } )
      

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
          return (user.firstName.toLowerCase().includes(users) ||
                        user.lastName.toLowerCase().includes(users)||
                        user.email.toLowerCase().includes(users) ||
                        user.gender.toLowerCase().includes(users)
                        )
        }
      })
  return (
    <div>
          <h5>User List Page</h5>
          <ul>
             {
              filterdata.map((item) => {
                 return (
                  <div>
                  <li key={item.id}>{item.text}</li>
                  </div>
                  )
              })
             }
             </ul>
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
  )
}

export default UserListPage