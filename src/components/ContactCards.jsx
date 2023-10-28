import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../assets/config/firebase";
import AddandUpdateContact from "./AddandUpdateContact";
import useDiclouse from "../hooks/useDiclouse";
import { toast } from "react-toastify";


const ContactCards = ({ contacts }) => {

  const { onClose,onOpen,isOpen } = useDiclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully!")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contacts.id}
        className="bg-yellow items-center flex justify-between p-2 rounded-lg"
      >
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-4xl text-orange" />
          <div className="">
            <h2 className="font-medium">{contacts.Name}</h2>
            <p className="text-sm">{contacts.Email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer"/>
          <IoMdTrash
            onClick={() => deleteContact(contacts.id)}
            className="text-orange cursor-pointer"
          />
        </div>
      </div>
      <AddandUpdateContact contact={contacts} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  );
};

export default ContactCards;
