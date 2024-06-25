import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [intros, setIntros] = useState("");
  const [projectsInfo, setProjectsInfo] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [liveProjects, setLiveProjects] = useState([]);
  const [aboutInfo, setAboutInfo] = useState("");

  const [visibleSection, setVisibleSection] = useState("intro");

  const showIntro = () => {
    setVisibleSection("intro");
  };
  const showProjectInfo = () => {
    setVisibleSection("projectInfo");
  };
  const showAbout = () => {
    setVisibleSection("about");
  };
  const showService = () => {
    setVisibleSection("services");
  };
  const showProject = () => {
    setVisibleSection("projects");
  };
  const showContact = () => {
    setVisibleSection("contact");
  };

  //Intro Information
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/intro")
      .then((res) => {
        setIntros(res.data);
      })
      .then((error) => {
        console.error(error);
      });
  }, []);
  //Intro Information

  //Project Information
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/projectInfo")
      .then((res) => {
        setProjectsInfo(res.data);
      })
      .then((error) => {
        console.error(error);
      });
  }, []);
  //Project Information

  //Contact Information
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/contact")
      .then((res) => {
        setContactInfo(res.data);
      })
      .then((error) => {
        console.error(error);
      });
  }, []);
  //Contact Information

  //Service Information
  useEffect(() => {
    axios.get("http://localhost:4000/api/service").then((res) => {
      setServiceDescription(res.data);
    });
  }, []);
  //Service Information

  // Live Project Information
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/liveProject`)
      .then((res) => {
        setLiveProjects(res.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  // Live Project Information

  //about Information
  useEffect(() => {
    axios.get("http://localhost:4000/api/about").then((res) => {
      setAboutInfo(res.data.data[0]);
    });
  }, []);
  //about Information

  const handleDelete = (cardId) => {
    axios
      .delete(`http://localhost:4000/api/serviceCard/${cardId}`)
      .then((res) => {
        setLiveProjects((prevCards) =>
          prevCards.filter((card) => card._id !== cardId)
        );
      })
      .catch((error) => {
        console.error("There was an error deleting the card!", error);
      });
  };

  const handleEdit = (projectId) => {
    navigate(`/page/admin/editProjectInfo/${projectId}`);
  };

  return (
    <div className="text-white px-10 bg-white dark:bg-gray-800">
      <h1 className="text-7xl text-center font-bold tracking-wider">
        Admin Page
      </h1>
      <div className="flex justify-around">
        {/* Intro Section */}
        <div>
          <h1
            className="py-10 text-4xl font-semibold text-center underline cursor-pointer"
            onClick={showIntro}
          >
            Intro
          </h1>
          {visibleSection === "intro" && intros && (
            <form action="" className=" space-y-5 ">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={intros.data[0].name}
                  className="bg-white dark:bg-gray-300 w-[700px] border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-2xl font-semibold text-black"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="para"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  Paragraph
                </label>
                <textarea
                  name="para"
                  id="para"
                  value={intros.data[0].paragraph}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-2xl font-semibold text-black text-justify"
                  rows="6" // You can adjust the number of rows to fit your needs
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="github"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  Github Link
                </label>
                <input
                  type="text"
                  name="github"
                  id="github"
                  value={intros.data[0].githubLink}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-2xl font-semibold text-black"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="linkedin"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  LinkedIn Link
                </label>
                <input
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  value={intros.data[0].linkedInLink}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-2xl font-semibold text-black"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="facebook"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  Facebook Link
                </label>
                <input
                  type="text"
                  name="facebook"
                  id="facebook"
                  value={intros.data[0].facebookLink}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-2xl font-semibold text-black"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="twitter"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  Twitter Link
                </label>
                <input
                  type="text"
                  name="twitter"
                  id="twitter"
                  value={intros.data[0].twitterLink}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-2xl font-semibold text-black"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="cv"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  CV Link
                </label>
                <input
                  type="text"
                  name="cv"
                  id="cv"
                  value={intros.data[0].cv}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-2xl font-semibold text-black"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="cv"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  Profile Image Link
                </label>
                <input
                  type="text"
                  name="cv"
                  id="cv"
                  value={intros.data[0].profileImage}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-2xl font-semibold text-black"
                />
              </div>

              <div className="flex justify-around items-center text-2xl">
                <Link
                  to={`/page/admin/edit/${intros.data[0]._id}`}
                  className="bg-sky-700 px-4 py-2 rounded font-semibold tracking-widest hover:bg-sky-400"
                >
                  Edit
                </Link>
                <button className="bg-sky-700 px-4 py-2 rounded font-semibold tracking-widest hover:bg-sky-400">
                  Delete
                </button>
              </div>
            </form>
          )}
        </div>
        {/* Intro Section */}

        {/* Project Info Section */}
        <div>
          <h1
            className="py-10 text-4xl font-semibold text-center underline cursor-pointer"
            onClick={showProjectInfo}
          >
            Technology Information
          </h1>
          {visibleSection === "projectInfo" && (
            <form action="" className=" space-y-5 ">
              <div className="flex flex-col">
                <label
                  htmlFor="experience"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  No. of Experience
                </label>
                <input
                  type="number"
                  name="experience"
                  id="experience"
                  value={projectsInfo.data[0].noOfExperience}
                  className="bg-white dark:bg-gray-300 w-[700px] border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-4xl font-semibold text-black font-mono"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="projectCompleted"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  No. of Project Completed
                </label>
                <input
                  type="number"
                  name="projectCompleted"
                  id="projectCompleted"
                  value={projectsInfo.data[0].noOfProjectCompleted}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-4xl font-semibold text-black font-mono"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="technology"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  No. of Technology Mastered
                </label>
                <input
                  type="number"
                  name="technology"
                  id="technology"
                  value={projectsInfo.data[0].noOfTechnology}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-4xl font-semibold text-black font-mono"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="codecommits"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  No. of Code Commits
                </label>
                <input
                  type="number"
                  name="codecommits"
                  id="codecommits"
                  value={projectsInfo.data[0].noOfCodeCommits}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-4xl font-semibold text-black font-mono"
                />
              </div>

              <div className="flex justify-around items-center text-2xl">
                <Link
                  to={`/page/admin/projectEdit/${projectsInfo.data[0]._id}`}
                  className="bg-sky-700 px-4 py-2 rounded font-semibold tracking-widest hover:bg-sky-400"
                >
                  Edit
                </Link>
                <button className="bg-sky-700 px-4 py-2 rounded font-semibold tracking-widest hover:bg-sky-400">
                  Delete
                </button>
              </div>
            </form>
          )}
        </div>
        {/* Project Info Section */}

        {/* About Section */}
        <div>
          <h1
            className="py-10 text-4xl font-semibold text-center underline cursor-pointer"
            onClick={showAbout}
          >
            About
          </h1>
          {visibleSection === "about" && (
            <form action="" className=" space-y-5 ">
              <div className="flex flex-col ">
                <label
                  htmlFor="education"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  About Image Link
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  value={aboutInfo.aboutImage}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xl font-semibold text-black"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="designation"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  Designation
                </label>
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  value={aboutInfo.aboutDesignation}
                  className="bg-white dark:bg-gray-300 w-[700px] border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xl font-semibold text-black"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="para"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  Paragraph
                </label>
                <textarea
                  type="text"
                  name="para"
                  id="para"
                  value={aboutInfo.aboutParagraph}
                  rows={5}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-2xl font-semibold text-black text-justify"
                />
              </div>

              <div className="flex justify-around items-center text-2xl">
                <Link
                  to={`/page/admin/about/${aboutInfo._id}`}
                  className="bg-sky-700 px-4 py-2 rounded font-semibold tracking-widest hover:bg-sky-400"
                >
                  Edit
                </Link>
                <button className="bg-sky-700 px-4 py-2 rounded font-semibold tracking-widest hover:bg-sky-400">
                  Delete
                </button>
              </div>
            </form>
          )}
        </div>
        {/* About Section */}

        {/* Service Section */}
        <div>
          <h1
            className="py-10 text-4xl font-semibold text-center underline cursor-pointer"
            onClick={showService}
          >
            My Service
          </h1>
          {visibleSection === "services" && (
            <form action="" className=" space-y-5 ">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  Paragraph
                </label>
                <textarea
                  type="text"
                  name="paragraph"
                  id="paragraph"
                  value={serviceDescription.data[0].serviceParagraph}
                  className="bg-white dark:bg-gray-300 w-[700px] border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xl font-semibold text-black text-justify"
                  rows={4}
                />
              </div>

              <div className="flex justify-around items-center text-2xl">
                <Link
                  to={`/page/admin/serviceParagraph/${serviceDescription.data[0]._id}`}
                  className="bg-sky-700 px-4 py-2 rounded font-semibold tracking-widest hover:bg-sky-400"
                >
                  Edit
                </Link>
                <Link
                  serviceId={serviceDescription.data[0]._id}
                  to={`/page/admin/serviceCard/${serviceDescription.data[0]._id}`}
                  className="bg-sky-700 px-4 py-2 rounded font-semibold tracking-widest hover:bg-sky-400"
                >
                  Add Card Info
                </Link>
              </div>
            </form>
          )}
        </div>
        {/* Service Section */}

        {/* Project Section */}
        <div className="flex flex-col space-y-10">
          <h1
            className="py-10 text-4xl font-semibold text-center underline cursor-pointer"
            onClick={showProject}
          >
            Projects
          </h1>
          <Link
            to={`/page/admin/addNewProject`}
            className="text-2xl font-semibold text-center cursor-pointer transition-all duration-150 bg-sky-600 hover:rounded-full rounded-md py-2"
          >
            Add New Project
          </Link>
          {visibleSection === "projects" &&
            (liveProjects && liveProjects.length > 0 ? (
              liveProjects.map((project) => (
                <div
                  key={project._id}
                  className="bg-white dark:bg-sky-800 max-w-sm lg:max-w-lg p-5 rounded-lg shadow-md"
                >
                  <img
                    src={project.projectImage}
                    alt={project.projectTitle}
                    className="w-64 mx-auto"
                  />
                  <h1 className="text-2xl font-bold text-center p-5 tracking-wider ">
                    {project.projectNo}
                  </h1>
                  <h1 className="text-2xl font-bold text-center p-5 tracking-wider ">
                    {project.projectTitle}
                  </h1>
                  <p className="text-lg text-justify pb-5 text-white">
                    {project.projectParagraph}
                  </p>
                  <p className="text-lg text-justify pb-5 text-white">
                    Live Link: {project.projectLiveLink}
                  </p>
                  <p className="text-lg text-justify pb-5 text-white">
                    Github Link: {project.projectGithubLink}
                  </p>
                  <div className="text-2xl flex justify-around">
                    <button
                      className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700"
                      onClick={() => handleEdit(project._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700"
                      onClick={() => handleDelete(project._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No project information available.</p>
            ))}
        </div>
        {/* Project Section */}

        {/* Contact Section */}
        <div>
          <h1
            className="py-10 text-4xl font-semibold text-center underline cursor-pointer"
            onClick={showContact}
          >
            Contact Me
          </h1>
          {visibleSection === "contact" && (
            <form action="" className=" space-y-5 ">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  Contact Description
                </label>
                <textarea
                  type="text"
                  name="paragraph"
                  id="paragraph"
                  value={contactInfo.data[0].contactDescription}
                  className="bg-white dark:bg-gray-300 w-[700px] border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xl font-semibold text-black"
                  rows={3}
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="linkedin"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  Gmail
                </label>
                <input
                  type="name"
                  name="gmail"
                  id="gmail"
                  value={contactInfo.data[0].gmail}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xl font-semibold text-black"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="linkedin"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  value={contactInfo.data[0].phoneNo}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xl font-semibold text-black font-mono"
                />
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="facebook"
                  className="pb-2 text-2xl font-semibold tracking-wide"
                >
                  Current Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={contactInfo.data[0].currentLocation}
                  className="bg-white dark:bg-gray-300 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-xl font-semibold text-black"
                />
              </div>

              <div className="flex justify-around items-center text-2xl">
                <Link
                  to={`/page/admin/contactEdit/${contactInfo.data[0]._id}`}
                  className="bg-sky-700 px-4 py-2 rounded font-semibold tracking-widest hover:bg-sky-400"
                >
                  Edit
                </Link>
                <button className="bg-sky-700 px-4 py-2 rounded font-semibold tracking-widest hover:bg-sky-400">
                  Delete
                </button>
              </div>
            </form>
          )}
        </div>
        {/* Contact Section */}
      </div>
    </div>
  );
};

export default Admin;
