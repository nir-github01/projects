import React, { useEffect, useState} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Form from "../modules/Form";
import Home from "../modules/Home";
import { auth } from "../Firebase";

function Routing() {
  const [user, setUser] = useState("");
  const [isAuthentic, setAthentication] = useState(false);


  const ProtectRoutes = ({ children, isAuth = false }) => {
    if (!isAuthentic && isAuth) {
      return( <Navigate to={"/signin"} />);
    } else if (
      isAuthentic &&
      ["/signin", "/signup"].includes(window.location.pathname)
    ) {
      return (<Navigate to={'/'}/>);
    } else {
      return children;
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.displayName);
         user
          .getIdTokenResult()
          .then((res) => {
            let isToken = res.token !== null || false
            setAthentication(isToken);
          })
          .catch((error) => {
            console.log("Error >>>> ", error);
          });
      }
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoutes>
              <Home userName={user} isAuth={true} />
            </ProtectRoutes>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectRoutes>
              <Form signUp={false} />
            </ProtectRoutes>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectRoutes>
              <Form signUp={true} />
            </ProtectRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default Routing;
