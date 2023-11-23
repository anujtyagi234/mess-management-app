// Import other dependencies
import React, { useState } from 'react';
// import '../Dashboard/Sidebar.css';

import book from '../../imgs/books.gif';
import menu from '../../imgs/burger.gif';
import mess from '../../imgs/mess.png';
import Calender from '../../imgs/calendar.gif'
import complain from '../../imgs/Compln.gif';
import Message from '../../imgs/new-message.gif'
function Sidebar({ onMenuItemClick }) {
  const menuItems = [
    { title: 'Add-Expence', image: Calender },
    { title: 'Mess-Menu', image: menu },
    { title: 'Unresolved-complains', image: complain },
    { title: 'Resolved-complains', image: Message },
  ];

  const initialSelectedIndex = menuItems.findIndex((item) => item.title === 'Add-Expence');

  const [selected, setSelected] = useState(initialSelectedIndex);

  const handleItemClick = (index) => {
    const selectedItem = menuItems[index].title;
    onMenuItemClick(selectedItem);
    setSelected(index); // Update selected item on click
  };

  return (
    <div className="Sidebar" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* logo */}
      <div className="logo">
        <img src={mess} alt="" />
        <span>
          Acc<span>ount</span>ant
        </span>
      </div>

      {/* menu */}
      <div className="menu">
        {menuItems.map((item, index) => (
          <div
            className="Items"
            style={{
              backgroundColor: selected === index ? '#dcdcdc' : 'rgb(38, 232, 154)',
              color: selected === index ? 'black' : 'black',
              borderRadius: '0.8rem',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
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
