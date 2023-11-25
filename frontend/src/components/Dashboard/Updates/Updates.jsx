
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

    
    <div className='Update' >
      <div className="sr"style={{fontFamily:"Agbalumo"}}><h1>Updates</h1></div>
      {UpdatesData.map((update, index) => (
        <div className="update" style={{fontFamily:"Agbalumo"}}  key={index}>
          <div className='img_Update' style={{fontFamily:"Agbalumo"}}>
         <img src={update.img} alt=""  className='img_user_update'  style={{fontFamily:"Agbalumo"}}/>

              <span  style={{textShadow:"2px 2px 2px yellow"}}>{update.name}</span>
         </div>

          <div style={{textShadow:"2px 2px 2px aqua"}} className="noti">
            <div>
             <p> <span >{update.noti}</span></p>
              
            </div>
          </div>
          <div>
            <span  style={{textShadow:"2px 2px 2px pink"}}>{update.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Update;

