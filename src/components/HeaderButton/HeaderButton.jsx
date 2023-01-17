import React, { useState } from "react";
import "./HeaderButton/.css";

const HeaderButton = ({ handleContact }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleAdd = () => {
    if (!name||surname||!number){
     return alert('заполните все поля')
    }
    const newContact = {
      name: name,
      surname: surname,
      number: number,
      id: Date.now(),
    };
    handleContact(newContact);
    console.log(newContact);

    setName("");
    setSurname("");
    setNumber();
  };

  return (
    <div>
      
      <div className="inputs">
        <input
          value={name}
          onChange={handleName}
          type="text"
          name="name"
          id=""
          placeholder="name"
        />
        <input
          value={surname}
          onChange={handleSurname}
          type="text"
          name="surname"
          id=""
          placeholder="surname"
        />
        <input
          value={number}
          onChange={handleNumber}
          type="text"
          name="number"
          id=""
          placeholder="number"
        />
        <button className="create-btn" onClick={handleAdd}>add contact</button>
      </div>
    </div>
  );
};

export default HeaderButton;
