import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoBook } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa6";

const AboutCourse = () => {
  return (
    <>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="m-4 flex bg-[#F5F5F5] rounded-lg ScaleImageCourse">
              <Card>
                <CardContent className="aspect-square p-6">
                  <div className="overflow-hidden relative">
                    <img
                      className="w-full h-[180px] object-cover transition-all duration-200 ActiveScale"
                      src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <FaRegBookmark
                      className="text-[#ffffff] hover:text-sky-500 transition-all duration-150 absolute p-1 bg-white/25 rounded-md top-4 right-4 cursor-pointer"
                      size={25}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="flex items-center">
                      <IoBook className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">3 Lessions</span>
                    </span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">1.2 Hours</span>
                    </span>
                  </div>
                  <Link to={"/"}>
                    <div className="mt-2">
                      <h1 className="text-lg font-medium text-black hover:text-[#0e5ddd] transition-all duration-200">
                        Statistics Data Scince and Business Analysis
                      </h1>
                    </div>
                  </Link>
                  <div className="my-4">
                    <span className="text-normal text-[#0e5ddd] font-bold mr-2">
                      $70.00
                    </span>
                    <span className="line-through text-sm text-slate-400 font-medium mb">
                      $100.00
                    </span>
                  </div>
                  <div className="w-full my-2 h-[1px] bg-slate-500"></div>
                  <div className="mt-2 flex justify-between">
                    <Link className="w-max" to={"/"}>
                      <div className="flex items-center w-max">
                        <img
                          className="size-8 rounded-full"
                          src="https://avatars.githubusercontent.com/u/123473752?v=4"
                          alt=""
                        />
                        <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                          Thanakorn
                        </span>
                      </div>
                    </Link>
                    <div className="flex items-center text-slate-600 mt-1">
                      <span className="flex items-center mr-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                      (5)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="m-4 flex bg-[#F5F5F5] rounded-lg ScaleImageCourse">
              <Card>
                <CardContent className="aspect-square p-6">
                  <div className="overflow-hidden relative">
                    <img
                      className="w-full h-[180px] object-cover transition-all duration-200 ActiveScale"
                      src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <FaRegBookmark
                      className="text-[#ffffff] hover:text-sky-500 transition-all duration-150 absolute p-1 bg-white/25 rounded-md top-4 right-4 cursor-pointer"
                      size={25}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="flex items-center">
                      <IoBook className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">3 Lessions</span>
                    </span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">1.2 Hours</span>
                    </span>
                  </div>
                  <Link to={"/"}>
                    <div className="mt-2">
                      <h1 className="text-lg font-medium text-black hover:text-[#0e5ddd] transition-all duration-200">
                        Statistics Data Scince and Business Analysis
                      </h1>
                    </div>
                  </Link>
                  <div className="my-4">
                    <span className="text-normal text-[#0e5ddd] font-bold mr-2">
                      $70.00
                    </span>
                    <span className="line-through text-sm text-slate-400 font-medium mb">
                      $100.00
                    </span>
                  </div>
                  <div className="w-full my-2 h-[1px] bg-slate-500"></div>
                  <div className="mt-2 flex justify-between">
                    <Link className="w-max" to={"/"}>
                      <div className="flex items-center w-max">
                        <img
                          className="size-8 rounded-full"
                          src="https://avatars.githubusercontent.com/u/123473752?v=4"
                          alt=""
                        />
                        <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                          Thanakorn
                        </span>
                      </div>
                    </Link>
                    <div className="flex items-center text-slate-600 mt-1">
                      <span className="flex items-center mr-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                      (5)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="m-4 flex bg-[#F5F5F5] rounded-lg ScaleImageCourse">
              <Card>
                <CardContent className="aspect-square p-6">
                  <div className="overflow-hidden relative">
                    <img
                      className="w-full h-[180px] object-cover transition-all duration-200 ActiveScale"
                      src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <FaRegBookmark
                      className="text-[#ffffff] hover:text-sky-500 transition-all duration-150 absolute p-1 bg-white/25 rounded-md top-4 right-4 cursor-pointer"
                      size={25}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="flex items-center">
                      <IoBook className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">3 Lessions</span>
                    </span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">1.2 Hours</span>
                    </span>
                  </div>
                  <Link to={"/"}>
                    <div className="mt-2">
                      <h1 className="text-lg font-medium text-black hover:text-[#0e5ddd] transition-all duration-200">
                        Statistics Data Scince and Business Analysis
                      </h1>
                    </div>
                  </Link>
                  <div className="my-4">
                    <span className="text-normal text-[#0e5ddd] font-bold mr-2">
                      $70.00
                    </span>
                    <span className="line-through text-sm text-slate-400 font-medium mb">
                      $100.00
                    </span>
                  </div>
                  <div className="w-full my-2 h-[1px] bg-slate-500"></div>
                  <div className="mt-2 flex justify-between">
                    <Link className="w-max" to={"/"}>
                      <div className="flex items-center w-max">
                        <img
                          className="size-8 rounded-full"
                          src="https://avatars.githubusercontent.com/u/123473752?v=4"
                          alt=""
                        />
                        <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                          Thanakorn
                        </span>
                      </div>
                    </Link>
                    <div className="flex items-center text-slate-600 mt-1">
                      <span className="flex items-center mr-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                      (5)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="m-4 flex bg-[#F5F5F5] rounded-lg ScaleImageCourse">
              <Card>
                <CardContent className="aspect-square p-6">
                  <div className="overflow-hidden relative">
                    <img
                      className="w-full h-[180px] object-cover transition-all duration-200 ActiveScale"
                      src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <FaRegBookmark
                      className="text-[#ffffff] hover:text-sky-500 transition-all duration-150 absolute p-1 bg-white/25 rounded-md top-4 right-4 cursor-pointer"
                      size={25}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="flex items-center">
                      <IoBook className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">3 Lessions</span>
                    </span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">1.2 Hours</span>
                    </span>
                  </div>
                  <Link to={"/"}>
                    <div className="mt-2">
                      <h1 className="text-lg font-medium text-black hover:text-[#0e5ddd] transition-all duration-200">
                        Statistics Data Scince and Business Analysis
                      </h1>
                    </div>
                  </Link>
                  <div className="my-4">
                    <span className="text-normal text-[#0e5ddd] font-bold mr-2">
                      $70.00
                    </span>
                    <span className="line-through text-sm text-slate-400 font-medium mb">
                      $100.00
                    </span>
                  </div>
                  <div className="w-full my-2 h-[1px] bg-slate-500"></div>
                  <div className="mt-2 flex justify-between">
                    <Link className="w-max" to={"/"}>
                      <div className="flex items-center w-max">
                        <img
                          className="size-8 rounded-full"
                          src="https://avatars.githubusercontent.com/u/123473752?v=4"
                          alt=""
                        />
                        <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                          Thanakorn
                        </span>
                      </div>
                    </Link>
                    <div className="flex items-center text-slate-600 mt-1">
                      <span className="flex items-center mr-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                      (5)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="m-4 flex bg-[#F5F5F5] rounded-lg ScaleImageCourse">
              <Card>
                <CardContent className="aspect-square p-6">
                  <div className="overflow-hidden relative">
                    <img
                      className="w-full h-[180px] object-cover transition-all duration-200 ActiveScale"
                      src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <FaRegBookmark
                      className="text-[#ffffff] hover:text-sky-500 transition-all duration-150 absolute p-1 bg-white/25 rounded-md top-4 right-4 cursor-pointer"
                      size={25}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="flex items-center">
                      <IoBook className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">3 Lessions</span>
                    </span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">1.2 Hours</span>
                    </span>
                  </div>
                  <Link to={"/"}>
                    <div className="mt-2">
                      <h1 className="text-lg font-medium text-black hover:text-[#0e5ddd] transition-all duration-200">
                        Statistics Data Scince and Business Analysis
                      </h1>
                    </div>
                  </Link>
                  <div className="my-4">
                    <span className="text-normal text-[#0e5ddd] font-bold mr-2">
                      $70.00
                    </span>
                    <span className="line-through text-sm text-slate-400 font-medium mb">
                      $100.00
                    </span>
                  </div>
                  <div className="w-full my-2 h-[1px] bg-slate-500"></div>
                  <div className="mt-2 flex justify-between">
                    <Link className="w-max" to={"/"}>
                      <div className="flex items-center w-max">
                        <img
                          className="size-8 rounded-full"
                          src="https://avatars.githubusercontent.com/u/123473752?v=4"
                          alt=""
                        />
                        <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                          Thanakorn
                        </span>
                      </div>
                    </Link>
                    <div className="flex items-center text-slate-600 mt-1">
                      <span className="flex items-center mr-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                      (5)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="m-4 flex bg-[#F5F5F5] rounded-lg ScaleImageCourse">
              <Card>
                <CardContent className="aspect-square p-6">
                  <div className="overflow-hidden relative">
                    <img
                      className="w-full h-[180px] object-cover transition-all duration-200 ActiveScale"
                      src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <FaRegBookmark
                      className="text-[#ffffff] hover:text-sky-500 transition-all duration-150 absolute p-1 bg-white/25 rounded-md top-4 right-4 cursor-pointer"
                      size={25}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="flex items-center">
                      <IoBook className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">3 Lessions</span>
                    </span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">1.2 Hours</span>
                    </span>
                  </div>
                  <Link to={"/"}>
                    <div className="mt-2">
                      <h1 className="text-lg font-medium text-black hover:text-[#0e5ddd] transition-all duration-200">
                        Statistics Data Scince and Business Analysis
                      </h1>
                    </div>
                  </Link>
                  <div className="my-4">
                    <span className="text-normal text-[#0e5ddd] font-bold mr-2">
                      $70.00
                    </span>
                    <span className="line-through text-sm text-slate-400 font-medium mb">
                      $100.00
                    </span>
                  </div>
                  <div className="w-full my-2 h-[1px] bg-slate-500"></div>
                  <div className="mt-2 flex justify-between">
                    <Link className="w-max" to={"/"}>
                      <div className="flex items-center w-max">
                        <img
                          className="size-8 rounded-full"
                          src="https://avatars.githubusercontent.com/u/123473752?v=4"
                          alt=""
                        />
                        <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                          Thanakorn
                        </span>
                      </div>
                    </Link>
                    <div className="flex items-center text-slate-600 mt-1">
                      <span className="flex items-center mr-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                      (5)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="m-4 flex bg-[#F5F5F5] rounded-lg ScaleImageCourse">
              <Card>
                <CardContent className="aspect-square p-6">
                  <div className="overflow-hidden relative">
                    <img
                      className="w-full h-[180px] object-cover transition-all duration-200 ActiveScale"
                      src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <FaRegBookmark
                      className="text-[#ffffff] hover:text-sky-500 transition-all duration-150 absolute p-1 bg-white/25 rounded-md top-4 right-4 cursor-pointer"
                      size={25}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="flex items-center">
                      <IoBook className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">3 Lessions</span>
                    </span>
                    <span className="flex items-center">
                      <FaRegClock className="mr-2 text-[#0e5ddd]" />
                      <span className="text-sm">1.2 Hours</span>
                    </span>
                  </div>
                  <Link to={"/"}>
                    <div className="mt-2">
                      <h1 className="text-lg font-medium text-black hover:text-[#0e5ddd] transition-all duration-200">
                        Statistics Data Scince and Business Analysis
                      </h1>
                    </div>
                  </Link>
                  <div className="my-4">
                    <span className="text-normal text-[#0e5ddd] font-bold mr-2">
                      $70.00
                    </span>
                    <span className="line-through text-sm text-slate-400 font-medium mb">
                      $100.00
                    </span>
                  </div>
                  <div className="w-full my-2 h-[1px] bg-slate-500"></div>
                  <div className="mt-2 flex justify-between">
                    <Link className="w-max" to={"/"}>
                      <div className="flex items-center w-max">
                        <img
                          className="size-8 rounded-full"
                          src="https://avatars.githubusercontent.com/u/123473752?v=4"
                          alt=""
                        />
                        <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                          Thanakorn
                        </span>
                      </div>
                    </Link>
                    <div className="flex items-center text-slate-600 mt-1">
                      <span className="flex items-center mr-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                      (5)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default AboutCourse;