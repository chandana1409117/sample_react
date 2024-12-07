import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Navbar = () => {
    return (
       <>
       <div className='nav'>
           
           <img src='https://cdn.pixabay.com/photo/2021/10/08/18/55/website-6692147_1280.png'  width='90px' alt=''></img>
           <h2>RNMC</h2>
        <div className='links'>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/About'>About</NavLink></li>
                <li><NavLink to='/Contact'>Contact</NavLink></li>
                <li><NavLink to='/Services'>Services</NavLink></li>
            </ul>
            
        </div>
        </div>
        </> 
    );
}

export default Navbar;
