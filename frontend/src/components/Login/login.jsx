import { useState } from "react";
import axios from "axios";
import { FaUniversity, FaIdCard, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Login() {
	const [data, setData] = useState({
		college_gmail_id: "",
		password: "",
	});

	const [error, setError] = useState("");
	// const navigate = useNavigate()
	const iconColor = "#FFFF00";
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleLogin = (e) => {
		e.preventDefault();
	  const {college_gmail_id,password}=data;
		if (college_gmail_id && password) {
		  axios.post("http://localhost:3000/api/auth/login", data)
			.then((res) => {
			const { token } = res.data;
			localStorage.setItem('your_token_key', token);
			alert(res.data.message)
			})
			.catch((error) => {
			  alert("please try again")
			});
		} else {
		  alert("Please fill all fields");
		}
	  };

	return (
		<>
			<div className="bg-white flex h-screen  rounded-3xl">
				<div className="h-screen bg-red-300 w-1/2 flex justify-center items-center rounded-l-lg ">
					{/* <img src={img} alt="Image" className="h-64 w- object-cover rounded-2xl" /> */}
					<div className="flex-col ">
						<h1 className="text-5xl font-bold sans-serif mt-0 text-rose-900	color: rgb(225 29 72) ">
						New Here...
						</h1>

						<img
							src="https://img.freepik.com/premium-photo/cooking-fair-logo-design-illustration-pop-white-background-illustration_921410-27744.jpg"
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
							className="text-3xl  "
							style={{fontFamily: "sans-serif ", fontWeight: "bold" }}
						>
							!! Welcome !!
						</h1>
					</div>
					<div
						className=" bg-stone-100   rounded-3xl   text-black"
						style={{
							height: "500px",
							width: "480px",
							margin: "30px auto 0 auto",
						}}
					>
						 <form onSubmit={handleLogin}>
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

							</div>
							{error && <div className={style.error_msg}>{error}</div>}

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
						Forgot Password?
					</a>
				</div>
			</div>
		</>
	);
}

export default Login;