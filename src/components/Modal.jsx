import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal (
    <>
      <div>
        {isOpen && (
          <div className="grid place-items-center absolute top-0 z-40 backdrop-blur h-screen w-screen">
            <div className="m-auto relative z-50 min-h-[12.5rem] min-w-[80%] bg-white p-4">
              <div className="flex justify-end">
                <AiOutlineClose
                  onClick={onClose}
                  className="text-2xl self-end"
                />
              </div>
              {children}
            </div>
          </div>
        )}
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
