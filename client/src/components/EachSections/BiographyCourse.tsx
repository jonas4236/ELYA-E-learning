import { FaRegClock } from "react-icons/fa"
import { Card, CardContent } from "../ui/card"
import { IoBook } from "react-icons/io5"
import { Link } from "react-router-dom"
import { BiographyCourseProps } from "@/Types"
import { Rating } from "react-simple-star-rating"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"

const BiographyCourse = ({
  data,
  teacherImage,
  teacherName,
}: {
  data: BiographyCourseProps[]
  teacherImage: string
  teacherName: string
}) => {
  const formatText = (message: string) => {
    if (message.length > 10) {
      return `${message.substring(0, 10)}...`
    } else {
      return message
    }
  }

  // console.log(data)
  return (
    <>
      {data &&
        data.map((val, idx) => (
          <div
            key={idx}
            className="m-4 flex bg-[#F5F5F5] rounded-lg ScaleImageCourse"
          >
            <Card>
              <CardContent className="aspect-square p-6">
                <div className="overflow-hidden relative">
                  <img
                    className="w-full h-[180px] object-cover transition-all duration-200 ActiveScale"
                    src={val.courseImage}
                    alt=""
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="flex items-center">
                    <IoBook className="mr-2 text-[#0e5ddd]" />
                    <span className="text-sm">{val.lession} Lessions</span>
                  </span>
                  <span className="flex items-center">
                    <FaRegClock className="mr-2 text-[#0e5ddd]" />
                    <span className="text-sm">{val.hours} Hours</span>
                  </span>
                </div>
                <Link to={`/course/${val.slug}`}>
                  <div className="mt-2">
                    <h1 className="text-lg font-medium h-[56px] text-black hover:text-[#0e5ddd] transition-all duration-200">
                      {val.name_course}
                    </h1>
                  </div>
                </Link>
                <div className="my-4">
                  <span className="mr-1 text-[#0e5ddd] font-semibold text-[18px]">
                    ${val.price}
                  </span>
                  {val.discountPrice && val.discountPrice > 0 ? (
                    <span className="text-sm line-through text-gray-400">
                      ${val.discountPrice}
                    </span>
                  ) : null}
                </div>
                <div className="w-full my-2 h-[1px] bg-slate-500"></div>
                <div className="mt-2 flex justify-between">
                  <div className="flex items-center w-max">
                    <img
                      className="size-8 rounded-full"
                      src={teacherImage}
                      alt=""
                    />
                    <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                      {formatText(teacherName)}
                    </span>
                  </div>
                  <div className="flex items-center text-slate-600 mt-1">
                    <span className="flex items-center mr-1 text-yellow-500">
                      <Rating
                        initialValue={val.stars / val.num_review || 0}
                        SVGclassName="inline-block"
                        size={16}
                        fillIcon={
                          <MdFavorite className="inline-block" size={16} />
                        }
                        emptyIcon={
                          <MdFavoriteBorder
                            className="inline-block"
                            size={16}
                          />
                        }
                        readonly
                        allowFraction={true}
                      />
                    </span>
                    ({val.num_review})
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
    </>
  )
}

export default BiographyCourse
