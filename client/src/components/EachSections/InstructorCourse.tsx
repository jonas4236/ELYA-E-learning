import { TeacherCourseProps } from "@/Types";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Instructor = ({ data }: { data: TeacherCourseProps }) => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center">
        <img
          className="size-28 rounded-full object-cover"
          src={`${data?.profile_image}`}
          alt=""
        />
        <Link to={`/instructor/${data?.full_name_slug}`} className="text-xl hover:text-[#0e5ddd] transition-all duration-200">
          {data?.full_name}
        </Link>
        <p className="text-sm text-gray-500">Instructor</p>
        <p className="text-center">
          {data?.bio}
        </p>
        <div className="flex gap-4">
          <button>
            <FaFacebookF className="text-[36px] rounded-md hover:bg-[#0e5ddd] hover:text-white transition-all duration-200 p-2" />
          </button>
          <button>
            <FaYoutube className="text-[36px] rounded-md hover:bg-[#0e5ddd] hover:text-white transition-all duration-200 p-2" />
          </button>
          <button>
            <FaInstagram className="text-[36px] rounded-md hover:bg-[#0e5ddd] hover:text-white transition-all duration-200 p-2" />
          </button>
          <button>
            <FaXTwitter className="text-[36px] rounded-md hover:bg-[#0e5ddd] hover:text-white transition-all duration-200 p-2" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Instructor;