import React from "react"
import Swal from "sweetalert2";

const ItemDetail = ({item, cantidad, handleCantidad, handleAddToCart}) => {

    const handleAddToCartAlert = () => {
        handleAddToCart();
        Swal.fire({
            icon: "success",
            title: "Producto agregado con éxito",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return(

        <div className="detail">
            <div className="detail-top">

                <div className="detail-top__left">
                    <img className="detail__img" 
                        src={item.image} 
                        alt={item.name} 
                    />
                </div>
                <div className="detail-top__right">
                    <h2 className="detail__title">{item.name}</h2>
                    <p className="detail__description">{item.description}</p>
                    <strong className="detail__price">${item.price}</strong>

                    <label className="detail__label" htmlFor="cantidad">
                        Cantidad:
                    </label>
                    <input className="detail__input"
                        type="number"
                        id="cantidad"
                        name="cantidad"
                        min="1"
                        value={cantidad}
                        onChange={handleCantidad}
                    />
                </div>
                
            </div>

            <div className="detail-bottom">
                <div className="detail__btn">
                    <button className="btn" onClick={handleAddToCartAlert}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>

    )
};

export default ItemDetail;