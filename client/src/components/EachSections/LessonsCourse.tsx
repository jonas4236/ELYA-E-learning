import { FaYoutube } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

// Link
import { Link } from "react-router-dom";

const LessonsCourse = () => {
  return (
    <>
      <div className="h-auto">
        <div className="mb-4">
          <details className="group p-4 text-normal rounded-md">
            <summary className="flex cursor-pointer flex-row border-b-[1px] pb-6 items-center justify-between font-semibold text-gray-800">
              Psychology of Finance
              <div className="flex gap-2">
                <span className="text-normal font-normal">1 / 4</span>
                <IoIosArrowDown className="size-6 rotate-0 transition-all duration-200 text-[#0e5ddd] group-open:rotate-180" />
              </div>
            </summary>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""}>
                <div className="flex items-center">
                  <FaYoutube className="mr-3 text-xl text-[#0e5ddd]" />
                  <span className="text-normal text-[#0e5ddd]">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal text-[#0e5ddd]">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                  checked // will optimize with logic later.
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[4px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""} className="HoverLessonsCourse">
                <div className="flex items-center">
                  <FaYoutube className="mr-3 text-xl ActiveLessonsCourse" />
                  <span className="text-normal ActiveLessonsCourse">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal ActiveLessonsCourse">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[6px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""} className="HoverLessonsCourse">
                <div className="flex items-center transition-all duration">
                  <FaYoutube className="mr-3 text-xl ActiveLessonsCourse" />
                  <span className="text-normal ActiveLessonsCourse">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal ActiveLessonsCourse">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[6px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""} className="HoverLessonsCourse">
                <div className="flex items-center">
                  <FaYoutube className="mr-3 text-xl ActiveLessonsCourse" />
                  <span className="text-normal ActiveLessonsCourse">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal ActiveLessonsCourse">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[6px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>
          </details>
        </div>
        <div className="mb-4">
          <details className="group p-4 text-normal rounded-md">
            <summary className="flex cursor-pointer flex-row border-b-[1px] pb-6 items-center justify-between font-semibold text-gray-800">
              Psychology of Finance
              <div className="flex gap-2">
                <span className="text-normal font-normal">1 / 4</span>
                <IoIosArrowDown className="size-6 rotate-0 transition-all duration-200 text-[#0e5ddd] group-open:rotate-180" />
              </div>
            </summary>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""}>
                <div className="flex items-center">
                  <FaYoutube className="mr-3 text-xl text-[#0e5ddd]" />
                  <span className="text-normal text-[#0e5ddd]">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal text-[#0e5ddd]">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                  checked // will optimize with logic later.
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[4px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""} className="HoverLessonsCourse">
                <div className="flex items-center">
                  <FaYoutube className="mr-3 text-xl ActiveLessonsCourse" />
                  <span className="text-normal ActiveLessonsCourse">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal ActiveLessonsCourse">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[6px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""} className="HoverLessonsCourse">
                <div className="flex items-center transition-all duration">
                  <FaYoutube className="mr-3 text-xl ActiveLessonsCourse" />
                  <span className="text-normal ActiveLessonsCourse">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal ActiveLessonsCourse">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[6px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""} className="HoverLessonsCourse">
                <div className="flex items-center">
                  <FaYoutube className="mr-3 text-xl ActiveLessonsCourse" />
                  <span className="text-normal ActiveLessonsCourse">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal ActiveLessonsCourse">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[6px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>
          </details>
        </div>
        <div className="mb-4">
          <details className="group p-4 text-normal rounded-md">
            <summary className="flex cursor-pointer flex-row border-b-[1px] pb-6 items-center justify-between font-semibold text-gray-800">
              Psychology of Finance
              <div className="flex gap-2">
                <span className="text-normal font-normal">1 / 4</span>
                <IoIosArrowDown className="size-6 rotate-0 transition-all duration-200 text-[#0e5ddd] group-open:rotate-180" />
              </div>
            </summary>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""}>
                <div className="flex items-center">
                  <FaYoutube className="mr-3 text-xl text-[#0e5ddd]" />
                  <span className="text-normal text-[#0e5ddd]">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal text-[#0e5ddd]">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                  checked // will optimize with logic later.
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[4px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""} className="HoverLessonsCourse">
                <div className="flex items-center">
                  <FaYoutube className="mr-3 text-xl ActiveLessonsCourse" />
                  <span className="text-normal ActiveLessonsCourse">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal ActiveLessonsCourse">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[6px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""} className="HoverLessonsCourse">
                <div className="flex items-center transition-all duration">
                  <FaYoutube className="mr-3 text-xl ActiveLessonsCourse" />
                  <span className="text-normal ActiveLessonsCourse">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal ActiveLessonsCourse">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[6px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""} className="HoverLessonsCourse">
                <div className="flex items-center">
                  <FaYoutube className="mr-3 text-xl ActiveLessonsCourse" />
                  <span className="text-normal ActiveLessonsCourse">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal ActiveLessonsCourse">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[6px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>
          </details>
        </div>
        <div className="mb-4">
          <details className="group p-4 text-normal rounded-md">
            <summary className="flex cursor-pointer flex-row border-b-[1px] pb-6 items-center justify-between font-semibold text-gray-800">
              Psychology of Finance
              <div className="flex gap-2">
                <span className="text-normal font-normal">1 / 4</span>
                <IoIosArrowDown className="size-6 rotate-0 transition-all duration-200 text-[#0e5ddd] group-open:rotate-180" />
              </div>
            </summary>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""}>
                <div className="flex items-center">
                  <FaYoutube className="mr-3 text-xl text-[#0e5ddd]" />
                  <span className="text-normal text-[#0e5ddd]">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal text-[#0e5ddd]">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                  checked // will optimize with logic later.
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[4px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""} className="HoverLessonsCourse">
                <div className="flex items-center">
                  <FaYoutube className="mr-3 text-xl ActiveLessonsCourse" />
                  <span className="text-normal ActiveLessonsCourse">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal ActiveLessonsCourse">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[6px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""} className="HoverLessonsCourse">
                <div className="flex items-center transition-all duration">
                  <FaYoutube className="mr-3 text-xl ActiveLessonsCourse" />
                  <span className="text-normal ActiveLessonsCourse">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal ActiveLessonsCourse">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[6px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>

            <div className="text-gray-500 mt-4 flex justify-between">
              <Link to={""} className="HoverLessonsCourse">
                <div className="flex items-center">
                  <FaYoutube className="mr-3 text-xl ActiveLessonsCourse" />
                  <span className="text-normal ActiveLessonsCourse">
                    What Drives Supply and Demand
                  </span>
                </div>
              </Link>

              <div className="flex items-center relative">
                <span className="text-normal ActiveLessonsCourse">07:51</span>
                <input
                  type="checkbox"
                  className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                  disabled
                  readOnly
                />
                <FaCheck className="absolute peer-checked:block right-1 bottom-[6px] cursor-not-allowed text-white size-4 mt-1 hidden" />
              </div>
            </div>
          </details>
        </div>
      </div>
    </>
  );
};

export default LessonsCourse;
