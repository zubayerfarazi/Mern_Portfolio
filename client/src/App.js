import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Service from "./pages/Service";
// import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Index from "./pages/HOME/Index";
import Admin from "./pages/ADMIN/Admin";
import EditIntro from "./pages/ADMIN/EditIntro";
import ProjectEdit from "./pages/ADMIN/ProjectInfoEdit";
import ContactEdit from "./pages/ADMIN/ContactEdit";
import ServiceParaEdit from "./pages/ADMIN/ServiceParaEdit";
import ServiceCard from "./pages/ADMIN/serviceCard";
import AddServiceCard from "./pages/ADMIN/AddServiceCard";
import EditServiceCard from "./pages/ADMIN/EditServiceCard";
import AddNewProject from "./pages/ADMIN/AddNewProject";
import EditProjectInfo from "./pages/ADMIN/EditProjectInfo";
import EditAbout from "./pages/ADMIN/EditAbout";
// import Navbar from "./components/NAVBAR/Navbar";
// import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      {/* <Navbar></Navbar> */}
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        {/* <Route path="/about" element={<About></About>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/project" element={<Projects></Projects>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route> */}
        {/* <Route exact path="/home" element={<Home></Home>}></Route> */}
        <Route path="/" element={<Index></Index>}></Route>
        <Route path="/page/admin" element={<Admin></Admin>}></Route>
        <Route
          path="/page/admin/edit/:id"
          element={<EditIntro></EditIntro>}
        ></Route>
        <Route
          path="/page/admin/projectEdit/:id"
          element={<ProjectEdit></ProjectEdit>}
        ></Route>
        <Route
          path="/page/admin/contactEdit/:id"
          element={<ContactEdit></ContactEdit>}
        ></Route>
        <Route
          path="/page/admin/serviceParagraph/:id"
          element={<ServiceParaEdit></ServiceParaEdit>}
        ></Route>
        <Route
          path="/page/admin/serviceCard/:id"
          element={<ServiceCard></ServiceCard>}
        ></Route>
        <Route
          path="/page/admin/addServiceCard"
          element={<AddServiceCard></AddServiceCard>}
        ></Route>
        <Route
          path="/page/admin/editServiceCard/:id"
          element={<EditServiceCard></EditServiceCard>}
        ></Route>
        <Route
          path="/page/admin/addNewProject"
          element={<AddNewProject></AddNewProject>}
        ></Route>
        <Route
          path="/page/admin/editProjectInfo/:id"
          element={<EditProjectInfo></EditProjectInfo>}
        ></Route>
        <Route
          path="/page/admin/about/:id"
          element={<EditAbout></EditAbout>}
        ></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
