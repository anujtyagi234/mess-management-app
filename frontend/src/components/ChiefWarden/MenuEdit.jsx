// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import './Common.css'
// const EmpEdit = () => {
//   const { empid } = useParams();
//   const [mealType, setMealType] = useState("Breakfast");
//   const [mealData, setMealData] = useState({});

//   useEffect(() => {
//     fetch(`http://localhost:8000/${mealType}/${empid}`)
//       .then((res) => res.json())
//       .then((resp) => {
//         setMealData(resp);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, [empid, mealType]);

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedData = { ...mealData };
//     fetch(`http://localhost:8000/${mealType}/${empid}`, {
//       method: "PUT",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(updatedData),
//     })
//       .then((res) => {
//         alert("Saved successfully.");
//         navigate("/");
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };

//   const handleMealTypeChange = (e) => {
//     setMealType(e.target.value);
//   };

//   return (
//     <div className="m245">
//     <div className="container44 "    style={{ fontFamily:"Agbalumo",display:"flex",flexDirection:"column" ,    marginTop:"1.5rem",alignItems:"center",justifyContent:"center",width:"46vw"}}>
//       <div className="text_centerEdit font-bold text-2xl mb-6" >
//         <h1>--Edit Mess Menu--</h1>
//       </div>
//       <form onSubmit={handleSubmit} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
//         <div className="bg-white shadow-md rounded " >
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Select Meal Type:
//             </label>
//             <select
//             style={{boxShadow:"1px 2px 2px grey"}}
//               value={mealType}
//               onChange={handleMealTypeChange}
//               className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//             >
//               <option value="Breakfast">Breakfast</option>
//               <option value="Lunch">Lunch</option>
//               <option value="Dinner">Dinner</option>
//               <option value="Supper">Supper</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               ID
//             </label>
//             <input

//             style={{boxShadow:"1px 2px 2px aqua",marginLeft:"1rem",marginRight:"2rem",width:"95%"}}
//               value={mealData.id || ""}
//               disabled
//               className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Title
//             </label>
//             <input
//             style={{boxShadow:"1px 2px 2px aqua",width:"95%",marginLeft:"1rem",marginRight:"2rem",}}
//               required
//               value={mealData.title || ""}
//               onChange={(e) =>
//                 setMealData({ ...mealData, title: e.target.value })
//               }
//               className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//             />
//           </div>

// <div className="mb-4">
//   <label className="block text-gray-700 text-sm font-bold mb-2">
//     Special
//   </label>
//   <input
//   style={{boxShadow:"1px 2px 2px aqua",width:"95%",marginLeft:"1rem",marginRight:"2rem",}}
//     value={mealData.special || ""}
//     onChange={(e) =>
//       setMealData({ ...mealData, special: e.target.value })

//     }
//     className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//   />
// </div>

// <div className="mb-4">
//   <label className="block text-gray-700 text-sm font-bold mb-2">
//     m1
//   </label>
//   <input
//   style={{boxShadow:"1px 2px 2px aqua",width:"95%",marginLeft:"1rem",marginRight:"2rem",}}
//     value={mealData.m1 || ""}
//     onChange={(e) =>
//       setMealData({ ...mealData, m1: e.target.value })
//     }
//     className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//   />
// </div>

// <div className="mb-4">
//   <label className="block text-gray-700 text-sm font-bold mb-2">
//     m2
//   </label>
//   <input
//   style={{boxShadow:"1px 2px 2px aqua",width:"95%",marginLeft:"1rem",marginRight:"2rem",}}
//     value={mealData.m2 || ""}
//     onChange={(e) =>
//       setMealData({ ...mealData, m2: e.target.value })
//     }
//     className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//   />
// </div>

// <div className="mb-4">
//   <label className="block text-gray-700 text-sm font-bold mb-2">
//     m3
//   </label>
//   <input
//   style={{boxShadow:"1px 2px 2px aqua",width:"95%",marginLeft:"1rem",marginRight:"2rem",}}

//     value={mealData.m3 || ""}
//     onChange={(e) =>
//       setMealData({ ...mealData, m3: e.target.value })
//     }
//     className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//   />
// </div>

// <div className="mb-4"
// style={{justifyContent:"center",alignItems:"center",alignItems:"center"}}>
//   <label className="block text-gray-700 text-sm font-bold mb-2">
//     m4
//   </label>
//   <input
//   style={{boxShadow:"1px 2px 2px aqua",width:"95%",marginLeft:"1rem",marginRight:"2rem",}}
//     value={mealData.m4 || ""}
//     onChange={(e) =>
//       setMealData({ ...mealData, m4: e.target.value })
//     }
//     className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//   />
// </div>

