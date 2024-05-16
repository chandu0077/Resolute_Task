import Sidebar from "../Sidebar/Sidebar";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";

const AboutMachine = ({ condition }) => {
  const dummyData = [
    {
      periodHours: 168,
      runtimeHours: 139,
      utilization: "82.75%",
      lifeSpan: "42,243",
    },
    {
      periodHours: 142,
      runtimeHours: 231,
      utilization: "64.25%",
      lifeSpan: "86,043",
    },
    {
      periodHours: 95,
      runtimeHours: 211,
      utilization: "74.80%",
      lifeSpan: "53,324",
    },
  ];

  const x = Math.floor(Math.random() * (2 - 0 + 1) + 0);

  return (
    <div className="flex justify-between">
      <div className="hidden w-1/6 lg:block">
        <Sidebar />
      </div>
      <div className="w-full lg:w-5/6 p-[12px] lg:pe-[12px]">
        {/* Title */}
        <p className="text-black text-[14px] font-semibold">Dashboard</p>

        <div className="mt-2">
          {/* BreadCrumbs */}
          <div className="flex">
            <MdOutlineSpaceDashboard size={22} />
            <p className="ms-[26px] text-[12px]">Dashboard</p>
            <p className="text-[12px] mx-2"> / </p>
            <p className="text-[12px]">Agra - Mall 1</p>
            <p className="text-[12px] mx-2"> / </p>
            <p className="text-[12px]">chillers</p>
            <p className="text-[12px] mx-2"> / </p>
            <p className="text-[12px]">IBMCh1||ER1</p>
          </div>

          {/* Back block */}
          <div className="mt-6 flex">
            <IoIosArrowBack color="red" style={{ marginTop: "0" }} size={18} />
            <p className="text-red-500 text-[12px] font-semibold">Back</p>
            <p className="text-red-500 ms-4 text-[12px] font-semibold">
              IBMCh1||ER1
            </p>
          </div>

          {/* Machine condition */}
          {condition === "critical" && (
            <div className="w-full mt-6 bg-white border-2 border-slate-100 h-auto">
              {/* Alert */}
              <div className=" bg-red-500 p-[10px]">
                <div className="flex justify-between">
                  <div className="flex">
                    <RiErrorWarningLine color="white" size={20} />
                    <p className="text-white text-[14px] lg:text-[14px] ms-2">
                      Low Condenser Refrigerator Level
                    </p>
                  </div>
                  <p className="text-white text-[14px] lg:text-[14px]">
                    ALERT - LOW PRIORITY
                  </p>
                </div>
                <p className="text-white text-[12px] lg:text-[14px] ms-[16px] mt-[12px]">
                  The chiller has operated for an extended period of time during
                  the reporting period with a lower than normal condenser
                  refrigerant level.
                </p>
              </div>

              {/* Details */}
              <div className="flex justify-around py-[16px]">
                <div>
                  <p className="text-[14px] font-bold ml-[-16px]">
                    Possible Causes
                  </p>
                  <ol class="list-decimal">
                    <li>Insufficient charge.</li>
                    <li>Low load operation.</li>
                    <li>
                      Refrigerator level control system in manual override.
                    </li>
                    <li>
                      Refrigerator level control system mechanical malfunction.
                    </li>
                  </ol>
                </div>
                <div>
                  <p className="text-[14px] font-bold ml-[-16px]">
                    Possible Impacts
                  </p>
                  <ol className="list-decimal">
                    <li>Increased chiller engine consumption.</li>
                    <li>Reduced chiller cooling capacity.</li>
                    <li> Chiller inability to meet chilled water set point.</li>
                    <li>Nuisance shutdowns.</li>
                    <li>Tube leak.</li>
                  </ol>
                </div>
              </div>
            </div>
          )}
          {/* Machine Details */}
          <div className="w-full h-auto mt-8 gap-y-2 lg:flex lg:gap-x-2">
            <div className="w-auto lg:w-1/4 h-auto p-[12px]  border-2 border-slate-100">
              <p className="text-[14px] font-semibold">
                Reporting Period Hours
              </p>
              <p className="text-[12px]">Previous 7 Days</p>
              <p className="text-[24px] font-medium mt-[16px]">
                {dummyData[x].periodHours}hrs
              </p>
            </div>
            <div className="w-auto lg:w-1/4 h-auto p-[12px]  border-2 border-slate-100">
              <p className="text-[14px] font-semibold">Runtime Hours</p>
              <p className="text-[12px]">Previous 7 Days</p>
              <p className="text-[24px] font-medium mt-[16px]">
                {dummyData[x].runtimeHours} hrs
              </p>
            </div>
            <div className="w-auto lg:w-1/4 h-auto p-[12px] border-2 border-slate-100">
              <p className="text-[14px] font-semibold">Utilization</p>
              <p className="text-[12px]">Previous 7 Days</p>
              <p className="text-[24px] font-medium mt-[16px]">
                {dummyData[x].utilization}%
              </p>
            </div>
            <div className="w-auto lg:w-1/4 h-auto p-[12px] border-2 border-slate-100">
              <p className="text-[14px] font-semibold">Total lifespan</p>
              <p className="text-[12px]">
                /Predicted Lifespan Remaining Percentage
              </p>
              <p className="text-[24px] font-medium mt-[16px]">
                {dummyData[x].lifeSpan}{" "}
                <span className="text-red-500 text-[16px] font-medium">
                  /74%
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMachine;
