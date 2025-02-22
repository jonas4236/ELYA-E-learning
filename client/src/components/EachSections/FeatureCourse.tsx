import { FuturedCourseProps } from "@/Types"
import Container from "../Container"
import { FuturedCourseDetail } from "./FuturedCourseDetail"
import { useEffect, useState } from "react"
import axios from "axios"
import { server } from "@/api"

const FeatureCourse = () => {
  const [dataFeatured, setDataFeatured] = useState<FuturedCourseProps[]>([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${server.API_GET_FUTURED}`)
      setDataFeatured(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Container>
        <div className="w-full mt-16">
          <h1 className="text-[42px] font-medium mb-4 text-gray-600">
            <span className="underline decoration-[#0e5ddd] decoration-3">
              Futured
            </span>{" "}
            Course
          </h1>
          <FuturedCourseDetail data={dataFeatured} />
        </div>
      </Container>
    </>
  )
}

export default FeatureCourse
