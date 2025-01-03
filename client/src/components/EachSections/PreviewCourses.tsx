import axios from "axios";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { server } from "@/api";
import { useEffect, useState } from "react";
import { GetListCourseProps } from "@/Types";

const PreviewCourses = () => {
  const [listcourse, setListcourse] = useState<GetListCourseProps[]>([]);

  useEffect(() => {
    const getlistcourse = async () => {
      const { data } = await axios.get(server.API_GER_LIST_CATEGORY_COURSE);
      setListcourse(data);
    };
    getlistcourse();
  }, []);

  // console.log("preiew:", listcourse);

  return (
    <div className="rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={listcourse}
        direction="right"
        speed="fast"
      />
    </div>
  );
};

export default PreviewCourses;