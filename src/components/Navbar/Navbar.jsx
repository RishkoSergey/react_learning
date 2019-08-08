import React from 'react';
import style from'./Navbar.module.css';
import {NavLink} from 'react-router-dom'; 

const Navbar = () => {
    return(
        <div className={style.navbar}>
            <ul>
                <li className={style.item}><NavLink to='/profile'>Profile</NavLink></li>
                <li className={style.item}><NavLink to='/dialogs'>Dialogs</NavLink></li>
                <li className={style.item}><NavLink>News</NavLink></li>
                <li className={style.item}><NavLink>Music</NavLink></li>
                <li className={style.item}><NavLink>Settings</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;