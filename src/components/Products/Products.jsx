import React from "react";
import { products } from '../../data'
import Card from "../Card/Card";
import "./Products.css"

export default function Products() {
    return (
        <>
            <div className="products">
                {products.map((products, index) => (
                    <Card key={index} {...products} />
                ))}
            </div>

        </>
    )
}