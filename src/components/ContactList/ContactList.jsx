import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import "./ContactList.css";

const formatName = (name) => {
  return name
    .split(" ")
    .map((part, index) =>
      index === 1
        ? part.toUpperCase()
        : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    )
    .join(" ");
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="contact-list">
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={{
              ...contact,
              name: formatName(contact.name), // İsim formatlama burada uygulanıyor
            }}
            deleteContact={() => dispatch(deleteContact(contact.id))}
          />
        ))
      ) : (
        <p className="empty-message">No contacts found</p>
      )}
    </div>
  );
};

export default ContactList;
