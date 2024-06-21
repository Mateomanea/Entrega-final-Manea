import React from "react";

export const Card = ({ item, onClick }) => {


    return (
        <div className="card" onClick={onClick}>
            <div className="card__imgContainer">
                <img 
                src={item.image} 
                alt={item.name} 
                />
            </div>
            <div className="card__data">
                <h2 className="card__title">
                    {item.name}
                </h2>
                <p className="card__stock">
                    Stock: {item.stock} 
                </p>
                <strong className="card__price">
                    ${item.price}
                </strong>
            </div>
            <div className="card__btn">
                <button className="btn">
                    Ver más
                </button>
            </div>
        </div>
    );
};