import React, { useState } from "react";
import "./EditModal.css";

const EditModal = (props) => {
  //   const [name, setName] = useState(props.editContact.name);
  //   const [surname, setSurname] = useState(props.editContact.surname);
  //   const [number, setNumber] = useState(props.editContact.number);

  let [item, setItem] = useState(props.editContact);

  function handleEditInputName(e) {
    let newObj = { ...item };
    newObj.name = e.target.value;
    setItem(newObj);
  }
  function handleEditInputSurname(e) {
    let newObj = { ...item };
    newObj.surname = e.target.value;
    setItem(newObj);
  }
  function handleEditInputNumber(e) {
    let newObj = { ...item };
    newObj.number = e.target.value;
    setItem(newObj);
  }

  function handleSave() {
    props.handleSaveContact(item);
  }

  return (
    <div className="background">
      <div className="main-modal">
        <div className="close">
          <button onClick={props.handleClose}>&times;</button>
        </div>

        <input
          onChange={handleEditInputName}
          type="text"
          name="name"
          placeholder="name"
          value={item.name}
        />

        <input
          onChange={handleEditInputSurname}
          type="text"
          name="surname"
          id=""
          placeholder="surname"
          value={item.surname}
        />

        <input
          onChange={handleEditInputNumber}
          type="text"
          name="number"
          id=""
          placeholder="number"
          value={item.number}
        />

        <div className="edit-btns">
          <button className="edit-cancel" onClick={props.handleClose}>cancel</button>
          <button className="edit-save" onClick={handleSave}>save</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
