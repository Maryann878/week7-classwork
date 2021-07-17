import React from 'react'

export default function card(props) {
    return (
        <div>
            <h2>{props.product.title}</h2>
            <p>{props.product.description}</p>
           
            <p>{props.product.price}</p>
            <p>{props.myClick}</p>
            <button onClick = {props.myClick}>Add to Cart</button>

        </div>
    )
}

