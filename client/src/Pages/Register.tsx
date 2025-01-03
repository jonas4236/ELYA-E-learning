import { server } from "@/api";
import Container from "@/components/Container";
import { useUserStore } from "@/store/user.store";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useUserStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.length > 0) {
      navigate("/dashboard")
    }
  }, [user])

  const onsubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !username || !email || !password) {
      return;
    } else {
      try {
        const data = await axios.post(server.API_POST_REGISTER, {
          first_name: firstName,
          last_name: lastName,
          username: username,
          password: password,
          email: email,
        });

        console.log(data);

        if (data.status === 201) {
          Swal.fire("Successfully", "Registering Successfully!", "success").then(() => {
            window.location.href = "/login"
          }) 
        }
      } catch (error) {
        Swal.fire("Error", "This username or email has aleady existed", "error");
        console.log(`error cannot register because : ${error}`);
      }
    }
  };

  return (
    <>
      <div className="h-[120vh]">
        <div className="bg-[url('https://images.unsplash.com/photo-1595126731003-755959b6baf8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-blend-darken bg-black bg-opacity-70 bg-cover bg-center h-[450px]">
          <Container>
            <div className="h-[450px] flex flex-col justify-center items-center">
              <h1 className="text-white text-[42px]">Register / Sign In</h1>
              <p className="text-white text-xl">Account registration</p>
            </div>

            <div className="mt-24">
              <form onSubmit={onsubmit} className="py-12 px-36 mx-52 border-[2px] rounded-md border-[#0e5ddd] shadow-sm">
                <div className="flex gap-12">
                  <div className="flex-[1]">
                    <div className="flex flex-col">
                      <label className="mb-1" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        className="px-4 py-3 border-[1px] rounded-md outline-[#0e5ddd]"
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex-[1]">
                    <div className="flex flex-col">
                      <label className="mb-1" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        className="px-4 py-3 border-[1px] rounded-md outline-[#0e5ddd]"
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-12 mt-8">
                  <div className="flex-[1]">
                    <div className="flex flex-col">
                      <label className="mb-1" htmlFor="userName">
                        User Name
                      </label>
                      <input
                        className="px-4 py-3 border-[1px] rounded-md outline-[#0e5ddd]"
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="User Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <p className="text-red-500">*permanently cannot change</p>
                    </div>
                  </div>
                  <div className="flex-[1]">
                    <div className="flex flex-col">
                      <label className="mb-1" htmlFor="email">
                        E-Mail
                      </label>
                      <input
                        className="px-4 py-3 border-[1px] rounded-md outline-[#0e5ddd]"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="E-Mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <label className="mb-1" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="px-4 py-3 border-[1px] rounded-md outline-[#0e5ddd]"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mt-4 w-full">
                  <button className="text-white w-full bg-[#0e5ddd] font-medium rounded-md px-4 py-4 border-[1px] border-[#0e5ddd] hover:bg-white transition-all duration-150 hover:text-[#0e5ddd]">
                    Register
                  </button>
                </div>

                <div className="mt-4 flex flex-row justify-center">
                  <span className="mt-4">
                    Have an account aleady?{" "}
                    <Link to={"/login"}>
                      <button className="text-[#0e5ddd] font-medium">
                        Login
                      </button>
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Register;