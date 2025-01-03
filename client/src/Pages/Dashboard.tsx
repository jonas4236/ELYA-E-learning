import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Container from "@/components/Container";
import BG_BLUE from "../../public/BG-BLUE.png";
import { useUserStore } from "@/store/user.store";

const MenuDashboard = React.lazy(
  () => import("@/components/EachSections/Dashboard/MenuDashboard")
);
const DashboardContent = React.lazy(
  () => import("@/components/EachSections/Dashboard/DashboardContent")
);
const MyProfile = React.lazy(
  () => import("@/components/EachSections/Dashboard/MyProfile")
);
const EnrolledCourses = React.lazy(
  () => import("@/components/EachSections/Dashboard/EnrolledCourses")
);
const WishlistDashboard = React.lazy(
  () => import("@/components/EachSections/Dashboard/WishlistDashboard")
);
const Settings = React.lazy(
  () => import("@/components/EachSections/Dashboard/Settings")
);

const DashboardHeader = () => (
  <div className="bg-[#0e5ddd] bg-blend-darken bg-opacity-100 bg-cover bg-center h-[450px]">
    <Container>
      <div className="h-[450px] flex flex-col justify-center items-center">
        <h1 className="text-white text-[42px]">Dashboard</h1>
        <p className="text-white text-[18px] mt-4">
          Home <span className="mr-2">&gt;</span>Dashboard
        </p>
      </div>
    </Container>
  </div>
);

const UserProfile = ({
  fname,
  lname,
  profile,
  defaultName,
}: {
  fname: string;
  lname: string;
  profile: string;
  defaultName: string;
}) => (
  <div className="flex gap-4">
    <div className="relative w-max">
      {profile?.length <= 0 || !profile ? (
        <>
          <img
            className="size-32 rounded-full object-cover"
            src={BG_BLUE as string}
            alt="GUEST LOGO"
          />
          <span className="absolute inset-0 flex justify-center items-center text-white text-xl">
            {defaultName}
          </span>
        </>
      ) : (
        <>
          <img
            className="size-32 rounded-full object-cover"
            src={`${profile}`}
            alt={`profile of ${fname}`}
          />
        </>
      )}
    </div>
    <div className="mt-6">
      <h1 className="text-xl text-gray-600">Hello,</h1>
      <p className="text-[24px]">
        {fname} {lname}
      </p>
    </div>
  </div>
);

const DashboardRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="myprofile" element={<MyProfile />} />
      <Route path="enrolledcourses" element={<EnrolledCourses />} />
      <Route
        path="enrolledcourses/activecourses"
        element={<EnrolledCourses />}
      />
      <Route
        path="enrolledcourses/completedcourses"
        element={<EnrolledCourses />}
      />
      <Route path="wishlist" element={<WishlistDashboard />} />
      <Route path="settings" element={<Settings />} />
      <Route path="settings/password" element={<Settings />} />
      <Route path="*" element={<DashboardContent />} />
    </Routes>
  </Suspense>
);

const Dashboard = () => {
  const { pathname } = useLocation();
  const { user, fetchUser } = useUserStore();

  // console.log("full:", user[0]?.first_name);
  // console.log(
  //   `${user[0]?.first_name.split("", 1)} ${user[0]?.last_name.split("", 1)}`
  // );

  // console.log(user);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <div className="h-auto">
        <DashboardHeader />
      </div>
      <Container>
        <div className="mt-16">
          <UserProfile
            fname={user[0]?.first_name}
            lname={user[0]?.last_name}
            profile={user[0]?.profile_img}
            defaultName={`${user[0]?.first_name.split(
              "",
              1
            )}${user[0]?.last_name.split("", 1)}`}
          />
          <div className="h-[1px] bg-[#ccc] mt-8"></div>
          <div className="flex gap-16">
            <div className="flex-[1] flex flex-col gap-4 border-r-[1px] border-[#ccc]">
              <Suspense fallback={<div>Loading...</div>}>
                <MenuDashboard ActiveOn={pathname} />
              </Suspense>
            </div>
            <div className="flex-[2.5]">
              <DashboardRoutes />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;