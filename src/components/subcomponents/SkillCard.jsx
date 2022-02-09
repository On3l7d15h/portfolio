import React from "react";

const SkillCard = ({ skill }) => {
    return(
        <div className="skillcard">
            <img src={skill.image} alt="..."/>
            <section>
                {skill.name}
            </section>
        </div>
    );
};

export default SkillCard;