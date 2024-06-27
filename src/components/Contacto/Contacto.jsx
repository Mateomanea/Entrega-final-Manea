import React, { useState } from "react";

const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState(null);
    const [exito, setExito] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre.trim() || !email.trim()) {
            setError("Nombre y Email son campos obligatorios");
            return;
        }

        setExito(true);
        setError(null);
        setNombre("");
        setEmail("");
        setTelefono("");
        setMensaje("");
    };

    return (
        <div className="contacto">
            <h2 className="contacto__title">Contacto</h2>
            <form className="contacto__form" onSubmit={handleSubmit}>
              
                <div className="contacto__div">
                    <label className="contacto__label" htmlFor="nombre">Nombre *</label>
                    <input className="contacto__input"
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className="contacto__div">
                    <label className="contacto__label" htmlFor="email">Email *</label>
                    <input className="contacto__input"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="contacto__div">
                    <label className="contacto__label" htmlFor="telefono">Teléfono</label>
                    <input className="contacto__input"
                        type="tel"
                        id="telefono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>
                <div className="contacto__div">
                    <label className="contacto__label" htmlFor="mensaje">Mensaje</label>
                    <textarea className="contacto__textarea"
                        id="mensaje"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                    />
                </div>

                <div className="contacto__div">
                  <button className="contacto__submit" type="submit">Enviar</button> 
                </div>

            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {exito && <p style={{ color: "green" }}>Mensaje enviado correctamente</p>}
        </div>
    );
};

export default Contacto;
