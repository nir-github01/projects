import React, { useState } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

//Create Components 
const CreateStudent = () => {
    const [formValues, setFormValues] = useState({
        name: " ",
        email: "",
        rollno: ""
    });

    const onSubmit = studentObject => {
        axios.post(
            'http://localhost:4000/students/create-student',
       studentObject )
       .then(res => {
        if(res.status === 200){
        alert("Student successfully created")
        }else{
            Promise.reject()
        }   
    })
    .catch(err => alert("Something went wrong"))
    }
    return (
        <>
         <StudentForm initialValues = {formValues} onSubmit= {onSubmit} 
         enableReinitialize>

         Create Student
         </StudentForm>
        </>
    )
}

export default CreateStudent;