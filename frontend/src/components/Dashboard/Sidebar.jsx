import React from 'react'
import './Sidebar.css'

import home from '../../imgs/home.gif'
import menu from '../../imgs/burger.gif'
import complain from '../../imgs/Compln.gif'
import contact from '../../imgs/phone-call.gif'
import Information from '../../imgs/computer.gif'
import rule from '../../imgs/books.gif'
function Sidebar() {
  return (
    <div className="Sidebar">
        {/*logo*/}
      <div className="logo">
        <img src={menu} alt="" />
        <span>
           Mess <span>relay</span> Web
        </span>
        </div>  


        {/*menu*/}
        <div className="menu">
            <div className="Items">
            <div>
        {/* <img src={home} alt="Your GIF"  /> */}
        <img
          src={home}
          alt="Your GIF"
          style={{ height: '35px', width: '35px', borderRadius: '50%' }}
        />
      </div>
                <span>DashBoard</span>
            </div>




            <div className="Items">
            <div>
        
        <img
          src={menu}
          alt="Your GIF"
          style={{ height: '35px', width: '35px', borderRadius: '50%' }}
        />
      </div>
                <span>Mess-Menu</span>
            </div>

            <div className="Items">
            <div>
        
        <img
          src={complain}
          alt="Your GIF"
          style={{ height: '35px', width: '35px', borderRadius: '50%' }}
        />
      </div>
                <span>Complain</span>
            </div>





            <div className="Items">
            <div>
        
        <img
          src={contact}
          alt="Your GIF"
          style={{ height: '35px', width: '35px', borderRadius: '50%' }}
        />
      </div>
                <span>Contact</span>
            </div>


        
            <div className="Items">
            <div>
        
        <img
          src={Information}
          alt="Your GIF"
          style={{ height: '35px', width: '35px', borderRadius: '50%' }}
        />
      </div>
                <span>Information</span>
            </div>
            <div className="Items">
            <div>
        
        <img
          src={rule}
          alt="Your GIF"
          style={{ height: '35px', width: '35px', borderRadius: '50%' }}
        />
      </div>
                <span>Rules and regulations</span>
            </div>



        </div>
         

    </div>
  )
}

export default Sidebar
