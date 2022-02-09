import React, {useState, useEffect} from "react";
import "./styles/whoiam.css"

const WhoIAm = () => {

    const [objectTop, setobjectTop] = useState(0);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setobjectTop(document.documentElement.scrollTop);

            if(objectTop >= 930){
                setAnimation((t) => true);
            }

            return () => {}
        });
    }, [objectTop])

    return (
        <div className="who" id="idWhoIam">
            <h1>¿Quién Soy?</h1>
            <div className="whoiam">
                    <section className={(animation ? "appears" : "disappears")}>
                        <img src="./images/me.jpeg" alt="My Person" />
                    </section>
                    <section className={(animation ? "appears" : "disappears")}>
                        <h2>¡Hola!</h2>
                        <p>
                            Mi nombre es Onell Dishmey,
                            programador web, que trabaja del lado
                            del cliente, ¡Gusto en Conocerte!
                        </p>
                        <p>
                            Nueva vez, te invito a mi sitio web, por aquí, encontraras, mis habilidades, algunos de mis projectos, y me podras contactar para hacer tu proyecto
                        </p>
                    </section>
            </div>
        </div>
    );
}

export default WhoIAm;