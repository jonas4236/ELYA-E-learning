import { Link, useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { EnrollCourseProps } from "@/Types";
import { useUserStore } from "@/store/user.store";
import axios from "axios";
import { server } from "@/api";
import { FaRegStar } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";

const EnrolledCourses = () => {
  const { pathname } = useLocation();

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

  const filterCourseData = courseList.filter((val) => {
    let data = true;
    if (pathname === "/dashboard/enrolledcourses") {
      data = val.status === "enrolled";
    } else if (pathname === "/dashboard/enrolledcourses/activecourses") {
      data = val.status === "enrolled";
    } else if (pathname === "/dashboard/enrolledcourses/completedcourses") {
      data = val.status === "completed";
    }

    return data;
  });

  // console.log("filterData:", filterCourseData?.map((val) => val.review?.rating));

  const formatText = (message: string) => {
    if (message.length > 40) {
      return `${message.substring(0, 40)}...`;
    } else {
      return message;
    }
  };

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
          Enrolled Courses (
          {separateData?.enrolled ? separateData?.enrolled : 0})
        </Link>
        <Link
          to={"/dashboard/enrolledcourses/activecourses"}
          className={`py-2 px-4 ${
            pathname === "/dashboard/enrolledcourses/activecourses"
              ? "text-[#0e5ddd] border-b-[2px] border-[#0e5ddd]"
              : "text-black"
          } hover:text-[#0e5ddd]`}
        >
          Active Courses ({separateData?.enrolled ? separateData?.enrolled : 0})
        </Link>
        <Link
          to={"/dashboard/enrolledcourses/completedcourses"}
          className={`py-2 px-4 ${
            pathname === "/dashboard/enrolledcourses/completedcourses"
              ? "text-[#0e5ddd] border-b-[2px] border-[#0e5ddd]"
              : "text-black"
          } hover:text-[#0e5ddd]`}
        >
          Completed Courses (
          {separateData?.completed ? separateData?.completed : 0})
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        {filterCourseData.map((val, idx) => (
          <div key={idx}>
            <Link key={val.id} to={"/"} className="">
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
                        <div>
                          <Rating
                            key={idx}
                            initialValue={val?.review?.rating || 0}
                            SVGclassName="inline-block"
                            size={20}
                            fillIcon={
                              <FaStar size={20} className="inline-block" />
                            }
                            emptyIcon={
                              <FaRegStar size={20} className="inline-block" />
                            }
                            readonly
                            allowFraction={true}
                          />
                        </div>
                      </div>
                      <span className="text-[12px]">Your Review</span>
                    </div>
                  </div>
                </div>
              ))}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default EnrolledCourses;
