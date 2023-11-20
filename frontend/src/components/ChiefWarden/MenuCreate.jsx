import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    const[id,idchange]=useState("");
    const[title,titlechange]=useState("");
    const[special,specialchange]=useState("");
    const[m1,m1change]=useState("");
    const[m2,m2change]=useState("");

    const[m3,m3change]=useState("");

    const[m4,m4change]=useState("");



    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={title,special,m1,m2,m3,m4,active};
      

      fetch(" http://localhost:8000/Breakfast",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    
                <form className="container" onSubmit={handlesubmit}>

<div className="card" style={{"textAlign":"left"}}>
    <div className="card-title">
        <h2>Mess Menu Edit </h2>
    </div>
    <div className="card-body">

        <div className="row">

            <div className="col-lg-12">
                <div className="form-group">
                    <label>ID</label>
                    <input value={id} disabled="disabled" className="form-control"></input>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="form-group">
                    <label>Title</label>
                    <input required value={title} onMouseDown={e=>valchange(true)} onChange={e=>titlechange(e.target.value)} className="form-control"></input>
                {title.length==0 && validation && <span className="text-danger">Enter the title</span>}
                </div>
            </div>

            <div className="col-lg-12">
                <div className="form-group">
                    <label>Special</label>
                    <input value={special} onChange={e=>specialchange(e.target.value)} className="form-control"></input>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="form-group">
                    <label>m1</label>
                    <input value={m1} onChange={e=>m1change(e.target.value)} className="form-control"></input>
                </div>
            </div>



            <div className="col-lg-12">
                <div className="form-group">
                    <label>m2</label>
                    <input value={m2} onChange={e=>m2change(e.target.value)} className="form-control"></input>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="form-group">
                    <label>m3</label>
                    <input value={m3} onChange={e=>m3change(e.target.value)} className="form-control"></input>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="form-group">
                    <label>m4</label>
                    <input value={m4} onChange={e=>m4change(e.target.value)} className="form-control"></input>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="form-check">
                <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                    <label  className="form-check-label">Is Active</label>
                    
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                   <button className="btn btn-success" type="submit">Save</button>
                   <Link to="/" className="btn btn-danger">Back</Link>
                </div>
            </div>

        </div>

    </div>

</div>

</form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;