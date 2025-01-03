import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Components
import NavBar from "./components/Nav-Foot/NavBar";
import Footer from "./components/Nav-Foot/Footer";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import CourseCategory from "./Pages/CourseCategory";
import CourseDetails from "./Pages/CourseDetails";
import Learn from "./Pages/Learn";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Instructor from "./Pages/Instructor";
import Dashboard from "./Pages/Dashboard";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <HomePage />,
      },
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "category-course/:params",
        element: <CourseCategory />,
      },
      {
        path: "course/:course",
        element: <CourseDetails />,
      },
      {
        path: "lessons/:course",
        element: <Learn />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout/bill",
        element: <Checkout />,
      },
      {
        path: "instructor/:name",
        element: <Instructor />,
      },
      {
        path: "dashboard/*",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
