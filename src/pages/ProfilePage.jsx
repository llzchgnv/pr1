import React from "react";
import { render } from "react-dom";
import Title from "../components/Title/Title";
import back from '../../public/icons/back.svg'
import { NavLink } from "react-router-dom";
import { basket } from "../data";
import Card from "../components/Card/Card";

const ProfilePage = () => {
    return (
        <>
            <div className="double">
                <NavLink to="/"> <img style={{ cursor: "pointer" }} src={back} alt="" className="back" /></NavLink>
                <Title nameTitle="Мои покупки" />
            </div>

            <div className="products">
                {

                    basket.map((basket, i) => (
                        <Card key={i} {...basket} />
                    ))
                }
            </div>
        </>
    )
}

export default ProfilePage