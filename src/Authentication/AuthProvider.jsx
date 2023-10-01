import { createContext, useState } from "react";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from 'prop-types'
import auth from '../firebase/firebase.config'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,SetUser]=useState(null)

    // creating user 
    const createUser =(email,password) => {
        
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // signing in user
    const userSignIn = (email,password) => {
        return signInWithEmailAndPassword (auth,email,password)
    }

    // storing information need to share globally
    const info ={user,createUser,userSignIn}


    return (
       <AuthContext.Provider value={info} >
            {children}
       </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node,
}

export default AuthProvider;