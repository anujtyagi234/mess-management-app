import React from "react";
import EmpEdit from "./MenuEdit";

const EditPopup = ({ item, onClose, selectedMenu }) => {
  return (
    <div className="edit-popup-overlay">
      <div className="edit-popup">
        <span className="edit-popup-close" onClick={onClose}>
          &times;
        </span>
        <EmpEdit item={item} selectedMenu={selectedMenu} />
      </div>
    </div>
  );
};