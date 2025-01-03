import { TagCourseProps } from "@/Types";
import { FaSquareCheck } from "react-icons/fa6";

const WhatWillYouLearn = ({ data }: { data: TagCourseProps[] }) => {
  return (
    <>
      <h1 className="text-[24px] font-medium">What Will You Learn?</h1>
      <div className="mt-8">
        <ul className="grid grid-cols-2 gap-4">
          {data && data.map((val, idx) => (
            <li key={idx} className="text-normal flex items-center">
            <FaSquareCheck className="mr-2 text-xl text-[#0e5ddd]" />
            {val.tag_name}
          </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WhatWillYouLearn;