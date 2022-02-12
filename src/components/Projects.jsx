// importaciones
import ProjectCard from "./subcomponents/ProjectCard";
import React, { useState, useEffect } from "react";
import "./styles/projects.css";

const Projects = () => {

    const [objectTop, setobjectTop] = useState(0);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setobjectTop(document.documentElement.scrollTop);

            if(objectTop >= 1830){
                setAnimation((t) => true);
            }

            return () => {}
        });
    }, [objectTop])

    const card = [
        {url: "https://on3l7d15h.github.io/personal_web/", img: "./images/projects/personalweb.png", alt: "A personal website"},
        {url: "https://zealous-shockley-fb3096.netlify.app/", img: "./images/projects/schedule.png", alt: "A schedule with React"},
        {url: "https://websiteapinode.herokuapp.com", img: "./images/projects/webapinode.png", alt: "An Api with Node, Express and Mongodb, ejs and javascript"},
        {url: "https://laughing-jackson-4eabe3.netlify.app/", img: "./images/projects/minidiary.png", alt: "Mini Diary With Svelte"},
    ];

    return(
        <div className="projects" id="idProjects">
            <h1> Projectos! </h1>
            <section>
                <p className={(animation) ? "appears" : ""}> 
                    Por aquí te dejo algunos Projectos ya hechos que podrían gustarte! Si deseas saber y ver estos projectos, para verlos, solo debes darle click a la imágen, e irás al respectivo proyecto.
                </p>
                <div className={(animation ? "carousel-appears" : "carousel-disappears")}>
                    {
                        card.map((card, index) => {
                            return <ProjectCard card={card} key={index}/>
                        })
                    }   
                </div>
            </section>
        </div>
    );
};

export default Projects;