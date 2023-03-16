import { createContext, useContext, useState } from "react";
import CustomModal from "../Components/CustomModal";

export const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

const ModalContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleModal = () => {
    if (open) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  const data = {
    toggleModal,
    setTitle,
    setDesc,
  };

  return (
    <ModalContext.Provider value={data}>
      <CustomModal
        open={open}
        handleClose={handleClose}
        title={title}
        desc={desc}
      />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
