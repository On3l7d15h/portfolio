import React, { useState, useEffect } from "react";
import "./styles/navbar.css";

const Navbar = ({ data }) => {

    const [scrollTop, setscrollTop] = useState(0);
    const [change, setChange] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setscrollTop(document.documentElement.scrollTop)

            if(scrollTop >= 950){
                setChange((t) => true);
            } else {
                setChange((t) => false);
            }
        });

        return () => {}

    }, [scrollTop]);

    return(
        <div className="navbar" style={(change) ? {"background": "var(--c-white-orange)"} : {"background": "transparent"}}>
            <span>PortFolio</span>
            <section>
                {
                    data.map((d, i) => {
                        return <a href={d.id} key={i}>{d.text}</a>
                    })
                }
            </section>
            <div className={(active ? "hamburger active" : "hamburger")} onClick={() => setActive((t) => !t) }>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <section className={(active ? "active" : "inactive")}>
                    {
                        data.map((d, i) => {
                            return <a href={d.id} key={i}>{d.text}</a>
                        })
                    }
                </section>
            </div>
        </div>
    );
}

export default Navbar;