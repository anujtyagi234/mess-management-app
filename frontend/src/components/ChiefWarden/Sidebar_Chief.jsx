import React, { useState } from 'react';
import './Sidebar_Cheif.css';
import '../Dashboard/Sidebar.css';


import home from '../../imgs/home.gif';
import menu from '../../imgs/burger.gif';
import mess from '../../imgs/mess.png';
import Massage from '../../imgs/new-message.gif'

import openmassagepng from '../../imgs/mail-delivery.gif'



function Sidebar({onMenuItemClick}) {
  const menuItems = [
    { title: 'Student-Complains', image: home },
    { title: 'Resolved-Complains', image: openmassagepng },
    { title: 'Edit-Mess-Menu', image: menu },
    { title: 'Unresolved-complain', image: Massage },
    
  ];

  const initialSelectedIndex = menuItems.findIndex((item) => item.title === 'Student-Complains');

  const [selected, setSelected] = useState(initialSelectedIndex);

  const handleItemClick = (index) => {
    const selectedItem = menuItems[index].title;
    onMenuItemClick(selectedItem);
    
  };

  return (
    <div className="Sidebar">
      {/*logo*/}
      <div className="logo">
        <img src={mess} alt="" />
        <span>
          Acc<span>oun</span>tant
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