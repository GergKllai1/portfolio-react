import React from "react";
import Popup from "reactjs-popup";

const ProjectCard = props => {
  let project = props.project;
  let Card = ({ title }) => (
    <div className="border-2 p-4 text-center bg-grey-lightest -m-2 border-blue-darkest">
      <div className="text-base font-bold text-lg p-2 border-b-2">{title}</div>
      <div className="p-2 l-2">
        {project.description}
      </div>
    </div>
  );
  return (
    <div key={project.id} className="overflow-hidden border bg-grey-lightest">
      <img
        src={project.image}
        className="block h-auto w-full"
        style={{ height: "150px", objectFit: "cover" }}
      />

      <div className="px-6 py-4" style={{ minHeight: "150px" }}>
        <div className="font-bold text-xl mb-4 border-b-2">{project.name}</div>
        <p className="text-grey-darker text-sm">Technologies used:</p>
        <div className="flex pt-2">
          <img className="h-8 pr-4" src={project.technology1} alt=""/>
          <img className="h-8 pr-4" src={project.technology2} alt=""/>
          <img className="h-8 pr-4" src={project.technology3} alt=""/>
        </div>
      </div>

      <div className="flex p-2 md:p-4">
        <Popup
          trigger={
            <img
              src="../src/images/details.png"
              alt="Oops there should be an image here!"
              className="p-px mr-4 border-2 h-12 rounded-full rounded-lg hover:border-black cursor-pointer"
            />
          }
          modal
          on="click"
        >
          <Card title={project.name} />
        </Popup>

        <a href={project.github} target="_blank">
          <img
            src="../src/images/github2.png"
            alt="Oops there should be an image here!"
            className="p-px mr-4 border-2 h-12 rounded-full rounded-lg hover:border-black"
          />
        </a>
        {project.website ? (
          <a href={project.website} target="_blank">
            <img
              src="../src/images/website.png"
              alt="Oops there should be an image here!"
              className="p-px mr-4 border-2 h-12 rounded-full rounded-lg hover:border-black"
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
