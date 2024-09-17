import React from 'react'
import { Link } from 'react-router-dom'
const logoImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaPRxt1XobljQxda24_ibLHfAZKn9LM0gMw&s';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
            <div className='container-fluid'>
                
                
                <div className="navbar-brand d-flex justify-content-start">
                <img src={logoImage} alt="Logo" width="auto"  height="35" className='rounded-circle'/>
                </div>
                <Link to='/' className='navbar-brand text-xl font-weight-bold'> <span>📙</span> <u>CONTACT APP</u></Link>
                <div className='text-end'>
                    <Link to='/add' className='btn btn-outline-dark text-white bg-success text-lg font-weight-bold border border-success rounded'> + Add New Contact</Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar