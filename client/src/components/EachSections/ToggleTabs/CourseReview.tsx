import { FaStar } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";
import { ReviewProps } from "@/Types";
import { FaRegStar } from "react-icons/fa6";
import { Rating } from "react-simple-star-rating";

const calProgress = (ratingDistruction: Record<number, number>, totalRaing: number) => {
  const ratingComments = [];

  for (let i = 5; i >= 1; i--) {
    const count =  ratingDistruction[i] || 0;
    const percentage = (count / totalRaing) * 100
    ratingComments.push(
      <div
        key={i}
        className=" flex flex-row gap-3 my-4 first:my-0 last:my-0 items-center justify-between"
      >
        <div className="flex flex-row items-center">
          <FaStar className="text-[16px] text-yellow-400 mr-2" />
          <span>{i}</span>
        </div>
        <div className="w-[600%]">
          <Progress value={percentage} className="w-full h-[10px] bg-[#F5F5F5]" />
        </div>
        <div className="w-full">
          <span>{count} Rating{count >= 1 ? "s" : ""}</span>
        </div>
      </div>
    );
  }

  return ratingComments;
};

function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  // Calculate the difference in milliseconds
  const diff = now.getTime() - date.getTime();

  // Convert milliseconds to seconds, minutes, hours, days
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Calculate years, months, weeks
  const years = Math.floor(days / 365);
  const months = Math.floor(days / 30);
  const weeks = Math.floor(days / 7);

  //#region display
  if (years > 0) {
    const remainingMonths = months % 12;
    if (remainingMonths > 0) {
      return `${years}.${remainingMonths} years ago`;
    }
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "just now";
  }
  //#endregion display

}

const CourseReview = ({ data }: { data: ReviewProps[] }) => {
  const ratingDistruction = data.reduce((acc, val) => {
    acc[val.rating] = (acc[val.rating] || 0) + 1
    return acc
  }, {} as Record<number, number>)


  const totalRating = data.length;

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
              <span className="text-[72px] font-medium">
                {data.length > 0
                  ? (
                      data.reduce((acc, val) => {
                        return acc + val.rating;
                      }, 0) / data.length
                    ).toFixed(1)
                  : 0}
              </span>
              <div className="flex gap-1 w-max text-yellow-400">
                <Rating
                  initialValue={
                    data
                      ? data.reduce((acc, val) => {
                          return acc + val.rating;
                        }, 0) / data.length
                      : 0
                  }
                  SVGclassName="inline-block"
                  size={20}
                  fillIcon={<FaStar size={20} className="inline-block" />}
                  emptyIcon={<FaRegStar size={20} className="inline-block" />}
                  readonly
                  allowFraction={true}
                />
              </div>
              <span>Total {data.length || 0} Rating</span>
            </div>
            <div className="flex-[3]">{calProgress(ratingDistruction, totalRating)}</div>
          </div>

          {data &&
            data.map((val, idx) => (
              <div
                key={idx}
                className="mt-8 border-[1px] bg-[#FCFCFD] rounded-md"
              >
                <div className="flex">
                  <div className="flex-[1]">
                    <div className="p-8 flex h-full flex-col items-center justify-center">
                      <img
                        className="object-cover rounded-full size-16"
                        src={`${val.profileImg}`}
                        alt=""
                      />
                      <span
                        className={`text-[16px] ${
                          val.name.length > 10 ? "text-center" : ""
                        }`}
                      >
                        {val.name}
                      </span>
                      <p className="text-sm text-gray-500">
                        {timeAgo(val.postedAt)}
                      </p>
                    </div>
                  </div>
                  <div className="flex-[3] p-8">
                    <div className="flex flex-col gap-2">
                      <div className="flex w-max text-yellow-400">
                        <Rating
                          initialValue={val.rating}
                          SVGclassName="inline-block"
                          size={20}
                          fillIcon={
                            <FaStar size={20} className="inline-block" />
                          }
                          emptyIcon={
                            <FaRegStar size={20} className="inline-block" />
                          }
                          readonly
                          allowFraction={true}
                        />
                      </div>
                      <span className="">{val.message}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CourseReview;