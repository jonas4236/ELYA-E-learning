import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    title: "Featured",
  },
  {
    title: "Health & Fitness",
  },
  {
    title: "Language",
  },
  {
    title: "Optimize",
  },
  {
    title: "Web Developer",
  },
  {
    title: "SEO",
  },
  {
    title: "Technology",
  },
  {
    title: "UI & UX Design",
  },
];

const PreviewCourses = () => {
  return (
    <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default PreviewCourses;
