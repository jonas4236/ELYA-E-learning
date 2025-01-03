import Container from "../Container";
import Education from "../../assets/EduSolution.png";
import { AiFillCheckSquare } from "react-icons/ai";

const EduSolution = () => {
  return (
    <>
      <Container>
        <div className="flex gap-4 my-16">
          <div className="flex-[1]">
            <img src={Education as string} alt="" />
          </div>
          <div className="flex-[1]">
            <div className="flex h-full justify-center flex-col">
              <span className="text-sm w-max p-1 px-2 rounded-md text-white font-semibold bg-[#0e5ddd]">
                EDUCATION SOLUTION
              </span>
              <div className="mt-4">
                <h1 className="text-[47px] text-slate-800 font-semibold">
                  Welcome to the online Learning Center
                </h1>
              </div>
              <div className="mt-4">
                <p className="border-l-[3px] border-[#0e5ddd] pl-3 text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  dolor quisquam laborum aperiam aliquid totam tempore, dolorem
                  nulla laudantium, blanditiis
                </p>
              </div>
              <div className="mt-4 flex items-center">
                <span className="mr-4">
                  <AiFillCheckSquare className="text-[#0e5ddd] text-[28px]" />
                </span>
                <span>Explore a variety of fresh educational teach</span>
              </div>
              <div className="mt-4 flex items-center">
                <span className="mr-4">
                  <AiFillCheckSquare className="text-[#0e5ddd] text-[28px]" />
                </span>
                <span>Re-imagined interective video learning</span>
              </div>
              <div className="mt-4 flex items-center">
                <span className="mr-4">
                  <AiFillCheckSquare className="text-[#0e5ddd] text-[28px]" />
                </span>
                <span>True white level course platform</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default EduSolution;