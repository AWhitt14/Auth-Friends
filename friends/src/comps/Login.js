import React, {useState} from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';


const Login = props => {
    const [user, setUser] = useState({username: 'Lambda School', password: 'i<3Lambd4'});
    const username = 'Lambda School';
    const pword = 'i<3Lambd4';

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', user)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            console.log(res);
        })
        .catch(er => {
            console.log('error',er);
        });
    }

    return(
        <div>
           <form onSubmit={onSubmit}>
               <button>login</button>
           </form>
           <div>
                <p>{username}</p>
                <p>{pword}</p>
           </div>
        </div>
    )
}


export default Login;