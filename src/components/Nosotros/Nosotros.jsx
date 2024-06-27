import React from "react";
import { Link } from 'react-router-dom';

const Nosotros = () => {
    return (
        <>
            <div className="nosotros">

                <h2 className="nosotros__title">
                    Quienes somos ?
                </h2>

                <p className="nosotros__parrafo">
                    En nuestra empresa, nos especializamos en la venta de softwares de alta calidad que 
                    están diseñados para satisfacer las necesidades de nuestros clientes. Ofrecemos una 
                    amplia gama de productos que ayudan a optimizar procesos, mejorar la productividad y 
                    facilitar el trabajo diario. Nuestro equipo está comprometido con la innovación y la 
                    excelencia, asegurando que cada software que vendemos cumpla con los más altos estándares 
                    de la industria. Confiamos en que nuestros productos pueden marcar una diferencia significativa 
                    en su negocio.
                </p>
                <p className="nosotros__parrafo">
                    Además, proporcionamos un servicio de atención al cliente excepcional, disponible para 
                    resolver cualquier duda o problema que pueda surgir. Nuestro soporte técnico está disponible 
                    las 24 horas del día, los 7 días de la semana, para garantizar que nuestros clientes siempre 
                    tengan la asistencia que necesitan. Nos enorgullecemos de nuestra capacidad para adaptarnos 
                    rápidamente a las nuevas tendencias tecnológicas y de nuestra flexibilidad para ofrecer soluciones 
                    personalizadas que se ajusten a las necesidades específicas de cada cliente.
                </p>
                <p className="nosotros__parrafo">
                    A lo largo de los años, hemos trabajado con una variedad de industrias, desde pequeñas 
                    startups hasta grandes corporaciones, y hemos acumulado una vasta experiencia que nos 
                    permite entender los desafíos únicos que enfrentan las diferentes empresas. Estamos 
                    dedicados a proporcionar un valor excepcional y a construir relaciones a largo plazo con 
                    nuestros clientes, basadas en la confianza y el respeto mutuo. Creemos firmemente que nuestra 
                    pasión por la tecnología y nuestro compromiso con la calidad nos distinguen en el mercado.
                </p>

                <div className="nosotros__btn">
                    <Link className="btn" to={"/contacto"}>
                        Contactanos
                    </Link>
                </div>

            </div>
        </>
    )
}


export default Nosotros;