import React, { useState } from 'react';

import cheifimage from '../../imgs/avatar.gif';
import Warden from '../../imgs/laptop.gif';
import mess from '../../imgs/mess.png';
import complain from '../../imgs/Compln.gif';
import Massage from '../../imgs/new-message.gif';

function Sidebar({ onMenuItemClick }) {
  const menuItems = [
    { title: 'Add-ChiefWarden', image: cheifimage },
    { title: 'Add-Accountant', image: Warden },
    { title: 'Unresolved-complains', image: complain },
    { title: 'Resolved-complains', image: Massage },
  ];

  const initialSelectedIndex = menuItems.findIndex((item) => item.title === 'Add-ChiefWarden');

  const [selected, setSelected] = useState(initialSelectedIndex);

  const handleItemClick = (index) => {
    const selectedItem = menuItems[index].title;
    onMenuItemClick(selectedItem);
    setSelected(index);
  };

  return (
    <div className="Sidebar" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* logo */}
      <div className="logo">
        <img src={mess} alt="" />
        <span>
          Ad<span>min</span>
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
