import Container from "./Container";
import ImageELearning from "../assets/formationadistance.jpg";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-[#F5F5F5] h-[90vh]">
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
                  <p className="text-[52px] font-semibold outline-none mb-4 bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent">
                    <span className="text-green-500">Online</span> Courses Your
                    Best E-Learning Website
                  </p>
                  <p className="text-normal mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nobis reiciendis amet odit tempore minima dignissimos
                    repudiandae quo! Porro omnis nulla earum beatae suscipit sit
                    quaerat
                  </p>
                  <div className=" w-max">
                    <button className="py-2 px-4 mr-4 rounded-md bg-[#0e5ddd] text-white border-[1px] border-[#0e5ddd] hover:bg-white hover:text-[#0e5ddd] transition-all duration-150">
                      View Course
                    </button>
                    <button className="py-2 px-4 rounded-md border-[1px] border-[#0e5ddd] text-[#0e5ddd] hover:bg-[#0e5ddd] hover:text-white transition-all duration-150">
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
                  <ModalVideo
                    channel="youtube"
                    youtube={{ mute: 0, autoplay: 0 }}
                    isOpen={isOpen}
                    videoId="ZPs3URGs0KQ"
                    onClose={() => setOpen(false)}
                  />
                </div>
                <button
                  onClick={() => setOpen(true)}
                  className="video-play-button absolute"
                >
                  <span></span>
                </button>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
