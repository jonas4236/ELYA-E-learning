import { Link, useParams } from "react-router-dom";
import ProfileSettings from "./ProfileSettings";
import PasswordSettings from "./PasswordSettings";

const Settings = () => {
  const { path } = useParams<{ path?: string }>();
  console.log("path:", path);
  return (
    <>
      <div className="my-6">
        <h1 className="text-xl">Settings</h1>
      </div>

      <div className="flex">
        <Link
          to={"/dashboard/settings"}
          className={`py-2 px-4 ${
            path === undefined
              ? "text-[#0e5ddd] border-b-[2px] border-[#0e5ddd]"
              : "text-black"
          } hover:text-[#0e5ddd]`}
        >
          Profile
        </Link>
        <Link
          to={"/dashboard/settings/password"}
          className={`py-2 px-4 ${
            path === "profile"
              ? "text-[#0e5ddd] border-b-[2px] border-[#0e5ddd]"
              : "text-black"
          } hover:text-[#0e5ddd]`}
        >
          Password
        </Link>
      </div>

      {path === undefined && (
        <div className="mt-8">
          <ProfileSettings />
        </div>
      )}
      {path === "password" && <PasswordSettings />}
    </>
  );
};

export default Settings;
