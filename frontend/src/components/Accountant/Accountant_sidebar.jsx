import React, { useState } from 'react';
import '../Dashboard/Sidebar.css';

import book from '../../imgs/books.gif';
import menu from '../../imgs/burger.gif';
import mess from '../../imgs/mess.png';
import complain from '../../imgs/Compln.gif';
import Message from '../../imgs/new-message.gif'


function Sidebar({onMenuItemClick}) {
  const menuItems = [
    { title: 'Add-Expence', image: book },
    { title: 'Mess-Menu', image: mess },
    { title: 'Unresolved-complains', image: complain },
    { title: 'resolved-complains', image: Message },
    
  ];

  const initialSelectedIndex = menuItems.findIndex((item) => item.title === 'Add-Expence');

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
          Mess<span>Relay</span>Web
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