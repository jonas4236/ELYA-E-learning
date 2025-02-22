import { server } from "@/api"
import Container from "@/components/Container"
import BiographyCourse from "@/components/EachSections/BiographyCourse"
import { InstructorCourseProps } from "@/Types"
import axios from "axios"
import { useEffect, useState } from "react"
import { IoIosStar } from "react-icons/io"
import { useParams } from "react-router-dom"

const Instructor = () => {
  const { name } = useParams<{ name: string }>()
  const [dataInstructor, setDataInstructor] = useState<InstructorCourseProps[]>(
    []
  )

  // console.log(name)

  const fetchData = async () => {
    try {
      const { data } = await axios.post(
        `${server.API_GET_TEACHER_COURSE_RELATE}`,
        {
          slug: name,
        }
      )

      setDataInstructor(data)
    } catch (error) {
      console.log("error cannot fetch instructor data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="h-auto">
        <div className="bg-[#0e5ddd] bg-blend-darken bg-opacity-100 bg-cover bg-center h-[450px]">
          <Container>
            <div className="h-[450px] flex flex-col justify-center items-center">
              <h1 className="text-white text-[42px]">
                {dataInstructor[0]?.full_name}
              </h1>
              <p className="text-white text-[18px] mt-4">
                Home <span className="mr-2">&gt;</span>Instructor
              </p>
            </div>
          </Container>
        </div>

        <Container>
          <div className="my-16 h-0">
            <div className="h-[0px] rounded-lg bg-cover">
              <img
                className="h-[400px] w-full rounded-lg object-cover relative"
                src={dataInstructor[0]?.background_image}
                alt={dataInstructor[0]?.full_name}
              />
            </div>

            <div className="relative top-[240px] left-[360px] w-max text-white font-medium ">
              <h1 className="text-[36px]">{dataInstructor[0]?.full_name}</h1>
              <p className="text-[24px]">
                {dataInstructor[0]?.course_product.length} Courses on{" "}
                <span className="text-[#0e5ddd] font-semibold">ELYA</span>
              </p>
            </div>
            {/* <span className="relative text-[24px] top-[240px] left-[360px] w-max text-yellow-400 font-medium flex items-center">
              <IoIosStar className="mr-2" />
              <IoIosStar className="mr-2" />
              <IoIosStar className="mr-2" />
              <IoIosStar className="mr-2" />
              <IoIosStar className="mr-2" />
              5/5
            </span> */}
          </div>

          <div className="relative left-16 top-48 w-max">
            <img
              className="size-64 p-2 bg-white object-cover rounded-full"
              src={dataInstructor[0]?.profile_image}
              alt={dataInstructor[0]?.full_name}
            />
          </div>
          <div className="mt-[120px] ml-[360px]">
            <span className="text-[24px] text-[#0e5ddd] font-medium">
              Biography
            </span>
            <p>{dataInstructor[0]?.bio}</p>
            <div className="mt-6">
              <h1 className="text-xl text-[#0e5ddd] font-medium">Courses</h1>
              <div className="mt-6">
                <div className="grid grid-cols-3">
                  <BiographyCourse
                    data={dataInstructor[0]?.course_product}
                    teacherImage={dataInstructor[0]?.profile_image}
                    teacherName={dataInstructor[0]?.full_name}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Instructor
