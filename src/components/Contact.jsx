import React, { useState } from "react";
import Swal from "sweetalert2";
import "./styles/contact.css"

const Contact = () => {

    const [datos, setDatos] = useState({ nombre: "", correo: "", mensaje: "" });

    const handleOnChange = e => {
        setDatos({...datos, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = e => {
        const validateEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if((datos.nombre.trim() !== "") && (datos.nombre.trim() !== null)){
            if((datos.correo.trim() !== "") && (validateEmail.test(datos.email.trim()))){
                if((datos.mensaje.trim() !== "") && (datos.mensaje.trim() !== null)){

                } else {
                    Swal.fire({ title: "Oops", text: "Campos Vacíos", icon: "error"})
                    e.preventDefault();
                }
            } else {
                Swal.fire({ title: "Oops", text: "Campos Vacíos", icon: "error"});
                e.preventDefault();
            }
        } else {
            Swal.fire({ title: "Oops", text: "Campos Vacíos", icon: "error"});
            e.preventDefault();
        }
    }

    return(
        <div className="contact" id="idContact">
            <h1> Contactame </h1>
            <section>
                <div className="text-img">
                    <p>
                        ¿A qué esperas para ponerte en contacto?
                    </p>
                </div>
                <div className="form" onSubmit={ () => false}>
                    <form onSubmit={handleOnSubmit} action="https://formspree.io/f/xwkylrzv"
                    method="POST">
                        <label>
                            Nombre:
                            <input type="text" name="nombre" onChange={handleOnChange}/>
                        </label>
                        <label>
                            Correo:
                            <input type="email" name="correo" onChange={handleOnChange}/>
                        </label>
                        <label>
                            Mensaje:
                            <textarea name="mensaje" onChange={handleOnChange}></textarea>
                        </label>
                        <button>Enviar</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;