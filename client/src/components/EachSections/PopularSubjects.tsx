import Container from "../Container";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularSubjects = () => {
  return (
    <>
      <Container>
        <div className="mb-16">
          <div className="">
            <span className="p-1 px-2 rounded-full bg-[#0e5ddd] text-white text-sm">
              Course List
            </span>
            <div className="flex justify-between mt-4">
              <div className="">
                <h1 className="text-[36px] font-semibold text-gray-600">
                  Popular{" "}
                  <span className="underline decoration-[#0e5ddd] decoration-4">
                    Subjects
                  </span>
                </h1>
              </div>
              <div className="w-[420px] ">
                <span className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit unde, officia eius aliquam neque facere!.
                </span>
              </div>
              <div className="">
                <button className="py-3 px-4 bg-[#0e5ddd] text-white font-medium rounded-md flex items-center hover:bg-white hover:text-[#0e5ddd] border-[1px] border-[#0e5ddd] transition-all duration-150">
                  View All Courses{" "}
                  <span className="ml-2">
                    <FaLongArrowAltRight size={20} />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-4 gap-4 w-auto">
              <Link to={"/course-category/test"}>
                <div className="p-4 w-auto h-[216px] flex flex-col items-center justify-center rounded-lg bg-slate-100 hover:-translate-y-2 transition-all duration-200 hover:bg-[#0e5ddd] LinkText">
                  <div>
                    <FaBook className="text-[60px] text-[#0e5ddd] iconCourse" />
                  </div>
                  <div className="mt-3">
                    <span className="text-[22px] iconCourse">Featured</span>
                    <p className="text-normal text-slate-500 iconCourse">
                      03 Courses
                    </p>
                  </div>
                </div>
              </Link>
              <Link to={"/course-category/test"}>
                <div className="p-4 w-auto h-[216px] flex flex-col items-center justify-center rounded-lg bg-slate-100 hover:-translate-y-2 transition-all duration-200 hover:bg-[#0e5ddd] LinkText">
                  <div>
                    <FaBook className="text-[60px] text-[#0e5ddd] iconCourse" />
                  </div>
                  <div className="mt-3">
                    <span className="text-[22px] iconCourse">Featured</span>
                    <p className="text-normal text-slate-500 iconCourse">
                      03 Courses
                    </p>
                  </div>
                </div>
              </Link>
              <Link to={"/course-category/test"}>
                <div className="p-4 w-auto h-[216px] flex flex-col items-center justify-center rounded-lg bg-slate-100 hover:-translate-y-2 transition-all duration-200 hover:bg-[#0e5ddd] LinkText">
                  <div>
                    <FaBook className="text-[60px] text-[#0e5ddd] iconCourse" />
                  </div>
                  <div className="mt-3">
                    <span className="text-[22px] iconCourse">Featured</span>
                    <p className="text-normal text-slate-500 iconCourse">
                      03 Courses
                    </p>
                  </div>
                </div>
              </Link>
              <Link to={"/course-category/test"}>
                <div className="p-4 w-auto h-[216px] flex flex-col items-center justify-center rounded-lg bg-slate-100 hover:-translate-y-2 transition-all duration-200 hover:bg-[#0e5ddd] LinkText">
                  <div>
                    <FaBook className="text-[60px] text-[#0e5ddd] iconCourse" />
                  </div>
                  <div className="mt-3">
                    <span className="text-[22px] iconCourse">Featured</span>
                    <p className="text-normal text-slate-500 iconCourse">
                      03 Courses
                    </p>
                  </div>
                </div>
              </Link>
              <Link to={"/course-category/test"}>
                <div className="p-4 w-auto h-[216px] flex flex-col items-center justify-center rounded-lg bg-slate-100 hover:-translate-y-2 transition-all duration-200 hover:bg-[#0e5ddd] LinkText">
                  <div>
                    <FaBook className="text-[60px] text-[#0e5ddd] iconCourse" />
                  </div>
                  <div className="mt-3">
                    <span className="text-[22px] iconCourse">Featured</span>
                    <p className="text-normal text-slate-500 iconCourse">
                      03 Courses
                    </p>
                  </div>
                </div>
              </Link>
              <Link to={"/course-category/test"}>
                <div className="p-4 w-auto h-[216px] flex flex-col items-center justify-center rounded-lg bg-slate-100 hover:-translate-y-2 transition-all duration-200 hover:bg-[#0e5ddd] LinkText">
                  <div>
                    <FaBook className="text-[60px] text-[#0e5ddd] iconCourse" />
                  </div>
                  <div className="mt-3">
                    <span className="text-[22px] iconCourse">Featured</span>
                    <p className="text-normal text-slate-500 iconCourse">
                      03 Courses
                    </p>
                  </div>
                </div>
              </Link>
              <Link to={"/course-category/test"}>
                <div className="p-4 w-auto h-[216px] flex flex-col items-center justify-center rounded-lg bg-slate-100 hover:-translate-y-2 transition-all duration-200 hover:bg-[#0e5ddd] LinkText">
                  <div>
                    <FaBook className="text-[60px] text-[#0e5ddd] iconCourse" />
                  </div>
                  <div className="mt-3">
                    <span className="text-[22px] iconCourse">Featured</span>
                    <p className="text-normal text-slate-500 iconCourse">
                      03 Courses
                    </p>
                  </div>
                </div>
              </Link>
              <Link to={"/course-category/test"}>
                <div className="p-4 w-auto h-[216px] flex flex-col items-center justify-center rounded-lg bg-slate-100 hover:-translate-y-2 transition-all duration-200 hover:bg-[#0e5ddd] LinkText">
                  <div>
                    <FaBook className="text-[60px] text-[#0e5ddd] iconCourse" />
                  </div>
                  <div className="mt-3">
                    <span className="text-[22px] iconCourse">Featured</span>
                    <p className="text-normal text-slate-500 iconCourse">
                      03 Courses
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PopularSubjects;