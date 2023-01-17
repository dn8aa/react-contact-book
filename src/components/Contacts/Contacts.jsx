import React from "react";
import "./Contacts.css";

const Contacts = (props) => {
  const Noone = () => {
    if (props.contacts.length === 0) {
      return <p className="noone">No contacts yet</p>;
    }
  };

  const CloseContactBook = () => {
    if (props.contacts.length !== 0) {
      return (
        <button onClick={props.closeContactBook} className="closebook-btn">
          close
        </button>
      );
    }
  };

  return (
    <div className="contact-book">
      <CloseContactBook />
      <ul className="contactList">
        <Noone />

        {props.contacts.map((item, index) => (
          <li className="contact" key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <h2>{item.surnaame}</h2>
              <h3>{item.number}</h3>
            </div>

            <div className="btns">
              <button onClick={() => props.handleEdit(index)}>edit</button>
              <button onClick={() => props.handleDelete(item)}>
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
