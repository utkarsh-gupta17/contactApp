import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./assets/config/firebase.js";
import ContactCards from "./components/ContactCards";
// import Modal from "./components/Modal";
import AddandUpdateContact from "./components/AddandUpdateContact";
import useDiclouse from "./hooks/useDiclouse";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { onClose, onOpen, isOpen } = useDiclouse();

  // now perform a network call so use a useEffect hook
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContact = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactList.filter((contact)=>contact.Name.toLowerCase().includes(value.toLowerCase()));

      setContacts(filteredContacts);
      return filteredContacts;
    });

  }

  return (
    <>
      <div className="max-w-[23.125rem] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="text-white text-3xl absolute ml-1" />
            <input
            onChange={filterContact}
              type="text"
              placeholder="Search Contact"
              className="pl-9 text-white flex-grow border bg-transparent border-white rounded-md h-10"
            />
          </div>
          <div>
            <AiFillPlusCircle
              onClick={onOpen}
              className="cursor-pointer text-5xl text-white"
            />
          </div>
        </div>
        <div className="mt-4 gap-3 flex flex-col">
          {contacts.map((contact) => (
            <ContactCards key={contact.id} contacts={contact} />
          ))}
        </div>
      </div>
      <AddandUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center"/>
    </>
  );
};

export default App;
