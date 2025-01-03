import Container from "../Container";
import TEACHER from "../../assets/team.png";

const TeacherHome = () => {
  return (
    <>
      <Container>
        <div className="w-full flex justify-center">
          <span className="text-[#0e5ddd] font-semibold">DEVELOPER</span>
        </div>
        <div className="flex justify-center text-[42px] font-semibold text-gray-600 mb-8">
          Our Developer Team
        </div>
        <div className="grid grid-cols-3 w-full pl-16">
          <div className="flex flex-col w-max justify-center">
            <img
              className="w-full h-[416px] object-contain mb-4"
              src={TEACHER as string}
              alt=""
            />
            <span className="text-gray-600 font-medium">WEB DEVELOPER</span>
            <p className="text-[24px] text-[#0e5ddd] font-medium">
              Daniel Jons
            </p>
          </div>
          <div className="flex flex-col w-max justify-center">
            <img
              className="w-full h-[416px] object-contain mb-4"
              src={TEACHER as string}
              alt=""
            />
            <span className="text-gray-600 font-medium">WEB DEVELOPER</span>
            <p className="text-[24px] text-[#0e5ddd] font-medium">
              John Smit
            </p>
          </div>
          <div className="flex flex-col w-max justify-center">
            <img
              className="w-full h-[416px] object-contain mb-4"
              src={TEACHER as string}
              alt=""
            />
            <span className="text-gray-600 font-medium">WEB DEVELOPER</span>
            <p className="text-[24px] text-[#0e5ddd] font-medium">
              Jonas4236
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TeacherHome;