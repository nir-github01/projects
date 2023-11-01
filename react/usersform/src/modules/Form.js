import React, { useState } from "react";
import Input from "../components/Inputs";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import CheckBox from "../components/CheckBox";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";

function Form({ signUp }) {

  //state variable
  const [form, setForm] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [error, setError] = useState("");
  const [mergeForm, setMergeForm] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [pwdError, setPwdError] = useState("");

  //Navigate Variable
  const navigate = useNavigate();

  //Handle input change variable
  let onChangeIpt = (event) => {
    if (signUp) {
      setForm({ ...form, [event.target.name]: event.target.value });
      setBtnDisabled(false)
      if(form.new_password !== form.confirm_password && form.confirm_password !== null){
        let messages = "Password doesnot Match";
        setPwdError(messages);
      }else{
        setPwdError('')
      }
    } else {
      setForm({ ...form, [event.target.name]: event.target.value });
      setBtnDisabled(false)
    }
  };
  //Handle checkbox variable 
  let onchangeCheck = (event) => {
    let isChecked = event.target.checked;
    if (isChecked) {
      setCheckBox(true);
    } else {
      setCheckBox(false);
    }
  };

  //Handle form submission
  let submitForm = (event) => {
    event.preventDefault();
    setMergeForm({ form, checkbox });
    //signUp Condition
  if(signUp){
    if(form.new_password === form.confirm_password){
    if (!form.fullName ||
      !form.email ||
      !form.new_password ||
      !form.phone ||
      !form.confirm_password
    ) {
      let msg = "Fill all required field ";
      setError(msg);
      return;
    }
    setError("");

    setBtnDisabled(true);
    localStorage.setItem("userDetails",JSON.stringify(mergeForm)); 
    //use signup authentication credential
    createUserWithEmailAndPassword(
      auth,
      form.email,
      form.new_password
    )
      .then(async (res) => {
        setBtnDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: form.fullName,
          phoneNumber: form.phone,
          email:form.email
        });
        //Home Navigation 
        navigate("/");
      

      })
      .catch(async (error) => {
        setBtnDisabled(false);
        let errorCode = error.code;
        setError(error.message);
        console.log("Error-Value ", error.message);
      });
    }else{
      let pwdMessage = "Password doesnot match";
      setPwdError(pwdMessage);
    }

    }else{
      
      //SignIn authentication credential
      if(form.email || form.current_password){
         signInWithEmailAndPassword(auth, form.email, form.current_password).then(async(res)=>{
           navigate('/');
         }).catch(async(error) => {
          let errorCode = error.code;
          setError(error.message)
         })
      }else{
        let msg = "Fill all required field ";
        setError(msg);
        return;
      }
    }      
  };
  return (
    <div className="container text-center">
      <div className={signUp ? "box" : "loginBox"}>
        <div className="titleBox text-center mt-5 mb-5">
          <h1 className="text-blue-500 text-lg font-bold">
            Welcome {signUp ? "to you" : "back"}{" "}
          </h1>
          <h5 className="text-green-500 font-semibold">
            Let's {signUp ? "signUp" : "signIn"} to explore more
          </h5>
        </div>
        <div>
          <h1 className="text-red-800"> {error}</h1>
        </div>
        <form onSubmit={submitForm}>
          {signUp && (
            <Input
              type={"text"}
              name={"fullName"}
              placeholder={"FullName"}
              label={"FullName"}
              onChange={onChangeIpt}
              autoComplete={"userName"}
            />
          )}
          <Input
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            label={"Email"}
            onChange={onChangeIpt}
            autoComplete={"email"}
          />
          {signUp && (
            <Input
              type={"text"}
              name={"phone"}
              placeholder={"Phone"}
              label={"Phone"}
              onChange={onChangeIpt}
              autoComplete={"phone"}
            />
          )}
          <Input
            type={"password"}
            name={signUp ? "new_password" : "current_password"}
            placeholder={"Password"}
            label={"Password"}
            onChange={onChangeIpt}
            autoComplete={"currentPassword"}
          />
          {signUp && (
            <div className="mb-2">
            <Input
              type={"password"}
              name={"confirm_password"}
              placeholder={"Confirm-Password"}
              label={"Confirm-Password"}
              onChange={onChangeIpt}
              autoComplete={"confirmPassword"}
            />
             <span className="text-red-400">{pwdError}</span>
            </div>
          )}
          <CheckBox
            label={signUp ? "I agree with your" : "Remember me."}
            termsConditions={signUp ? "terms and conditions." : ""}
            onChange={onchangeCheck}
          />
          <div>
            <Button
              type={"submit"}
              nameValue={signUp ? "SIGNUP" : "SIGNIN"}
              disabled={btnDisabled}
            />
          </div>
          <div className="mb-4">
            {signUp ? (
              <h2>
                User already exist !{" "}
                <span className="text-green-700 font-semibold">
                  <Link to={"/signin"}>signIn</Link>
                </span>{" "}
              </h2>
            ) : (
              <h2>
                New user regiser here !
                <Link to={"/signup"}>{" "}<span className="text-green-700 font-semibold">
                  signUp
                </span>{" "}</Link>
              </h2>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
