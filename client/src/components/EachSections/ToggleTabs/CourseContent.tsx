import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";

const CourseContent = () => {
  return (
    <>
      <h1 className="text-[24px] font-medium">Course Content</h1>

      <div className="mt-8">
        <details className="group p-4 text-lg border-[1px] bg-[#FCFCFD] border-gray-300 rounded-md">
          <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800">
            Psychology of Finance
            <svg
              className="h-6 w-6 rotate-0 transition-all duration-200 text-gray-400 group-open:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>

          <div className="text-gray-500 mt-4 flex justify-between">
            <div className="flex items-center">
              <BsFillCameraVideoFill className="mr-3 text-xl" />
              <span className="text-normal">What Drives Supply and Demand</span>
            </div>
            <div className="flex items-center">
              <span className="text-normal">07:51</span>
              <MdLockOutline className="ml-2 text-xl" />
            </div>
          </div>
          <div className="text-gray-500 mt-4 flex justify-between">
            <div className="flex items-center">
              <BsFillCameraVideoFill className="mr-3 text-xl" />
              <span className="text-normal">What should you do?</span>
            </div>
            <div className="flex items-center">
              <span className="text-normal">07:51</span>
              <MdLockOutline className="ml-2 text-xl" />
            </div>
          </div>
          <div className="text-gray-500 mt-4 flex justify-between">
            <div className="flex items-center">
              <BsFillCameraVideoFill className="mr-3 text-xl" />
              <span className="text-normal">
                How To Choose A Financial Advisor
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-normal">07:51</span>
              <MdLockOutline className="ml-2 text-xl" />
            </div>
          </div>
          <div className="text-gray-500 mt-4 flex justify-between">
            <div className="flex items-center">
              <BsFillCameraVideoFill className="mr-3 text-xl" />
              <span className="text-normal">Refactor Code</span>
            </div>
            <div className="flex items-center">
              <span className="text-normal">07:51</span>
              <MdLockOutline className="ml-2 text-xl" />
            </div>
          </div>
        </details>
      </div>
      <div className="mt-8">
        <details className="group p-4 text-lg border-[1px] bg-[#FCFCFD] border-gray-300 rounded-md">
          <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800">
            Psychology of Finance
            <svg
              className="h-6 w-6 rotate-0 transition-all duration-200 text-gray-400 group-open:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </summary>

          <div className="text-gray-500 mt-4 flex justify-between">
            <div className="flex items-center">
              <BsFillCameraVideoFill className="mr-3 text-xl" />
              <span className="text-normal">What Drives Supply and Demand</span>
            </div>
            <div className="flex items-center">
              <span className="text-normal">07:51</span>
              <MdLockOutline className="ml-2 text-xl" />
            </div>
          </div>
          <div className="text-gray-500 mt-4 flex justify-between">
            <div className="flex items-center">
              <BsFillCameraVideoFill className="mr-3 text-xl" />
              <span className="text-normal">What should you do?</span>
            </div>
            <div className="flex items-center">
              <span className="text-normal">07:51</span>
              <MdLockOutline className="ml-2 text-xl" />
            </div>
          </div>
          <div className="text-gray-500 mt-4 flex justify-between">
            <div className="flex items-center">
              <BsFillCameraVideoFill className="mr-3 text-xl" />
              <span className="text-normal">
                How To Choose A Financial Advisor
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-normal">07:51</span>
              <MdLockOutline className="ml-2 text-xl" />
            </div>
          </div>
          <div className="text-gray-500 mt-4 flex justify-between">
            <div className="flex items-center">
              <BsFillCameraVideoFill className="mr-3 text-xl" />
              <span className="text-normal">Refactor Code</span>
            </div>
            <div className="flex items-center">
              <span className="text-normal">07:51</span>
              <MdLockOutline className="ml-2 text-xl" />
            </div>
          </div>
        </details>
      </div>
    </>
  );
};

export default CourseContent;
