import React from 'react'
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";


export default function Logout() {
  const {dispatch} = useAuthContext()
  const navigate = useNavigate()

	const handleLogout = (e) => {
		e.preventDefault();
			localStorage.removeItem('token');
			localStorage.removeItem('userrole')
			navigate('/')
			dispatch({type: 'LOGOUT'})
		}

  return (
    <div className='m-4'style={{fontFamily:"Agbalumo"}}>
      <form  onSubmit={handleLogout}>
      <button  className="relative inline-block text-lg group w-30">
									<span className="relative z-10 block px-3 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
										<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
										<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
										<span className="relative">
											Logout
										</span>
									</span>
									<span
										className="absolute bottom-0 right-0 w-full h-9 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
										data-rounded="rounded-lg"
									></span>
								</button>
                </form>
    </div>
  )
}
