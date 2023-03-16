import { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";
import Nav from "../Components/Navigation";
import { useModalContext } from "../Context/ModalContextProvider";

function DashboardScreen() {
  const { user } = useContext(UserContext);
  const modal = useModalContext();

  //console.log(modal);
  return (
    <>
      <Nav />
      <p>Email: {user.email}</p>
      <p>Firstname: {user.firstname}</p>
      <p>Lastname: {user.lastname}</p>

      <button
        onClick={() => {
          modal.setTitle("mon titre");
          modal.setDesc("mon desc");
          modal.toggleModal();
        }}
      >
        Open Modal
      </button>
    </>
  );
}

export default DashboardScreen;
