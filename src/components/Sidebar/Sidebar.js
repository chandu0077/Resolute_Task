import { IoIosClose } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { MdNotAccessible } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      const singedOut = await signOut(auth);
      console.log("singedOut", singedOut);
      localStorage.removeItem("authKey");
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-[185px] h-full fixed m-2 border-r-2 border-r-slate">
      <img
        src="img/kart-logo.jpg"
        className="w-[100px] h-[30px] mt-[8px]"
        alt="kart-logo"
      />
      <div className="flex mt-[12px] justify-between">
        <p className="text-black text-[12px]">Access bar</p>
        <IoIosClose size={18} />
      </div>
      <div className="mt-[18px]">
        <Link to="/" className="flex hover:bg-red-100 p-2 cursor-pointer">
          <MdOutlineSpaceDashboard size={22} />
          <p className="ms-[26px] text-[12px]">Dashboard</p>
        </Link>
        <Link
          to="/add-machine"
          className="flex mt-[12px] hover:bg-red-100 p-2 cursor-pointer"
        >
          <SiSimpleanalytics size={22} />
          <p className="ms-[26px] text-[12px]">Add Machine</p>
        </Link>
        <div className="flex mt-[12px] hover:bg-red-100 p-2 cursor-pointer">
          <MdNotAccessible size={22} />
          <p className="ms-[26px] text-[12px]">Access not working</p>
        </div>
        <div className="flex mt-[12px] hover:bg-red-100 p-2 cursor-pointer">
          <FaRegUserCircle size={22} />
          <p className="ms-[26px] text-[12px]">User Settings</p>
        </div>
        <div className="flex mt-[12px] text-[12px] hover:bg-red-100 p-2 cursor-pointer">
          <IoSettings size={22} />
          <p className="ms-[26px]">Master Settings</p>
        </div>
        <div className="flex mt-[12px] text-[12px] hover:bg-red-100 p-2 cursor-pointer">
          <IoIosLogOut size={22} />
          <p className="ms-[26px]" onClick={logOut}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
