import React, { useEffect, useState } from 'react'
// import FormPage from '../FormPage'
import { Button, Form } from 'react-bootstrap';
import { SipmentYearList } from './sipmentTime_Profess/SipmentYear';
import {citiesList} from "../location/Cities";
import { stateList } from '../location/States';
import { professionList, docList } from './sipmentTime_Profess/Profession';
import { MultiSelect } from "react-multi-select-component";
// import ValidationPage from './validationform/ValidationPage';


function SignUpPage() {

    const [signupform, setSignUpForm] = useState([]);
    const [tradingType, setTradingType]   = useState([]);
    const [gender, setGender]  = useState()
    const [sipmentYear, setSipmentYear] = useState();
    const [cities, setCities] = useState([]);
    const [investmentType, setInvestmentType] = useState();
    const [selected, setSelected] = useState([]);

    const [list, setList] = useState([]);
    const [isCheckedCity, setIsCheckedCity]   =useState();
    
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    //Merge Form
    const [mergeform, setMergeForm] = useState({});

    //Validation Form 
     const [errors, setErrors ] = useState({});
    
    const handleFormIpt = (event) => {
        setSignUpForm({
            ...signupform,
            [event.target.name]:event.target.value
        }); 
    }


    

    useEffect(() => {
       setList(citiesList)
    }, [list]);
    
  //Trading type Checkbox handling
    const handleCheckBox =(event)=>{
      let isChecked = event.target.checked;
      if(isChecked){
        setTradingType([...tradingType, event.target.value]);
      }else{
        setTradingType((prevdata) =>{
          return prevdata.filter((val) =>{
            return val != event.target.value
          })
        })
      }
    }
    const genderChange = (event) => {
               setGender(
               event.target.value
               );
    }

    const sipmentYearChange =(event) => {
       
       setSipmentYear(event.target.value); 
    }

    //Cities Handling

    const allCities = list.map((li) => li.value);
    const selectAllChanges =(event) => {
    let isCheckedAll = event.target.checked;
      if(!isCheckedCity){
        setCities([...cities, event.target.value])
      }
      if(isCheckedAll){
       setCities(list.map(li=> li.value));
      }else if(!isCheckedAll){
        setCities([])
    
      }else{
            setCities((prevCity) => {
          return prevCity.filter((val) =>{
            return val !== event.target.value;
          })
        })
      }
    }

    const citiesChanges = (event) => {
      //  isCheckedCity = event.target.checked;
       setIsCheckedCity(event.target.checked)
       if(isCheckedCity) {
        setCities([...cities, event.target.value])
       }else{
        setCities((prevData) => {
          return prevData.filter((val) => {
            return val !== event.target.value
          })
        })
       }
    }

    const investmentTypeChanges =(event) => {
      setInvestmentType(event.target.value)
    }

    const handleFileChanges =(event) =>{
      setSelectedFile({
        [event.target.name]: event.target.files[0]
      })
      setIsFilePicked(true)
    } 
    const signUpFormSubmit =(event) => {
        event.preventDefault();
        let formData = new FormData();
         let fval = formData.append('File', selectedFile);
    
        setMergeForm({
            ...signupform, tradingType: [...tradingType], gender, sipmentYear, cities:[...cities],
            investmentType, documents:[...selected], selectedFile
        });
        console.log(mergeform)

        console.log(Object.keys(mergeform))
    }
    
  return (
    <div>
        <div>
         <div className='main_div_container'>
            <Form  className='formcontainer' onSubmit={signUpFormSubmit}> 
                <div>
                    <label className='form-label col-sm-5'>
                        First Name <span className='errmsg' style={{color:'red'}}>*</span>
                        <input type='text' name='firstName' className='form-control' onChange={handleFormIpt} required/>
                    </label>
                    <label  className='form-label col-sm-5'>
                        Last Name <span className='errmsg' style={{color:'red'}}>*</span>
                        <input type='text' name='lastName'  className='form-control' onChange={handleFormIpt} required/>
                        </label>
                </div>
                <div>
                    <label className='form-label col-sm-5'>
                        Email <span className='errmsg' style={{color:'red'}}>*</span>
                        <input type='email' name='email'  className='form-control' onChange={handleFormIpt} required/>
                     
                    </label>
                    <label className='form-label col-sm-5'>
                        Phone <span className='errmsg' style={{color:'red'}}>*</span>
                        <input type='number' name='phone'  className='form-control' onChange={handleFormIpt} required/>
                    </label>
                </div>
                <div>
                    <label className='form-label col-sm-5'>
                        Password <span className='errmsg' style={{color:'red'}}>*</span>
                        <input type='text' name='password'  className='form-control' onChange={handleFormIpt} required/>
                    </label>
                    <label className='form-label col-sm-5'>
                        Confirm Password <span className='errmsg' style={{color:'red'}}>*</span>
                        <input type='text' name='confirmPassword'  className='form-control' onChange={handleFormIpt} required/>
                    </label>
                    {
                     signupform.password && signupform.confirmPassword ? 
                      signupform.password !== signupform.confirmPassword ?
                    <p className='lable' style={{color:"red"}}>
                      password dose not match
                    </p>
                    : ""
                    :""
                    }
                </div>
                <div>
                    <label className='form-label col-sm-5'>
                        Date Of Birth <span className='errmsg' style={{color:'red'}}>*</span>
                        <input type='date' name='dateOfBirth'  className='form-control' onChange={handleFormIpt} required/>
                    </label>
                </div>
                <div>
                <div><label>Current Address</label></div>
                    <label className='form-label col-sm-5'>
                     Address<span className='errmsg' style={{color:'red'}}>*</span>
                        <textarea type='text' name='current_address'  className='form-control'  style={{height:'100px', width:"500px"}} onChange={handleFormIpt} required/>
                        
                    </label>

                </div>
                <div>
                 <label className='form-label col-sm-5'>Satate <span className='errmsg' style={{color:'red'}}>*</span>
                    <select className='form-select' name='currState' onChange={handleFormIpt} required>
                       <option value="">Choose state</option>
                       { stateList.map((state, idx) => (
                       <option value={state.state}  key={idx}>{state.state}</option>
                       ))}
                    </select>
                 </label> 
                 <label className='form-label col-sm-5'>
                        Pin Code<span className='errmsg' style={{color:'red'}}>*</span>
                        <input type='number' name='current_pincode'  className='form-control' onChange={handleFormIpt} required/>
                  </label> 
                </div>
                <div>
               <div><label>Permanent Address</label></div> 
                    <label className='form-label col-sm-7'>
                        Address<span className='errmsg' style={{color:'red'}}>*</span>
                        <textarea type='text' name='Permanent_address' className='form-control'  style={{height:'100px', width:"500px"}}  onChange={handleFormIpt}/>
                    </label>
                </div>
                <div>
                 <label className='form-label col-sm-5'>Satate <span className='errmsg' style={{color:'red'}}>*</span>
                    <select className='form-select' name='permanent_state' onChange={handleFormIpt}>
                       <option value="">Choose state</option>
                       { stateList.map((state, idx) => (
                       <option value={state.state}  key={idx}>{state.state}</option>
                       ))}
                    </select>
                 </label> 
                 <label className='form-label col-sm-5'>
                        Pin Code <span className='errmsg' style={{color:'red'}}>*</span>
                        <input type='number' name='permanent_pincode'  className='form-control'  onChange={handleFormIpt}/>
                    </label> 
                </div>

                <div>
                   <div><label className='form-check-label col-sm-5'>
                        Gender<span className='errmsg' style={{color:'red'}}>*</span>
                    </label> </div>
                    <label className='form-check-label col-sm-2'>
                     Male :
                    <input type='radio' name='gender'  className='form-check-input ms-2'  value="Male" onChange={genderChange} checked={gender ? gender == 'Male' : ""}/>
                    
                    </label>
                    <label className='form-check-label col-sm-2'>
                     Female :
                    <input type='radio' name='gender'  className='form-check-input ms-2'  value="Female"  onChange={genderChange} checked={gender ? gender == 'Female' : ""}/>
                    </label>
                    <label className='form-check-label col-sm-2'>
                      Other :
                    <input type='radio' name='gender'  className='form-check-input ms-2'  value="Other"  onChange={genderChange} checked={gender ? gender == 'Other': ""}/>
                    </label>
                </div>
                <div>
                    <label className='form-select-label col-sm-5'>
                     Profession <span className='errmsg' style={{color:'red'}}>*</span>
                     <select className='form-select' name='profession' onChange={handleFormIpt}>
                        <option>Choose Profession</option>
                        { professionList.map((profession, idx) => (
                          <option key={idx} value={profession.pName}>{profession.pName}</option>
                        ))}
                     </select>
                     </label>
                     </div>
                     <div>
                     <label className='form-file col-sm-5'>
                       Documents <span className='errmsg'  style={{color:'red'}}>*</span>
                     <MultiSelect
                        options={docList}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Choose documents"
                      />
                     <select className='form-select mt-3' name='documents' onChange={handleFormIpt}>
                        <option>Choose Documents</option>
                        {docList.map((doc, idx) => (
                          <option name="document" value={doc.value} key={idx}> {doc.value}</option>
                        ))}
                     </select>
                     </label>
                </div>
                <div>
                    <div><label className='form-check-label'>Investment Type <span className='errmsg' style={{color:'red'}}>*</span></label></div>
                    <label className='form-label ms-2'>Equity
                       <input type='radio' name='investmentType' value="equity" className='form-check-input ms-2'  onChange={investmentTypeChanges} checked={investmentType ? investmentType ==='equity' : ""}/>
                    </label>
                    <label  className='form-check-label  ms-2'>Mutual Fund
                       <input type='radio' name='investmentType' value="mutualfund" className='form-check-input ms-2'  onChange={investmentTypeChanges} checked={investmentType ? investmentType ==='mutualfund' : ""}/>
                    </label>
                    <label className='form-check-label  ms-2 '>
                        Insurrance 
                        <input type='radio' name='investmentType' value="insurance" className='form-check-input ms-2'  onChange={investmentTypeChanges} checked={investmentType ? investmentType ==='insurance' : ""}/>
                    </label>
                </div>
                <div>
                    <div><label className='form-check-label ms-2  me-3'>Trading Type <span className='errmsg' style={{color:'red'}}>*</span></label></div>
                    <label className='form-check-label'>Intraday
                      <input type="checkbox" name='tradingType' className='form-check-input me-3 ms-2' value="Intraday" onChange={handleCheckBox} checked={tradingType ? tradingType.includes("Intraday") : ""}/>
                    </label>
                    <label className='form-check-label me-3 ms-2'>Derivative
                      <input type="checkbox" name='tradingType' className='form-check-input me-3 ms-2' value="Derivative" onChange={handleCheckBox} checked={tradingType ? tradingType.includes("Derivative") : ""} />
                    </label>
                    <label className='form-check-label ms-2 me-3'>Option Trading
                      <input type="checkbox" name='tradingType' className='form-check-input me-3 ms-2' value="Option_Trading" onChange={handleCheckBox} checked={tradingType ? tradingType.includes("Option_Trading") : ""}/>
                    </label>
                    <label className='form-check-label me-3 ms-2 '>Fut &  Call
                      <input type="checkbox" name='tradingType' className='form-check-input me-3 ms-2' value="Fut_and_call" onChange={handleCheckBox}  checked={tradingType ? tradingType.includes("Fut_and_call") : ""} />
                    </label>
                    <label className='form-check-label ms-2 me-3'>Other
                      <input type="checkbox" name='tradingType' className='form-check-input me-3 ms-2' value="Other" onChange={handleCheckBox} checked={tradingType ? tradingType.includes("Other") : ""}/>
                    </label>
                </div>
           
                <div>
                   <div> <label className='form-check-label col-sm-5'>Sipment Year <span className='errmsg' style={{color:'red'}}>*</span></label></div>
                   {
                    SipmentYearList ? SipmentYearList.map((sipmentYearVal, idx) => (
                    <label className='form-check-label ms-2 me-2' key={idx}>
                              {sipmentYearVal.label}
                            <input type='radio' name='sipmentYear' value={sipmentYearVal.value} className='form-check-input me-2 ms-2' onChange={sipmentYearChange} checked={sipmentYear ? sipmentYear == sipmentYearVal.value :""}/>
                    </label>
                    )) : ""}
               
                </div>
                 
                <div>
                   <div> <label>Sipment Amount <span className='errmsg' style={{color:'red'}}>*</span></label></div>
                    <label className='form-label col-sm-5'>
                        <input type='number' name='sipmentAmt' className='form-control' onChange={handleFormIpt}/>
                    </label>
                </div>

                <div>
                   <div> <label>Cities <span className='errmsg' style={{color:'red'}}>*</span></label></div>
                   <label className='form-check-label'>All
                 
                   <input 
                   type='checkbox'
                    name='selectAll'
                    value={allCities} 
                   className='form-check-input me-2 ms-2' 
                   onChange={selectAllChanges} 
                  //  checked={cities ? cities.includes(allCities) && !isCheckedCity : ""}
                   />
                   </label>
                   {citiesList ? citiesList.map((city, idx) => (
                    <label className='form-check-label me-2 ms-2' key={idx}>
                    {city.label}
                        <input type='checkbox' name='sipmentAmt' value={city.value} className='form-check-input me-2 ms-2' onChange={citiesChanges} checked={cities? cities.includes(city.value) : ""}/>
                    </label>
                    )) : ""}
                </div>

                <div>
                  <label htmlFor="documentsUpload" className='form-label col-sm-5'>Documents
                    <input type='file' id='documentsUpload' name='documentUpload'  className='form-control' onChange={handleFileChanges}/>
                  </label>
                </div>
                {isFilePicked ? (
                  <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                      lastModifiedDate:{' '}
                      {selectedFile.lastModifiedDate}
                    </p>
                  </div>
                ) : (
                  <p>Select a file to show details</p>
                )}
                <div>
                    <Button type='submit' variant='success' className='btn ms-3  me-3 col-sm-5' size='md'>
                      SIGNUP
                     </Button>
                    <Button variant='danger' className='btn col-sm-5' size='md'>CANCEL</Button>
                </div>
            </Form>
         </div>
    </div>

    </div>
  )
}


export default SignUpPage
