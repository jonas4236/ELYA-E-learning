import Container from "@/components/Container"
import FilterCourseCategory from "@/components/EachSections/FilterCourseCategory"
import { useEffect, useState } from "react"
import { IoBook, IoSearch } from "react-icons/io5"
import { FaRegClock } from "react-icons/fa"
import { Link, useParams, useSearchParams } from "react-router-dom"
import { CatePagination } from "@/components/EachSections/CatePaginaton"
import { FaRegBookmark } from "react-icons/fa6"
import axios from "axios"
import { server } from "@/api"
import { CourseProductProps, WishlistProps } from "@/Types"
import { Rating } from "react-simple-star-rating"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import Swal from "sweetalert2"
import { useUserStore } from "@/store/user.store"

const CourseCategory = () => {
  const { params } = useParams() as { params: string }
  const { user, fetchWishlist } = useUserStore()
  const [showFilters, setShowFilters] = useState<boolean>(false)
  const [getData, setGetData] = useState<CourseProductProps[]>([])
  const [dataWishlist, setDataWishlist] = useState<WishlistProps[]>([])

  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get("page") || 1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [rating, setRating] = useState<number>(0)
  const [searchTerm, setSearchTerm] = useState<string>("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const getWishlist = async () => {
    const { data } = await axios.get(
      server.API_GET_WISHLIST.replace(":uid", String(user[0]?.id))
    )
    setDataWishlist(data)
  }

  // console.log("searchParams", searchParams);
  // console.log("page", page);

  useEffect(() => {
    getWishlist()
  }, [])

  const checkExistWishlist = (name: string): boolean => {
    return dataWishlist?.some((val) => val.course_title === name) || false
  }

  const getcourse_productList = async (page = 1) => {
    try {
      const URL = `${server.API_GET_LIST_COURSE_PRODUCT.replace(
        ":uid",
        params
      )}?page=${page}&limit=8`
      const { data } = await axios.get(URL)
      setGetData(data.data)
      setTotalPages(data.totalPages)
      setCurrentPage(data.currentPage)
    } catch (error) {
      console.log("Error fetching paginated courses:", error)
    }
  }

  useEffect(() => {
    getcourse_productList(page)
  }, [params, page])

  function formatText(message: string) {
    if (message.length > 40) {
      return `${message.substring(0, 40)}...`
    } else {
      return message
    }
  }

  // console.log(rating)

  const dataFilters =
    getData?.filter((val) => {
      let newData = true
      if (rating > 0) {
        newData = val.stars / val.num_review >= rating
      } else if (searchTerm) {
        newData = val.name_course
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      } else if (rating > 0 && searchTerm) {
        newData =
          val.stars / val.num_review >= rating &&
          val.name_course.toLowerCase().includes(searchTerm.toLowerCase())
      }

      return newData
    }) || []

  const addToWishlist = async (
    img: string,
    title: string,
    instructor: string,
    price: number
  ) => {
    await axios
      .post(server.API_POST_ADD_WISHLIST, {
        userId: user[0]?.id,
        course_img: img,
        course_title: title,
        course_instructor: instructor,
        course_price: price,
      })
      .then(() => {
        Swal.fire("Successfully", "Added item into wishlish success", "success")
        getWishlist()
        fetchWishlist(String(user[0]?.id))
      })
  }

  return (
    <>
      <div className="bg-[#0e5ddd] bg-blend-darken bg-opacity-100 bg-cover bg-center h-[450px]">
        <div className="h-[450px] flex flex-col justify-center items-center">
          <h1 className="text-white text-[42px]">{params?.toUpperCase()}</h1>
        </div>
      </div>
      <Container>
        <div className="flex justify-between mt-24">
          <div className="">
            <div className="relative">
              <input
                className="py-3 px-4 w-[300px] border-[1px] border-[#0e5ddd] rounded-lg outline-none text-[#0e5ddd]"
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Searching Courses"
              />
              <button>
                <IoSearch className="absolute top-[11px] right-5 text-[28px] text-[#0e5ddd]" />
              </button>
            </div>
          </div>

          <div className="">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex h-full px-4 rounded-lg bg-[#0e5ddd] text-white font-medium border-[1px] border-[#0e5ddd] hover:text-[#0e5ddd] hover:bg-white transition-all duration-150 justify-center items-center"
            >
              View Filters
            </button>
          </div>
        </div>
        <div
          className={`mt-8 ${
            showFilters ? "opacity-100" : "opacity-0"
          } transition-all duration-300`}
        >
          {showFilters && (
            <FilterCourseCategory
              onRateChange={(rate: number) => setRating(rate)}
              selectedRating={rating}
              onSearchChange={(search: string) => setSearchTerm(search)}
            />
          )}
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-4 gap-4">
            {dataFilters &&
              dataFilters.map((val, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#F5F5F5] shadow-sm border-[1px] ScaleImageCourse"
                >
                  <div className="overflow-hidden h-[200px] relative">
                    <img
                      className="w-full hover:scale-110 transition-all h-full duration-200 object-contain ActiveScale"
                      src={`${val.courseImage}`}
                      alt={`${val.slug}`}
                    />
                    {user[0]?.id &&
                    checkExistWishlist(val.name_course) === false ? (
                      <button
                        onClick={() =>
                          addToWishlist(
                            val.courseImage,
                            val.name_course,
                            val.teacher_course.full_name,
                            val.price
                          )
                        }
                      >
                        <FaRegBookmark className="absolute top-5 right-5 text-[28px] rounded-md bg-white p-[6px] hover:text-[#0e5ddd] transition-all duration-150" />
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <span className="flex items-center">
                        <IoBook className="mr-2 text-[#0e5ddd]" />
                        <span className="text-[14px]">
                          {val.lession} Lessions
                        </span>
                      </span>
                      <span className="flex items-center">
                        <FaRegClock className="mr-2 text-[#0e5ddd]" />
                        <span className="text-[14px]">{val.hours} Hours</span>
                      </span>
                    </div>
                  </div>
                  <Link to={`/course/${val.slug}`}>
                    <h1 className="mt-4 text-[20px] h-[60px] font-medium text-gray-700 hover:text-[#0e5ddd] transition-all duration-150">
                      {formatText(val.name_course)}
                    </h1>
                  </Link>
                  <div className="my-4 flex">
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
                  <div className="flex justify-between">
                    <Link
                      className="w-max"
                      to={`/instructor/${val.teacher_course.full_name_slug}`}
                    >
                      <div className="flex items-center w-max">
                        <img
                          className="size-8 rounded-full object-contain"
                          src={`${val.teacher_course.profile_image}`}
                          alt=""
                        />
                        <span className="text-sm ml-2 hover:text-[#0e5ddd] transition-all duration-150">
                          {val.teacher_course.full_name}
                        </span>
                      </div>
                    </Link>
                    <div className="flex items-center text-slate-600">
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
                </div>
              ))}
          </div>
        </div>

        <div className="mt-16">
          <CatePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
      </Container>
    </>
  )
}

export default CourseCategory
