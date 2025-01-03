import { server } from "@/api";
import { CheckCourseProps, DataCourseProp } from "@/Types";
import axios from "axios";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const LessonsCourse = ({
  data,
  onVideoClick,
  onNameClick,
  dataCheck,
  onCompleteLesson,
  currentProgress,
  courseLength,
  userId,
  slugCourse,
}: {
  data: DataCourseProp[];
  onVideoClick: (videoUrl: string) => void;
  onNameClick: (name: string) => void;
  onCompleteLesson: (sectionid: number, videoid: number) => void;
  dataCheck: CheckCourseProps[];
  currentProgress: number;
  courseLength: number;
  userId: number;
  slugCourse: string;
}) => {
  const [durations, setDurations] = useState<number[][]>([]);
  const [completedLocally, setCompletedLocally] = useState<{
    [key: number]: boolean;
  }>({});

  const handleLoadedMetadata = (
    sectionIndex: number,
    videoIndex: number,
    duration: number
  ) => {
    setDurations((prev) => {
      const updated = [...prev];
      if (!updated[sectionIndex]) {
        updated[sectionIndex] = [];
      }
      updated[sectionIndex][videoIndex] = duration;
      return updated;
    });
  };

  const updateEnrollStatus = async (uid: number, slug: string) => {
    try {
      await axios.patch(server.API_PATCH_ENROLLCOURSE_STATUS, {
        uid: uid,
        slug: slug,
      });
    } catch (error) {
      console.warn(
        "cannot update status enrollcourse: ",
        (error as Error).message
      );
    }
  };

  const updateProgress = async (uid: number, slug: string, _amount: number) => {
    try {
      await axios.patch(server.API_PATCH_PROGRESS_UPDATE, {
        uid: uid,
        slug: slug,
        amount: _amount,
      });
    } catch (error) {
      console.warn(
        "cannot update status enrollcourse: ",
        (error as Error).message
      );
    }
  };

  const handleCompleteClick = (sectionId: number, videoId: number) => {
    setCompletedLocally((prev) => ({
      ...prev,
      [videoId]: true,
    })),
      onCompleteLesson(sectionId, videoId);
  };

  return (
    <div className="h-auto">
      {data &&
        data.map((section, sectionIdx) => {
          // Filter the dataCheck for only the videos in the current section
          const completedVideos = dataCheck.filter(
            (check) =>
              check.SectionId === section.id && check.isComplete === "TRUE"
          );

          return (
            <div key={sectionIdx} className="mb-4">
              <details className="group p-4 text-normal rounded-md">
                <summary className="flex cursor-pointer flex-row border-b-[1px] pb-6 items-center justify-between font-semibold text-gray-800">
                  {section.section_name}
                  <div className="flex gap-2">
                    <span className="text-normal font-normal">
                      {completedVideos.length} / {section.course_video.length}
                    </span>
                    <IoIosArrowDown className="size-6 rotate-0 transition-all duration-200 text-[#0e5ddd] group-open:rotate-180" />
                  </div>
                </summary>

                {section.course_video.map((video, videoIdx) => (
                  <div
                    key={videoIdx}
                    className="text-gray-500 mt-4 flex justify-between"
                  >
                    <Link to="#" onClick={() => onVideoClick(video.video_url)}>
                      <div
                        className="flex items-center"
                        onClick={() => onNameClick(video.video_title)}
                      >
                        <span className="text-normal">{video.video_title}</span>
                      </div>
                    </Link>

                    <div className="flex items-center relative">
                      <video
                        onLoadedMetadata={(e) =>
                          handleLoadedMetadata(
                            sectionIdx,
                            videoIdx,
                            e.currentTarget.duration
                          )
                        }
                        src={video.video_url}
                        className="hidden"
                      ></video>
                      <span className="text-normal">
                        {durations[sectionIdx] &&
                        durations[sectionIdx][videoIdx]
                          ? `${Math.floor(
                              durations[sectionIdx][videoIdx] / 60
                            )}:${String(
                              Math.floor(durations[sectionIdx][videoIdx] % 60)
                            ).padStart(2, "0")}`
                          : "Loading..."}
                      </span>

                      {dataCheck.some((val) => val.videoId === video.id) ? (
                        <>
                          <input
                            type="checkbox"
                            className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-not-allowed size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                            disabled
                            readOnly
                            checked
                          />
                          <FaCheck className="absolute peer-checked:block right-1 bottom-[4px] cursor-not-allowed text-white size-4 mt-1 hidden" />
                        </>
                      ) : (
                        <>
                          <input
                            type="checkbox"
                            onClick={() => {
                              if (currentProgress + 1 < courseLength) {
                                updateProgress(userId, slugCourse, currentProgress + 1);
                                handleCompleteClick(section.id, video.id);
                              } else {
                                updateEnrollStatus(userId, slugCourse);
                                updateProgress(userId, slugCourse, currentProgress + 1);
                                handleCompleteClick(section.id, video.id);
                              }
                            }}
                            className="ml-2 text-xl peer shrink-0 appearance-none border-[1px] rounded-sm border-gray-500 cursor-pointer size-6 bg-white checked:bg-[#0e5ddd] checked:border-[#0e5ddd] accent-[#0e5ddd] checked:text-white checked:border-0"
                          />
                          {completedLocally[video.id] && (
                            <FaCheck className="absolute right-1 bottom-[4px] text-white size-4 mt-1 block" />
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </details>
            </div>
          );
        })}
    </div>
  );
};

export default LessonsCourse;