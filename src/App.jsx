import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./assets/config/firebase.js";
import ContactCards from "./components/ContactCards";
import Modal from "./components/Modal";
import AddandUpdateContact from "./components/AddandUpdateContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // now perform a network call so use a useEffect hook
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactsRef);
        const contactList = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactList);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className="max-w-[23.125rem] mx-auto px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="text-white text-3xl absolute ml-1" />
            <input
              type="text"
              placeholder="Search Contact"
              className="pl-9 text-white flex-grow border bg-transparent border-white rounded-md h-10"
            />
          </div>
          <div>
            <AiFillPlusCircle onClick={onOpen} className="cursor-pointer text-5xl text-white" />
          </div>
        </div>
        <div className="mt-4 gap-3 flex flex-col">
          {contacts.map((contacts) => (
            <ContactCards key={contacts.id} contacts={contacts} />
          ))}
        </div>
      </div>
      <AddandUpdateContact isOpen={isOpen} onClose={onClose}/>
    </>
  );
};

export default App;
