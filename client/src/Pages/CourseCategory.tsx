import Container from "@/components/Container";
import FilterCourseCategory from "@/components/EachSections/FilterCourseCategory";
import { useState } from "react";
import { IoBook, IoSearch } from "react-icons/io5";
import CourseImage from "../assets/CourseImage.jpg";
import { FaRegClock, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CatePagination } from "@/components/EachSections/CatePaginaton";
import { FaRegBookmark } from "react-icons/fa6";

const CourseCategory = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  return (
    <>
      <div className="bg-[#0e5ddd] bg-blend-darken bg-opacity-100 bg-cover bg-center h-[450px]">
        <div className="h-[450px] flex flex-col justify-center items-center">
          <h1 className="text-white text-[42px]">Ui & Ux Design</h1>
        </div>
      </div>
      <Container>
        <div className="flex justify-between mt-24">
          <div className="">
            <div className="relative">
              <input
                className="py-3 px-4 w-[300px] border-[1px] border-[#0e5ddd] rounded-lg outline-none text-[#0e5ddd]"
                type="text"
                placeholder="Searching Courses"
              />
              <button>
                <IoSearch className="absolute top-[11px] right-5 text-[28px] text-[#0e5ddd]" />
              </button>
            </div>
          </div>

          <div className="">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex h-full px-4 rounded-lg bg-[#0e5ddd] text-white font-medium border-[1px] border-[#0e5ddd] hover:text-[#0e5ddd] hover:bg-white transition-all duration-150 justify-center items-center"
            >
              View Filters
            </button>
          </div>
        </div>
        <div
          className={`mt-8 ${
            showFilters ? "opacity-100" : "opacity-0"
          } transition-all duration-300`}
        >
          {showFilters && <FilterCourseCategory />}
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-[#F5F5F5] shadow-sm border-[1px] ScaleImageCourse">
              <div className="overflow-hidden relative">
                <img
                  className="w-full hover:scale-110 transition-all duration-200 object-cover ActiveScale"
                  src={CourseImage as string}
                  alt=""
                />
                <button>
                  <FaRegBookmark className="absolute top-5 right-5 text-[28px] rounded-md bg-white p-[6px] hover:text-[#0e5ddd] transition-all duration-150" />
                </button>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <IoBook className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">3 Lessions</span>
                  </span>
                  <span className="flex items-center">
                    <FaRegClock className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">1.2 Hours</span>
                  </span>
                </div>
              </div>
              <Link to={"/course/ux-ui-design"}>
                <h1 className="mt-4 text-[20px] font-medium text-gray-700 hover:text-[#0e5ddd] transition-all duration-150">
                  AWS Certified Solutions Architect Associate
                </h1>
              </Link>
              <div className="my-4 flex">
                <span className="mr-1 text-[#0e5ddd] font-semibold text-[18px]">
                  $70.00
                </span>
                <span className="text-sm line-through text-gray-400">
                  $100.00
                </span>
              </div>
              <div className="w-full my-2 h-[1px] bg-slate-500"></div>
              <div className="flex justify-between">
                <Link className="w-max" to={"/"}>
                  <div className="flex items-center w-max">
                    <img
                      className="size-8 rounded-full"
                      src="https://avatars.githubusercontent.com/u/123473752?v=4"
                      alt=""
                    />
                    <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                      Thanakorn
                    </span>
                  </div>
                </Link>
                <div className="flex items-center text-slate-600 mt-1">
                  <span className="flex items-center mr-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  (5)
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#F5F5F5] shadow-sm border-[1px] ScaleImageCourse">
              <div className="overflow-hidden relative">
                <img
                  className="w-full hover:scale-110 transition-all duration-200 object-cover ActiveScale"
                  src={CourseImage as string}
                  alt=""
                />
                <button>
                  <FaRegBookmark className="absolute top-5 right-5 text-[28px] rounded-md bg-white p-[6px] hover:text-[#0e5ddd] transition-all duration-150" />
                </button>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <IoBook className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">3 Lessions</span>
                  </span>
                  <span className="flex items-center">
                    <FaRegClock className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">1.2 Hours</span>
                  </span>
                </div>
              </div>
              <Link to={"/course/ux-ui-design"}>
                <h1 className="mt-4 text-[20px] font-medium text-gray-700 hover:text-[#0e5ddd] transition-all duration-150">
                  AWS Certified Solutions Architect Associate
                </h1>
              </Link>
              <div className="my-4 flex">
                <span className="mr-1 text-[#0e5ddd] font-semibold text-[18px]">
                  $70.00
                </span>
                <span className="text-sm line-through text-gray-400">
                  $100.00
                </span>
              </div>
              <div className="w-full my-2 h-[1px] bg-slate-500"></div>
              <div className="flex justify-between">
                <Link className="w-max" to={"/"}>
                  <div className="flex items-center w-max">
                    <img
                      className="size-8 rounded-full"
                      src="https://avatars.githubusercontent.com/u/123473752?v=4"
                      alt=""
                    />
                    <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                      Thanakorn
                    </span>
                  </div>
                </Link>
                <div className="flex items-center text-slate-600 mt-1">
                  <span className="flex items-center mr-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  (5)
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#F5F5F5] shadow-sm border-[1px] ScaleImageCourse">
              <div className="overflow-hidden relative">
                <img
                  className="w-full hover:scale-110 transition-all duration-200 object-cover ActiveScale"
                  src={CourseImage as string}
                  alt=""
                />
                <button>
                  <FaRegBookmark className="absolute top-5 right-5 text-[28px] rounded-md bg-white p-[6px] hover:text-[#0e5ddd] transition-all duration-150" />
                </button>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <IoBook className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">3 Lessions</span>
                  </span>
                  <span className="flex items-center">
                    <FaRegClock className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">1.2 Hours</span>
                  </span>
                </div>
              </div>
              <Link to={"/course/ux-ui-design"}>
                <h1 className="mt-4 text-[20px] font-medium text-gray-700 hover:text-[#0e5ddd] transition-all duration-150">
                  AWS Certified Solutions Architect Associate
                </h1>
              </Link>
              <div className="my-4 flex">
                <span className="mr-1 text-[#0e5ddd] font-semibold text-[18px]">
                  $70.00
                </span>
                <span className="text-sm line-through text-gray-400">
                  $100.00
                </span>
              </div>
              <div className="w-full my-2 h-[1px] bg-slate-500"></div>
              <div className="flex justify-between">
                <Link className="w-max" to={"/"}>
                  <div className="flex items-center w-max">
                    <img
                      className="size-8 rounded-full"
                      src="https://avatars.githubusercontent.com/u/123473752?v=4"
                      alt=""
                    />
                    <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                      Thanakorn
                    </span>
                  </div>
                </Link>
                <div className="flex items-center text-slate-600 mt-1">
                  <span className="flex items-center mr-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  (5)
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#F5F5F5] shadow-sm border-[1px] ScaleImageCourse">
              <div className="overflow-hidden relative">
                <img
                  className="w-full hover:scale-110 transition-all duration-200 object-cover ActiveScale"
                  src={CourseImage as string}
                  alt=""
                />
                <button>
                  <FaRegBookmark className="absolute top-5 right-5 text-[28px] rounded-md bg-white p-[6px] hover:text-[#0e5ddd] transition-all duration-150" />
                </button>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <IoBook className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">3 Lessions</span>
                  </span>
                  <span className="flex items-center">
                    <FaRegClock className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">1.2 Hours</span>
                  </span>
                </div>
              </div>
              <Link to={"/course/ux-ui-design"}>
                <h1 className="mt-4 text-[20px] font-medium text-gray-700 hover:text-[#0e5ddd] transition-all duration-150">
                  AWS Certified Solutions Architect Associate
                </h1>
              </Link>
              <div className="my-4 flex">
                <span className="mr-1 text-[#0e5ddd] font-semibold text-[18px]">
                  $70.00
                </span>
                <span className="text-sm line-through text-gray-400">
                  $100.00
                </span>
              </div>
              <div className="w-full my-2 h-[1px] bg-slate-500"></div>
              <div className="flex justify-between">
                <Link className="w-max" to={"/"}>
                  <div className="flex items-center w-max">
                    <img
                      className="size-8 rounded-full"
                      src="https://avatars.githubusercontent.com/u/123473752?v=4"
                      alt=""
                    />
                    <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                      Thanakorn
                    </span>
                  </div>
                </Link>
                <div className="flex items-center text-slate-600 mt-1">
                  <span className="flex items-center mr-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  (5)
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#F5F5F5] shadow-sm border-[1px] ScaleImageCourse">
              <div className="overflow-hidden relative">
                <img
                  className="w-full hover:scale-110 transition-all duration-200 object-cover ActiveScale"
                  src={CourseImage as string}
                  alt=""
                />
                <button>
                  <FaRegBookmark className="absolute top-5 right-5 text-[28px] rounded-md bg-white p-[6px] hover:text-[#0e5ddd] transition-all duration-150" />
                </button>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <IoBook className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">3 Lessions</span>
                  </span>
                  <span className="flex items-center">
                    <FaRegClock className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">1.2 Hours</span>
                  </span>
                </div>
              </div>
              <Link to={"/course/ux-ui-design"}>
                <h1 className="mt-4 text-[20px] font-medium text-gray-700 hover:text-[#0e5ddd] transition-all duration-150">
                  AWS Certified Solutions Architect Associate
                </h1>
              </Link>
              <div className="my-4 flex">
                <span className="mr-1 text-[#0e5ddd] font-semibold text-[18px]">
                  $70.00
                </span>
                <span className="text-sm line-through text-gray-400">
                  $100.00
                </span>
              </div>
              <div className="w-full my-2 h-[1px] bg-slate-500"></div>
              <div className="flex justify-between">
                <Link className="w-max" to={"/"}>
                  <div className="flex items-center w-max">
                    <img
                      className="size-8 rounded-full"
                      src="https://avatars.githubusercontent.com/u/123473752?v=4"
                      alt=""
                    />
                    <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                      Thanakorn
                    </span>
                  </div>
                </Link>
                <div className="flex items-center text-slate-600 mt-1">
                  <span className="flex items-center mr-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  (5)
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#F5F5F5] shadow-sm border-[1px] ScaleImageCourse">
              <div className="overflow-hidden relative">
                <img
                  className="w-full hover:scale-110 transition-all duration-200 object-cover ActiveScale"
                  src={CourseImage as string}
                  alt=""
                />
                <button>
                  <FaRegBookmark className="absolute top-5 right-5 text-[28px] rounded-md bg-white p-[6px] hover:text-[#0e5ddd] transition-all duration-150" />
                </button>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <IoBook className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">3 Lessions</span>
                  </span>
                  <span className="flex items-center">
                    <FaRegClock className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">1.2 Hours</span>
                  </span>
                </div>
              </div>
              <Link to={"/course/ux-ui-design"}>
                <h1 className="mt-4 text-[20px] font-medium text-gray-700 hover:text-[#0e5ddd] transition-all duration-150">
                  AWS Certified Solutions Architect Associate
                </h1>
              </Link>
              <div className="my-4 flex">
                <span className="mr-1 text-[#0e5ddd] font-semibold text-[18px]">
                  $70.00
                </span>
                <span className="text-sm line-through text-gray-400">
                  $100.00
                </span>
              </div>
              <div className="w-full my-2 h-[1px] bg-slate-500"></div>
              <div className="flex justify-between">
                <Link className="w-max" to={"/"}>
                  <div className="flex items-center w-max">
                    <img
                      className="size-8 rounded-full"
                      src="https://avatars.githubusercontent.com/u/123473752?v=4"
                      alt=""
                    />
                    <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                      Thanakorn
                    </span>
                  </div>
                </Link>
                <div className="flex items-center text-slate-600 mt-1">
                  <span className="flex items-center mr-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  (5)
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#F5F5F5] shadow-sm border-[1px] ScaleImageCourse">
              <div className="overflow-hidden relative">
                <img
                  className="w-full hover:scale-110 transition-all duration-200 object-cover ActiveScale"
                  src={CourseImage as string}
                  alt=""
                />
                <button>
                  <FaRegBookmark className="absolute top-5 right-5 text-[28px] rounded-md bg-white p-[6px] hover:text-[#0e5ddd] transition-all duration-150" />
                </button>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <IoBook className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">3 Lessions</span>
                  </span>
                  <span className="flex items-center">
                    <FaRegClock className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">1.2 Hours</span>
                  </span>
                </div>
              </div>
              <Link to={"/course/ux-ui-design"}>
                <h1 className="mt-4 text-[20px] font-medium text-gray-700 hover:text-[#0e5ddd] transition-all duration-150">
                  AWS Certified Solutions Architect Associate
                </h1>
              </Link>
              <div className="my-4 flex">
                <span className="mr-1 text-[#0e5ddd] font-semibold text-[18px]">
                  $70.00
                </span>
                <span className="text-sm line-through text-gray-400">
                  $100.00
                </span>
              </div>
              <div className="w-full my-2 h-[1px] bg-slate-500"></div>
              <div className="flex justify-between">
                <Link className="w-max" to={"/"}>
                  <div className="flex items-center w-max">
                    <img
                      className="size-8 rounded-full"
                      src="https://avatars.githubusercontent.com/u/123473752?v=4"
                      alt=""
                    />
                    <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                      Thanakorn
                    </span>
                  </div>
                </Link>
                <div className="flex items-center text-slate-600 mt-1">
                  <span className="flex items-center mr-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  (5)
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#F5F5F5] shadow-sm border-[1px] ScaleImageCourse">
              <div className="overflow-hidden relative">
                <img
                  className="w-full hover:scale-110 transition-all duration-200 object-cover ActiveScale"
                  src={CourseImage as string}
                  alt=""
                />
                <button>
                  <FaRegBookmark className="absolute top-5 right-5 text-[28px] rounded-md bg-white p-[6px] hover:text-[#0e5ddd] transition-all duration-150" />
                </button>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <span className="flex items-center">
                    <IoBook className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">3 Lessions</span>
                  </span>
                  <span className="flex items-center">
                    <FaRegClock className="mr-2 text-[#0e5ddd]" />
                    <span className="text-[14px]">1.2 Hours</span>
                  </span>
                </div>
              </div>
              <Link to={"/course/ux-ui-design"}>
                <h1 className="mt-4 text-[20px] font-medium text-gray-700 hover:text-[#0e5ddd] transition-all duration-150">
                  AWS Certified Solutions Architect Associate
                </h1>
              </Link>
              <div className="my-4 flex">
                <span className="mr-1 text-[#0e5ddd] font-semibold text-[18px]">
                  $70.00
                </span>
                <span className="text-sm line-through text-gray-400">
                  $100.00
                </span>
              </div>
              <div className="w-full my-2 h-[1px] bg-slate-500"></div>
              <div className="flex justify-between">
                <Link className="w-max" to={"/"}>
                  <div className="flex items-center w-max">
                    <img
                      className="size-8 rounded-full"
                      src="https://avatars.githubusercontent.com/u/123473752?v=4"
                      alt=""
                    />
                    <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                      Thanakorn
                    </span>
                  </div>
                </Link>
                <div className="flex items-center text-slate-600 mt-1">
                  <span className="flex items-center mr-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  (5)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <CatePagination />
        </div>
      </Container>
    </>
  );
};

export default CourseCategory;
