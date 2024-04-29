import EduSolution from "@/components/EachSections/EduSolution";
import FeatureCourse from "@/components/EachSections/FeatureCourse";
import PopularSubjects from "@/components/EachSections/PopularSubjects";
import PreviewCourses from "@/components/EachSections/PreviewCourses";
import TeacherHome from "@/components/EachSections/TeacherHome";
import Header from "@/components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <PreviewCourses />
      <FeatureCourse />
      <EduSolution />
      <PopularSubjects />
      <TeacherHome />
    </>
  );
};

export default HomePage;
