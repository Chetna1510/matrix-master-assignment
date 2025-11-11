import React from 'react'
import '../App.css'

export default function Component() {
    return (
      <div className='header'>
        <div style={{color: "green", fontSize: "30px"}}> React Components Example</div>
        <a href="http://">About</a>
        <ul>
        <li>Red</li>
        <li>Black</li>
        </ul>
        <ul>
          <li>Yello</li>
          <li>Blue</li>
        </ul>
      </div>
    )
}

