import React, { useRef } from "react";
import {auth} from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom"


const Login = () =>{

    const email = useRef();
    const password = useRef();
    //console.log(email.current.value);
    //console.log(password.current.value);
    
    const handleLogin = async(e) => {
        e.preventDefault();
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user.email + " : " + "User has been successfully logged in");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(""+errorCode+" : "+errorMessage);
            });
    }

    return(
        <div className="register_div">
            <form onSubmit={handleLogin} className="register_box">
                
                <h2>Welcome Back</h2>

                <div className="email">
                    <label>email</label>
                    <input type="text" ref={email}></input>
                </div>

                <div className="username">
                    <label>username</label>
                    <input type="text"></input>
                </div>

                <div className="password">
                    <label>password</label>
                    <input type="password"  ref={password}></input>
                </div>

                <button className="button">Sign In</button>

                <div id="register_box-a-div">
                    <Link to="/Register">Need a Account? </Link>
                </div>
                
            </form>
        </div>
  )
}
        
export default Login;

