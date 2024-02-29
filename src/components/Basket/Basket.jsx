import React from "react";

// img
import baskete_delete from '../../../public/icons/delete.png'
// css
import './Basket.css'

const BasketItem = ({ name, price, photo }) => {
    return (
        <>
            <div className="basket_item">
                <img src={photo} alt="" className="basket_img" />
                <div className="basket_text">
                    <p>{name}</p>
                    <span>{price}</span>
                </div>
                <img src={baskete_delete} alt="" className="basket_delete" />
            </div>

        </>
    )
}

export default BasketItem