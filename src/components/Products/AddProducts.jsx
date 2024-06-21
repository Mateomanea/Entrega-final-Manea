import { db } from '../../firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import dataJson from '../../mocks/products.json';

const AddProducts = () => {
    
    const handleClickDatos = async () => {
        try {
            dataJson.forEach(( element ) => {
                addDoc(collection(db, "products"), element)
    
            })
            alert('Datos cargados')
        } catch ( error ) {
            console.log(error)
        }
    }
    
    return (
        <>
        {/* <button onClick={handleClickDatos}>
            Cargar Datos
        </button> */}
        </>
    )
    
};

export default AddProducts;
