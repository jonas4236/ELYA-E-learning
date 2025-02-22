import { Link, useLocation } from "react-router-dom";
import ProfileSettings from "./ProfileSettings";
import PasswordSettings from "./PasswordSettings";

const Settings = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="my-6">
        <h1 className="text-xl">Settings</h1>
      </div>

      <div className="flex">
        <Link
          to={"/dashboard/settings"}
          className={`py-2 px-4 ${
            pathname === "/dashboard/settings"
              ? "text-[#0e5ddd] border-b-[2px] border-[#0e5ddd]"
              : "text-black"
          } hover:text-[#0e5ddd]`}
        >
          Profile
        </Link>
        {/* <Link
          to={"/dashboard/settings/password"}
          className={`py-2 px-4 ${
            pathname === "/dashboard/settings/password"
              ? "text-[#0e5ddd] border-b-[2px] border-[#0e5ddd]"
              : "text-black"
          } hover:text-[#0e5ddd]`}
        >
          Password
        </Link> */}
      </div>

      {pathname === "/dashboard/settings" && (
        <div className="mt-8">
          <ProfileSettings />
        </div>
      )}
      {pathname === "/dashboard/settings/password" && <PasswordSettings />}
    </>
  );
};

export default Settings;