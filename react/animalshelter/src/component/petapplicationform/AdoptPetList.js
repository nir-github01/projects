import axios from "axios";
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UpdateAdoptForm from "./UpdateAdoptForm";


function AdoptPetList(){
    //Navigation

    const navigate = useNavigate();
    const homePage =() => {
        navigate('/');
    }
  
    const addAdopters =() => {
        navigate('/adopt');
    }
    // const updateAdoptForm = () => {
    //     navigate("/update")
    // }

    const [adoptpets, setAdoptPets] = useState([]);
    const [updateadopts, setUpdateAdopts] = useState([])



    useEffect(() => {
        const getAdoptPetlist = async()=> {
        const getresponse = await fetch("http://localhost:4000/adoptdata", {
            method:'GET',
           });
           const getdata = await getresponse.json();
           setAdoptPets(getdata);

     }
        getAdoptPetlist();
    }, [adoptpets]);

    return (
        <>
            <div className="adoptPet-class">
              <h4>Pet Adopter List </h4>
              <Button onClick={addAdopters}  className="me-4" variant="success">Add</Button>
              <Button onClick={homePage} variant="danger">Home </Button>
              
                <Table striped bordered hover>
              
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Pet Type</th>
                            <th>Breed Type</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {adoptpets ? adoptpets.map((adopter, idx)=>(
                    <tbody key={idx}>
                        <tr>
                            <td>{adopter._id}</td>
                            <td>{adopter.FirstName}</td>
                            <td>{adopter.LastName}</td>
                            <td>{adopter.Email}</td>
                            <td>{adopter.Phone}</td>
                            <td>{adopter.PetType}</td>
                            <td>{adopter.BreedType}</td>
                            <td>{adopter.Password}</td>
                            <td>
                                <Button variant="primary" className="me-2">Add</Button>
                               <Link to={"/adoptpets/update/" + adopter._id}>
                                   <Button variant="success" className="me-2">Update</Button>
                               </Link>
                                <Button variant="danger" className="me-2">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                    )) 
                    : <p>No Adapters found</p>}
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

export default AdoptPetList;


