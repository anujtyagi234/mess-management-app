import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import home from '../../imgs/home.gif';
import menu from '../../imgs/burger.gif';
import mess from '../../imgs/mess.png';
import complain from '../../imgs/Compln.gif';
import contact from '../../imgs/phone-call.gif';
import rule from '../../imgs/books.gif';
import team from '../../imgs/copywriting.gif';
import collage from '../../imgs/lecture-room.gif';
import Message from '../../imgs/new-message.gif';
import openmassagepng from '../../imgs/mail-delivery.gif';

function Sidebar({ onMenuItemClick }) {
  const menuItems = [
    { title: 'Dashboard', image: home },
    { title: 'Mess-Menu', image: menu },
    { title: 'Complain', image: complain },
    { title: 'Unresolved-Complains', image: Message },
    { title: 'Resolved-Complains', image: openmassagepng },
    { title: 'Contact', image: contact },
    { title: 'Rules', image: rule },
    { title: 'Mnnit Alld', image: collage },
    { title: 'WebCrator', image: team },
   
    
  ];

  const initialSelectedIndex = menuItems.findIndex((item) => item.title === 'Dashboard');

  const [selected, setSelected] = useState(initialSelectedIndex);

  const handleItemClick = (index) => {
    const selectedItem = menuItems[index].title;
    onMenuItemClick(selectedItem);
    setSelected(index); // Update the selected index
  };

  return (
    <div className="Sidebar">
      {/* logo */}
      <div className="logo">
        <img src={mess} alt="" />
        <span>
          Mess <span>relay</span> Web
        </span>
      </div>

      {/* menu */}
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
      <div className='feedback_main'>
        <Link to ='/student/feedback'>
        <button className="button-62" role="button" style={{fontFamily:"Agbalumo",color:"black"}}><b>Feedback</b></button>
        </Link>


        
      </div>
    </div>
  );
}

export default Sidebar;
