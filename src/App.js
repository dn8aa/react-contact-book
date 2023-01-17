import { useState } from "react";
import HeaderButton from "./components/HeaderButton/HeaderButton";
import Contacts from "./components/Contacts/Contacts";
import EditModal from "./components//EditModal/EditModal";
import OpenContactBook from "./components/OpenContactBook/OpenContactBook";
import '../src/App.css'

function App() {
  const [contacts, setContacts] = useState({});

  let [editContact, setEditContact] = useState({});

  const [modal, setModal] = useState(false);

  const [book, setBook] = useState(true);

  function handleContact(newObj) {
    let newContacts = [...contacts];
    newContacts.push(newObj);
    setContacts(newContacts);
    console.log(newContacts);
  }

  function handleDelete(id) {
    let newContacts = contacts.filter((item) => {
      return item.id == id;
    });
    setContacts(newContacts);
  }

  function handleEdit(index) {
    setModal(true);
    setEditContact(contacts[index]);
  }
  function handleClose() {
    setModal(false);
  }

  function handleSaveContact(newContact) {
    const newContacts = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContacts(newContacts);
    handleClose();
  }

  function closeContactBook() {
    setBook(false);
  }

  function openContactBook() {
    setBook(true);
  }

  return (
    <>
      {/* {modal ? null : <HeaderButton handleContact={handleContact} />}
      {modal ? null : (
        <Contacts
          contacts={contacts}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )} */}
      <h1>CONTACT BOOK</h1>

      <div className="box">
      <div className="left">
      <HeaderButton handleContact={handleContact} />
      </div>

      <div className="right">
      {book ? null : <OpenContactBook openContactBook={openContactBook} />}
      {book ? (
        <Contacts
          contactts={contacts}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          closeContactBook={closeContactBook}
      />
      ) : null}

      {modal ? (
        <EditModal
          handleClose={handleClose}
          editContact={editContact}
          handleeSaveContact={handleSaveContact}
        />
      ) : null}
      </div>
      </div>
   
  );
}

export default App;
