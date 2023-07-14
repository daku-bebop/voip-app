import React, { useRef } from "react";
import {auth} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom"

const Register = () => {

    const email = useRef();
    const password = useRef();

    const handleSave = async(e) => {
        e.preventDefault();
        console.log(email.current.value);
        console.log(password.current.value);

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(""+errorCode+" : "+errorMessage);
            // ..
        });
    }

    return(
        <div className="register_div">
            <form onSubmit={handleSave} className="register_box">

                <h2>Create an account</h2>

                <div className="email">
                    <label>email</label>
                    <input type="text" ref={email}></input>
                </div>

                <div className="username">
                    <label>username</label>
                    <input type="text"></input>
                </div>

                <div className="password">
                    <label>Password</label>
                    <input type="password" ref={password}></input>
                </div>

                <button className="button">Continue</button>

                <div id="register_box-a-div">
                    <Link to="/Login">Already have an account?</Link>
                </div>

                <p>By registering you agree to term and service</p>
                <p>Created by Chris M, Steven M, Moiz A</p>
            </form>
        </div>
    )
}

export default Register;
