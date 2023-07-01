import React, { useEffect, useState } from 'react'
// import FormPage from '../FormPage'
import { Button, Form } from 'react-bootstrap';
import { SipmentYearList } from './sipmentTime_Profess/SipmentYear';
import {citiesList} from "../location/Cities";
import { stateList } from '../location/States';
import { professionList, docList } from './sipmentTime_Profess/Profession';
import { MultiSelect } from "react-multi-select-component";


function SignUpPage() {
    const [signupform, setSignUpForm] = useState([]);
    const [tradingType, setTradingType]   = useState([]);
    const [mergeform, setMergeForm] = useState({});
    const [gender, setGender]  = useState()
    const [sipmentYear, setSipmentYear] = useState();
    const [cities, setCities] = useState([]);
    const [investmentType, setInvestmentType] = useState();
    const [selected, setSelected] = useState([]);

    const [list, setList] = useState([]);
    const [isCheckedCity, setIsCheckedCity]   =useState();
    
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
           
        console.log("isCheckedAll"+!isCheckedAll);
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
    const signUpFormSubmit =(event) => {
        event.preventDefault();
        setMergeForm({
            ...signupform, tradingType: [...tradingType], gender, sipmentYear, cities:[...cities],
            investmentType, documents:[...selected]
        });   
    }
    
  return (
    <div>
        <div>
         <div className='main_div_container'>
            <Form  className='formcontainer' onSubmit={signUpFormSubmit}> 
                <div>
                    <label className='form-label'>
                        First Name :
                        <input type='text' name='firstName' className='form-control' onChange={handleFormIpt} required/>
                    </label>
                    <label  className='form-label'>
                        Last Name :
                        <input type='text' name='lastName'  className='form-control' onChange={handleFormIpt} />
                      
                    </label>
                </div>
                <div>
                    <label className='form-label'>
                        Email :
                        <input type='email' name='eamil'  className='form-control' onChange={handleFormIpt} />
                     
                    </label>
                    <label className='form-label'>
                        Phone :
                        <input type='number' name='phone'  className='form-control' onChange={handleFormIpt} />
                    </label>
                </div>
                <div>
                    <label className='form-label'>
                        Password :
                        <input type='text' name='password'  className='form-control' onChange={handleFormIpt} />
                    </label>
                    <label className='form-label'>
                        Confirm Password :
                        <input type='text' name='confirmPassword'  className='form-control' onChange={handleFormIpt} />
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
                    <label className='form-label'>
                        Date Of Birth :
                        <input type='date' name='dateOfBirth'  className='form-control' onChange={handleFormIpt} />
                    </label>
                </div>
                <div>
                <div><label>Current Address</label></div>
                    <label className='form-label'>
                     Address:
                        <textarea type='text' name='address'  className='form-textarea' onChange={handleFormIpt} />
                        
                    </label>
                    <label className='form-label'>
                        Pin Code:
                        <input type='number' name='pincode'  className='form-control' onChange={handleFormIpt} />
                    </label>
                </div>
                <div>
                 <label className='form-label'>Satate
                    <select className='form-select' name='state' onChange={handleFormIpt}>
                       <option value="">Choose state</option>
                       { stateList.map((state, idx) => (
                       <option value={state.state}  key={idx}>{state.state}</option>
                       ))}
                    </select>
                 </label>  
                </div>
                <div>
               <div><label>Permanent Address</label></div> 
                    <label className='form-label'>
                        Address:
                        <textarea type='text' name='address' className='form-textarea'  onChange={handleFormIpt}/>
                    </label>
                    <label className='form-label'>
                        Pin Code :
                        <input type='number' name='pincodePerAdd'  className='form-control'  onChange={handleFormIpt}/>
                    </label>
                </div>
                <div>
                 <label className='form-label'>Satate
                    <select className='form-select' name='state' onChange={handleFormIpt}>
                       <option value="">Choose state</option>
                       { stateList.map((state, idx) => (
                       <option value={state.state}  key={idx}>{state.state}</option>
                       ))}
                    </select>
                 </label>  
                </div>

                <div>
                   <div><label className='form-label'>
                        Gender
                    </label> </div>
                    <label className='form-label'>
                     Male :
                    <input type='radio' name='gender'  className='form-check me-2'  value="Male" onChange={genderChange} checked={gender ? gender == 'Male' : ""}/>
                    
                    </label>
                    <label className='form-label'>
                     Female :
                    <input type='radio' name='gender'  className='form-check me-2'  value="Female"  onChange={genderChange} checked={gender ? gender == 'Female' : ""}/>
                    </label>
                    <label className='form-label'>
                      Other :
                    <input type='radio' name='gender'  className='form-check me-2'  value="Other"  onChange={genderChange} checked={gender ? gender == 'Other': ""}/>
                    </label>
                </div>
                <div>
                    <label className='form-label'>
                     Profession
                     <select className='form-select' name='profession' onChange={handleFormIpt}>
                        <option>Choose Profession</option>
                        { professionList.map((profession, idx) => (
                          <option key={idx} value={profession.pName}>{profession.pName}</option>
                        ))}
                     </select>
                     </label>
                     </div>
                     <div>
                     <MultiSelect
                        options={docList}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                        className='form-multiselect'
                      />
                     <label>
                       Documents
                     <select className='form-select' name='documents' onChange={handleFormIpt}>
                        <option>Choose Documents</option>
                        {docList.map((doc, idx) => (
                          <option name="document" value={doc.value} key={idx}> {doc.value}</option>
                        ))}
                     </select>
                     </label>
                </div>
                <div>
                    <div><label className='form-label'>Investment Type</label></div>
                    <label className='form-label'>Equity
                       <input type='radio' name='investmentType' value="equity" className='me-2'  onChange={investmentTypeChanges} checked={investmentType ? investmentType ==='equity' : ""}/>
                    </label>
                    <label  className='form-label'>Mutual Fund
                       <input type='radio' name='investmentType' value="mutualfund" className='me-2'  onChange={investmentTypeChanges} checked={investmentType ? investmentType ==='mutualfund' : ""}/>
                    </label>
                    <label className='form-label'>
                        Insurrance 
                        <input type='radio' name='investmentType' value="insurance" className='me-2'  onChange={investmentTypeChanges} checked={investmentType ? investmentType ==='insurance' : ""}/>
                    </label>
                </div>
                <div>
                    <div><label className='form-label'>Trading Type</label></div>
                    <label className='form-label'>Intraday
                      <input type="checkbox" name='tradingType' className='form-check me-2' value="Intraday" onChange={handleCheckBox} checked={tradingType ? tradingType.includes("Intraday") : ""}/>
                    </label>
                    <label className='form-label'>Derivative
                      <input type="checkbox" name='tradingType' className='form-check me-2' value="Derivative" onChange={handleCheckBox} checked={tradingType ? tradingType.includes("Derivative") : ""} />
                    </label>
                    <label className='form-label'>Option Trading
                      <input type="checkbox" name='tradingType' className='form-check me-2' value="Option_Trading" onChange={handleCheckBox} checked={tradingType ? tradingType.includes("Option_Trading") : ""}/>
                    </label>
                    <label className='form-label'>Fut &  Call
                      <input type="checkbox" name='tradingType' className='form-check me-2' value="Fut_and_call" onChange={handleCheckBox}  checked={tradingType ? tradingType.includes("Fut_and_call") : ""} />
                    </label>
                    <label className='form-label'>Other
                      <input type="checkbox" name='tradingType' className='form-check me-2' value="Other" onChange={handleCheckBox} checked={tradingType ? tradingType.includes("Other") : ""}/>
                    </label>
                </div>
           
                <div>
                   <div> <label>Sipment Year</label></div>
                   {
                    SipmentYearList ? SipmentYearList.map((sipmentYearVal, idx) => (
                    <label className='form-label' key={idx}>
                              {sipmentYearVal.label}
                            <input type='radio' name='sipmentYear' value={sipmentYearVal.value} className='form-check me-2' onChange={sipmentYearChange} checked={sipmentYear ? sipmentYear == sipmentYearVal.value :""}/>
                    </label>
                    )) : ""}
               
                </div>
                 
                <div>
                   <div> <label>Sipment Amount </label></div>
                    <label className='form-label'>
                        <input type='number' name='sipmentAmt' className='form-check' onChange={handleFormIpt}/>
                    </label>
                </div>

                <div>
                   <div> <label>Cities </label></div>
                   <label className='form-label'>All
                 
                   <input 
                   type='checkbox'
                    name='selectAll'
                    value={allCities} 
                   className='form-check' 
                   onChange={selectAllChanges} 
                  //  checked={cities ? cities.includes(allCities) && !isCheckedCity : ""}
                   />
                   </label>
                   {citiesList ? citiesList.map((city, idx) => (
                    <label className='form-label' key={idx}>
                    {city.label}
                        <input type='checkbox' name='sipmentAmt' value={city.value} className='form-check' onChange={citiesChanges} checked={cities? cities.includes(city.value) : ""}/>
                    </label>
                    )) : ""}

                    <label>
                      {JSON.stringify(mergeform)}
                    </label>
                </div>

                <div>
                  <label className='form-label'>Documents
                    <input type='file' name='documentUpload'  />
                  </label>
                </div>
                <div>
                    <Button type='submit' variant='success' className='btn me-3 ' size='lg'>
                      SIGNUP
                     </Button>
                    <Button variant='danger' className='btn' size='lg'>CANCEL</Button>
                </div>
            </Form>
         </div>
    </div>

    </div>
  )
}

// SignUpPage.propTypes = {}

export default SignUpPage
