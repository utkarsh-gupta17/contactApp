import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

const ContactCards = ({contacts}) => {
  return (
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
        <RiEditCircleLine />
        <IoMdTrash className="text-orange" />
      </div>
    </div>
  );
};

export default ContactCards;
