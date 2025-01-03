// react icons
import { RiDashboard2Line } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { MdSchool } from "react-icons/md";
import { IoMdBookmark } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FC } from "react";
import { useUserStore } from "@/store/user.store";
import Cookies from "js-cookie";

interface MenuDashboardProps {
  ActiveOn: string | undefined;
}

const MenuDashboard: FC<MenuDashboardProps> = ({ ActiveOn }) => {
  const { clearUser } = useUserStore();
  return (
    <>
      <Link
        to={"/dashboard"}
        className={`py-3 mt-4 ${
          ActiveOn === "/dashboard" ? "bg-[#0e5ddd] text-white" : "text-black"
        } rounded-l-[6px]  hover:bg-[#0e5ddd] hover:text-white flex transition-all duration-200 items-center justify-start pl-4`}
      >
        <RiDashboard2Line className="mr-2 text-xl" />
        Dashboard
      </Link>
      <Link
        to={"/dashboard/myprofile"}
        className={`py-3 ${
          ActiveOn === "/dashboard/myprofile"
            ? "bg-[#0e5ddd] text-white"
            : "text-black"
        } rounded-l-[6px] hover:bg-[#0e5ddd] hover:text-white flex transition-all duration-200 items-center justify-start pl-4`}
      >
        <IoPerson className="mr-2 text-xl" />
        My Profile
      </Link>
      <Link
        to={"/dashboard/enrolledcourses"}
        className={`py-3 ${
          ActiveOn === "/dashboard/enrolledcourses" ||
          ActiveOn === "/dashboard/enrolledcourses/activecourses" ||
          ActiveOn === "/dashboard/enrolledcourses/completedcourses"
            ? "bg-[#0e5ddd] text-white"
            : "text-black"
        } rounded-l-[6px] hover:bg-[#0e5ddd] hover:text-white flex transition-all duration-200 items-center justify-start pl-4`}
      >
        <MdSchool className="mr-2 text-xl" />
        Enrolled Courses
      </Link>
      <Link
        to={"/dashboard/wishlist"}
        className={`py-3 ${
          ActiveOn === "/dashboard/wishlist"
            ? "bg-[#0e5ddd] text-white"
            : "text-black"
        } rounded-l-[6px] hover:bg-[#0e5ddd] hover:text-white flex transition-all duration-200 items-center justify-start pl-4`}
      >
        <IoMdBookmark className="mr-2 text-xl" />
        Wishlist
      </Link>
      <div className="h-[1px] bg-[#CCC]"></div>
      <Link
        to={"/dashboard/settings"}
        className={`py-3 ${
          ActiveOn === "/dashboard/settings" ||
          ActiveOn === "/dashboard/settings/password"
            ? "bg-[#0e5ddd] text-white"
            : "text-black"
        } rounded-l-[6px] hover:bg-[#0e5ddd] hover:text-white flex transition-all duration-200 items-center justify-start pl-4`}
      >
        <IoMdSettings className="mr-2 text-xl" />
        Settings
      </Link>
      <button
        onClick={() => {
          clearUser();
          Cookies.remove("access_token");
          window.location.href = "/login";
        }}
        className="py-3 mb-4 text-black rounded-l-[6px] hover:bg-[#0e5ddd] hover:text-white flex transition-all duration-200 items-center justify-start pl-4"
      >
        <TbLogout className="mr-2 text-xl" />
        Logout
      </button>
    </>
  );
};

export default MenuDashboard;
