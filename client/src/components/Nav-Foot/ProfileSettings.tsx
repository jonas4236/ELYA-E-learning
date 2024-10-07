import { useState } from "react"
import SubMenuProfileSettings from "./SubMenuProfileSettings";
import { useUserStore } from "@/store/user.store";

const ProfileSettings = () => {
  const [toggleShow, setToggleShow] = useState<boolean>(false);
  const { clearUser, user } = useUserStore();

  return (
    <>
    <button onClick={() => setToggleShow(!toggleShow)} className="relative transition-all duration-200">
      <img className="size-10 rounded-full transition-all object-cover duration-200" src={`${user[0]?.profile_img}`} alt="" />
    </button>

    {toggleShow && <SubMenuProfileSettings user={user} clearUser={clearUser} />}
    </>
  )
}

export default ProfileSettings