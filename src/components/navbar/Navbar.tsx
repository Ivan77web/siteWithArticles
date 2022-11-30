import React from "react";
import cl from "./Navbar.module.css"

const Navbar = () => {
    return(
        <div className={cl.navbar}>
            <ul className={cl.list}>
                <li className={cl.listItem}>Статьи</li>
                <li className={cl.listItem}>Админка</li>
            </ul>
        </div>
    )
}

export {Navbar}