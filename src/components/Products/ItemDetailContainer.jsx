import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ItemDetail from './ItemDetail';
import { CartContext } from '../Checkout/CartContex';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const { addToCart } = useContext(CartContext)

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
        addToCart(item, cantidad);
    };

    const handleCantidad = (e) => {
        setCantidad(parseInt(e.target.value));
    };

    if (!item) {
        return <p>Cargando...</p>;
    }

    return (

        <div className="detail-container">
            <ItemDetail
                item={item}
                cantidad={cantidad}
                handleCantidad={handleCantidad}
                handleAddToCart={handleAddToCart}
            />
        </div>
        
    );
};

export default ItemDetailContainer;
