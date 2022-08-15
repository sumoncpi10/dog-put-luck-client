import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const manuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='review'>Shop</Link></li>
        <li><Link to='blog'>Blog</Link></li>
        <li><Link to='pages'>Pages</Link></li>
        <li><Link to='contact'>Contact</Link></li>

    </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Dog Put Luck</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {manuItems}
                </ul>
            </div>
            <div class="navbar-end">
                <Link to='login' className='btn'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;