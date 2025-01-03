import { MdCameraAlt } from "react-icons/md";
import { PiWarningCircleBold } from "react-icons/pi";
// import TextEditor from "../TextEditor/TextEditor";
import { useUserStore } from "@/store/user.store";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "@/api";
import Swal from "sweetalert2";

const ProfileSettings = () => {
  const { user } = useUserStore();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [profileImg, setProfileImg] = useState<string>("");

  useEffect(() => {
    if (user) {
      setFirstName(user[0]?.first_name);
      setLastName(user[0]?.last_name);
      setPhoneNumber(user[0]?.phone);
      setBio(user[0]?.biography);
      setProfileImg(user[0]?.profile_img);
    }
  }, []);

  const updateProfileImage = async (profileURL: string) => {
    try {
      const { data } = await axios.patch(
        server.API_PATCH_UPDATE_PROFILE.replace(":uid", String(user[0]?.id)),
        {
          profileImg: profileURL,
        }
      );

      if (data) {
        console.log("Profile image updated successfully!");
      } else {
        console.error("Failed to update profile image.");
      }
    } catch (error) {
      console.warn("Error updating profile image:", (error as Error).message);
    }
  };

  const handleSubmitSettingProfile = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    try {
      await axios
        .patch(server.API_PATCH_UPDATE_SETTING_PROFILE, {
          uid: user[0]?.id.toString(),
          f_name: firstName,
          l_name: lastName,
          phone: phoneNumber,
          bio: bio,
        })
        .then(() => {
          Swal.fire(
            "Successfully!",
            "you've been update profile setting success",
            "success"
          ).then(() => {
            window.location.reload();
          });
        });
    } catch (error) {
      console.warn(
        "cannot submit setting profile because: ",
        (error as Error).message
      );
    }
  };

  const handleUploadProfileImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", import.meta.env.VITE_PRESET_CLOUD);

      try {
        const { data } = await axios.post(
          import.meta.env.VITE_API_CLOUD,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (data) {
          updateProfileImage(data.secure_url);
          setProfileImg(data.secure_url);
          Swal.fire("Successfully", "update profile success", "success").then(
            () => {
              window.location.reload();
            }
          );
        }
      } catch (error) {
        console.warn("Error uploading image: ", (error as Error).message);
      }
    }
  };

  return (
    <>
      <div className="">
        <div className="h-[300px] relative rounded-md">
          <img
            className="h-[300px] w-full object-cover rounded-md"
            src="https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="relative">
            <div className="absolute bottom-[-70px] left-6 flex items-center">
              <img
                className="size-36 rounded-full object-cover p-2 bg-white border-4 border-white"
                src={profileImg}
                alt=""
              />
              <label
                htmlFor="upload-image"
                className="ml-[11px] py-2 flex items-center absolute px-4 bg-[#0e5ddd] text-white border-[1px] border-[#0e5ddd] hover:bg-transparent hover:text-white hover:border-white rounded-md transition-all duration-200 cursor-pointer"
              >
                <MdCameraAlt className="mr-2 text-xl" />
                Change
              </label>
              <input
                id="upload-image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleUploadProfileImage}
              />
            </div>
          </div>

          {/* <button className="absolute right-6 bottom-4 flex items-center py-3 px-4 bg-[#0e5ddd] text-white border-[1px] border-[#0e5ddd] hover:bg-transparent hover:text-white hover:border-white rounded-md transition-all duration-200">
            <MdCameraAlt className="mr-2 text-xl" />
            Upload Cover Photo
          </button> */}
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
            {/* <span className="text-sm flex items-center text-[#4e4e4e]">
              <PiWarningCircleBold className="mr-2 text-lg" />
              Cover Photo Size:
              <span className="text-[#0e5ddd] font-medium mx-2">953x300</span>
              pixels
            </span> */}
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex gap-6">
            <div className="flex-[1] flex flex-col">
              <label htmlFor="username">Username</label>
              <input
                className="py-3 px-4 border-[1px] border-[#ccc] text-[#868686] outline-none rounded-md cursor-not-allowed"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                defaultValue={user[0]?.username}
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
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mt-8">
          <label htmlFor="skilloccupation">Biography</label>
          <input
            className="py-3 px-4 border-[1px] border-[#ccc] outline-none rounded-md"
            type="text"
            id="skilloccupation"
            name="skilloccupation"
            placeholder="Your Biography"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        {/* <div className="mt-8">
          <span>Bio</span>
          <TextEditor />
        </div> */}
        <div className="mt-8">
          <button
            onClick={(e) => handleSubmitSettingProfile(e)}
            className="p-2 rounded-md bg-[#0e5ddd] text-white border-[1px] border-[#0e5ddd] hover:text-[#0e5ddd] hover:bg-white transition-all duration-200"
          >
            Update Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
