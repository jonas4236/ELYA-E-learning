import Container from "@/components/Container";
import LessonsCourse from "@/components/EachSections/LessonsCourse";
import { VideoLayout } from "@/components/EachSections/VideoLayout/VideoLayout";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "@/api";
import { CheckCourseProps, DataCourseProp } from "@/Types";
import { useUserStore } from "@/store/user.store";
import Swal from "sweetalert2";

const Learn = () => {
  const [toggleMovieScreen, setToggleMovieScreen] = useState<boolean>(false);
  const { course } = useParams<{ course: string }>();
  const { user } = useUserStore();
  const [dataCourse, setDataCourse] = useState<DataCourseProp[]>([]);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>("");
  const [courseName, SetCourseName] = useState<string>("");
  const [CheckCompleteCourse, SetCheckCompleteCourse] = useState<
    CheckCourseProps[]
  >([]);

  function formatCourseName(courseName: string) {
    return courseName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const fetchSectionAndVid = async () => {
    if (course) {
      try {
        const { data } = await axios.get(
          server.API_GET_SECTIONVID.replace(":name", course)
        );
        setDataCourse(data);
      } catch (error) {
        console.log(`error cannot fetch section and vid because : ${error}`);
      }
    }
  };

  const fetchCheckCourse = async () => {
    if (course && user[0]?.id) {
      try {
        const { data } = await axios.get(
          server.API_GET_CHECK_COURSE_VIDEO.replace(
            ":uid",
            user[0]?.id.toString()
          ).replace(":sid", course)
        );
        SetCheckCompleteCourse(data);
      } catch (error) {
        console.log(`error cannot fetchcheckcourse becaise : ${error}`);
      }
    }
  };

  // useEffect(() => {
  //   if (!user || user.length === 0) {
  //     navigate("/login");
  //   }
  // }, [user]);

  useEffect(() => {
    fetchSectionAndVid();
    fetchCheckCourse();
  }, [course, user]);

  // console.log("user:", CheckCompleteCourse);
  // console.log("user:", user[0]?.id);

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
  };

  const handleChangeVideoName = (name: string) => {
    SetCourseName(name);
  };

  const CourseLength = dataCourse.reduce((acc, val) => {
    return acc + val.course_video.length;
  }, 0);

  const CompleteLessons = CheckCompleteCourse?.length || 0;

  const percentage = ((CompleteLessons / CourseLength) * 100).toFixed(0);

  const handleCompleteLesson = async (sectionID: number, videoID: number) => {
    try {
      await axios
        .post(server.API_POST_MARK_COMPLETE_COURSE, {
          SectionId: sectionID,
          videoId: videoID,
          isComplete: "TRUE",
          userId: user[0]?.id,
          slug: course,
        })
        .then(() => {
          Swal.fire(
            "Success",
            "saved complete lessons successfully!",
            "success"
          ).then(() => {
            window.location.reload();
          });
        });
    } catch (error) {
      console.log(
        `error cannot handlecompletelesson because : ${
          (error as Error).message
        }`
      );
    }
  };

  return (
    <>
      <div className="h-auto">
        <div className="bg-[#0e5ddd] bg-blend-darken bg-opacity-100 bg-cover bg-center h-[450px]">
          <Container>
            <div className="h-[450px] flex flex-col justify-center items-center">
              <h1 className="text-white text-[42px]">
                {formatCourseName(course as string)}
              </h1>
              <p className="text-white text-[18px] mt-4">
                Lessons <span className="mr-2">&gt;</span>
                {formatCourseName(course as string)}
              </p>
            </div>
          </Container>
        </div>

        <Container>
          <div className="mt-24">
            <div className="flex gap-6">
              <div className="flex-[2]">
                <Container>
                  <div className="p-4 text-xl flex justify-between items-center bg-[#0e5ddd] text-white">
                    <div className="flex items-center">
                      <IoIosArrowDown
                        onClick={() => setToggleMovieScreen(!toggleMovieScreen)}
                        className={`${
                          toggleMovieScreen ? "rotate-90" : "-rotate-90"
                        } cursor-pointer transition-all duration-150 text-[28px] mr-2 bg-white text-[#0e5ddd] rounded-full p-1`}
                      />
                      <h1
                        className={`text-[16px] ${
                          toggleMovieScreen ? "max-w-[550px]" : "w-[193px]"
                        }`}
                      >
                        {courseName ||
                          dataCourse[0]?.course_video[0]?.video_title}
                      </h1>
                    </div>
                    <div className="">
                      <span className="text-[16px]">
                        Your Progress: {CheckCompleteCourse?.length} of{" "}
                        {CourseLength} ({percentage}%)
                      </span>
                    </div>
                  </div>

                  <div>
                    <MediaPlayer
                      className={`text-white ${
                        toggleMovieScreen ? "h-[788px]" : "h-[500px]"
                      }`}
                      src={
                        selectedVideoUrl ||
                        dataCourse[0]?.course_video[0].video_url
                      }
                    >
                      <MediaProvider />
                      <VideoLayout />
                    </MediaPlayer>
                    <div className="flex flex-row justify-center gap-4 mt-6">
                      <button className="bg-[#0e5ddd] flex items-center gap-2 text-white py-2 px-4 rounded-md hover:text-[#0e5ddd] hover:bg-white border-[1px] border-[#0e5ddd] transition-all duration-200">
                        <FaLongArrowAltLeft className="text-xl" />
                        Previous
                      </button>
                      <button className="bg-[#0e5ddd] flex items-center gap-2 text-white py-2 px-4 rounded-md hover:text-[#0e5ddd] hover:bg-white border-[1px] border-[#0e5ddd] transition-all duration-200">
                        Next
                        <FaLongArrowAltRight className="text-xl" />
                      </button>
                    </div>
                  </div>
                </Container>
              </div>
              <div className={`flex-[1] ${toggleMovieScreen ? "hidden" : ""}`}>
                <h1 className="p-4 flex justify-center bg-[#0e5ddd] text-white mb-4 text-xl">
                  Lessons
                </h1>
                <LessonsCourse
                  data={dataCourse}
                  onVideoClick={handleVideoClick}
                  onNameClick={handleChangeVideoName}
                  onCompleteLesson={handleCompleteLesson}
                  dataCheck={CheckCompleteCourse}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Learn;
