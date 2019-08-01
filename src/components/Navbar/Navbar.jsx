import React from 'react';
import style from'./Navbar.module.css';
import {NavLink} from 'react-router-dom'; 

const Navbar = () => {
    return(
        <nav className={style.navbar}>
            <ul>
                <li className={style.item}><NavLink to='/profile' activeClassName={style.active}>Profile</NavLink></li>
                <li className={style.item}><NavLink to='/dialogs' activeClassName={style.active}>Dialogs</NavLink></li>
                <li className={style.item}><NavLink>News</NavLink></li>
                <li className={style.item}><NavLink>Music</NavLink></li>
                <li className={style.item}><NavLink>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;