import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router";


function UsersList(){
    const [usersdatalist, setUserDataList] = useState([]);
    //Navigation
    const navigate = useNavigate();
    const homePage =() => {
        navigate('/');
    }
  
    const usersDataList =() => {
        navigate('/signup');
    }
  
    useEffect(() => {
        const getUserDataList = async()=> {
        //     const getAdoptpet =axios.get("http://localhost:4000/adoptdata" + addAdopters._id );
        //     // const adopterList = await getAdoptpet.json();
        //     setAdoptPets(getAdoptpet.data)
            
        // }

        const getuserresponse = await fetch("http://localhost:8000/user", {
            method:'GET',
           });
           const getdata = await getuserresponse.json();
           setUserDataList(getdata);

         }
         getUserDataList();
    }, []);
    return (
        <>
            <div className="adoptPet-class">
              <h4>Users List </h4>
              <Button onClick={usersDataList}  className="me-4" variant="success">Add</Button>
              <Button onClick={homePage} variant="danger">Home </Button>
              
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Profession</th>
                            <th>Gender</th>
                            <th>Cities</th>
                            <th>Date Of Birth</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {usersDataList ? usersdatalist.map((user, idx)=>(
                    <tbody key={idx}>
                        <tr>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.Email}</td>
                            <td>{user.Phone}</td>
                            <td>{user.Profession}</td>
                            <td>{user.genders}</td>
                            <td>{user.cities}</td>
                            <td>{user.dateOfBirth}</td>
                            <td>
                                <Button variant="primary" className="me-2" onClick={usersDataList}>Add</Button>
                                <Button variant="success" className="me-2">Update</Button>
                                <Button variant="danger" className="me-2">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                    )) 
                    : <p>No User found</p>}
                    <tfoot>
                        <tr>
                            <td>Footer</td>
                        </tr>
                    </tfoot>
                </Table>

            </div>
            
        </>
    )
}

export default UsersList;