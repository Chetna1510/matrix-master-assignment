import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function UserInfo() {
    const [title, setTitle] = useState("")
    const [users, setUsers] = useState([])
 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( result => {
            setUsers(result.data)
        })
        .catch( error => {
            console.log(error);
        }) 
    },[])

    useEffect(()=>{
        setTitle("Your title will be here")
    },[])

    const changeTitle = () => {
        setTitle("Title should be changed now!")
    }

    return (
        <div className='users-container'>
            <h1>All Users in JSONPlaceholder API</h1>
            <h3>{title}</h3>
            <button onClick={changeTitle}>Change Title</button>
            <ul>
                {
                    users.map(user => {
                        return (
                            <li key={users.id}>
                                < Link to={`/user/${user.id}`}>{user.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
