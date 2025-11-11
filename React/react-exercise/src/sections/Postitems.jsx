import React from 'react'

export default function Postitems(props) {
    //console.log(props);
  return (
    <li>
        <h2>Title:{props.post.title}</h2>
        <h4>Body: {props.post.body}</h4>
        <hr/>
    </li>
)
}
