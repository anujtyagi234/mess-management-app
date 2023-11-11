
import React, { useState } from "react";
import Home from "./components/Home/Home.jsx";
import Rightside from "./components/Dashboard/Rightside/Rightside.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Home/NavBar.jsx";
import Footer from "./components/Home/Footer.jsx";
import About from "./components/Home/About.jsx";
import Login from "./components/Login/login.jsx";
import Sidebar from "./components/Dashboard/Sidebar.jsx";
import "./App.css";
import MainDash from "./components/Dashboard/Main/MainDash.jsx";
import Complain from "./components/Dashboard/Main/Complain.jsx";
import Rules from './components/Dashboard/Main/Rule.jsx'
export default function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  let content;




  // title: 'Dashboard', image: home },
  // { title: 'Mess-Menu', image: menu },
  // { title: 'Complain', image: complain },
  // { title: 'Contact', image: contact },
  // { title: 'Information', image: Information },
  // { title: 'Rules', image: rule },
  // { title: 'Mnnit Alld', image: collage },
  // { title: 'WebCrator', image: team 






  switch (selectedMenuItem) {
    case "Dashboard":
      content = <MainDash />;
      break;
    case "Complain":
      content = <Complain />;
      break;
      // case "Mess-Menu":
      //   content = <Mess-Menu/>;
      //   break;
      //   case "Information":
      //     content = <Information/>;
      //     break;
      //     case "WebCrator":
      //       content = <WebCrator/>;
      //       break;
            case "Rules":
              content = <Rules/>;
              break;
      //         case "Mnnit Alld":
      //           content = <Mnnit Alld/>;
      //           break;

      //           case "Contact":
      //             content = <Contact/>;
      //             break;

    

    default:
      content = null; // Render nothing if no match
  }

  return (
    <div>
      {/* <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </Router> */}

      <div className="App">
        <div className="Back">
          <Sidebar onMenuItemClick={handleMenuItemClick} />
          {content}
          <Rightside />
          <div></div>
        </div>
      </div>
    </div>
  );
}

