
import React, { useState } from "react";
import Home from "./components/Home/Home.jsx";
import Rightside from "./components/Dashboard/Rightside/Rightside.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Home/NavBar.jsx";
import Footer from "./components/Home/Footer.jsx";
import Login from "./components/Login/login.jsx";
  import Sighnup from './components/Signup/signup.jsx'
import Sidebar from "./components/Dashboard/Sidebar.jsx";
import "./App.css";
import MainDash from "./components/Dashboard/Main/MainDash.jsx";
import Complain from "./components/Dashboard/Main/Complain.jsx";
import Rules from './components/Dashboard/Main/Rule.jsx'
import Mnnit from './components/Dashboard/Main/Mnnit.jsx'
import WebCrator from './components/Dashboard/Main/WebCrator.jsx';
import Mess_Menu from './components/Dashboard/Main/Mess_menu.jsx'
import Contact from './components/Dashboard/Main/Contact.jsx'
import Dashi from "./components/Dashi/Dashboard_main.jsx";


export default function App() {
  // const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
  // const handleMenuItemClick = (menuItem) => {
  //   setSelectedMenuItem(menuItem);
  // };

  // let content;

  // switch (selectedMenuItem) {
  //   case "Dashboard":
  //     content = <MainDash />;
  //     break;
  //   case "Complain":
  //     content = <Complain />;
  //     break;
  //     case "Mess-Menu":
  //       content = <Mess_Menu/>;
  //       break;
  //     //   case "Information":
  //     //     content = <Information/>;
  //     //     break;
  //         case "WebCrator":
  //           content = <WebCrator/>;
  //           break;
  //           case "Rules":
  //             content = <Rules/>;
  //             break;
  //             case "Mnnit Alld":
  //               content = <Mnnit/>;
  //               break;
  //               case "Contact":
  //                 content = <Contact/>;
  //                 break;
  //   default:
  //     content = null; // Render nothing if no match
  // }

  return (
    <div className="wrapper">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sighnup/>} />
          <Route path="/DashBoard" element={<Dashi/>} />

          
        </Routes>
        <Footer/>
      </Router>
      {/* <div className="App">
        <div className="Back">
          <Sidebar onMenuItemClick={handleMenuItemClick} />
          
          {content}
          <Rightside />
          <div></div>
        </div>
      </div> */}
    </div>
  );
}

