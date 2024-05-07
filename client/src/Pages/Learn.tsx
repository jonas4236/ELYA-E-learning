import Container from "@/components/Container";
import LessonsCourse from "@/components/EachSections/LessonsCourse";
import { VideoLayout } from "@/components/EachSections/VideoLayout/VideoLayout";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import Video1 from "../assets/video.mp4";
import { useState } from "react";

// react icons
import { IoIosArrowDown, IoIosCheckmarkCircle } from "react-icons/io";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Learn = () => {
  const [toggleMovieScreen, setToggleMovieScreen] = useState<boolean>(false);
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
                Lessons <span className="mr-2">&gt;</span>AWS Certified
                Solutions Architect Associate
              </p>
            </div>
          </Container>
        </div>

        <Container>
          <div className="mt-24">
            <div className="flex gap-6">
              <div className="flex-[2]">
                <Container>
                  <div className="p-4 text-xl flex justify-between items-center bg-[#0e5ddd] text-white">
                    <div className="flex items-center">
                      <IoIosArrowDown
                        onClick={() => setToggleMovieScreen(!toggleMovieScreen)}
                        className={`${
                          toggleMovieScreen ? "rotate-90" : "-rotate-90"
                        } cursor-pointer transition-all duration-150 text-[28px] mr-2 bg-white text-[#0e5ddd] rounded-full p-1`}
                      />
                      <h1
                        className={`text-[16px] ${
                          toggleMovieScreen ? "max-w-[550px]" : "w-[193px]"
                        }`}
                      >
                        Statistics Data Scince and Business Analysis
                      </h1>
                    </div>
                    <div className="">
                      <span className="text-[16px]">
                        Your Progress: 1 of 5 (20%)
                      </span>
                    </div>
                    <div className="">
                      <button className="p-2 bg-[#0e5ddd] text-white border-[1px] hover:text-[#0e5ddd] hover:bg-white transition-all duration-200 border-white rounded-md text-[16px] flex items-center">
                        <IoIosCheckmarkCircle className="mr-2 text-[28px]" />
                        Mark as Complete
                      </button>
                    </div>
                  </div>

                  <div>
                    <MediaPlayer
                      className={`text-white ${
                        toggleMovieScreen ? "h-[788px]" : "h-[500px]"
                      }`}
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
                    <div className="flex flex-row justify-center gap-4 mt-6">
                      <button className="bg-[#0e5ddd] flex items-center gap-2 text-white py-2 px-4 rounded-md hover:text-[#0e5ddd] hover:bg-white border-[1px] border-[#0e5ddd] transition-all duration-200">
                        <FaLongArrowAltLeft className="text-xl" />
                        Previous
                      </button>
                      <button className="bg-[#0e5ddd] flex items-center gap-2 text-white py-2 px-4 rounded-md hover:text-[#0e5ddd] hover:bg-white border-[1px] border-[#0e5ddd] transition-all duration-200">
                        Next
                        <FaLongArrowAltRight className="text-xl" />
                      </button>
                    </div>
                  </div>
                </Container>
              </div>
              <div className={`flex-[1] ${toggleMovieScreen ? "hidden" : ""}`}>
                <h1 className="p-4 flex justify-center bg-[#0e5ddd] text-white mb-4 text-xl">
                  Lessons
                </h1>
                <LessonsCourse />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Learn;
