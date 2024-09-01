import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { FaUniversity, FaLock, FaHome } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [data, setData] = useState({
    college_gmail_id: "",
    password: "",
    userrole: ""
  });

  const Userroles = ["student", "admin", "chief warden", "accountant"];
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const iconColor = "#FFFF00";

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { college_gmail_id, password, userrole } = data;

    if (college_gmail_id && password && userrole) {
      axios.post("http://localhost:3000/api/auth/login", data)
        .then((res) => {
          const { token, userId, message } = res.data;
          localStorage.setItem('token', token);
          localStorage.setItem('userId', userId);
          localStorage.setItem('userRole', userrole);
          toast.success(message);
          switch (userrole) {
            case 'student':
              navigate('/student/dashboard');
              break;
            case 'admin':
              navigate('/admin/dashboard');
              break;
            case 'chief warden':
              navigate('/chief/dashboard');
              break;
            case 'accountant':
              navigate('/accountant/dashboard');
              break;
            default:
              navigate('/');
          }
        })
        .catch((error) => {
          const errorMessage = error.response?.data?.error || "An unexpected error occurred.";
          toast.error(errorMessage);
        });
    } else {
      toast.error("Please fill all fields...");
    }
  };

  return (
    <div className="bg-white flex h-screen rounded-3xl" style={{ fontFamily: "Agbalumo" }}>
      <div className="h-screen bg-red-300 w-1/2 flex justify-center items-center rounded-l-lg">
        <div className="flex-col">
          <h2 className="text-3xl font-bold mt-0 text-rose-900" style={{ backgroundColor: "transparent" }}>
            Login Here...
          </h2>
          <img
            src="https://img.freepik.com/premium-photo/cooking-fair-logo-design-illustration-pop-white-background-illustration_921410-27744.jpg"
            alt="Cooking Fair Logo"
            className="rounded-full"
            style={{
              height: "450px",
              width: "490px",
              margin: "30px auto 0 auto",
            }}
            aria-label="Cooking Fair Logo"
          />
        </div>
      </div>
      <div className="h-screen bg-neutral-800 w-1/2 flex-col justify-center items-center rounded-r-lg flex">
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold">
            !! Welcome !!
          </h2>
        </div>
        <div className="bg-stone-100 rounded-3xl text-black" style={{ height: "420px", width: "480px", margin: "20px auto 0 auto" }}>
          <form onSubmit={handleLogin}>
            <div className="grid grid-rows-2 gap-1 justify-center items-center mt-5">
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {error && <div className="m-4" style={{ color: "red" }}>{error}</div>}
                <div className="m-5" style={{ position: "relative", width: "max-content" }}>
                  <select
                    name="userrole"
                    onChange={handleChange}
                    value={data.userrole}
                    className="bg-stone-700 rounded-md p-3 w-80 font-bold text-lg text-white pl-8"
                    aria-label="Select user role"
                  >
                    <option value="" disabled defaultValue>
                      Select a position
                    </option>
                    {Userroles.map((roles) => (
                      <option key={roles} value={roles}>
                        {roles}
                      </option>
                    ))}
                  </select>
                  <FaHome
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "10px",
                      transform: "translateY(-50%)",
                      color: iconColor,
                    }}
                  />
                </div>
                <div style={{ position: "relative", width: "max-content", marginBottom: "20px" }}>
                  <FaUniversity
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "10px",
                      transform: "translateY(-50%)",
                      color: iconColor,
                    }}
                  />
                  <input
                    type="email"
                    placeholder="College gmail-id"
                    name="college_gmail_id"
                    onChange={handleChange}
                    value={data.college_gmail_id}
                    className="bg-stone-700 rounded-md p-3 w-80 font-bold text-lg text-white pl-8"
                    aria-label="College Gmail ID"
                  />
                </div>
                <div style={{ position: "relative", width: "max-content", marginBottom: "20px" }}>
                  <FaLock
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "10px",
                      transform: "translateY(-50%)",
                      color: iconColor,
                    }}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={data.password}
                    className="bg-stone-700 rounded-md p-3 w-80 font-bold text-lg text-white pl-8"
                    aria-label="Password"
                  />
                </div>
              </div>
              <div className="mt-0 mb-60">
                <button type="submit" className="relative inline-block text-lg group w-44">
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">
                      Login
                    </span>
                  </span>
                  <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <Link to="/forgot-password" className="text-white underline font-bold text-lg mt-4">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}

export default Login;