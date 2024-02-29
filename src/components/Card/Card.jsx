import React from "react";
import './Card.css'
import add from '../../../public/icons/add.png'
import like from '../../../public/icons/like.svg'

export default function Card({ name, price, photo }) {
    return (
        <>
            <div className="card">
                <img className="add_btn" src={add} alt="" />
                <img className="like" src={like} alt="" />


                <img className="image" src={photo} alt="" />

                <div className="card_text">
                    <p className="card-title">
                        {name}
                    </p>
                    <div className="card_price">
                        <div className="price">
                            <p>ЦЕНА:</p>
                            <span>{price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}