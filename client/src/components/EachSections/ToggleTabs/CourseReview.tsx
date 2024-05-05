import { FaStar } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";

const calProgress = () => {
  const ratingComments = [];

  for (let i = 1; i <= 5; i++) {
    ratingComments.push(
      <div
        key={i}
        className=" flex flex-row gap-3 my-4 first:my-0 last:my-0 items-center justify-between"
      >
        <div className="flex flex-row items-center">
          <FaStar className="text-[16px] text-yellow-400 mr-2" />
          <span>{i}</span>
        </div>
        <div className="w-[730%]">
          <Progress value={i * 10} className="w-full h-[10px] bg-[#F5F5F5]" />
        </div>
        <div className="w-full">
          <span>{i} Rating</span>
        </div>
      </div>
    );
  }

  return [...ratingComments.reverse()];
};

const CourseReview = () => {
  const Profile =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <h1 className="text-[24px] font-medium">Student Ratings & Reviews</h1>
      <div className="mt-8">
        <div className="">
          <textarea
            className="w-full h-[200px] resize-none outline-none p-4 bg-[#FCFCFD] border-[1px] rounded-md"
            placeholder="Write a commend..."
            maxLength={250}
          ></textarea>
          <button className="py-2 px-4 text-sm text-white border-[1px] border-[#0e5ddd] bg-[#0e5ddd] rounded-md hover:text-[#0e5ddd hover:bg-white hover:text-[#0e5ddd] transition-all duration-150 hover:border-[#0e5ddd]">
            Post commend
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="border-[1px] rounded-md p-8">
          <div className="flex gap-4">
            <div className="flex-[1] flex flex-col items-center gap-4">
              <span className="text-[72px] font-medium">5.0</span>
              <div className="flex gap-1 w-max text-yellow-400">
                <FaStar className="text-[24px]" />
                <FaStar className="text-[24px]" />
                <FaStar className="text-[24px]" />
                <FaStar className="text-[24px]" />
                <FaStar className="text-[24px]" />
              </div>
              <span>Total 1 Rating</span>
            </div>
            <div className="flex-[3]">{calProgress()}</div>
          </div>

          <div className="mt-8 border-[1px] bg-[#FCFCFD] rounded-md">
            <div className="flex">
              <div className="flex-[1]">
                <div className="p-8 flex h-full flex-col items-center justify-center">
                  <img
                    className="object-cover rounded-full size-16"
                    src={Profile as string}
                    alt=""
                  />
                  <span className="text-[20px]">John Doe</span>
                  <p className="text-sm text-gray-500">10 months ago</p>
                </div>
              </div>
              <div className="flex-[3] p-8">
                <div className="flex flex-col gap-2">
                  <div className="flex w-max text-yellow-400">
                    <FaStar className="text-[24px]" />
                    <FaStar className="text-[24px]" />
                    <FaStar className="text-[24px]" />
                    <FaStar className="text-[24px]" />
                    <FaStar className="text-[24px]" />
                  </div>
                  <span className="">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Natus magni amet dignissimos voluptate eveniet rem
                    consequatur et ex, ipsa nihil aut mollitia deleniti vel
                    quas, odio numquam, quam aperiam repellendus quis incidunt.
                    Blanditiis debitis itaque
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-[1px] bg-[#FCFCFD] rounded-md">
            <div className="flex">
              <div className="flex-[1]">
                <div className="p-8 flex h-full flex-col items-center justify-center">
                  <img
                    className="object-cover rounded-full size-16"
                    src={Profile as string}
                    alt=""
                  />
                  <span className="text-[20px]">John Doe</span>
                  <p className="text-sm text-gray-500">10 months ago</p>
                </div>
              </div>
              <div className="flex-[3] p-8">
                <div className="flex flex-col gap-2">
                  <div className="flex w-max text-yellow-400">
                    <FaStar className="text-[24px]" />
                    <FaStar className="text-[24px]" />
                    <FaStar className="text-[24px]" />
                    <FaStar className="text-[24px]" />
                    <FaStar className="text-[24px]" />
                  </div>
                  <span className="">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Natus magni amet dignissimos voluptate eveniet rem
                    consequatur et ex, ipsa nihil aut mollitia deleniti vel
                    quas, odio numquam, quam aperiam repellendus quis incidunt.
                    Blanditiis debitis itaque
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-[1px] bg-[#FCFCFD] rounded-md">
            <div className="flex">
              <div className="flex-[1]">
                <div className="p-8 flex h-full flex-col items-center justify-center">
                  <img
                    className="object-cover rounded-full size-16"
                    src={Profile as string}
                    alt=""
                  />
                  <span className="text-[20px]">John Doe</span>
                  <p className="text-sm text-gray-500">10 months ago</p>
                </div>
              </div>
              <div className="flex-[3] p-8">
                <div className="flex flex-col gap-2">
                  <div className="flex w-max text-yellow-400">
                    <FaStar className="text-[24px]" />
                    <FaStar className="text-[24px]" />
                    <FaStar className="text-[24px]" />
                    <FaStar className="text-[24px]" />
                    <FaStar className="text-[24px]" />
                  </div>
                  <span className="">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Natus magni amet dignissimos voluptate eveniet rem
                    consequatur et ex, ipsa nihil aut mollitia deleniti vel
                    quas, odio numquam, quam aperiam repellendus quis incidunt.
                    Blanditiis debitis itaque
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseReview;
