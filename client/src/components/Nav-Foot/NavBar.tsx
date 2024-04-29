import { Link } from "react-router-dom";
import LOGO from "../../assets/ELYA-tranparent.png";
import Container from "../Container";
import { NavMenu } from "./NavMenu";

const NavBar = () => {
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
            <NavMenu />
          </div>
          <div className="flex h-auto">
            <div className="flex justify-center items-center">
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
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NavBar;
