import Sidebar from "../Sidebar/Sidebar";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import { db } from "../../config/firebase";
import { getDatabase, ref, set } from "firebase/database";

import { v4 as uuid } from "uuid";

const Addmachine = () => {
  const [location, setLocation] = useState("");
  const [machineType, setMachineType] = useState("");
  const [machineConfig, setMachineConfig] = useState("");
  const [machineSize, setMachineSize] = useState("");
  const [description, setDescription] = useState("");

  const addMachineData = async (e) => {
    e.preventDefault();

    const idx = uuid();
    const data = {
      id: idx,
      location,
      machineType,
      machineConfig,
      machineSize,
      description,
    };

    set(ref(db, "machines/" + idx), data)
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-between">
      <div className="hidden w-1/6 lg:block">
        <Sidebar />
      </div>
      <div className="w-full lg:w-5/6 h-[150px] p-2 lg:pe-[12px] lg:pt-[24px] lg:pb-[16px]">
        {/* Settings */}
        <p className="text-bold text-black font-semibold text-[16px]">
          Settings
        </p>

        <div>
          {/* Dasboard block */}
          <div className="flex mt-[8px]">
            <MdOutlineSpaceDashboard size={14} />
            <p className="ms-[12px] me-[12px] text-[12px]">Dashboard</p>
            <p className="mx-1 text-[12px]">/</p>
            <IoMdSettings size={14} className="ms-[8px] mt-[2px]" />
            <p className="text-[12px] ms-[8px]">Master Settings</p>
          </div>

          {/* tabs */}
          <div class="mt-4 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px">
              <li class="me-2">
                <a
                  href="#"
                  class="text-[12px] inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  THRESHOLD VALUES
                </a>
              </li>
              <li class="me-2">
                <a
                  href="#"
                  class="text-[12px] inline-block p-2 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-blue-500"
                  aria-current="page"
                >
                  ADD MACHINES
                </a>
              </li>
              <li class="me-2">
                <a
                  href="#"
                  class="text-[12px] inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  BILLING
                </a>
              </li>
            </ul>
          </div>

          {/* Form block */}
          <p className="font-semibold text-[18px] mt-8">
            App Settings for the whole System
          </p>
          <div className="mt-8">
            <p className="text-[14px] mb-8">Add Machines</p>

            <form>
              <div className="mt-[12px] w-2/3 pb-12">
                <div className="flex gap-x-10">
                  <select
                    className="w-1/2 h-[44px] border-2 border-slate-200 p-2 text-[14px]"
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="mumbai">Mumbai</option>
                    <option value="agra">Agra</option>
                    <option value="ahmedabad">Ahmedabad</option>
                    <option value="bareilly">Bareilly</option>
                    <option value="bangalore">Bengaluru</option>
                    <option value="indore">Indore</option>
                    <option value="chennai">Chennai</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="lucknow">Lucknow</option>
                    <option value="pune">Pune</option>
                  </select>
                  <select
                    className="w-1/2 border-2 border-slate-200 p-2 text-[14px]"
                    onChange={(e) => setMachineType(e.target.value)}
                  >
                    {/* <option value="0">Enter or Select Machine Type</option> */}
                    <option value="A">Type-A</option>
                    <option value="B">Type-B</option>
                    <option value="C">Type-C</option>
                  </select>
                </div>
                <div className="flex mt-[32px] gap-x-10">
                  <select
                    className="w-1/2 h-[44px] border-2 border-slate-200 p-2 text-[14px]"
                    onChange={(e) => setMachineConfig(e.target.value)}
                  >
                    <option value="1a">1A</option>{" "}
                    <option value="1b">1B</option>{" "}
                    <option value="1c">1C</option>{" "}
                  </select>
                  <input
                    type="text"
                    className="w-1/2 border-2 border-slate-200 p-2 text-[14px]"
                    placeholder="Enter Machine size"
                    onChange={(e) => setMachineSize(e.target.value)}
                  />
                </div>
                {/* <input
                  type="text"
                  className="h-[44px] border-2 border-slate-200 mt-[32px] w-full p-2 text-[14px]"
                  placeholder="320947 239479 230948"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="text-red-500 text-[14px]">
                  Autogenerated Unique Key is generated for the machine.
                </p> */}
                <input
                  type="text"
                  className="mt-8 w-full h-[44px] p-2 border-2 border-slate-200 text-[14px]"
                  placeholder="Enter Description (Optional)"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex mt-[32px] gap-x-11">
                <button
                  className="text-white bg-red-500 rounded-md p-2 text-[14px]"
                  type="submit"
                  onClick={addMachineData}
                >
                  ADD MACHINE
                </button>
                <button className="text-red-500 text-[14px]">CLEAR FORM</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Addmachine;
