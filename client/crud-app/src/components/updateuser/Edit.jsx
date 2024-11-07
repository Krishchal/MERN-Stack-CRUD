//import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import "../adduser/Add.css"
import axios from 'axios'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const Edit = () => {

    const UserInitialState={
        fname : "",
        lname : "",
        email : "",
        password : "",
    }
    const {id} = useParams();
    const [user, setUser] = useState(UserInitialState);
    const navigate = useNavigate();

    const inputHandler = (e) =>{
        const { name, value } = e.target;
        setUser({...user, [name]: value});
        //console.log(user);
    }

    useEffect(()=>{
        axios.get(`http://localhost:8001/api/getOne/${id}`)
        .then((response)=>{
           console.log(response);
          setUser(response.data.userData);  //prefer console to see the response format structure of object to destructure
         
        }).catch((error) => console.log(error));
    },[id])


    const submitForm = async(e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8001/api/update/${id}`,user)
        .then((response)=>{
            //console.log(response);
            toast.success(response.data.msg,{position:'top-center'});
            navigate('/');
        })
        .catch(error => console.log(error));
        
    }
  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Update Existing User</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" id='fname' value={user.fname} onChange={inputHandler} name='fname' autoComplete='off' placeholder='First name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" id='lname' value={user.lname} onChange={inputHandler} name='lname' autoComplete='off' placeholder='Last name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' value={user.email} onChange={inputHandler} name='email' autoComplete='off' placeholder='Email' />
            </div>
            
            <div className="inputGroup">
                <button type='submit'>Update User</button>
            </div>
        </form>
    </div>
  )
}

export default Edit