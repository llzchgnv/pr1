
import React from "react";

import emoji from '../../public/emoji/sad.png'
import arrow from '../../public/icons/arow.svg'
import { NavLink } from "react-router-dom";

const FavoritePage = () => {
    return (
        <>
            <div className="empty">
                <img src={emoji} alt="" />
                <p>Закладок нет :(</p>
                <span>Вы ничего не добавляли в закладки</span>

                <NavLink to="/"> <button><img src={arrow} alt="" />Вернуться назад</button></NavLink>
            </div>
        </>
    )
}

export default FavoritePage