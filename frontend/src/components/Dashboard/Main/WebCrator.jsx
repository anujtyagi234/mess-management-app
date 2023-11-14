import React from 'react';
import './WebCrator.css';
import github from '../../../imgs/github.png';
import Instagram from '../../../imgs/instagram.png';
import LinkedIn from '../../../imgs/linkedin.png';

const StudentDetails = () => {
  const openInstagram = (instagramUsername) => {
    window.open(`https://www.instagram.com/${instagramUsername}/`, '_blank');
  };
  const openLinkedIn = (linkedinUsername) => {
    window.open(`https://www.linkedin.com/in/${linkedinUsername}/`, '_blank');
  };
  const openGithub = (githubUsername) => {
    window.open(`https://www.github.com/${githubUsername}/`, '_blank');
  };

  const studentData = [
    {
      Name: "Anuj Tyagi",
      Registration_no: 20224027,
      LinkedIn: "anuj-tyagi-a33265266",
      GitHub: "anujtyagi234",
      Instagram: "anujtyagi234",
      color: 'green',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY1JiB3C0uUKXfN24TIeSXojKD8Mu0uMCQQ&usqp=CAU",
      customStyle: {
        borderRadius: '10px',
        marginTop: '4rem',
        color: 'white',
      },
    },
    {
      Name: "Sumit Chaurasiya",
      Registration_no: 20223274,
      LinkedIn: "sumit-chaurasiya-a0676026a",

      GitHub: "Sumit524",
      Instagram: "sumitchaurasiya1241",
      color: 'yellow',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87ABN7JfWkigQ3MfAOWtshQyQacv81PSMWIkBug6F5VO-6bttXEbf2Oeg__y0LHmW8fY&usqp=CAU",
      customStyle: {
        borderRadius: '10px',
        marginTop: '9rem',
        color: 'white',
      },
    },
    {
      Name: "Kushagra Verma",
      Registration_no: 20224089,
      LinkedIn: "kushagra-verma-a178b7253",
      GitHub: "kushagra572",
      Instagram: "mrperfect572",
      color: 'red',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3EQjUQ8xXLMIF13c4pq8fK1r3J4UOyJ5IQ&usqp=CAU",
      customStyle: {
        borderRadius: '10px',
        marginTop: '14rem',
        color: 'white',
      },
    },
  ];

  return (
    <div className="MainContainer">
      <div className='student-container'>
        {studentData.map((student, index) => (
          <div key={index} className={`student-box ${student.color}`} style={student.customStyle}>
            <img src={student.image} alt={student.Name} />
            <h2 className='F_text'>{student.Name}</h2>
            <span className='S_text'>{student.Registration_no}</span>
            <div className='SocialMedia_m'>
              <div><img src={github} alt="github" className='img_Socialmedia' onClick={() => openGithub(student.GitHub)} /></div>
              <div><img src={Instagram} alt="instagram" className='img_Socialmedia' onClick={() => openInstagram(student.Instagram)} /></div>
              <div><img src={LinkedIn} alt="linkedin" className='img_Socialmedia' onClick={() => openLinkedIn(student.LinkedIn)} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDetails;
