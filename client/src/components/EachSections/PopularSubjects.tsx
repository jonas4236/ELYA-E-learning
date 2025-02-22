import { PoppularSubjectProps } from "@/Types"
import Container from "../Container"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { server } from "@/api"

const PopularSubjects = () => {
  const [dataPopularSubjects, setDataPopularSubjects] = useState<
    PoppularSubjectProps[]
  >([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${server.API_GET_POPULAR_SUBJECT}`)
      setDataPopularSubjects(data)
    } catch (error) {
      console.log("error fetch datapoplarsubject", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Container>
        <div className="mb-16">
          <div className="">
            <span className="p-1 px-2 rounded-full bg-[#0e5ddd] text-white text-sm">
              Course List
            </span>
            <div className="flex justify-between mt-4">
              <div className="">
                <h1 className="text-[36px] font-semibold text-gray-600">
                  Popular{" "}
                  <span className="underline decoration-[#0e5ddd] decoration-4">
                    Subjects
                  </span>
                </h1>
              </div>
              <div className="w-[420px] ">
                <span className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit unde, officia eius aliquam neque facere!.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-4 gap-4 w-auto">
              {dataPopularSubjects.map((val, index) => (
                <Link to={`/category-course/${val.category_slug}`} key={index}>
                  <div className="p-4 w-auto h-[216px] flex flex-col items-center justify-center rounded-lg bg-slate-100 hover:-translate-y-2 transition-all duration-200 hover:bg-[#0e5ddd] LinkText">
                    <div>
                      <img
                        className="size-16 object-contain"
                        src={val.category_icon}
                        alt={val.category_slug}
                      />
                      {/* <FaBook className="text-[60px] text-[#0e5ddd] iconCourse" /> */}
                    </div>
                    <div className="mt-3">
                      <span className="text-[22px] iconCourse">
                        {val.category_name}
                      </span>
                      {/* <p className="text-normal text-slate-500 iconCourse">
                      03 Courses
                    </p> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default PopularSubjects
