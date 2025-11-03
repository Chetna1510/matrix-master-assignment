import React from 'react'
import '../App.css'

export default function Header() {
    return (
      <div className='header'>
        <div>This is header</div>
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

