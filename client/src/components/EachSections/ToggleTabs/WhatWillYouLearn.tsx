import { FaSquareCheck } from "react-icons/fa6";

const WhatWillYouLearn = () => {
  return (
    <>
      <h1 className="text-[24px] font-medium">What Will You Learn?</h1>
      <div className="mt-8">
        <ul className="grid grid-cols-2 gap-4">
          <li className="text-normal flex items-center">
            <FaSquareCheck className="mr-2 text-xl text-[#0e5ddd]" />
            Learn New Things
          </li>
          <li className="text-normal flex items-center">
            <FaSquareCheck className="mr-2 text-xl text-[#0e5ddd]" />
            Self Development
          </li>
          <li className="text-normal flex items-center">
            <FaSquareCheck className="mr-2 text-xl text-[#0e5ddd]" />
            Skills Update
          </li>
          <li className="text-normal flex items-center">
            <FaSquareCheck className="mr-2 text-xl text-[#0e5ddd]" />
            Prepared Yourself
          </li>
        </ul>
      </div>
    </>
  );
};

export default WhatWillYouLearn;
