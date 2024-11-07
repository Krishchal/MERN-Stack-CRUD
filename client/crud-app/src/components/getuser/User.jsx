import { Link } from 'react-router-dom'
import "./User.css";
import { useEffect, useState } from 'react'
import axios from 'axios';
import {toast} from 'react-hot-toast';

const User = () => {
    
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await axios.get("http://localhost:8001/api/getAll");
            setUsers(response.data.userData);
           
        }
        fetchData();
       
        
    },[])

    const deleteUser = async(userId) => {
        await axios.delete(`http://localhost:8001/api/delete/${userId}`)
        .then((response) =>{
            
            setUsers((prevUser)=> prevUser.filter((user)=> user._id !== userId));
            console.log(response);
            //showing msg after delete
            toast.success(response.data.msg,{position:'top-center'});
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className="userTable">
        <Link to={"/add"} className='addButton'> <i className="fa-solid fa-user-plus"></i>  Add User</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>User name</th>
                    <th>User Email</th> 
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>{ 
                        return(
                            <tr key={user._id}>
                                <td>{index + 1 }</td>  {/* To start with 1 other wise start with 0 */}
                                <td>{user.fname} {user.lname}</td>
                                <td>{user.email}</td>
                                <td className='actionButton'>
                                    <button onClick={()=> deleteUser(user._id)}><i className="fa-solid fa-trash"></i></button>
                                    <Link to={`/edit/`+user._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                </td>
                            </tr>
                        )
                    
                    })
                }
                
                
            </tbody>
        </table>
    </div>
  )
}

export default User