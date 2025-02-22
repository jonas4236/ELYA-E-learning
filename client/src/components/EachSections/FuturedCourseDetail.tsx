import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { IoBook } from "react-icons/io5"
import { FaRegClock } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FuturedCourseProps } from "@/Types"
import { Rating } from "react-simple-star-rating"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"

export function FuturedCourseDetail({ data }: { data: FuturedCourseProps[] }) {
  const formatText = (message: string) => {
    if (message.length > 10) {
      return `${message.substring(0, 10)}...`
    } else {
      return message
    }
  }

  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {data?.map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="m-4 flex bg-[#F5F5F5] rounded-lg ScaleImageCourse">
              <Card>
                <CardContent className="aspect-square p-6">
                  <div className="overflow-hidden relative">
                    <img
                      className="w-full h-[180px] object-contain transition-all duration-200 ActiveScale"
                      src={item.courseImage}
                      alt={`${item.slug}`}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="flex items-center">
                      <IoBook className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">{item.lession} Lessions</span>
                    </span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">{item.hours} Hours</span>
                    </span>
                  </div>
                  <Link to={`/course/${item.slug}`}>
                    <div className="mt-2">
                      <h1 className="text-lg h-[56px] font-medium text-black hover:text-[#0e5ddd] transition-all duration-200">
                        {item.name_course}
                      </h1>
                    </div>
                  </Link>
                  <div className="my-4">
                    <span className="text-normal text-[#0e5ddd] font-bold mr-2">
                      ${item.price}
                    </span>
                    {item.discountPrice && item.discountPrice > 0 ? (
                      <span className="text-sm line-through text-gray-400">
                        ${item.discountPrice}
                      </span>
                    ) : null}
                  </div>
                  <div className="w-full my-2 h-[1px] bg-slate-500"></div>
                  <div className="mt-2 flex justify-between">
                    <Link
                      className="w-max"
                      to={`/instructor/${item.teacher_course.full_name_slug}`}
                    >
                      <div className="flex items-center w-max">
                        <img
                          className="size-8 rounded-full object-contain"
                          src={`${item.teacher_course.profile_image}`}
                          alt=""
                        />
                        <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                          {formatText(item.teacher_course.full_name)}
                        </span>
                      </div>
                    </Link>
                    <div className="flex items-center text-slate-600">
                      <span className="flex items-center mr-1 text-yellow-500">
                        <Rating
                          initialValue={item.stars / item.num_review || 0}
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
                      ({item.num_review})
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
