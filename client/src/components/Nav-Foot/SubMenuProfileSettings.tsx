import { RxDashboard } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoBookmark } from "react-icons/io5";

const SubMenuProfileSettings = () => {
  return (
    <div className="absolute">
      <div className="absolute min-w-[320px] top-6 text-black flex flex-col border-[1px] -right-[70px] bg-white z-50">
        <div className="w-full shadow-md flex flex-col">
          <div className="flex p-3 items-center w-full gap-4">
            <img
              className="size-16 rounded-full transition-all object-cover duration-200"
              src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="">
              <span className="text">Thanakorn Sangmee</span>
              <p className="text-[12px]">bossview59@gmail.com</p>
            </div>
          </div>
          <div className="h-[1px] bg-[#ccc]"></div>
          <div className="p-4 flex flex-col gap-4 items-start">
            <button className="text-normal flex items-center w-full hover:text-[#0e5ddd] transition-all duration-200">
              <RxDashboard className="mr-2 text-xl" />
              Dashboard
            </button>
            <button className="text-normal flex items-center w-full hover:text-[#0e5ddd] transition-all duration-200">
              <BsCart3 className="mr-2 text-xl" />
              Cart
            </button>
            <button className="text-normal flex items-center w-full hover:text-[#0e5ddd] transition-all duration-200">
              <IoBookmark  className="mr-2 text-xl" />
              Wishlist
            </button>
            <button className="text-normal flex items-center w-full hover:text-[#0e5ddd] transition-all duration-200">
              <FaHistory className="mr-2 text-xl" />
              Order History
            </button>
          </div>
          <div className="h-[1px] bg-[#ccc]"></div>
          <div className="p-4 flex flex-col gap-4 items-start">
            <button className="text-normal flex items-center w-full hover:text-[#0e5ddd] transition-all duration-200">
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
