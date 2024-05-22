import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Container from "@/components/Container";
import BG_BLUE from "../../public/BG-BLUE.png";

const MenuDashboard = React.lazy(() => import("@/components/EachSections/Dashboard/MenuDashboard"));
const DashboardContent = React.lazy(() => import("@/components/EachSections/Dashboard/DashboardContent"));
const MyProfile = React.lazy(() => import("@/components/EachSections/Dashboard/MyProfile"));
const EnrolledCourses = React.lazy(() => import("@/components/EachSections/Dashboard/EnrolledCourses"));
const WishlistDashboard = React.lazy(() => import("@/components/EachSections/Dashboard/WishlistDashboard"));
const Settings = React.lazy(() => import("@/components/EachSections/Dashboard/Settings"));

const DashboardHeader = () => (
  <div className="bg-[#0e5ddd] bg-blend-darken bg-opacity-100 bg-cover bg-center h-[450px]">
    <Container>
      <div className="h-[450px] flex flex-col justify-center items-center">
        <h1 className="text-white text-[42px]">Dashboard</h1>
        <p className="text-white text-[18px] mt-4">Home <span className="mr-2">&gt;</span>Dashboard</p>
      </div>
    </Container>
  </div>
);

const UserProfile = () => (
  <div className="flex gap-4">
    <div className="relative w-max">
      <img className="size-32 rounded-full object-cover" src={BG_BLUE as string} alt="GUEST LOGO" />
      <span className="absolute inset-0 flex justify-center items-center text-white text-xl">TS</span>
    </div>
    <div className="mt-6">
      <h1 className="text-xl text-gray-600">Hello,</h1>
      <p className="text-[24px]">Thanakorn Sangmee</p>
    </div>
  </div>
);

const DashboardRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="myprofile" element={<MyProfile />} />
      <Route path="enrolledcourses" element={<EnrolledCourses />} />
      <Route path="enrolledcourses/activecourses" element={<EnrolledCourses />} />
      <Route path="enrolledcourses/completedcourses" element={<EnrolledCourses />} />
      <Route path="wishlist" element={<WishlistDashboard />} />
      <Route path="settings" element={<Settings />} />
      <Route path="settings/password" element={<Settings />} />
      <Route path="*" element={<DashboardContent />} />
    </Routes>
  </Suspense>
);

const Dashboard = () => {
  const { pathname } = useLocation();
  // console.log("pathname:", pathname);

  return (
    <>
      <div className="h-auto">
        <DashboardHeader />
      </div>
      <Container>
        <div className="mt-16">
          <UserProfile />
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
