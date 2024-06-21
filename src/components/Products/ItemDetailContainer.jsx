import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {

      const fetchItem = async () => {
        try {
            const docRef = doc(db, 'products', id);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                setItem({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log('No existe docmnto');
            }
        } catch (error) {
            console.error('Error al cargarr document: ', error);
        }
    };
    
  
      fetchItem();
    }, [id]);

    const handleAddToCart = () => {

        console.log(`Agregado al carrito: ${item.name} - Cantidad: ${cantidad}`);
    };

    const handleCantidad = (e) => {
        setCantidad(parseInt(e.target.value));
    };

    if (!item) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="item-detail">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <label htmlFor="cantidad">Cantidad:</label>
            <input
                type="number"
                id="cantidad"
                name="cantidad"
                min="1"
                value={cantidad}
                onChange={handleCantidad}
            />
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ItemDetailContainer;
