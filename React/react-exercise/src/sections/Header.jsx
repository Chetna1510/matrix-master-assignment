import react from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <ul className='header-links'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/component">Component</Link>
            </li>
            <li>
                <Link to="/main">State(class)</Link>
            </li>
            <li>
                <Link to="/main2">Props(class)</Link>
            </li>
            <li>
                <Link to="/lifecycle">Life Cycle(class)</Link>
            </li>
            <li>
                <Link to="/hooks">Hooks</Link>
            </li>
            <li>
                <Link to="/routing">Routing</Link>
            </li>
        </ul>
    </div>
  )
}
