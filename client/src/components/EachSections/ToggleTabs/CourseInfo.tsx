import { useState } from "react";
import WhatWillYouLearn from "./WhatWillYouLearn";
import CourseContent from "./CourseContent";

const data = {
  text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ducimus veniam nihil, beatae doloribus illo magni necessitatibus cum libero temporibus, nulla at ullam, distinctio nisi ratione illum? Dolorem molestiae est autem, ipsa assumenda at aliquam, exercitationem, ut dolor ullam natus modi. Expedita minima quae beatae ad eveniet laborum in quaerat tempore omnis sapiente! Quasi adipisci nulla voluptates. Ut deserunt nostrum odio suscipit facilis minus molestias, repellendus qui debitis voluptas cumque. Sequi eum totam, odit dolores temporibus reiciendis consectetur earum sunt? Vero nihil quasi, corrupti quidem labore quam soluta suscipit maxime sequi laudantium, eius tempore. Aperiam dolores ipsum velit quos laborum porro vitae fugit quidem vero provident! Nam ad repudiandae cupiditate quia, alias nostrum officiis illo, maxime a animi dolor deserunt quibusdam corporis cumque expedita iste. Eaque unde fugit dicta dolorum temporibus facere consectetur iusto, quia, ad debitis eveniet voluptatem eos, provident aliquid. Repellendus ab temporibus eligendi architecto corporis et consectetur suscipit odio asperiores quo! Assumenda provident doloribus exercitationem libero aliquid, consectetur quis ratione voluptas perferendis rem harum sed eius impedit similique adipisci iusto facilis dolorem quos vitae quasi! Laudantium excepturi ipsum voluptate nostrum sed? Adipisci architecto cum vel, totam asperiores, modi enim cumque non, ut porro debitis aut deleniti repudiandae",
} as const;

const CourseInfo = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { text } = data;

  // console.log("text:", text);
  return (
    <>
      <h1 className="text-[24px] font-medium">About Course</h1>
      <p className="mt-6 text-gray-600 text-[18px]">
        {showMore ? text : `${text.substring(0, 250)}...`}
      </p>
      <div className="w-full text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-max py-2 px-4 rounded-md bg-[#0e5ddd] text-white border-[1px] border-[#0e5ddd] hover:bg-white transition-all duration-150 hover:text-[#0e5ddd]"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>

      <div className="mt-6">
        <WhatWillYouLearn />
      </div>

      <div className="mt-16">
        <CourseContent />
      </div>
    </>
  );
};

export default CourseInfo;
