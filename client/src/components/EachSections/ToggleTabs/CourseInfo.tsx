import { useState } from "react";
import WhatWillYouLearn from "./WhatWillYouLearn";
import CourseContent from "./CourseContent";
import { CourseInfoProps, CourseSectionAndVideo } from "@/Types";

const CourseInfo = ({
  desc,
  data,
  video,
}: {
  desc: string;
  data: CourseInfoProps;
  video: CourseSectionAndVideo[];
}) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  // console.log("text:", text);
  const truncatedDesc = desc?.substring(0, 250);

  return (
    <>
      <h1 className="text-[24px] font-medium">About Course</h1>
      <p className="mt-6 text-gray-600 text-[18px]">
        {showMore
          ? desc
          : truncatedDesc?.length < 250
          ? truncatedDesc
          : `${truncatedDesc}...`}
      </p>
      <div className="w-full text-center">
        {desc?.length > 250 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="w-max py-2 px-4 rounded-md bg-[#0e5ddd] text-white border-[1px] border-[#0e5ddd] hover:bg-white transition-all duration-150 hover:text-[#0e5ddd]"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

      <div className="mt-6">
        <WhatWillYouLearn data={data?.tag_course} />
      </div>

      <div className="mt-16">
        <CourseContent video={video} />
      </div>
    </>
  );
};

export default CourseInfo;