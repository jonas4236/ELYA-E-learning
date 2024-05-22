import { Link, useLocation } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";

const EnrolledCourses = () => {
  const { pathname } = useLocation();
  const dummyImg =
    "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="my-6">
        <h1 className="text-xl">Enrolled Courses</h1>
      </div>
      <div className="flex">
        <Link
          to={"/dashboard/enrolledcourses"}
          className={`py-2 px-4 ${
            pathname === "/dashboard/enrolledcourses"
              ? "text-[#0e5ddd] border-b-[2px] border-[#0e5ddd]"
              : "text-black"
          } hover:text-[#0e5ddd]`}
        >
          Enrolled Courses (3)
        </Link>
        <Link
          to={"/dashboard/enrolledcourses/activecourses"}
          className={`py-2 px-4 ${
            pathname === "/dashboard/enrolledcourses/activecourses"
              ? "text-[#0e5ddd] border-b-[2px] border-[#0e5ddd]"
              : "text-black"
          } hover:text-[#0e5ddd]`}
        >
          Active Courses (3)
        </Link>
        <Link
          to={"/dashboard/enrolledcourses/completedcourses"}
          className={`py-2 px-4 ${
            pathname === "/dashboard/enrolledcourses/completedcourses"
              ? "text-[#0e5ddd] border-b-[2px] border-[#0e5ddd]"
              : "text-black"
          } hover:text-[#0e5ddd]`}
        >
          Completed Courses (0)
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <Link to={"/"} className="">
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
              <span className="text-[#0e5ddd] font-medium">20%</span> Complete
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
        <Link to={"/"} className="">
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
              <span className="text-[#0e5ddd] font-medium">20%</span> Complete
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
        <Link to={"/"} className="">
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
              <span className="text-[#0e5ddd] font-medium">20%</span> Complete
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
      </div>
    </>
  );
};

export default EnrolledCourses;
