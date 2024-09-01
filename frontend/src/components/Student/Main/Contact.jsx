import React from "react";
import "./Contact.css";

function Contact() {
  
  const Contact_Data = {
    Chief_Warden: [
      {
        Titel: "Chief Warden",
        Mobile1: "8003278495",
        Mobile2: "8003278495",
        Email1: "wardeb@gmail.com",
        Email2: "warden@gmail.com",
      },
    ],

    Manager: [
      {
        Titel: "Manager",
        Mobile1: "8495235874",
        Mobile2: "4875321968",
        Email1: "manager@gmail.com",
        Email2: "manegr@gmail.com",
      },
    ],

    Accountant: [
      {
        Titel: "Accountant",
        Mobile1: "8495235874",
        Mobile2: "4875321968",
        Email1: "accountant@gmail.com",
        Email2: "accountant@gmail.com",
      },
    ],
    Mess_President: [
      {
        Titel: "Mess President",
        Mobile1: "8495235874",
        Mobile2: "4875321968",
        Email1: "messpresident@gmail.com",
        Email2: "messpresident@gmail.com",
      },
    ],
  };

  const Show_Contact_details = (Person1, Person2) => {
    return (
      <div className="Boxes_data">
        <div>
          <div className="Sp">
            <p>
              <span>{`${Person1[0].Titel}`}</span>
            </p>
          </div>
          <p>● {Person1[0].Mobile1}</p>
          <p>● {Person1[0].Mobile2}</p>
          <p>● {Person1[0].Email1}</p>
          <p>● {Person1[0].Email2}</p>
        </div>
        <div>
          <div className="Sp">
            <p>
              <span className="Person_Titel">{`${Person2[0].Titel}`}</span>
            </p>
          </div>
          <p>● {Person2[0].Mobile1}</p>
          <p>● {Person2[0].Mobile2}</p>
          <p>● {Person2[0].Email1}</p>
          <p>● {Person2[0].Email2}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="Contact_main_container12"style={{fontFamily:"Agbalumo"}}>
      <div className="contact_heading">Contact us</div>
      <div className="ParentContainer_contact">
        <div className="ContactDetails_ParentContainer">
          <div className="left1">
            {Show_Contact_details(Contact_Data.Chief_Warden, Contact_Data.Manager)}
          </div>
          <div className="right1">{Show_Contact_details(Contact_Data.Accountant, Contact_Data.Mess_President)}</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
