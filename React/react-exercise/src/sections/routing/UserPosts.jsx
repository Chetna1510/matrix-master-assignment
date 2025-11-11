import React, {use, useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function UserPosts() {
    const params = useParams(); // we will get the params from URL
    const [post, setUsersPosts] = useState();
    
    useEffect ( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
        .then( result => {
            setUsersPosts(result.data)

        })
        .catch( error => {
            console.log(error);
        }) 
    },[]) 

  return (
    <div>
        {
            post ?

            <div className='users-container'>
                <h2>Post Title: {post.title}</h2>
                <h3>Post Body: {post.body}</h3>
            <button>
                <Link to={`/posts/${post.id}`}>Show User Comment</Link>

            </button>
            </div>
            

            : null
        }
        
    </div>
  )
}
