import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
    const [ data, setData ] = useState([])
    const navigate = useNavigate();
    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"))

                const obtenerDocumentos = querySnapshot.docs.map( element => ({
                    id: element.id, ...element.data()
                }));

                setTimeout(() => {
                    setData(obtenerDocumentos)
                    setLoading(false)
                }, 400)

            } catch ( error ) {
                setLoading(false)
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
                <label className="filters__label" htmlFor="filtroCategoria">Categoría:</label>
                <select className="filters__select" id="filtroCategoria" value={filtroCategoria} onChange={handleFiltroCategoria}>

                    <option className="filters__option" value="">Todas</option>
                    <option className="filters__option" value="Adobe">Adobe</option>
                    <option className="filters__option" value="Antivirus">Antivirus</option>
                    <option className="filters__option" value="Música">Daw</option>
                    <option className="filters__option" value="Diseño">Diseño</option>

                </select>
            </div>

            <div className="products-list">
                { loading ? (
                    <div className="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : ( productosFiltrados.length > 0 ? (
                    productosFiltrados.map(item => (
                        <ItemList 
                                key={item.id} 
                                item={item} 
                                onClick={() => navigate(`/item/${item.id}`)}
                        />
                    ))
                ) : (
                    <p>No hay productos disponibles</p>
                )

                )}
            </div>

        </div>
        )
        
}

export default ItemListContainer;