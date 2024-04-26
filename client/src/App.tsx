import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Components
import NavBar from "./components/Nav-Foot/NavBar";
import Footer from "./components/Nav-Foot/Footer";
import HomePage from "./Pages/HomePage";


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
        path: "",
        element: <HomePage />,
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
