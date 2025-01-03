import Container from "../Container";
import { FuturedCourseDetail } from "./FuturedCourseDetail";

const FeatureCourse = () => {
  return (
    <>
      <Container>
        <div className="w-full mt-16">
          <h1 className="text-[42px] font-medium mb-4 text-gray-600">
            <span className="underline decoration-[#0e5ddd] decoration-3">
              Futured
            </span>{" "}
            Course
          </h1>
          <FuturedCourseDetail />
        </div>
      </Container>
    </>
  );
};

export default FeatureCourse;