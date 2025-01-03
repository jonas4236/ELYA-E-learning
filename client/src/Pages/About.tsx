import Container from "@/components/Container";
import CEOStartUp from "../assets/about.png";
import { RiBookmark3Fill } from "react-icons/ri";
import { useState } from "react";
import AboutEducation from "@/components/EachSections/About/AboutEducation";
import AboutCourse from "@/components/EachSections/About/AboutCourse";

const About = () => {
  const [currentInfo, setCurrentInfo] = useState<number>(1);

  return (
    <>
      <div className="bg-[url('https://images.unsplash.com/photo-1462826303086-329426d1aef5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-blend-darken bg-black bg-opacity-50 bg-cover bg-center h-[450px]">
        <Container>
          <div className="h-[450px] flex flex-col justify-center items-center">
            <h1 className="text-white text-[42px]">About</h1>
            <p className="text-white text-xl">
              Home <span className="text-xl px-2">&gt;</span>About
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex gap-4 my-16">
          <div className="flex-[1]">
            <img
              className="w-[560px] h-full object-contain"
              src={CEOStartUp as string}
              alt=""
            />
          </div>
          <div className="flex-[1]">
            <span className="text-[12px] py-2 px-4 rounded-full bg-[#0e5ddd] text-white font-medium">
              ABOUT US
            </span>
            <div className="mt-4">
              <h1 className="text-[46px] font-semibold text-gray-700">
                Welcome to The Online Learning Center
              </h1>
              <p className="w-[550px] text-gray-500 mt-4">
                Meet my startup design agency Shape Rex Currently I am working
                at CodeNext as Product Designer.
              </p>
            </div>
            <div className="my-4 flex items-center">
              <span className="">
                <RiBookmark3Fill className="text-[60px] text-[#0e5ddd]" />
              </span>
              <span className="ml-2 text-[18px]">
                <span className="text-[#0e5ddd] font-medium">
                  10+ Years Experience
                </span>{" "}
                In Product Designing
              </span>
            </div>
            <div>
              <p className="w-[500px] text-gray-500">
                I love to work in User Experience & User Interface designing.
                Because I love to solve the design problem and find easy and
                better solutions to solve it. I always try my best to make good
                user interface with the best user experience. I have been
                working as a UX Designer
              </p>
            </div>
            <div className="mt-4">
              <button className="py-2 px-6 bg-[#0e5ddd] text-white font-medium rounded-md border-[1px] border-[#0e5ddd] transition-all duration-150 hover:bg-white hover:text-[#0e5ddd]">
                More About
              </button>
            </div>
          </div>
        </div>
        <div className="h-[538px]">
          <div className="flex flex-rw gap-4 mb-8">
            <button
              className="py-3 px-10 bg-[#0e5ddd] text-white rounded-md shadow-lg shadow-blue-500/50 text-[22px]"
              onClick={() => setCurrentInfo(1)}
            >
              Education
            </button>
            <button
              className="py-3 px-10 bg-[#0e5ddd] text-white rounded-md shadow-lg shadow-blue-500/50 text-[22px]"
              onClick={() => setCurrentInfo(2)}
            >
              Course
            </button>
          </div>
          <div
            className={`transition-all duration-500 ${
              currentInfo === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentInfo === 1 && <AboutEducation />}
          </div>
          <div
            className={`transition-all duration-500 ${
              currentInfo === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentInfo === 2 && <AboutCourse />}
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;