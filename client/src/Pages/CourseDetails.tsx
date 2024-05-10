import Container from "@/components/Container";
import Video1 from "../assets/video.mp4";

// Vidstack Player (ReactJS)
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import { VideoLayout } from "@/components/EachSections/VideoLayout/VideoLayout";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

// react icons
import { IoMdBookmarks } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import ToggleCourseAndReview from "@/components/EachSections/ToggleTabs/ToggleCourseAndReview";
import { IoSchoolOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import Requirements from "@/components/EachSections/Requirements";
import InstructorCourse from '@/components/EachSections/InstructorCourse'
import { Link } from "react-router-dom";

const CourseDetails = () => {
  return (
    <>
      <div className="h-auto">
        <div className="bg-[#0e5ddd] bg-blend-darken bg-opacity-100 bg-cover bg-center h-[450px]">
          <Container>
            <div className="h-[450px] flex flex-col justify-center items-center">
              <h1 className="text-white text-[42px]">
                AWS Certified Solutions Architect Associate
              </h1>
              <p className="text-white text-[18px] mt-4">
                Home <span className="mr-2">&gt;</span>AWS Certified Solutions
                Architect Associate
              </p>
            </div>
          </Container>
        </div>

        <Container>
          <div className="flex gap-24 mt-24">
            <div className="flex-[2]">
              <div className="h-[470px]">
                <MediaPlayer
                  className=" text-white rounded-md h-[470px]"
                  src={Video1 as string}
                >
                  <MediaProvider>
                    <Poster
                      className="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover"
                      src="https://media.licdn.com/dms/image/D4D12AQE3Z8FdcS8L6A/article-cover_image-shrink_720_1280/0/1694965101010?e=2147483647&v=beta&t=yrFKuepyH0y3YRjB0KVRdrNFrsutFzeXNGVYBvnWZoE"
                      alt={"asd"}
                    />
                  </MediaProvider>
                  <VideoLayout />
                </MediaPlayer>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <div className="">
                    <span className="py-2 mr-3 px-4 bg-[#0e5ddd] text-white font-medium rounded-md">
                      Website
                    </span>
                    <span className="py-2 mr-3 px-4 bg-[#0e5ddd] text-white font-medium rounded-md">
                      Developer
                    </span>
                  </div>
                  <div className="">
                    <span className="text-gray-600">
                      Uploaded:
                      <span className="ml-1 text-[#0e5ddd] font-medium">
                        April 5, 2023
                      </span>
                    </span>
                  </div>
                </div>
                <div className="my-8">
                  <h1 className="text-[30px] font-medium text-[#0e5ddd]">
                    AWS Certified Solutions Architect Associate
                  </h1>
                </div>
                <div className="my-6 flex gap-4 items-center">
                  <span className="text-[#0e5ddd] font-medium text-xl">
                    $70.00
                  </span>
                  <div className="">
                    <span className="flex items-center text-slate-950">
                      <IoMdBookmarks className="mr-2 text-xl text-[#0e5ddd]" />3
                      Lession
                    </span>
                  </div>
                  <div className="flex text-yellow-400 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="ml-2 text-[#0e5ddd]">(25)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <ToggleCourseAndReview />
              </div>
            </div>
            <div className="flex-[1]">
              <div className="p-8 border-[1px] bg-[#FCFCFD]">
                <div className="flex w-max">
                  <span className="mr-2 text-[24px] text-[#0e5ddd] font-medium">
                    $70.00
                  </span>
                  <span className="line-through text-gray-400">$100.00</span>
                </div>
                <div className="w-full flex justify-center mt-4">
                  <Link
                    to={"/lessons/sss/1"}
                    className="px-8 py-3 w-full bg-[#0e5ddd] rounded-md text-white font-medium border-[1px] border-[#0e5ddd] hover:bg-[#FCFCFD] hover:text-[#0e5ddd] transition-all duration-300"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>

              <div className="p-8 border border-t-0 border-r-1 border-b-1 border-l-1">
                <div className="">
                  <ul>
                    <li className="py-4 border-b-[1px] first:border-t-[1px] flex items-center">
                      <IoSchoolOutline className="mr-2 text-xl" />1 Total
                      Enrolled
                    </li>
                    <li className="py-4 border-b-[1px] flex items-center">
                      <FaRegClock className="mr-2 text-xl" />
                      1.2 Hours On Demand
                    </li>
                    <li className="py-4 border-b-[1px] flex items-center">
                      <AiOutlineUpload className="mr-2 text-xl" /> Uploaded on
                      April 5, 2023
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-8 border-[1px] bg-[#FCFCFD]">
                <span className="border-l-[3px] border-[#0e5ddd] pl-2 text-[22px] font-medium">
                  Requirements
                </span>
                <Requirements />
              </div>
              <div className="mt-6 p-8 border-[1px] shadow-sm">
                <InstructorCourse />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CourseDetails;
