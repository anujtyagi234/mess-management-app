
import React from 'react';
import './Updates.css';
import Student from './student.gif';

const UpdatesData = [
  {
    img: Student,
    name: 'Sumit0',
    time: '27 second ago',
    noti: 'Today breakfast is very tasty',
  },
  {
    img: Student,
    name: 'Sumit1',
    time: '2 second ago',
    noti: 'Today breakfast is very tasty',
  },
  {
    img: Student,
    name: 'Sumit2',
    time: '25 second ago',
    noti: 'Today breakfast is very tasty',
  },
];

function Update() {
  return (

    
    <div className='Update'>
      <div className="sr"><h1>Updates</h1></div>
      {UpdatesData.map((update, index) => (
        <div className="update" key={index}>
          <div className='img_Update'>
         <img src={update.img} alt=""  className='img_user_update' />
              <span>{update.name}</span>
         </div>

          <div className="noti">
            <div>
              <span>{update.noti}</span>
              
            </div>
          </div>
          <div>
            <span>{update.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Update;

