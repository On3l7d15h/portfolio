import React from "react";
import SkillCard from "./subcomponents/SkillCard";
import "./styles/skill.css"

const Skill = () => {

    const skill = [
        {name: "HTML", image: "./images/skills/html-5.svg"},
        {name: "CSS", image: "./images/skills/css.svg"},
        {name: "JavaScript", image: "./images/skills/javascript-1.svg"},
        {name: "ReactJS", image: "./images/skills/reactjs.png"},
        {name: "SvelteJS", image: "./images/skills/sveltejs.png"},
        {name: "NodeJS", image: "./images/skills/nodejs.png"},
        {name: "Bootstrap", image: "./images/skills/bootstrap.png"},
        {name: "MongoDB", image: "./images/skills/mongodb.jpg"},
    ];

    return(
        <div className="skill" id="idSkill">
            <h1>Habilidades</h1>
            <section>
                <p>
                    Aquí les muestro las habilidades que he desarrollado, y muy pronto, verán las que vaya aprendiendo
                </p>
                <div className="container">
                    {
                        skill.map((skill, index) => {
                            return <SkillCard skill={skill} key={index}/>
                        })
                    }
                </div>
            </section>
        </div>
    );
};

export default Skill;