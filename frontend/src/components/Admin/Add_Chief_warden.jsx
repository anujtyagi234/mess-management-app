import { useState } from "react";
import axios from "axios";
import {  toast } from 'react-toastify';
import {
  FaUserCircle,
  FaUniversity,
  FaIdCard,
  FaLock,
  FaHome,
} from "react-icons/fa";

function Add_Chief_warden() {
  const [data, setData] = useState({
    college_gmail_id: "",
    password: "",
    user_name: "",
  });

  const [error, setError] = useState("");
  const iconColor = "#FFFF00";

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      college_gmail_id,
      password,
      user_name,
    } = data;

    if (
      college_gmail_id &&
      password &&
      user_name
    ) {
      axios
        .post("http://localhost:3000/admin/addchiefwarden", data)
        .then((res) => {
         toast(res.data.message);
         setData({
          college_gmail_id: "",
          hostelname: "",
          password: "",
          user_name: "",
        });
        })
        .catch((error) => {
          toast.error(error.response.data.error);
        });
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <>
    <div className="AddAccountantContainer" style={{ height: "100vh", width: "100%",overflow: "hidden" }}>
      {console.log("User", data)}
      <div className="bg-white flex h-screen  rounded-3xl" style={{fontFamily:"Agbalumo"}}>
        <div className="h-screen bg-red-300 w-1/2 flex justify-center items-center rounded-l-lg ">
          {/* <img src={img} alt="Image" className="h-64 w- object-cover rounded-2xl" /> */}
          <div className="flex-col ">
            <h1 className="text-3xl font-bold sans-serif mt-0 text-rose-900	color: rgb(225 29 72) " style={{backgroundColor:"transparent"}}>
            Add Chief-Warden
            </h1>

            <img
              src="https://img.freepik.com/premium-photo/3d-cartoon-business-leader-middleaged-man-with-sharp-features-modern-office-generative-ai_985482-348.jpg"
              alt="Image"
              className="rounded-full"
              style={{
                height: "450px",
                width: "500px",
                margin: "30px auto 0 auto",
                boxShadow:"10px  2px 10px 5px aqua"
              }}
            />
          </div>
        </div>
        <div className="h-screen bg-neutral-800 w-1/2  flex-col  juendstify- rounded-r-lg flex justify-center items-center" style={{fontFamily:"Agbalumo"}}>
          <div className="text-white text-center">
            <h1
              className="text-5xl  "
              style={{  fontWeight: "bold",backgroundColor:"transparent" }}
            >
              !! Welcome !!
            </h1>
          </div>
          <div
            className=" bg-stone-100   rounded-3xl   text-black"
            style={{
              height: "540px",
              width: "480px",
              margin: "20px auto 0 auto",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-rows-2 gap-4  justify-center items-center mt-12">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {error && <div className="m-4">{error}</div>}
                  <div
                    style={{
                      position: "relative",
                      width: "max-content",
                      marginBottom: "20px",
                    }}
                  >
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
                    />
                  </div>

                  <div
                    style={{
                      position: "relative",
                      width: "max-content",
                      marginBottom: "20px",
                    }}
                  >
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
                    />
                  </div>

                  <div
                    style={{
                      position: "relative",
                      width: "max-content",
                      marginBottom: "20px",
                    }}
                  >
                    <FaUserCircle
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        color: iconColor,
                      }}
                    />
                    <input
                      type="text"
                      name="user_name"
                      placeholder="User-Name"
                      onChange={handleChange}
                      value={data.user_name}
                      className="bg-stone-700 rounded-md p-3 w-80 font-bold text-lg text-white pl-8"
                    />
                  </div>

                  
                </div>

                <div className="mt-0  mb-80">
                  <button
                    type="submit"
                    className="relative inline-block text-lg group w-44"
                  >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span className="relative">ADD</span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Add_Chief_warden;
