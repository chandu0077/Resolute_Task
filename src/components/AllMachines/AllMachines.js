import Sidebar from "../Sidebar/Sidebar";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";

const AllMachines = () => {
  const [locationWiseMachinesData, setLocationWiseMachinesData] = useState();

  useEffect(() => {
    const machineRef = ref(db, "machines/");
    onValue(machineRef, (snapshot) => {
      const data = snapshot.val();

      if (!!data) {
        const locationWiseData = [];
        const allMachinesData = [];
        for (let el in data) {
          allMachinesData.push(data[el]);
        }

        const chennaiData = allMachinesData.filter(
          (machineData, i) => machineData.location === "chennai",
        );
        const mumbaiData = allMachinesData.filter(
          (machineData, i) => machineData.location === "mumbai",
        );
        const agraData = allMachinesData.filter(
          (machineData, i) => machineData.location === "agra",
        );
        const ahmedabadData = allMachinesData.filter(
          (machineData, i) => machineData.location === "ahmedabad",
        );
        const bareillyData = allMachinesData.filter(
          (machineData, i) => machineData.location === "bareilly",
        );
        const bengaluruData = allMachinesData.filter(
          (machineData, i) => machineData.location === "bangalore",
        );
        const indoreData = allMachinesData.filter(
          (machineData, i) => machineData.location === "indore",
        );
        const kolkataData = allMachinesData.filter(
          (machineData, i) => machineData.location === "kolkata",
        );
        const lucknowData = allMachinesData.filter(
          (machineData, i) => machineData.location === "lucknow",
        );
        const puneData = allMachinesData.filter(
          (machineData, i) => machineData.location === "pune",
        );

        if (chennaiData.length > 0) {
          locationWiseData.push({
            location: "chennai",
            data: chennaiData,
            active: "160/210",
            idle: "15",
            alerts: "35",
            power: "3500KW",
            condition: "optimal",
            logo: "img/chennai.png",
          });
        }
        if (mumbaiData.length > 0) {
          locationWiseData.push({
            location: "mumbai",
            data: mumbaiData,
            active: "190/210",
            idle: "15",
            alerts: "5",
            power: "4000KW",
            condition: "optimal",
            logo: "img/mumbai-logo.png",
          });
        }
        if (agraData.length > 0) {
          locationWiseData.push({
            location: "agra",
            data: agraData,
            active: "160/210",
            idle: "15",
            alerts: "20",
            power: "3500KW",
            condition: "critical",
            isMachineWorking: true,
            logo: "img/tajmahal.jpg",
          });
        }
        if (ahmedabadData.length > 0) {
          locationWiseData.push({
            location: "ahmedabad",
            data: ahmedabadData,
            active: "820/210",
            idle: "60",
            alerts: "10",
            power: "4000KW",
            condition: "optimal",
            isMachineWorking: false,
            logo: "img/ahmedabad.jpg",
          });
        }
        if (bareillyData.length > 0) {
          locationWiseData.push({
            location: "bareilly",
            data: bareillyData,
            active: "820/210",
            idle: "60",
            alerts: "10",
            power: "4000KW",
            condition: "optimal",
            isMachineWorking: false,
            logo: "img/Barielly.jpg",
          });
        }
        if (bengaluruData.length > 0) {
          locationWiseData.push({
            location: "bengaluru",
            data: bengaluruData,
            active: "160/210",
            idle: "15",
            alerts: "35",
            power: "3500KW",
            condition: "optimal",
            isMachineWorking: true,
            logo: "img/bangalore.png",
          });
        }
        if (indoreData.length > 0) {
          locationWiseData.push({
            location: "indore",
            data: indoreData,
            active: "160/210",
            idle: "15",
            alerts: "35",
            power: "3500KW",
            condition: "critical",
            isMachineWorking: true,
            logo: "img/indore.jpg",
          });
        }
        if (kolkataData.length > 0) {
          locationWiseData.push({
            location: "kolkata",
            data: kolkataData,
            active: "820/210",
            idle: "60",
            alerts: "10",
            power: "4000KW",
            condition: "critical",
            isMachineWorking: false,
            logo: "img/kolkata.png",
          });
        }
        if (lucknowData.length > 0) {
          locationWiseData.push({
            location: "lucknowData",
            data: lucknowData,
            active: "820/210",
            idle: "60",
            alerts: "10",
            power: "4000KW",
            condition: "critical",
            isMachineWorking: false,
            logo: "img/lucknow.png",
          });
        }
        if (puneData.length > 0) {
          locationWiseData.push({
            location: "puneData",
            data: puneData,
            active: "820/210",
            idle: "60",
            alerts: "10",
            power: "4000KW",
            condition: "critical",
            isMachineWorking: false,
            logo: "img/pune.jpg",
          });
        }
        setLocationWiseMachinesData(locationWiseData);
      } else {
        console.log("Data not found");
      }
    });
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="hidden lg:block w-1/6 h-screen">
          <Sidebar />
        </div>
        <div className="w-full lg:w-5/6 p-[12px] lg:ps-[12px] lg:pe-[12px]">
          <p className="text-[22px] lg:text-[18px] text-center lg:text-start font-bold text-black mt-5">
            Dashboard
          </p>
          <div className="flex mt-[22px]">
            <MdOutlineSpaceDashboard size={22} />
            <p className="ms-[18px]">Dashboard</p>
          </div>

          <div className="flex justify-between w-[32px] mt-[32px]">
            <p>Location</p>
            <p className="ml-[22px]">icon</p>
            <p className="ml-[22px]">Asset</p>
          </div>

          <div className="mt-[22px] flex flex-wrap gap-x-2 gap-y-2">
            {/* Card of Malls */}

            {locationWiseMachinesData &&
              locationWiseMachinesData.map((machineData, idx) => {
                return (
                  <Link
                    to={`/machine-detail?condition=${machineData.condition}`}
                    key={idx}
                    className="w-full lg:w-[250px] lg:flex flex-wrap px-[6px] py-[8px] h-auto border-2 border-slate-200 rounded-md"
                  >
                    {/* location block */}
                    <div className="flex  w-full justify-between">
                      <p className="text-black font-semibold text-[14px]">
                        {machineData.location}
                      </p>
                      <CiStar size={18} />
                    </div>

                    {/* Img block */}
                    <div className="flex pb-2">
                      <div className="w-[40%]">
                        <img
                          src={machineData.logo}
                          className="w-full h-auto"
                          alt="mumbai-logo"
                        />
                      </div>
                      <div className="mt-[22px] w-[60%]">
                        <p className="text-[12px]">
                          Machines Active: {machineData.active}
                        </p>
                        <p className="text-[12px]">
                          Machines Idle: {machineData.idle}
                        </p>
                        <p className="text-red-500 text-[12px] break-normal">
                          {" "}
                          {!machineData.isMachineWorking
                            ? `Machines Not Working`
                            : `Alerts`}
                          <span>: </span>
                          <span>
                            {machineData.Machines_not_working}
                            {/* {!machineData.isMachineWorking
                            ? `${machineData.Machines_not_working}`
                            : `${machineData.alerts}`} */}
                          </span>
                        </p>
                        <p className="text-red-500 text-[12px]">
                          Power Con: {machineData.Power_con}KW
                        </p>
                      </div>
                    </div>

                    {/* <div className="border-t-4 border-slate-200"></div> */}
                    {/* <hr /> */}
                    {/* Detail Block */}
                    <div className="w-full flex justify-evenly py-2  border-t-2 border-slate-200">
                      <p className="text-red-500 text-[10px] font-bold">
                        DETAILED OVERVIEW
                      </p>
                      <p className="text-red-500 text-[10px] font-bold">
                        DOWNLOAD REPORT
                      </p>
                    </div>

                    {/* Machine State */}
                    <div
                      className={` w-full ${
                        machineData.condition === "critical"
                          ? `bg-red-500 text-white`
                          : `bg-slate-100 text-black`
                      }   flex p-[8px]`}
                    >
                      <div className="mt-[4px]">
                        {machineData.condition === "critical" ? (
                          <FaRegCircle
                            size={10}
                            color="white"
                            style={{
                              backgroundColor: "white",
                              borderRadius: "50%",
                            }}
                          />
                        ) : (
                          <FaRegCircle size={10} color="red" />
                        )}
                      </div>
                      <p className="text-[12px] font-bold ms-[8px]">
                        {machineData.active === "820"
                          ? `${machineData.condition}`
                          : `${machineData.condition}`}{" "}
                        <span>Condition</span>
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllMachines;
