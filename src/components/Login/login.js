import { useState } from "react";
import { auth } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email);
  console.log(auth?.currentUser?.photoURL);
  const navigate = useNavigate();

  const signIn = async (e) => {
    try {
      e.preventDefault();
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("authKey", result.user.accessToken);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      const res = await signOut(auth);
      console.log("Res", res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-between">
      {/* Right Side bg */}
      <div className="w-1/2 hidden lg:block bg-red-500">
        <div className="lg:w-full lg:h-[100vh] p-[42px] flex flex-col justify-center">
          <div className="border border-white border-b-0 border-r-0  mx-auto w-[552px] h-auto">
            <div className="w-full flex">
              <div className="w-[184px]">
                <p className="text-white p-2 font-semibold text-[18px] mr-[12px]">
                  Enhancing trust using AI for safer and happier life.
                </p>
              </div>
              <div className="bg-white w-[84px] h-[112px] mr-[12px]"></div>
              <div className="w-[184px] mb-1">
                <p className="text-white font-semibold text-[18px] mt-[62px]">
                  AI Powered Saas & Enterprise platforms
                </p>
              </div>
              <div className="w-[104px]"></div>
            </div>
            <div className="w-full flex h-[122px]">
              <img
                src="img/facegenie-logo.jpg"
                className="w-full h-auto"
                alt="facegenie-logo"
              />
              <img
                src="img/analytic.jpg"
                className="w-full h-auto"
                alt="analytic"
              />
              <img src="img/ar.jpg" className="w-full h-auto" alt="ar" />
              <img
                src="img/upskill.jpg"
                className="w-full h-auto"
                alt="upskill"
              />
            </div>
            <div className="w-full flex h-[122px]">
              <div className="w-[137.8px]"></div>
              <div className="w-[137.8px]">
                <p className="text-white font-semibold text-[16px] mt-[48px]">
                  AI & Digital Engineering Services
                </p>
              </div>
              <div className="w-[137.8px] h-auto bg-white flex items-center">
                <img
                  src="img/kart.png"
                  alt="kart-logo"
                  className="w-full h-auto mr-[12px]"
                />
              </div>
              <div className="w-[137.8px]">
                <p className="text-white font-semibold text-[16px] mt-[48px] ml-[12px]">
                  AI Professional Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Side Form */}
      <div className="w-full lg:w-1/2 h-auto bg-white px-[52px] flex flex-col justify-center">
        <div className="w-full">
          <div className="flex justify-between">
            <p className="text-lg font-bold text-red-500">
              Control Tower Module from
            </p>
            <img
              src="img/kart-logo.jpg"
              className="w-[132px] h-[42px]"
              alt="kart_logo"
            />
          </div>
          <div className="mt-[22px] mx-auto">
            <p className="text-lg text-black font-semibold">
              Enter Your Credentials to Login
            </p>

            <form className="mt-[32px]">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                onClick={signIn}
                className="text-white w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm  px-5 py-2.5 text-center bg-red-500"
              >
                SIGN IN
              </button>
            </form>
            <p className="text-red-500 mt-[32px] font-semibold">
              Forgot your Password?
            </p>
            <div className="mt-[32px]">
              <p className="text-center text-red-500 text-lg font-semibold">
                A product From
              </p>
              <div className="flex justify-center mt-[12px]">
                <img
                  src="img/resolute-logo.jpg"
                  className="w-[92px] h-[32px]"
                  alt="resolute_logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
