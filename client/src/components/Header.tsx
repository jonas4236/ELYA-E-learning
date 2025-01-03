import Container from "./Container";
import ImageELearning from "../assets/formationadistance.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";

// IMAGE
import { IoVideocam } from "react-icons/io5"; //Video
import { AiOutlineGlobal } from "react-icons/ai"; // Earth
import { HiOutlineLightBulb } from "react-icons/hi"; //Light
import { SiEducative } from "react-icons/si"; // Cmd
import { LuPencilRuler } from "react-icons/lu"; // pensill
import PortalVideo from "./EachSections/PortalVideo";

function scrollingPage() {
  return window.scrollTo(0, 2300);
}

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-blend-darken bg-black bg-opacity-50 bg-cover bg-center relative h-[100vh]">
        <Container>
          <div className="flex gap-24 pt-[170px]">
            <div className="flex-[1] py-8">
              <motion.div
                className="box"
                animate={{ y: -0, opacity: 1 }}
                initial={{ y: -80, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="">
                  <h1 className="bg-[#0e5ddd] text-[14px] text-white w-max rounded-md p-1 px-2 mb-4">
                    ELYA Online
                  </h1>
                  <p className="text-[52px] font-semibold outline-none mb-4 text-white">
                    <span className="text-green-500">Online</span> Courses Your
                    Best <span className="text-[#0e5ddd]">E-Learning</span>{" "}
                    Website
                  </p>
                  <p className="text-normal mb-4 text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nobis reiciendis amet odit tempore minima dignissimos
                    repudiandae quo! Porro omnis nulla earum beatae suscipit sit
                    quaerat
                  </p>
                  <div className=" w-max">
                    <button
                      onClick={() => scrollingPage()}
                      className="py-2 px-4 mr-4 rounded-md bg-[#0e5ddd] text-white border-[1px] border-[#0e5ddd] hover:bg-transparent hover:text-white hover:border-white transition-all duration-150"
                    >
                      View Courses
                    </button>
                    <button className="py-2 px-4 rounded-md border-[1px] border-white text-white hover:bg-[#0e5ddd] hover:text-white hover:border-[#0e5ddd] transition-all duration-150">
                      Explore More
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex-[1] relative w-max">
              <motion.div
                className="box"
                animate={{ y: -0, opacity: 1 }}
                initial={{ y: 80, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="">
                  <img
                    className="rounded-lg object-contain w-full"
                    src={ImageELearning as string}
                    alt=""
                  />
                </div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="video-play-button absolute"
                >
                  <span></span>
                </button>
                {isOpen && <PortalVideo close={setIsOpen} />}
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
      <div className="absolute bottom-24 left-16 vertical">
        <IoVideocam size={80} className="text-[#0e5ddd]" />
      </div>
      <div className="absolute top-48 left-[50px] rotation">
        <AiOutlineGlobal size={80} className="text-white" />
      </div>
      <div className="absolute top-36 left-[280px] verticalSmall">
        <HiOutlineLightBulb size={80} className="text-[#0e5ddd]" />
      </div>
      <div className="absolute top-48 left-[700px] horizontal">
        <SiEducative size={80} className="text-white" />
      </div>
      <div className="absolute top-52 right-32 verticalSmall">
        <LuPencilRuler size={80} className="text-[#0e5ddd]" />
      </div>
    </>
  );
};

export default Header;
