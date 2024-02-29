import React from "react";

// img
import search from '../../../public/search/search.png'
import './Title.css'


class Title extends React.Component {
    
    render() {

        return (
            <>
                <div className="title">
                    <h1>{this.props.nameTitle}</h1>

                    <div className="search">
                        <img src={search} alt="" />
                        <p>Поиск...</p>
                    </div>
                </div>
            </>
        )
    }
}

Title.defaultProps = {
    nameTitle: 'Заголовок',
}

export default Title