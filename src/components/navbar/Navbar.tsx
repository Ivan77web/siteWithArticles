import React from "react";
import { Link } from "react-router-dom";
import cl from "./Navbar.module.css"

const Navbar = () => {
    return(
        <div className={cl.navbar}>
            <ul className={cl.list}>
                <li className={cl.listItem}><Link to="/mainPage">Статьи</Link></li>
                <li className={cl.listItem}><Link to="/admin">Админка</Link></li>
            </ul>
        </div>
    )
}

export {Navbar}