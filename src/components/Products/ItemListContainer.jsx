import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { Card } from "./Card";

const ItemListContainer = () => {
    const [ data, setData ] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"))

                const obtenerDocumentos = querySnapshot.docs.map( element => ({
                    id: element.id, ...element.data()
                }))
                setData(obtenerDocumentos)

            } catch ( error ) {
                console.error('Error en documentos: ',error);
            }
        }

        fetchData()

    }, [])

    return (

        <div className="home">
                <h2 className="home__title">Lista de productos</h2>
            <div className="filters">
                <p>Aca los filtros</p>
            </div>
            <div className="products-list">
                {data.length > 0 ? (
                    data.map(item => (
                        <Card 
                            key={item.id} 
                            item={item} 
                            onClick={() => navigate(`/item/${item.id}`)}
                        />
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
        )
        
}

export default ItemListContainer;