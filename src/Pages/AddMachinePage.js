import Addmachine from "../components/AddMachine/Addmachine";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AddMachinePage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("authKey");
    if (!userLoggedIn) {
      setIsLoggedIn(false);
      console.log("login fail");
      navigate("/login");
    } else {
      setIsLoggedIn(true);
    }
  }, []);
  return isLoggedIn && <Addmachine />;
};

export default AddMachinePage;
