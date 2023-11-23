import React, { useState } from 'react';
import './Sidebar_Chief.css'
import menu from '../../imgs/burger.gif';
import mess from '../../imgs/mess.png';
import complain from '../../imgs/Compln.gif';
import Massage from '../../imgs/new-message.gif';
import openmassagepng from '../../imgs/mail-delivery.gif';

function Sidebar({ onMenuItemClick }) {
  const menuItems = [
    { title: 'Student-Complains', image: complain },
    { title: 'Resolved-Complains', image: openmassagepng },
    { title: 'Edit-Mess-Menu', image: menu },
    
  ];

  const initialSelectedIndex = menuItems.findIndex((item) => item.title === 'Student-Complains');

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
