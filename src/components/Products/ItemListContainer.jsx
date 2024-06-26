import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
    const [ data, setData ] = useState([])
    const navigate = useNavigate();
    const [filtroCategoria, setFiltroCategoria] = useState('');


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

    const handleFiltroCategoria = (e) => {
        setFiltroCategoria(e.target.value);
    }

    const filtrarProductos = () => {
        return data.filter(producto => {
            return filtroCategoria ? producto.category === filtroCategoria : true;
        })
    }

    const productosFiltrados = filtrarProductos();

    return (

        <div className="home">

                <h2 className="home__title">Lista de productos</h2>

            <div className="filters">
                <label htmlFor="filtroCategoria">Categoría:</label>
                <select id="filtroCategoria" value={filtroCategoria} onChange={handleFiltroCategoria}>

                    <option value="">Todas</option>
                    <option value="Adobe">Adobe</option>
                    <option value="Antivirus">Antivirus</option>
                    <option value="Música">Daw</option>
                    <option value="Diseño">Diseño</option>

                </select>
            </div>

            <div className="products-list">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map(item => (
                        <ItemList 
                            key={item.id} 
                            item={item} 
                            onClick={() => navigate(`/item/${item.id}`)}
                        />
                    ))
                ) : (
                    <p>Cargando todos los productos...</p>
                )}
            </div>

        </div>
        )
        
}

export default ItemListContainer;