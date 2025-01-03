import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/ELYA-tranparent.png";
import Container from "../Container";
import { NavMenu } from "./NavMenu";
import ProfileSettings from "./ProfileSettings";

// react icons
import { BsCart3 } from "react-icons/bs";
import { IoBookmark } from "react-icons/io5";
import axios from "axios";
import { server } from "@/api";
import { GetListCourseProps } from "@/Types";
import { useUserStore } from "@/store/user.store";

const NavBar = () => {
  const [listCourse, setListCourse] = useState<GetListCourseProps[]>([]);
  const { user, fetchUser, cartData, fetchCart, fetchWishlist, wishlist } = useUserStore();

  useEffect(() => {
    fetchUser();
    fetchWishlist(user[0]?.id.toString())
    if (user && user[0]?.id) {
      fetchCart(user[0]?.id.toString());
    }
  }, [fetchUser, fetchCart, user[0]?.id]);


  useEffect(() => {
    const getlistcourse = async () => {
      const { data } = await axios.get(server.API_GER_LIST_CATEGORY_COURSE);
      setListCourse(data);
    };

    getlistcourse();
  }, []);
  
  return (
    <>
      <Container>
        <div className="flex justify-between">
          <div className="">
            <div className="">
              <Link to={"/"}>
                <img
                  className="size-24 h-max my-6 object-contain"
                  src={LOGO as string}
                  alt="LOGO_Image"
                />
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <NavMenu data={listCourse} />
          </div>
          <div className="flex h-auto">
            <div className="flex gap-6 justify-center items-center">
              {user.length >= 1 && (
                <>
                  <Link to={"/dashboard/wishlist"} className="relative">
                    <IoBookmark className="text-[26px] text-[#0e5ddd]" />
                    <span className="absolute -top-2 -right-1 bg-red-500 text-white text-sm size-[20px] flex justify-center items-center rounded-full">
                      {wishlist?.length || 0}
                    </span>
                  </Link>
                  <Link to={"/cart"} className="relative">
                    <BsCart3 className="text-[26px] text-[#0e5ddd]" />
                    <span className="absolute -top-2 -right-1 bg-red-500 text-white text-sm size-[20px] flex justify-center items-center rounded-full">
                      {cartData?.length || 0}
                    </span>
                  </Link>
                </>
              )}

              {user.length >= 1 && <ProfileSettings />}
              {user.length <= 0 && (
                <>
                  <Link to={"/register"}>
                    <button className="h-max py-2 px-2 mr-4 rounded-md hover:text-white border-[1px] hover:border-[#0e5ddd] border-slate-300 hover:bg-[#0e5ddd] transition-all duration-150">
                      Sign In
                    </button>
                  </Link>
                  <Link to={"/login"}>
                    <button className="h-max py-2 px-8 rounded-md border-[1px] text-white border-[#0e5ddd] bg-[#0e5ddd] hover:bg-white hover:text-[#0e5ddd] transition-all duration-150">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NavBar;