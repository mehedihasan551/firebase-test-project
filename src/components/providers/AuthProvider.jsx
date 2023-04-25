import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
const [user,setuser]=useState(null);


const  createuser=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
 const signin=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
 }
 const logout=()=>{
    return signOut(auth)
}

  const authInfo = {
    createuser,
    signin,logout

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
