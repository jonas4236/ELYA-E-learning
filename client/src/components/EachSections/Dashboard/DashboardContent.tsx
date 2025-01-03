import { Link } from "react-router-dom";
import { PiWarningCircleBold } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { EnrollCourseProps } from "@/Types";
import axios from "axios";
import { server } from "@/api";
import { useUserStore } from "@/store/user.store";

const DashboardContent = () => {
  const [courseList, setCourseList] = useState<EnrollCourseProps[]>([]);
  const { user } = useUserStore();

  const fetchCourseList = async () => {
    try {
      const { data } = await axios.post(server.API_POST_ENROLLCOURSE_GETONE, {
        uid: user[0]?.id,
      });

      setCourseList(data);
    } catch (error) {
      console.warn(
        "cannot fetch courselist because: ",
        (error as Error).message
      );
    }
  };

  useEffect(() => {
    fetchCourseList();
  }, [user]);

  const separateData = courseList.reduce((acc, val) => {
    acc[val.status] = (acc[val.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // console.log("courselist:", courseList);

  const formatText = (message: string) => {
    if (message.length > 40) {
      return `${message.substring(0, 40)}...`;
    } else {
      return message;
    }
  };

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
              <span className="text-[36px]">{`${
                separateData?.enrolled ? separateData?.enrolled : 0
              }`}</span>
              <p>Enrolled Courses</p>
            </div>
            <div className="p-4 border-[2px] h-[200px] border-[#0e5ddd] rounded-md flex flex-col gap-1 items-center justify-center">
              <span className="p-4 bg-[#b1c6f7] rounded-full">
                <FaBookOpen className="text-[42px] text-[#0e5ddd]" />
              </span>
              <span className="text-[36px]">{`${
                separateData?.enrolled ? separateData?.enrolled : 0
              }`}</span>
              <p>Active Courses</p>
            </div>
            <div className="p-4 border-[2px] h-[200px] border-[#0e5ddd] rounded-md flex flex-col gap-1 items-center justify-center">
              <span className="p-4 bg-[#b1c6f7] rounded-full">
                <FaBookOpen className="text-[42px] text-[#0e5ddd]" />
              </span>
              <span className="text-[36px]">{`${
                separateData?.completed ? separateData?.completed : 0
              }`}</span>
              <p>Completed Courses</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-6">
            {[...courseList]?.reverse().map((val, idx) => (
              <Link to={`/lessons/${val.slug}`} className="" key={idx}>
                <img
                  className="object-cover"
                  src={val.profile_course}
                  alt="IMG_COURSE"
                />
                <h1 className="mt-2 h-[48.02px]">
                  {formatText(val.name_course)}
                </h1>
                <p className="text-sm text-gray-600">{val.instructor}</p>
                {val.progress.map((pro, idx) => (
                  <div key={idx}>
                    <div className="">
                      <Progress
                        value={Number(
                          (
                            (pro.watched_progress / pro.course_length) *
                            100
                          ).toFixed(0)
                        )}
                        className="bg-[#ccc] h-[5px] mt-2"
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-[12px]">
                        <span className="text-[#0e5ddd] font-medium">
                          {`${
                            pro.course_length
                              ? (
                                  (pro.watched_progress / pro.course_length) *
                                  100
                                ).toFixed(0) || 0
                              : 0
                          }`}
                          %
                        </span>{" "}
                        Complete
                      </span>
                      <div className="flex flex-col">
                        <div className="flex text-yellow-500">
                          {val.review ? (
                            <FaStar />
                          ) : (
                            <>
                              <FaStar />
                              <FaStar />
                            </>
                          )}
                        </div>
                        <span className="text-[12px]">Your Review</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Link>
            ))}
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