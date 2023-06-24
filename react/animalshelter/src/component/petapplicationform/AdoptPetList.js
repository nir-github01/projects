import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router";


function AdoptPetList(){
    //Navigation

    const navigate = useNavigate();
    const homePage =() => {
        navigate('/');
    }
  
    const addAdopters =() => {
        navigate('/adopt');
    }

    const [adoptpets, setAdoptPets] = useState();



    useEffect(() => {
        const getAdoptPetlist = async()=> {
        //     const getAdoptpet =axios.get("http://localhost:4000/adoptdata" + addAdopters._id );
        //     // const adopterList = await getAdoptpet.json();
        //     setAdoptPets(getAdoptpet.data)
            
        // }

        const getresponse = await fetch("http://localhost:4000/adoptdata", {
            method:'GET',
           });
           const getdata = await getresponse.json();
           setAdoptPets(getdata);

     }
        getAdoptPetlist();
    }, []);
    return (
        <>
             <div className="adoptPet-class">
              <h4>Pet Adopter List </h4>
              <Button onClick={addAdopters}  className="me-4" variant="success">Add</Button>
              <Button onClick={homePage} variant="danger">Home </Button>
              
              <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Pet Type</th>
                    <th>Breed Type</th>
                    <th>Password</th>
                    <th>Action</th>
                </thead>
                <tbody>
                {/* <td>{JSON.stringify(adoptpets)}</td> */}
                    {/* {
                     adoptpets.map((adopter)=>
                        <div>
                        <td>{adopter.FirstName}</td>
                        <td>{adopter.LastName}</td>
                        <td>{adopter.Email}</td>
                        <td>{adopter.Phone}</td>
                        <td>{adopter.PetType}</td>
                        <td>{adopter.BreedType}</td>
                        <td><Button>Add</Button></td>
                        <td><Button>Update</Button></td>
                        <td><Button>Delete</Button></td>
                        </div>
                     )} */}
                     <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Pet Type</td>
                    <td>Breed Type</td>
                    <td>Password</td>
                    <td>Action</td>
                </tbody>
              </table>

             </div>
            
        </>
    )
}

export default AdoptPetList;


