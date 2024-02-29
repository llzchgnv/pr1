import React from "react";
// css
import './Header.css'

// imgs
import logo from '../../../public/Logo/Logo.png'

import basket from '../../../public/icons/heart.svg'
import profile from '../../../public/icons/Union.svg'
import fav from '../../../public/icons/Group.svg'
import { NavLink } from "react-router-dom";

const Header = () => {

    const OpenModal = () => {
        let modal = document.querySelector('.modal')
        let modal_block = document.querySelector('.modal_block')

        modal.style.display = "block"

        setTimeout(() => {
            modal.style.background = "#0000007c"
            modal_block.style.right = "0%"
        }, 300)
    }

    return (
        <>
            <div className="header">
                <NavLink to='/'>
                    <div className="logo">
                        <img src={logo} className="logo_ico" />
                        <a href="#" className="logo_text">
                            <span>REACT SNEAKERS</span>
                            <p>Магазин лучших кроссовок</p>
                        </a>
                    </div>
                </NavLink>

                <div className="header_icons">
                    <div onClick={OpenModal} className="double">
                        <img src={fav} alt="" />
                        <p className="basket_price">1205 руб.</p>
                    </div>
                    <NavLink to='/favorite'><img src={basket} alt="" /></NavLink>
                    <NavLink to='/profile'> <img src={profile} alt="" /></NavLink>
                </div>
            </div>
        </>
    )
}

export default Header