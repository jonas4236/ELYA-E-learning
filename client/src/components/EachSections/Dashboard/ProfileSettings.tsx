import { MdCameraAlt } from "react-icons/md";
import { PiWarningCircleBold } from "react-icons/pi";
import TextEditor from "../TextEditor/TextEditor";

const ProfileSettings = () => {
  return (
    <>
      <form className="">
        <div className="h-[300px] relative rounded-md">
          <img
            className="h-[300px] w-full object-cover rounded-md"
            src="https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="size-36 rounded-full object-cover absolute -bottom-16 left-6 p-2 bg-white"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <button className="absolute right-6 bottom-4 flex items-center py-3 px-4 bg-[#0e5ddd] text-white border-[1px] border-[#0e5ddd] hover:bg-transparent hover:text-white hover:border-white rounded-md transition-all duration-200">
            <MdCameraAlt className="mr-2 text-xl" />
            Upload Cover Photo
          </button>
          {/* relative box */}
        </div>
        <div className="mt-6 flex justify-end">
          <div className="flex gap-8">
            <span className="text-sm flex items-center text-[#4e4e4e]">
              <PiWarningCircleBold className="mr-2 text-lg" />
              Profile Photo Size:
              <span className="text-[#0e5ddd] font-medium mx-2">144x144</span>
              pixels
            </span>
            <span className="text-sm flex items-center text-[#4e4e4e]">
              <PiWarningCircleBold className="mr-2 text-lg" />
              Cover Photo Size:
              <span className="text-[#0e5ddd] font-medium mx-2">953x300</span>
              pixels
            </span>
          </div>
        </div>
        <div className="mt-16">
          <div className="flex gap-6">
            <div className="flex-[1] flex flex-col">
              <label htmlFor="firstname">First Name</label>
              <input
                className="py-3 px-4 border-[1px] border-[#ccc] outline-none rounded-md"
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
              />
            </div>
            <div className="flex-[1] flex flex-col">
              <label htmlFor="lastname">Last Name</label>
              <input
                className="py-3 px-4 border-[1px] border-[#ccc] outline-none rounded-md"
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex gap-6">
            <div className="flex-[1] flex flex-col">
              <label htmlFor="username">Username</label>
              <input
                className="py-3 px-4 border-[1px] border-[#ccc] outline-none rounded-md cursor-not-allowed"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                disabled
              />
            </div>
            <div className="flex-[1] flex flex-col">
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                className="py-3 px-4 border-[1px] border-[#ccc] outline-none rounded-md"
                type="text"
                id="phonenumber"
                name="phonenumber"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mt-8">
          <label htmlFor="skilloccupation">Skill/Occupation</label>
          <input
            className="py-3 px-4 border-[1px] border-[#ccc] outline-none rounded-md"
            type="text"
            id="skilloccupation"
            name="skilloccupation"
            placeholder="Your Skill & Occupation"
          />
        </div>
        <div className="mt-8">
          <span>Bio</span>
          <TextEditor />
        </div>
        <div className="mt-8">
          <button className="p-2 rounded-md bg-[#0e5ddd] text-white border-[1px] border-[#0e5ddd] hover:text-[#0e5ddd] hover:bg-white transition-all duration-200">
            Update Profile
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileSettings;