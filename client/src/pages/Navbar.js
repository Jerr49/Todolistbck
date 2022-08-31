import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>Navbar
        <ul>
            <Link to='/'>
                <li>Home</li>
            </Link>

            <Link to='/Create'>
                <li>Create</li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar