import React from "react";

const ProjectCard = ({ card }) => {

    return (
        <div className="projectCard">
            <section>
                <a href={card.url} target="_blank">
                    <img src={card.img} alt={card.alt}/>
                </a>
            </section>
        </div>
    );
};

export default ProjectCard;