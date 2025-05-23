import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
const googleProvide = new GoogleAuthProvider;
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const creatiUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInuser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  }
  const signOutUser=()=>{
    setLoading(true)
    return signOut(auth);
  }
  const signInWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvide);
  }
  const authInfo = {
    creatiUser,
    signInuser,
    user,
    signOutUser,
    signInWithGoogle,
    loading
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state captured", currentUser)
      if(currentUser?.email){
        const user = {email: currentUser.email}
        axios.post('http://localhost:5000/jwt',user, {withCredentials: true})
        .then(res=>{
          console.log('login token--->',res.data);
          setLoading(false);
        })
      }
      else {
        axios.post('http://localhost:5000/jwt',{},{
          withCredentials: true
        })
        .then(res=>{
          console.log("logout--->",res.data)
          setLoading(false);
        });
      }
     
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
