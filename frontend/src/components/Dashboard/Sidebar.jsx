import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
// import App from '../../App'
// import {UilEstate} from "@iconscount/react-unicons"
function Sidebar() {
  return (
    <div className="Sidebar">
        {/*logo*/}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
           Mess <span>relay</span> Web
        </span>
        </div>  


        {/*menu*/}
        <div className="menu">
            <div className="Items">
                <div>
                   {/* <UilEstate/> */}
                   icon
                </div>
                <span>DashBoard</span>
            </div>
        </div>
         

    </div>
  )
}

export default Sidebar
