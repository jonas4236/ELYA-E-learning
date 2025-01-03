import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "../../Container";
import { useState } from "react";
import CourseInfo from "./CourseInfo";
import CourseReview from "./CourseReview";

// icon
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { CourseInfoProps, CourseSectionAndVideo, ReviewProps } from "@/Types";

const ToggleCourseAndReview = ({
  data,
  video,
  review,
}: {
  data: CourseInfoProps;
  video: CourseSectionAndVideo[];
  review: ReviewProps[];
}) => {
  const [toggleSwitchTabs, SetToggleSwitchTabs] = useState<number>(1);

  // console.log("review:", review);

  return (
    <>
      <Container>
        <Tabs defaultValue="account" className="w-max">
          <TabsList className=" text-black bg-[#F5F5F5] gap-3 py-8 px-3">
            <TabsTrigger
              onClick={() => SetToggleSwitchTabs(1)}
              className={`hover:bg-white hover:text-[#0e5ddd] ${
                toggleSwitchTabs === 1 ? "bg-white text-[#0e5ddd]" : ""
              } transition-all duration-150 py-2 px-8 text-lg font-medium`}
              value="courseInfo"
            >
              Course Info
            </TabsTrigger>
            <TabsTrigger
              onClick={() => SetToggleSwitchTabs(2)}
              className={`py-2 px-8 text-lg hover:bg-white hover:text-[#0e5ddd] font-medium ${
                toggleSwitchTabs === 2 ? "bg-white text-[#0e5ddd]" : ""
              }`}
              value="reviews"
            >
              Reviews
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="mt-6">
          <div
            className={`transition-all duration-300 ${
              toggleSwitchTabs === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            {toggleSwitchTabs === 1 && (
              <CourseInfo
                video={video}
                data={data && data}
                desc={data?.descriptionCourse}
              />
            )}
          </div>
          <div
            className={`transition-all duration-300 ${
              toggleSwitchTabs === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            {toggleSwitchTabs === 2 && <CourseReview data={review} />}
          </div>

          <div className="my-8 flex justify-between">
            <div className="">
              <div className="flex items-center gap-4">
                <h1 className="text-[24px] font-medium">Tag</h1>
                {data?.tag.map((val, idx) => (
                  <button
                    key={idx}
                    className="px-4 py-1 rounded-md border-[1px] hover:text-[#0e5ddd] hover:border-[#0e5ddd] transition-all duration-150 text-sm"
                  >
                    {val.tag_name}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-[24px] font-medium">Share</h1>
              <button className="px-3 py-2 rounded-md border-[1px] hover:text-[#0e5ddd] hover:border-[#0e5ddd] transition-all duration-150 text-sm">
                <BsFacebook className="text-xl" />
              </button>
              <button className="px-3 py-2 rounded-md border-[1px] hover:text-[#0e5ddd] hover:border-[#0e5ddd] transition-all duration-150 text-sm">
                <FaInstagram className="text-xl" />
              </button>
              <button className="px-3 py-2 rounded-md border-[1px] hover:text-[#0e5ddd] hover:border-[#0e5ddd] transition-all duration-150 text-sm">
                <FaXTwitter className="text-xl" />
              </button>
            </div>
          </div>
          <div className="border-b-[1px]"></div>
        </div>
      </Container>
    </>
  );
};

export default ToggleCourseAndReview;