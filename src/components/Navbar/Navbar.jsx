import React from 'react';
import style from'./Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={style.navbar}>
            <ul>
                <li className={`${style.item} ${style.active}`}><a>Profile</a></li>
                <li className={style.item}><a>Messages</a></li>
                <li className={style.item}><a>News</a></li>
                <li className={style.item}><a>Music</a></li>
                <li className={style.item}><a>Settings</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;