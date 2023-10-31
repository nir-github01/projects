import React, { useState } from "react";
import Input from "../components/Inputs";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import CheckBox from "../components/CheckBox";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";

function Form({ signUp }) {
  const [form, setForm] = useState("");
  const [checkbox, setChecBox] = useState(false);
  const [error, setError] = useState("");
  const [mergeForm, setMergeForm] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const navigate = useNavigate();

  let onChangeIpt = (event) => {
    if (signUp) {
      setForm({ ...form, [event.target.name]: event.target.value });
    } else {
      setForm({ ...form, [event.target.name]: event.target.value });
    }
  };
  let onchangeCheck = (event) => {
    let isChecked = event.target.checked;
    if (isChecked) {
      setChecBox(true);
    } else {
      setChecBox(false);
    }
  };

  let submitForm = (event) => {
    event.preventDefault();
    setMergeForm({ form, checkbox });
  if(signUp){
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
    createUserWithEmailAndPassword(
      auth,
      form.email,
      form.new_password
    )
      .then(async (res) => {
        setBtnDisabled(false);
        const user = res.user;
       let userVal = await updateProfile(user, {
          displayName: form.fullName,
          phoneNumber: form.phone,
          email:form.email
        });
        navigate("/");
        console.log("User Value >>>> ", userVal)
        console.log("Response UserData ", res);
      })
      .catch(async (error) => {
        setBtnDisabled(false);
        setError(error.message);
        console.log("Error-Value ", error.message);
      });
    }else{
      
      if(form.email || form.current_password){
         signInWithEmailAndPassword(auth, form.email, form.current_password).then(async(res)=>{
           navigate('/');
         }).catch(async(error) => {
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
      <div className="box">
        <div className="titleBox text-center mt-5 mb-5">
          <h1 className="text-red-900">
            Welcome {signUp ? "to you" : "back"}{" "}
          </h1>
          <h5 className="text-green-500">
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
            <Input
              type={"password"}
              name={"confirm_password"}
              placeholder={"Confirm-Password"}
              label={"Confirm-Password"}
              onChange={onChangeIpt}
              autoComplete={"confirmPassword"}
            />
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
                <span className="text-blue-400">
                  <Link to={"/signin"}>signIn</Link>
                </span>{" "}
              </h2>
            ) : (
              <h2>
                New user regiser here !{" "}
                <span className="text-blue-400">
                  <Link to={"/signup"}>signUp</Link>{" "}
                </span>
              </h2>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
