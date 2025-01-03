import { RxDashboard } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { IoBookmark } from "react-icons/io5";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { GetUserDataProps } from "@/Types";
import BG_BLUE from "../../../public/BG-BLUE.png";

interface SubMenuProfileSettingsProps {
  user: GetUserDataProps[];
  clearUser: () => void;
}

const SubMenuProfileSettings = ({
  user,
  clearUser,
}: SubMenuProfileSettingsProps) => {
  return (
    <div className="absolute">
      <div className="absolute min-w-[320px] top-6 text-black flex flex-col border-[1px] -right-[70px] bg-white z-50">
        <div className="w-full shadow-md flex flex-col">
          <div className="flex p-3 items-center w-full gap-4">
            {user?.length < 0 || !user[0]?.profile_img ? (
              <>
                <button className="relative transition-all duration-200">
                  <img
                    className="size-16 rounded-full object-cover"
                    src={BG_BLUE as string}
                    alt="GUEST LOGO"
                  />
                  <span className="absolute inset-0 flex justify-center items-center text-white text-[12px]">
                    {`${user[0]?.first_name.split(
                      "",
                      1
                    )}${user[0]?.last_name.split("", 1)}`}
                  </span>
                </button>
              </>
            ) : (
              <>
                <button className="relative transition-all duration-200">
                  <img
                    className="size-16 rounded-full transition-all object-cover duration-200"
                    src={`${user[0]?.profile_img}`}
                    alt=""
                  />
                </button>
              </>
            )}
            <div className="">
              <span className="text">
                {user[0]?.first_name} {user[0]?.last_name}
              </span>
              <p className="text-[12px]">{user[0]?.email}</p>
            </div>
          </div>
          <div className="h-[1px] bg-[#ccc]"></div>
          <div className="p-4 flex flex-col gap-4 items-start">
            <Link
              to={"/dashboard"}
              className="text-normal flex items-center w-full hover:text-[#0e5ddd] transition-all duration-200"
            >
              <RxDashboard className="mr-2 text-xl" />
              Dashboard
            </Link>
            <Link
              to={"/cart"}
              className="text-normal flex items-center w-full hover:text-[#0e5ddd] transition-all duration-200"
            >
              <BsCart3 className="mr-2 text-xl" />
              Cart
            </Link>
            <Link
              to={"/dashboard/wishlist"}
              className="text-normal flex items-center w-full hover:text-[#0e5ddd] transition-all duration-200"
            >
              <IoBookmark className="mr-2 text-xl" />
              Wishlist
            </Link>
          </div>
          <div className="h-[1px] bg-[#ccc]"></div>
          <div className="p-4 flex flex-col gap-4 items-start">
            <button
              onClick={() => {
                clearUser();
                Cookies.remove("access_token");
                window.location.href = "/login";
              }}
              className="text-normal flex items-center w-full hover:text-[#0e5ddd] transition-all duration-200"
            >
              <IoMdLogOut className="mr-2 text-xl" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenuProfileSettings;
