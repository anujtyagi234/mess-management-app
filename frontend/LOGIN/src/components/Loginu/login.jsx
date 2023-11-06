import { useState } from "react";
import img from "./img.png";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { FaUniversity, FaIdCard, FaLock } from "react-icons/fa";

import "./App.css";
import { FaHome } from "react-icons/fa";

function Login() {
	const [data, setData] = useState({
		college_gmail_id: "",
		registration_no: "",
		hostelname: "",
		password: "",
		user_name: "",
	});

	const [error, setError] = useState("");
	// const navigate = useNavigate()
	const iconColor = "#FFFF00";
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const url = "http://localhost:3001/api/users";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (error.response.status >= 400 && error.response.status <= 500) {
				setError(error.response.data.message);
			}
		}
	};
	return (
		<>
			<div className="bg-white flex h-screen  rounded-3xl">
				<div className="h-screen bg-red-300 w-1/2 flex justify-center items-center rounded-l-lg ">
					{/* <img src={img} alt="Image" className="h-64 w- object-cover rounded-2xl" /> */}
					<div className="flex-col ">
						<h1 className="text-5xl font-bold sans-serif mt-0 text-rose-900	color: rgb(225 29 72) ">
							Create Account
						</h1>

						<img
							src={img}
							alt="Image"
							className="rounded-full"
							style={{
								height: "450px",
								width: "500px",
								margin: "30px auto 0 auto",
							}}
						/>
					</div>
				</div>
				<div className="h-screen bg-neutral-800 w-1/2  flex-col  juendstify- rounded-r-lg flex justify-center items-center  ">
					<div className="text-white text-center">
						<h1
							className="text-5xl  "
							style={{ fontFamily: "sans-serif ", fontWeight: "bold" }}
						>
							!! Welcome !!
						</h1>
					</div>
					<div
						className=" bg-stone-100   rounded-3xl   text-black"
						style={{
							height: "650px",
							width: "480px",
							margin: "20px auto 0 auto",
						}}
					>
						<div className="grid grid-rows-2 gap-4  justify-center items-center mt-12">
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
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
									<FaIdCard
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
										name="registration_no"
										placeholder="Registration number"
										onChange={handleChange}
										value={data.registration_no}
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

								<div style={{ position: "relative", width: "max-content" }}>
									<input
										type="text"
										name="hostelname"
										placeholder="Hostel Name"
										onChange={handleChange}
										value={data.hostelname}
										className="bg-stone-700 rounded-md w-80 p-3 font-bold text-lg text-white pl-8"
									/>
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
							</div>
							{error && <div className={style.error_msg}>{error}</div>}

							<div className="mt-0  mb-80">
								<a href="#_" class="relative inline-block text-lg group w-44">
									<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
										<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
										<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
										<span class="relative" onSubmit={handleLogin}>
											Sign-up
										</span>
									</span>
									<span
										class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
										data-rounded="rounded-lg"
									></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