// <div className="mb-4">
//   <div className="flex items-center">
//     <input
//     style={{boxShadow:"1px 2px 2px aqua",width:"95%",marginLeft:"1rem",marginRight:"2rem",}}
//       checked={mealData.isactive || false}
//       onChange={(e) =>
//         setMealData({
//           ...mealData,
//           isactive: e.target.checked,
//         })
//       }
//       type="checkbox"
//       className="form-checkbox h-5 w-5 text-gray-600"
//     />
//     <label className=" text-gray-700 text-sm font-bold">
//       Is Active
//     </label>
//   </div>
// </div>

//           <div className="mb-4">
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
//             >
//               Save
//             </button>
//             <Link
//               to="/"
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Back
//             </Link>
//           </div>
//           <p className="text-green-700 font-bold mb-6">
//             Note: Change URL: employee/edit/Lunch/x (x is id for monday-1,
//             tuesday-2, and so on)
//           </p>
//         </div>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default EmpEdit;





import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './Common.css';

const EmpEdit = () => {
  const { empid } = useParams();
  const [mealType, setMealType] = useState("Breakfast");
  const [mealData, setMealData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/${mealType}/${empid}`)
      .then((res) => res.json())
      .then((resp) => {
        setMealData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid, mealType]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = { ...mealData };
    fetch(`http://localhost:8000/${mealType}/${empid}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleMealTypeChange = (e) => {
    setMealType(e.target.value);
  };

  return (
    <div className="m245">
      <div className="container44 " style={{ fontFamily: "Agbalumo", display: "flex", flexDirection: "column", marginTop: "1.5rem", alignItems: "center", justifyContent: "center", width: "46vw" }}>
        <div className="text_centerEdit font-bold text-2xl mb-6" >
          <h1>--Edit Mess Menu--</h1>
        </div>
        <form onSubmit={handleSubmit} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="bg-white shadow-md rounded " >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Meal Type:
            </label>
            <select
            style={{boxShadow:"1px 2px 2px grey"}}
              value={mealType}
              onChange={handleMealTypeChange}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Supper">Supper</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ID
            </label>
            <input

            style={{boxShadow:"1px 2px 2px aqua",marginLeft:"1rem",marginRight:"2rem",width:"95%"}}
              value={mealData.id || ""}
              disabled
              className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
            style={{boxShadow:"1px 2px 2px aqua",width:"95%",marginLeft:"1rem",marginRight:"2rem",}}
              required
              value={mealData.title || ""}
              onChange={(e) =>
                setMealData({ ...mealData, title: e.target.value })
              }
              className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Special
  </label>
  <input
  style={{boxShadow:"1px 2px 2px aqua",width:"95%",marginLeft:"1rem",marginRight:"2rem",}}
    value={mealData.special || ""}
    onChange={(e) =>
      setMealData({ ...mealData, special: e.target.value })

    }
    className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    m1
  </label>
  <input
  style={{boxShadow:"1px 2px 2px aqua",width:"95%",marginLeft:"1rem",marginRight:"2rem",}}
    value={mealData.m1 || ""}
    onChange={(e) =>
      setMealData({ ...mealData, m1: e.target.value })
    }
    className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    m2
  </label>
  <input
  style={{boxShadow:"1px 2px 2px aqua",width:"95%",marginLeft:"1rem",marginRight:"2rem",}}
    value={mealData.m2 || ""}
    onChange={(e) =>
      setMealData({ ...mealData, m2: e.target.value })
    }
    className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    m3
  </label>
  <input
  style={{boxShadow:"1px 2px 2px aqua",width:"95%",marginLeft:"1rem",marginRight:"2rem",}}

    value={mealData.m3 || ""}
    onChange={(e) =>
      setMealData({ ...mealData, m3: e.target.value })
    }
    className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  />
</div>

<div className="mb-4"
style={{justifyContent:"center",alignItems:"center",alignItems:"center"}}>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    m4
  </label>
  <input
  style={{boxShadow:"1px 2px 2px aqua",width:"95%",marginLeft:"1rem",marginRight:"2rem",}}
    value={mealData.m4 || ""}
    onChange={(e) =>
      setMealData({ ...mealData, m4: e.target.value })
    }
    className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  />
</div>

<div className="mb-4">
  <div className="flex items-center">
    <input
    style={{boxShadow:"1px 2px 2px aqua",width:"95%"}}
      checked={mealData.isactive || false}
      onChange={(e) =>
        setMealData({
          ...mealData,
          isactive: e.target.checked,
        })
      }
      type="checkbox"
      className="form-checkbox h-5 w-5 text-gray-600"
    />
    <label className=" text-gray-700 font-bold" style={{marginRight:"20rem"}}>
      Is Active
    </label>
  </div>
</div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Save
            </button>
            <Link
              to="/"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Back
            </Link>
          </div>
          <p className="text-green-700 font-bold mb-6">
            Note: Change URL: employee/edit/Lunch/x (x is id for monday-1,
            tuesday-2, and so on)
          </p>
        </div>
      </form>
      </div>
    </div>
  );
};

export default EmpEdit;

