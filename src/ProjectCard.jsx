import React from "react";
import Popup from "reactjs-popup";

const ProjectCard = props => {
  let project = props.project;
  let Card = ({ title }) => (
    <div className="card">
      <div className="header">
        {title}
        <div className="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum
          minus alias, corporis debitis odio explicabo nihil? Repellendus
          itaque, et minus magni nihil maxime dolores esse dolorum eaque quas
          id!
        </div>
      </div>
    </div>
  );
  return (
    <div key={project.id} className="overflow-hidden border">
      <img
        src={project.image}
        className="block h-auto w-full"
        style={{ height: "150px", objectFit: "cover" }}
      />

      <div className="px-6 py-4" style={{ minHeight: "150px" }}>
        <div className="font-bold text-xl mb-2">{project.name}</div>
        <p className="text-grey-darker text-base">{project.description}</p>
      </div>

      <div className="flex items-center justify-around leading-none p-2 md:p-4">
        <Popup
          trigger={
            <img
              src="../src/images/details.png"
              alt="Oops there should be an image here!"
              className="p-px border-2 h-12 rounded-full rounded-lg hover:border-black"
            />
          }
          position="top center"
          on="click"
        >
          <Card title={project.name} />
        </Popup>

        <a href={project.github} target="_blank">
          <img
            src="../src/images/github2.png"
            alt="Oops there should be an image here!"
            className="p-px border-2 h-12 rounded-full rounded-lg hover:border-black"
          />
        </a>
        {project.website ? (
          <a href={project.website} target="_blank">
            <img
              src="../src/images/website.png"
              alt="Oops there should be an image here!"
              className="p-px border-2 h-12 rounded-full rounded-lg hover:border-black"
            />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
