import AboutMachine from "../components/AboutMachine/aboutMachine";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const AboutMachinePage = () => {
  const [searchParams] = useSearchParams();
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
  return (
    isLoggedIn && <AboutMachine condition={searchParams.get("condition")} />
  );
};

export default AboutMachinePage;
