import React, { useState } from 'react';
import './Sidebar.css';

import home from '../../imgs/home.gif';
import menu from '../../imgs/burger.gif';
import complain from '../../imgs/Compln.gif';
import contact from '../../imgs/phone-call.gif';
import Information from '../../imgs/computer.gif';
import rule from '../../imgs/books.gif';
import team from '../../imgs/copywriting.gif';
import collage from '../../imgs/lecture-room.gif';

function Sidebar() {
  const menuItems = [
    { title: 'Dashboard', image: home },
    { title: 'Mess-Menu', image: menu },
    { title: 'Complain', image: complain },
    { title: 'Contact', image: contact },
    { title: 'Information', image: Information },
    { title: 'Rules', image: rule },
    { title: 'Mnnit Alld', image: collage },
    { title: 'WebCrator', image: team },
  ];

  const initialSelectedIndex = menuItems.findIndex((item) => item.title === 'Dashboard');

  const [selected, setSelected] = useState(initialSelectedIndex);

  const handleItemClick = (index) => {
    setSelected(index);
    
  };

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
