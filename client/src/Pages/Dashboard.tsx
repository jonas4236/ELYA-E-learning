import React, { Suspense, useEffect, useMemo } from "react";
import Container from "@/components/Container";
import BG_BLUE from "../../public/BG-BLUE.png";
// import MenuDashboard from "@/components/EachSections/Dashboard/MenuDashboard";
const MenuDashboard = React.lazy(
  () => import("@/components/EachSections/Dashboard/MenuDashboard")
);
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";

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

const Dashboard = () => {
  const { params } = useParams<{ params?: string }>();
  const navigate: NavigateFunction = useNavigate();
  // console.log("params1:", params);

  const comparePath: string[] = useMemo(() => ["myprofile", "enrolledcourses", "wishlist", "settings"], []);

  // protect path when users go outside of barrier path
  useEffect(() => {
    if (params === undefined || !comparePath.includes(params)) {
      navigate("/dashboard");
    }
  }, [params, navigate]);

  const renderDashboardSections = () => {
    switch (params) {
      case "myprofile":
        return <MyProfile />;
      case "enrolledcourses":
        return <EnrolledCourses />;
      case "activecourses":
        return <EnrolledCourses />;
      case "completedcourses":
        return <EnrolledCourses />;
      case "wishlist":
        return <WishlistDashboard />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <>
      <div className="h-auto">
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
      </div>

      <Container>
        <div className="mt-16">
          <div className="flex gap-4">
            <div className="relative w-max">
              <img
                className="size-32 rounded-full object-cover"
                src={BG_BLUE as string}
                alt="GUEST LOGO"
              />
              <span className="absolute inset-0 flex justify-center items-center text-white text-xl">
                TS
              </span>
            </div>
            <div className="mt-6">
              <h1 className="text-xl text-gray-600">Hello,</h1>
              <p className="text-[24px]">Thanakorn Sangmee</p>
            </div>
          </div>
          <div className="h-[1px] bg-[#ccc] mt-8"></div>
          <div className="flex gap-16">
            <div className="flex-[1] flex flex-col gap-4 border-r-[1px] border-[#ccc]">
              <Suspense fallback={<div>Loading...</div>}>
                <MenuDashboard ActiveOn={params} />
              </Suspense>
            </div>
            <div className="flex-[2.5]">
              <Suspense fallback={<div>Loading...</div>}>
                {renderDashboardSections()}
              </Suspense>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
