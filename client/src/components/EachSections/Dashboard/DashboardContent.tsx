import { Link } from "react-router-dom";
import { PiWarningCircleBold } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";

const DashboardContent = () => {
  const dummyImg =
    "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="">
        <div className="flex justify-between mt-4 p-3 border-[1px] border-[#0e5ddd] rounded-md">
          <span className="flex items-center text-[#0e5ddd] font-medium">
            <PiWarningCircleBold className="mr-2 text-xl" />
            Set Your Profile Photo
          </span>
          <Link
            className="p-1.5 rounded-md bg-[#3270FC26] text-[#3270FC] border-[1px] border-[#0e5ddd]"
            to={"/dashboard/settings"}
          >
            Click Here
          </Link>
        </div>

        <div className="my-6">
          <h1 className="text-xl">Dashboard</h1>
        </div>

        <div className="">
          <div className="grid grid-cols-3 gap-8">
            <div className="p-4 border-[2px] h-[200px] border-[#0e5ddd] rounded-md flex flex-col gap-1 items-center justify-center">
              <span className="p-4 bg-[#b1c6f7] rounded-full">
                <FaBookOpen className="text-[42px] text-[#0e5ddd]" />
              </span>
              <span className="text-[36px]">1</span>
              <p>Enrolled Courses</p>
            </div>
            <div className="p-4 border-[2px] h-[200px] border-[#0e5ddd] rounded-md flex flex-col gap-1 items-center justify-center">
              <span className="p-4 bg-[#b1c6f7] rounded-full">
                <FaBookOpen className="text-[42px] text-[#0e5ddd]" />
              </span>
              <span className="text-[36px]">1</span>
              <p>Active Courses</p>
            </div>
            <div className="p-4 border-[2px] h-[200px] border-[#0e5ddd] rounded-md flex flex-col gap-1 items-center justify-center">
              <span className="p-4 bg-[#b1c6f7] rounded-full">
                <FaBookOpen className="text-[42px] text-[#0e5ddd]" />
              </span>
              <span className="text-[36px]">0</span>
              <p>Completed Courses</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-6">
            <Link to={"/lessons/sss/1"} className="">
              <img
                className="object-cover"
                src={dummyImg as string}
                alt="IMG_COURSE"
              />
              <h1 className="mt-2">React & TypeScript - The Practical Guide</h1>
              <p className="text-sm text-gray-600">Thanakorn Sangmee</p>
              <div className="">
                <Progress value={20} className="bg-[#ccc] h-[5px] mt-2" />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[12px]">
                  <span className="text-[#0e5ddd] font-medium">20%</span>{" "}
                  Complete
                </span>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-[12px]">Your Review</span>
                </div>
              </div>
            </Link>
            <Link to={"/lessons/sss/1"} className="">
              <img
                className="object-cover"
                src={dummyImg as string}
                alt="IMG_COURSE"
              />
              <h1 className="mt-2">React & TypeScript - The Practical Guide</h1>
              <p className="text-sm text-gray-600">Thanakorn Sangmee</p>
              <div className="">
                <Progress value={20} className="bg-[#ccc] h-[5px] mt-2" />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[12px]">
                  <span className="text-[#0e5ddd] font-medium">20%</span>{" "}
                  Complete
                </span>
                <div className="flex flex-col">
                  <div className="flex text-gray-600">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <span className="text-[12px]">Your Review</span>
                </div>
              </div>
            </Link>
            <Link to={"/lessons/sss/1"} className="">
              <img
                className="object-cover"
                src={dummyImg as string}
                alt="IMG_COURSE"
              />
              <h1 className="mt-2">React & TypeScript - The Practical Guide</h1>
              <p className="text-sm text-gray-600">Thanakorn Sangmee</p>
              <div className="">
                <Progress value={20} className="bg-[#ccc] h-[5px] mt-2" />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[12px]">
                  <span className="text-[#0e5ddd] font-medium">20%</span>{" "}
                  Complete
                </span>
                <div className="flex flex-col">
                  <div className="flex text-gray-600">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <span className="text-[12px]">Your Review</span>
                </div>
              </div>
            </Link>
            <Link to={"/lessons/sss/1"} className="">
              <img
                className="object-cover"
                src={dummyImg as string}
                alt="IMG_COURSE"
              />
              <h1 className="mt-2">React & TypeScript - The Practical Guide</h1>
              <p className="text-sm text-gray-600">Thanakorn Sangmee</p>
              <div className="">
                <Progress value={20} className="bg-[#ccc] h-[5px] mt-2" />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[12px]">
                  <span className="text-[#0e5ddd] font-medium">20%</span>{" "}
                  Complete
                </span>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-[12px]">Your Review</span>
                </div>
              </div>
            </Link>
            <Link to={"/lessons/sss/1"} className="">
              <img
                className="object-cover"
                src={dummyImg as string}
                alt="IMG_COURSE"
              />
              <h1 className="mt-2">React & TypeScript - The Practical Guide</h1>
              <p className="text-sm text-gray-600">Thanakorn Sangmee</p>
              <div className="">
                <Progress value={20} className="bg-[#ccc] h-[5px] mt-2" />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[12px]">
                  <span className="text-[#0e5ddd] font-medium">20%</span>{" "}
                  Complete
                </span>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-[12px]">Your Review</span>
                </div>
              </div>
            </Link>
            <Link to={"/lessons/sss/1"} className="">
              <img
                className="object-cover"
                src={dummyImg as string}
                alt="IMG_COURSE"
              />
              <h1 className="mt-2">React & TypeScript - The Practical Guide</h1>
              <p className="text-sm text-gray-600">Thanakorn Sangmee</p>
              <div className="">
                <Progress value={20} className="bg-[#ccc] h-[5px] mt-2" />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[12px]">
                  <span className="text-[#0e5ddd] font-medium">20%</span>{" "}
                  Complete
                </span>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-[12px]">Your Review</span>
                </div>
              </div>
            </Link>
            <Link to={"/lessons/sss/1"} className="">
              <img
                className="object-cover"
                src={dummyImg as string}
                alt="IMG_COURSE"
              />
              <h1 className="mt-2">React & TypeScript - The Practical Guide</h1>
              <p className="text-sm text-gray-600">Thanakorn Sangmee</p>
              <div className="">
                <Progress value={20} className="bg-[#ccc] h-[5px] mt-2" />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[12px]">
                  <span className="text-[#0e5ddd] font-medium">20%</span>{" "}
                  Complete
                </span>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-[12px]">Your Review</span>
                </div>
              </div>
            </Link>
            <Link to={"/lessons/sss/1"} className="">
              <img
                className="object-cover"
                src={dummyImg as string}
                alt="IMG_COURSE"
              />
              <h1 className="mt-2">React & TypeScript - The Practical Guide</h1>
              <p className="text-sm text-gray-600">Thanakorn Sangmee</p>
              <div className="">
                <Progress value={20} className="bg-[#ccc] h-[5px] mt-2" />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[12px]">
                  <span className="text-[#0e5ddd] font-medium">20%</span>{" "}
                  Complete
                </span>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-[12px]">Your Review</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex justify-center mt-6">
            <button className="py-2 px-4 text-white bg-[#0e5ddd] font-medium border-[1px] border-[#0e5ddd] hover:bg-white hover:text-[#0e5ddd] transition-all duration-200 rounded-md">
              SHOW MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardContent;