import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { FaUniversity, FaIdCard, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useAuthContext } from "../../hooks/useAuthContext";
import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
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
	  const { dispatch } = useAuthContext();
	
	  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	  };
	
	  const handleLogin = (e) => {
		e.preventDefault();
		const { college_gmail_id, password, userrole } = data;
	
		if (college_gmail_id && password && userrole) {
		  axios.post("http://localhost:3000/api/auth/login", data)
			.then((res) => {
			  const { token } = res.data;
			  localStorage.setItem('token', token);
			  localStorage.setItem('userId', res.data.userId); // Store userId
			  localStorage.setItem('userRole', userrole); // Store userRole
			  dispatch({ type: 'LOGIN', payload: token });
			  toast.success(res.data.message);
			  // Navigate based on user role
			  switch (userrole) {
				case 'student':
				  navigate('/dashi');
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
			  toast.error(error.response.data.error);
			});
		} else {
		  toast.error("Please fill all fields...");
		}
	  };

	return (
		<>
			<div className="bg-white flex h-screen  rounded-3xl" style={{fontFamily:"Agbalumo"}}>
				<div className="h-screen bg-red-300 w-1/2 flex justify-center items-center rounded-l-lg " style={{fontFamily:"Agbalumo"}}>
					{/* <img src={img} alt="Image" className="h-64 w- object-cover rounded-2xl" /> */}
					<div className="flex-col ">
						<h2 className="text-3xl font-bold  mt-0 text-rose-900	color: rgb(225 29 72) "style={{backgroundColor:"transparent"}} >
						New Here...
						</h2>

						<img
							src="https://img.freepik.com/premium-photo/cooking-fair-logo-design-illustration-pop-white-background-illustration_921410-27744.jpg"
							alt="Image"
							className="rounded-full"
							style={{
								height: "450px",
								width: "490px",
								margin: "30px auto 0 auto",
							}}
						/>
					</div>
				</div>
				<div className="h-screen bg-neutral-800 w-1/2  flex-col  juendstify- rounded-r-lg flex justify-center items-center  " style={{fontFamily:"Agbalumo"}}>
					<div className="text-white text-center" style={{fontFamily:"Agbalumo"}}>
						<h2
							className="text-4xl  "
							style={{fontWeight: "bold" }}
						>
							!! Welcome !!
						</h2>
					</div>
					<div
						className=" bg-stone-100   rounded-3xl   text-black"
						style={{
							height: "420px",
							width: "480px",
							margin: "20px auto 0 auto",
						}}
					>
						 <form onSubmit={handleLogin}>
						<div className="grid grid-rows-2 gap-1  justify-center items-center mt-5" style={{fontFamily:"Agbalumo"}}>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								{error && <div className="m-4" style={{color:"red"}}>{error}</div>}
								<div className="m-5" style={{ position: "relative", width: "max-content" }}>

                    <select
                      name="userrole"
                      onChange={handleChange}
                      value={data.userrole}
                      className="bg-stone-700 rounded-md p-3 w-80 font-bold text-lg text-white pl-8"
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

							</div>

							<div className="mt-0  mb-60">
								<button  className="relative inline-block text-lg group w-44">
									<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
										<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
										<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
										<span className="relative" onSubmit={handleLogin}>
											Login
										</span>
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
				<a
						href="/forgot-password"
						style={{
							color: "white",
							textDecoration: "underline",
							fontSize: "17px",
							fontWeight: "bold",
						}}
					>
						<Link to="/forgot-password">Forgot Password?</Link>
					</a>
				</div>
			</div>
		</>
	);
}

export default Login;