import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Table from 'react-bootstrap/Table';
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

      
    useEffect(() => {

        let fetchAdoptData =async() =>{
            let fetchresponse = await fetch("http://localhost:4000/adoptdata", {
                method:"GET"
            });
            let getData =await  fetchresponse.json();
            setAdoptPets(getData);
        // axios.get("http://localhost:4000/adoptdata").then(res => {
        //     const getData = res.data;
        //     setAdoptPets(getData);
            console.log(getData);
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
        }
        fetchAdoptData()

      }, [])

    let handleDelete =async () => {

        // axios.delete("http://localhost:4000/adopt/delete/:id")
        // .then(res => console.log(res.data))
        // .catch(error => console.error(error));
        axios.delete(
            "http://localhost:4000/adopt/delete/")
        .then((res) => {
          if (res.status === 200) {
            alert("Student successfully deleted");
            window.location.reload();
          } else Promise.reject();
        })
        .catch((err) => console.log(err));
    
        // let deleteResponse = await fetch("http://localhost:4000/adopt/delete/:id", {
        //   method:"DELETE"
        // }).then(res => res.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error));


}

    return (
        <>
            <div className="adoptPet-class">
              <h4>Pet Adopter List </h4>
              <Button onClick={addAdopters}  className="me-4 mt-3 mb-2" variant="success">Add + </Button>
              <Button onClick={homePage} variant="danger" className="mt-3 mb-3">Home </Button>
              
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
                                <Button variant="danger" className="me-2" onClick={handleDelete}>Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                    )) 
                    : 
                    <tfoot>
                        <tr>
                          <th>No data founds</th>
                        </tr>
                    </tfoot>
                    }
                </Table>

            </div>
            
        </>
    )
}

export default AdoptPetList;


