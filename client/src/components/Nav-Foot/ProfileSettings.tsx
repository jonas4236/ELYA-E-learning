import { useState } from "react";
import SubMenuProfileSettings from "./SubMenuProfileSettings";
import { useUserStore } from "@/store/user.store";
import BG_BLUE from "../../../public/BG-BLUE.png";

const ProfileSettings = () => {
  const [toggleShow, setToggleShow] = useState<boolean>(false);
  const { clearUser, user } = useUserStore();

  return (
    <>
      {user?.length < 0 || !user[0]?.profile_img ? (
        <>
          <button
            onClick={() => setToggleShow(!toggleShow)}
            className="relative transition-all duration-200"
          >
            <img
              className="size-10 rounded-full object-cover"
              src={BG_BLUE as string}
              alt="GUEST LOGO"
            />
            <span className="absolute inset-0 flex justify-center items-center text-white text-[12px]">
              {`${user[0]?.first_name.split("", 1)}${user[0]?.last_name.split(
                "",
                1
              )}`}
            </span>
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setToggleShow(!toggleShow)}
            className="relative transition-all duration-200"
          >
            <img
              className="size-10 rounded-full transition-all object-cover duration-200"
              src={`${user[0]?.profile_img}`}
              alt=""
            />
          </button>
        </>
      )}

      {toggleShow && (
        <SubMenuProfileSettings user={user} clearUser={clearUser} />
      )}
    </>
  );
};

export default ProfileSettings;