import React, { Component } from 'react'
import {MenuItems} from "./MenuItems"

class NavBar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                   <ul className="nav-menu">
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })}
                   </ul>
            </nav>
        )
    }
}

export default NavBar