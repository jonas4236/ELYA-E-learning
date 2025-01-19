import Container from "@/components/Container";
import { Link, useParams } from "react-router-dom";

// Vidstack Player (ReactJS)
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import { VideoLayout } from "@/components/EachSections/VideoLayout/VideoLayout";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

// react icons
import { IoMdBookmarks } from "react-icons/io";
import { FaRegStar, FaStar } from "react-icons/fa6";
import ToggleCourseAndReview from "@/components/EachSections/ToggleTabs/ToggleCourseAndReview";
import { IoSchoolOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import Requirements from "@/components/EachSections/Requirements";
import InstructorCourse from "@/components/EachSections/InstructorCourse";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "@/api";
import {
  CourseInfoProps,
  CourseProductProps,
  CourseSectionAndVideo,
  EnrollmentProps,
} from "@/Types";
import { Rating } from "react-simple-star-rating";
import { useUserStore } from "@/store/user.store";
import Swal from "sweetalert2";

const CourseDetails = () => {
  const { course } = useParams() as { course: string };
  const [courseInfo, setCourseInfo] = useState<CourseInfoProps[]>([]);
  const [courseProduct, setCourseProduct] = useState<CourseProductProps[]>([]);
  const [courseEnroll, setCourseEnroll] = useState<EnrollmentProps[]>([]);
  const [courseSecAndVid, setCourseSecAndVid] = useState<
    CourseSectionAndVideo[]
  >([]);
  const { user, fetchCart, cartData } = useUserStore();

  //#region URL FOR FETCH
  const URL_COURSE_INFO = `${server.API_GET_COURSE_INFO.replace(
    ":name",
    course,
  )}`;
  const URL_COURSE_PRODUCT_UID = `${server.API_GET_COURSE_PRODUCT_UID.replace(
    ":param",
    course,
  )}`;
  const URL_COUNT_ENROLLMENT = `${server.API_GET_COUNT_ENROLLMENT.replace(
    ":uid",
    String(user[0]?.id),
  ).replace(":c_slug", course)}`;

  const URL_INTRODUCE_SECTION_AND_VIDEO = `${server.API_GET_INTRODUCE_SECTION_AND_VIDEO.replace(
    ":name",
    course,
  )}`;
  //#endregion URL FOR FETCH
  const fetchData = async () => {
    try {
      const [c_info, c_prod, c_sec_vid] = await axios.all([
        axios.get(URL_COURSE_INFO),
        axios.get(URL_COURSE_PRODUCT_UID),
        axios.get(URL_INTRODUCE_SECTION_AND_VIDEO),
      ]);

      setCourseInfo(c_info.data);
      setCourseProduct(c_prod.data);
      setCourseSecAndVid(c_sec_vid.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchEnroll = async () => {
    try {
      const { data } = await axios.get(URL_COUNT_ENROLLMENT);
      setCourseEnroll(Array(data) || []);
    } catch (error) {
      console.log(
        "error cannot fetching enrollment in coursedetails: ",
        (error as Error).message,
      );
    }
  };

  useEffect(() => {
    fetchData();
    if (user && user[0]?.id) {
      fetchEnroll();
    }
  }, [course, user]);

  const courseLength = courseSecAndVid.reduce((acc, val) => {
    return acc + val.course_video.length;
  }, 0);

  useEffect(() => {
    if (user[0]?.id) {
      fetchCart(user[0]?.id.toString());
    }
  }, [user]);

  function getDateFormat(newDate: string) {
    const date = new Date(newDate);
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  const handleAddToCart = async () => {
    try {
      await axios
        .post(server.API_POST_ADD_TO_CART, {
          product_id: courseProduct[0]?.id,
          product_img: courseProduct[0]?.courseImage,
          product_name: courseProduct[0]?.name_course,
          product_length: courseLength ? String(courseLength) : "0",
          instructor: courseProduct[0]?.teacher_course.full_name,
          price: courseProduct[0]?.price,
          Subtotal: courseProduct[0]?.price,
          userId: user[0]?.id,
        })
        .then(() => {
          Swal.fire("Successfully!", "Add to cart success", "success");
        });
      fetchCart(user[0]?.id.toString());
    } catch (error) {
      console.log(
        `error cannot handleaAddToCart because : ${(error as Error).message}`,
      );
    }
  };

  const ExistedInCart = cartData?.filter(
    (val) => courseProduct[0]?.id === val.product_id,
  );

  return (
    <>
      <div className="h-auto">
        <div className="bg-[#0e5ddd] bg-blend-darken bg-opacity-100 bg-cover bg-center h-[450px]">
          <Container>
            <div className="h-[450px] flex flex-col justify-center items-center">
              <h1 className="text-white text-[42px]">
                {courseProduct[0]?.name_course}
              </h1>
              <p className="text-white text-[18px] mt-4">
                Home <span className="mr-2">&gt;</span>
                {courseProduct[0]?.name_course}
              </p>
            </div>
          </Container>
        </div>

        <Container>
          <div className="flex gap-24 mt-24">
            <div className="flex-[2]">
              <div className="h-[470px]">
                <MediaPlayer
                  className=" text-white rounded-md h-[470px]"
                  src={`${courseInfo[0]?.courseIntroduce || ""}`}
                >
                  <MediaProvider>
                    <Poster
                      className="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover"
                      src={`${courseProduct[0]?.courseImage}`}
                      alt={"courseImage"}
                    />
                  </MediaProvider>
                  <VideoLayout />
                </MediaPlayer>
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <div className="">
                    {courseInfo[0] &&
                      courseInfo[0].tag.map((val, idx) => (
                        <span
                          key={idx}
                          className="py-2 mr-3 px-4 bg-[#0e5ddd] text-white font-medium rounded-md"
                        >
                          {val.tag_name}
                        </span>
                      ))}
                  </div>
                  <div className="">
                    <span className="text-gray-600">
                      Uploaded:
                      <span className="ml-1 text-[#0e5ddd] font-medium">
                        {getDateFormat(courseInfo[0]?.uploadedAt)}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="my-8">
                  <h1 className="text-[30px] font-medium text-[#0e5ddd]">
                    {courseProduct[0]?.name_course}
                  </h1>
                </div>
                <div className="my-6 flex gap-4 items-center">
                  <span className="text-[#0e5ddd] font-medium text-xl">
                    ${courseProduct[0]?.price}
                  </span>
                  <div className="">
                    <span className="flex items-center text-slate-950">
                      <IoMdBookmarks className="mr-2 text-xl text-[#0e5ddd]" />
                      {courseProduct[0]?.lession} Lession
                    </span>
                  </div>
                  <div className="flex text-yellow-400 items-center">
                    <Rating
                      initialValue={
                        courseProduct[0]?.stars /
                        courseProduct[0]?.num_review || 0
                      }
                      SVGclassName="inline-block"
                      size={20}
                      fillIcon={<FaStar size={20} className="inline-block" />}
                      emptyIcon={
                        <FaRegStar size={20} className="inline-block" />
                      }
                      readonly
                      allowFraction={true}
                    />
                    <span className="ml-2 text-[#0e5ddd]">
                      ({courseProduct[0]?.num_review})
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <ToggleCourseAndReview
                  userData={user}
                  courseId={courseProduct[0]?.id}
                  teacherId={courseProduct[0]?.teacherId}
                  video={courseSecAndVid}
                  isEnroll={courseEnroll}
                  data={courseInfo[0] && courseInfo[0]}
                  review={courseProduct[0]?.review}
                />
              </div>
            </div>
            <div className="flex-[1]">
              <div className="p-8 border-[1px] bg-[#FCFCFD]">
                <div className="flex w-max">
                  <span className="mr-2 text-[24px] text-[#0e5ddd] font-medium">
                    ${courseProduct[0]?.price}
                  </span>
                  <span className="line-through text-gray-400">
                    {!courseProduct[0]?.discountPrice
                      ? ""
                      : `${courseProduct[0]?.discountPrice}`}
                  </span>
                </div>
                <div className="w-full flex justify-center mt-4">
                  {courseEnroll.length > 0 && courseEnroll[0] ? (
                    <Link
                      to={"/dashboard/enrolledcourses"}
                      className="px-8 py-3 w-full bg-[#859F3D] rounded-md text-white text-center font-medium border-[1px] border-[#859F3D] hover:bg-[#F6FCDF] hover:text-[#859F3D] transition-all duration-300"
                    >
                      ALEADY OWNED
                    </Link>
                  ) : ExistedInCart.length == 0 ? (
                    <button
                      onClick={() => {
                        if (user[0]?.id) {
                          handleAddToCart();
                        } else {
                          window.location.href = "/login";
                        }
                      }}
                      className="px-8 py-3 w-full bg-[#0e5ddd] rounded-md text-white font-medium border-[1px] border-[#0e5ddd] hover:bg-[#FCFCFD] hover:text-[#0e5ddd] transition-all duration-300"
                    >
                      Add to cart
                    </button>
                  ) : (
                    <Link
                      to={"/cart"}
                      className="px-8 py-3 text-center w-full bg-[#FCFCFD] rounded-md text-[#0e5ddd] font-medium border-[1px] border-[#0e5ddd] hover:bg-[#0e5ddd] hover:text-white transition-all duration-300"
                    >
                      Go To Cart
                    </Link>
                  )}
                </div>
              </div>

              <div className="p-8 border border-t-0 border-r-1 border-b-1 border-l-1">
                <div className="">
                  <ul>
                    <li className="py-4 border-b-[1px] first:border-t-[1px] flex items-center">
                      <IoSchoolOutline className="mr-2 text-xl" />
                      {courseEnroll?.length || 0} Total Enrolled
                    </li>
                    <li className="py-4 border-b-[1px] flex items-center">
                      <FaRegClock className="mr-2 text-xl" />
                      {courseInfo[0]?.hours} Hours On Demand
                    </li>
                    <li className="py-4 border-b-[1px] flex items-center">
                      <AiOutlineUpload className="mr-2 text-xl" /> Uploaded on{" "}
                      {getDateFormat(courseInfo[0]?.uploadedAt)}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-8 border-[1px] bg-[#FCFCFD]">
                <span className="border-l-[3px] border-[#0e5ddd] pl-2 text-[22px] font-medium">
                  Requirements
                </span>
                <Requirements data={courseInfo[0]?.requirement} />
              </div>
              <div className="mt-6 p-8 border-[1px] shadow-sm">
                <InstructorCourse data={courseProduct[0]?.teacher_course} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CourseDetails;
