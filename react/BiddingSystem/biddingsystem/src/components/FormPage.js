import React  from 'react';
import { Button, Form } from 'react-bootstrap';

function FormPage({children, initialValues, handleCheckBox, handleFormIpt,genderChange, onSubmit}) {

console.log(initialValues)
  return (
    <div>
         <div className='main_div_container'>
            <Form  className='formcontainer' onSubmit={onSubmit}> 
                <div>
                    <label className='form-label'>
                        First Name :
                        <input type='text' name='firstName' className='form-control' onChange={handleFormIpt} />
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
                   state
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
                   state
                </div>

                <div>
                   <div><label className='form-label'>
                        Gender:
                    </label> </div>
                    <label className='form-label'>
                    Male :
                    <input type='radio' name='gender'  className='form-check me-2'  value="Male" onChange={genderChange} />
                    </label>
                    <label className='form-label'>
                     Female :
                    <input type='radio' name='gender'  className='form-check me-2' value="Female"  onChange={genderChange} />
                    </label>
                    <label className='form-label'>
                      Other :
                    <input type='radio' name='gender'  className='form-check me-2' value="Other"  onChange={genderChange} />
                    </label>
                </div>
                <div>
                    <label className='form-label'>
                     Profession
                     <select className='form-select'>
                        <option>Choose Profession</option>
                     </select>
                     </label>
                     <label>
                       Documents
                     <select className='form-select'>
                        <option>Choose Documents</option>
                     </select>
                     </label>
                </div>
                <div>
                    <div><label className='form-label'>Investment Type</label></div>
                    <label className='form-label'>Equity
                       <input type='radio' name='investmentType' className='me-2'/>
                    </label>
                    <label  className='form-label'>Mutual Fund
                       <input type='radio' name='investmentType' className='me-2'/>
                    </label>
                    <label className='form-label'>
                        Insurrance 
                        <input type='radio' name='investmentType' className='me-2' />
                    </label>
                </div>
                <div>
                    <div><label className='form-label'>Trading Type</label></div>
                    <label className='form-label'>Intraday
                      <input type="checkbox" name='tradingType' className='form-check me-2' onChange={handleCheckBox}/>
                    </label>
                    <label className='form-label'>Derivative
                      <input type="checkbox" name='tradingType' className='form-check me-2' onChange={handleCheckBox}/>
                    </label>
                    <label className='form-label'>Option Trading
                      <input type="checkbox" name='tradingType' className='form-check me-2' onChange={handleCheckBox}/>
                    </label>
                    <label className='form-label'>Fut &  Call
                      <input type="checkbox" name='tradingType' className='form-check me-2' onChange={handleCheckBox}/>
                    </label>
                    <label className='form-label'>Other
                      <input type="checkbox" name='tradingType' className='form-check me-2' onChange={handleCheckBox}/>
                    </label>
                </div>
                <div>
                   <div> <label>Sipment Year</label></div>
                    <label className='form-label'>
                            One Year 
                            <input type='radio' name='sipmentYear' className='form-check me-2'/>
                    </label>
                    <label className='form-label'>
                            Three  Year 
                            <input type='radio' name='sipmentYear' className='form-check me-2'/>
                    </label>
                    <label className='form-label'>
                            Five Year 
                            <input type='radio' name='sipmentYear' className='form-check me-2'/>
                    </label>
                    <label className='form-label'>
                            Other
                            <input type='radio' name='sipmentYear' className='form-check me-2'/>
                    </label>
                </div>
                <div>
                   <div> <label>Sipment Amount </label></div>
                    <label className='form-label'>
                        <input type='number' name='sipmentAmt' className='form-check' onChange={handleFormIpt}/>
                    </label>
                </div>
                <div>
                    <Button type='submit' variant='success' className='btn me-3 ' size='lg'>
                    {children}
                     </Button>
                    <Button variant='danger' className='btn' size='lg'>CANCEL</Button>
                </div>
            </Form>
         </div>
    </div>
  )
}
export default FormPage;