import React, {useState, useEffect} from 'react'

export default function Useeffect() {
    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resourceType])
    
    return (
    <div className='hooks'>
        <h3>2. UseEffect</h3>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
        <h1>{resourceType}</h1>
        {   
            items.slice(0,5).map(item => {
                
                return ( 
                    <ul>
                        <li>{item.title}</li>
                        <li>{item.name}</li>
                        <li>{item.comments}</li>
                    </ul>
                )
           }) 
        }
    </div>
  )
}
