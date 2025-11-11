import React, {use, useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function UserInfo() {
    const params = useParams(); // we will get the params from URL
    const [user, setUsers] = useState();
    
    useEffect ( () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then( result => {
            setUsers(result.data)
        })
        .catch( error => {
            console.log(error);
        }) 
    },[]) 

    return (
        <div>
            {
                user ? 
                <div className='users-container'>
                        <h3>Name: {user.name}</h3>
                        <h3>Email: {user.email}</h3>
                        <h3>UserName: {user.username}</h3>
                        <h3>Phone: {user.phone}</h3>
                        <h3>
                            <ul>
                                <li>Street: {user.address.street}</li>
                                <li>City: {user.address.city}</li>
                                <li>Zipcode: {user.address.zipcode}</li>
                            </ul>
                        </h3>
                        <button>
                            <Link to={`/posts/${user.id}`}>Show User Post</Link>
                        </button>
                </div>
                : null
            }
        </div>
    )
}
