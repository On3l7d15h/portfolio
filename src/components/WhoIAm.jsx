import React, {useState, useEffect} from "react";
import "./styles/whoiam.css"

const WhoIAm = () => {

    const [objectTop, setobjectTop] = useState(0);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setobjectTop(document.documentElement.scrollTop);

            if(objectTop >= 830){
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
                            un programador web que le gusta desarrollar páginas webs dinámicas, Actualmente estoy estudiando en el ITLA, cursando el tecnólogo en Desarrollo de Software y mi hobbie es... ¡aprender cosas nuevas! 
                        </p>
                    </section>
            </div>
        </div>
    );
}

export default WhoIAm;