import { server } from "@/api";
import Container from "@/components/Container";
import { useUserStore } from "@/store/user.store";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { user } = useUserStore();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        server.API_GET_LOGIN,
        { email, password },
        { withCredentials: true } // Ensures that cookies are included with the request
      );

      if (response.status === 201) {
        Swal.fire({
          title: "Success!",
          text: "Logged in successfully.",
          icon: "success",
          confirmButtonText: "Continue",
        }).then(() => {
          navigate("/dashboard");
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message ||
          "Something went wrong. Please try again.";

        Swal.fire({
          title: "Error!",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "An unexpected error occurred. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    }
  };

  useEffect(() => {
    if (user?.length > 0) {
      navigate("/dashboard");
    }
  }, [user])

  return (
    <>
      <div className="h-[120vh]">
        <div className="bg-[url('https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-blend-darken bg-black bg-opacity-50 bg-cover bg-center h-[450px]">
          <Container>
            <div className="h-[450px] flex flex-col justify-center items-center">
              <h1 className="text-white text-[42px]">Login</h1>
              <p className="text-white text-xl">Login to continue studying</p>
            </div>

            <div className="mt-14 flex flex-col justify-center items-center">
              <form
                onSubmit={handleLogin}
                className="p-16 flex flex-col w-[600px] border-[2px] border-[#0e5ddd] rounded-md"
              >
                <span className="text-[24px] text-gray-800 font-medium">
                  Hi, Welcome back to{" "}
                  <span className="text-[#0e5ddd] font-medium text-[24px]">
                    ELYA
                  </span>
                </span>

                <label className="mt-4" htmlFor="email">
                  E-Mail
                </label>
                <input
                  className="px-4 py-3 border-[1px] outline-[#0e5ddd] rounded-md mt-2"
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <label className="mt-4" htmlFor="password">
                  Password
                </label>
                <input
                  className="px-4 py-3 border-[1px] outline-[#0e5ddd] rounded-md mt-2"
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />

                <div className="mt-4">
                  <button className="w-full py-3 bg-[#0e5ddd] text-white border-[1px] border-[#0e5ddd] hover:bg-white hover:text-[#0e5ddd] transition-all duration-150 font-medium rounded-md">
                    Sign In
                  </button>
                </div>
                <p className="mt-4 flex flex-row justify-center">
                  Don't have an account?{" "}
                  <Link to={"/register"}>
                    <button className="ml-2 text-[#0e5ddd] font-medium">
                      Register Now
                    </button>
                  </Link>
                </p>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Login;