import { useInView } from "react-intersection-observer";
import EduSolution from "@/components/EachSections/EduSolution";
import FeatureCourse from "@/components/EachSections/FeatureCourse";
import PopularSubjects from "@/components/EachSections/PopularSubjects";
import PreviewCourses from "@/components/EachSections/PreviewCourses";
import TeacherHome from "@/components/EachSections/TeacherHome";
import Header from "@/components/Header";
import { ComponentType, FC } from "react";

interface LazyLoadComponentProps {
  Component: ComponentType;
}

const LazyLoadComponent: FC<LazyLoadComponentProps> = ({ Component }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Component />
      ) : (
        <div style={{ height: "100px" }}>Loading...</div>
      )}
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Header />
      <LazyLoadComponent Component={PreviewCourses} />
      <LazyLoadComponent Component={FeatureCourse} />
      <LazyLoadComponent Component={EduSolution} />
      <LazyLoadComponent Component={PopularSubjects} />
      <LazyLoadComponent Component={TeacherHome} />
    </>
  );
};

export default HomePage;