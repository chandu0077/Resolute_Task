import { useEffect, useState } from "react";
import AllMachines from "../components/AllMachines/AllMachines";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("authKey");
    if (!userLoggedIn) {
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      setIsLoggedIn(true);
    }
  }, []);
  return isLoggedIn && <AllMachines />;
};

export default Home;
