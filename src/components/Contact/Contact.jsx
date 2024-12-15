import React from "react";
import "./Contact.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className="contact-item">
      <div>
        <p>
          <strong>👤 {contact.name}</strong>
        </p>
        <p>📞 {contact.number}</p>
      </div>
      <button className="delete-btn" onClick={deleteContact}>
        ❌ Delete
      </button>
    </div>
  );
};

export default Contact;
