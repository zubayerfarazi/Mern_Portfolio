import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

// import profile from "../../assets/profile-pic.png";
// import CV from "../../assets/CV/Zubayer Farazi.pdf";
import ProjectsInfo from "../../components/PROJECTSINFO/Projects";
import axios from "axios";

const Intro = () => {
  const [profileImg, setProfileImg] = useState("");
  const [CV, setCV] = useState("");
  const [name, setName] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [linkedInLink, setLinkedInLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/intro`)
      .then((res) => {
        const intro = res.data.data[0];
        setProfileImg(intro.profileImage);
        setCV(intro.cv);
        setName(intro.name);
        setParagraph(intro.paragraph);
        setGithubLink(intro.githubLink);
        setLinkedInLink(intro.linkedInLink);
        setFacebookLink(intro.facebookLink);
        setTwitterLink(intro.twitterLink);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  return (
    <div>
      <div className="pt-14 md:pt-20 px-5 md:px-10 text-center md:text-justify flex flex-col-reverse items-center justify-around md:flex-row space-y-10 md:space-y-0 md:space-x-10">
        <div className="leading-10 py-10">
          <h1 className="text-xl">As-salamu Alaikum</h1>
          <h1 className="text-5xl md:text-7xl">Hello, I'm</h1>
          <h1 className="text-5xl md:text-8xl text-sky-600 font-bold">
            {name}
          </h1>
          <p className="text-xl max-w-2xl md:text-2xl pt-10 tracking-wide font-playwrite">
            {paragraph}
          </p>
          {/* <p className="text-xl md:text-2xl tracking-wide font-playwrite leading-loose">
            I am proficient in various programming languages and technologies.
          </p> */}

          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-10 items-center pt-10">
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 px-4 py-2 rounded-md border-sky-600 hover:bg-sky-600 hover:text-white transition-all ease-in-out delay-150 flex items-center gap-2 uppercase tracking-wider text-sky-600"
              download
            >
              Download CV
              <span>
                <MdOutlineFileDownload className="text-xl"></MdOutlineFileDownload>
              </span>
            </a>
            <div className="flex space-x-5 ">
              <Link
                to={githubLink}
                target="_blank"
                className="text-black dark:text-white text-4xl hover:text-gray-600"
              >
                <FaGithub />
              </Link>
              <Link
                to={linkedInLink}
                target="_blank"
                className="text-black dark:text-white text-4xl hover:text-gray-600"
              >
                <FaLinkedin />
              </Link>
              <Link
                to={facebookLink}
                target="_blank"
                className="text-black dark:text-white text-4xl hover:text-gray-600"
              >
                <FaFacebook />
              </Link>
              <Link
                to={twitterLink}
                target="_blank"
                className="text-black dark:text-white text-4xl hover:text-gray-600"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
        <img
          src={profileImg}
          alt="Profile"
          className="rounded-full w-48 md:w-64 lg:w-80"
        />
      </div>
      <ProjectsInfo></ProjectsInfo>
    </div>
  );
};

export default Intro;
