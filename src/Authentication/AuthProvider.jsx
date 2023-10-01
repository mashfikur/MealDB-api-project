import { createContext, useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from 'prop-types'
import auth from '../firebase/firebase.config'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,SetUser]=useState(null)

    // creating user 
    const createUser =(email,password) => {
        
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // storing information need to share globally
    const info ={user,createUser}


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