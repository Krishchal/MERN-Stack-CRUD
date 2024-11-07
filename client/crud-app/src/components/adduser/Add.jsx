//import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "./Add.css"
import { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

const Add = () => {

    const initialState={
        fname : "",
        lname : "",
        email : "",
        password : "",
    }

    const[user, setUser] = useState(initialState);
    const navigate = useNavigate();

    //----inputHandler to update state---
    const inputHandler = (e) =>{
        const {name, value} = e.target;
  
        setUser({...user,[name]: value});
        //console.log(user);

    }
    const submitForm = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8001/api/create",user)
        .then((response)=>{
        //console.log(response);
        toast.success(response.data.msg,{position:'top-right'});
        navigate('/');
        })
        .catch(error => console.log(error));
    
    }

  return (
    <div className='addUser'>
        <Link to={"/"}> <i className="fa-solid fa-circle-left"></i>Back </Link>
        <h3>Add New User </h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" id='fname' onChange={inputHandler} name='fname' autoComplete='off' placeholder='First name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" id='lname' onChange={inputHandler} name='lname' autoComplete='off' placeholder='Last name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' onChange={inputHandler} name='email' autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' onChange={inputHandler} name='password' autoComplete='off' placeholder='Password' />
            </div>
            <div className="inputGroup">
                <button type='submit'>  Add Users</button>
            </div>
        </form>
    </div>
  )
}

export default Add