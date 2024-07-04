import React, { useState } from 'react';
import './Sidebar_Chief.css'
import menu from '../../imgs/burger.gif';
import mess from '../../imgs/mess.png';
import Messmenu from '../../imgs/vegan-food.gif'
import complain from '../../imgs/Compln.gif';
import Message from '../../imgs/new-message.gif';
import openmassagepng from '../../imgs/mail-delivery.gif';
import avatar from "../../imgs/avatar.gif"
import Expenses from '../../imgs/calendar.gif'

function Sidebar({ onMenuItemClick }) {
  const menuItems = [
    { title: 'ch_Profile', image:  avatar},
    { title: 'Student-Complains', image: complain },
    { title: 'Resolved-Complains', image: openmassagepng },
   
    { title: 'Mess-Menu', image: Messmenu },
    { title: 'AddNotice', image:  openmassagepng},



   
    

    
    

    
    
  ];

  const initialSelectedIndex = menuItems.findIndex((item) => item.title === 'ch_Profile');

  const [selected, setSelected] = useState(initialSelectedIndex);

  const handleItemClick = (index) => {
    const selectedItem = menuItems[index].title;
    onMenuItemClick(selectedItem);
    setSelected(index);
  };

  return (
    <div className="Sidebar">
      {/*logo*/}
      <div className="logo">
        <img src={mess} alt="" />
        <span>
          Chief <span>Warden</span>
        </span>
      </div>

      {/*menu*/}
      <div className="menu">
        {menuItems.map((item, index) => (
          <div
          
            className={`Items ${selected === index ? 'active' : ''}`}
            key={index}
            onClick={() => handleItemClick(index)}
          >
            <div>
              <img
                src={item.image}
                alt="Your GIF"
                style={{ height: '34px', width: '34px', borderRadius: '50%' }}
              />
            </div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Sidebar;
