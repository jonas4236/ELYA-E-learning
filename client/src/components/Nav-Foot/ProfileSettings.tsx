import { useState } from "react"
import SubMenuProfileSettings from "./SubMenuProfileSettings";

const ProfileSettings = () => {
  const [toggleShow, setToggleShow] = useState<boolean>(false);

  return (
    <>
    <button onClick={() => setToggleShow(!toggleShow)} className="relative transition-all duration-200">
      <img className="size-10 rounded-full transition-all object-cover duration-200" src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </button>

    {toggleShow && <SubMenuProfileSettings />}
    </>
  )
}

export default ProfileSettings