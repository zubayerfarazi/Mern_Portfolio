import axios from "axios";
import React, { useEffect, useState } from "react";

const ProjectsInfo = () => {
  const [noOfExperience, setNoOfExperience] = useState("");
  const [noOfProjectCompleted, setNoOfProjectCompleted] = useState("");
  const [noOfTechnology, setNoOfTechnology] = useState("");
  const [noOfCodeCommits, setNoOfCodeCommits] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/projectInfo`)
      .then((res) => {
        const projectInfo = res.data.data[0];
        setNoOfExperience(projectInfo.noOfExperience);
        setNoOfProjectCompleted(projectInfo.noOfProjectCompleted);
        setNoOfTechnology(projectInfo.noOfTechnology);
        setNoOfCodeCommits(projectInfo.noOfCodeCommits);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  return (
    <div className="grid grid-cols-2 justify-items-center gap-y-4  md:flex shrink justify-around pb-10">
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-6xl font-mono font-bold">{noOfExperience}</h1>
        <p className="text-xl">
          Years of <br /> experience
        </p>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-6xl font-mono font-bold">{noOfProjectCompleted}</h1>
        <p className="text-xl">
          Projects <br /> completed
        </p>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-6xl font-mono font-bold">{noOfTechnology}</h1>
        <p className="text-xl">
          Technologies <br /> mastered
        </p>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <h1 className="text-6xl font-mono font-bold">{noOfCodeCommits}</h1>
        <p className="text-xl">
          Code <br /> commits
        </p>
      </div>
    </div>
  );
};

export default ProjectsInfo;
