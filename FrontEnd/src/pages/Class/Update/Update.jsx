import { useState } from "react";
import {Link, useParams} from 'react-router-dom'
import UseClass from "../../../Api/Class/UseClass";
const ClassUpdate = () => {
  let {id}=useParams();
  
  let classData=JSON.parse(localStorage.getItem("class") || null);
  if(!classData){
    navigate("/class")
    return
  }
  const classExist=classData.filter(data=>data._id===id)[0];
  const {ClassName,Email,ClassStatus}=classExist;

  const { updateclass } = UseClass();
  const [Class, setClass] = useState({
    Email: Email.Email,
    ClassName: ClassName,
    ClassStatus: ClassStatus,
  });
  const HandleClass = (e) => {
    e.preventDefault();
    updateclass({Class,id});
  };
  return (
    <div
      className="contaier d-flex align-items-center  text-center mt-5  justify-content-center  bg-dark login"
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "400px", borderRadius: "12px", height: "340px" }}
      >
         <div
          className="card-title   "
          style={{ fontSize: "38px", fontWeight: "600" }}
        >
          <strong className="ms-5">Update Class</strong>
          <Link
            to="/class"
            className=" btn btn-danger mt-2 mx-2"
            style={{ float: "right" }}
          >
            X
          </Link>
        </div>

        <div className="card-body ">
          <form onSubmit={HandleClass}>
            <div className="row">
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Your Email"
                  value={Class.Email}
                  onChange={(e) =>
                    setClass({ ...Class, Email: e.target.value })
                  }
                />
              </div>
              
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your ClassName"
                  value={Class.ClassName}
                  onChange={(e) =>
                    setClass({ ...Class, ClassName: e.target.value })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <select
                  className="form-control mt-4"
                  value={Class.ClassStatus}
                  onChange={(e) =>
                    setClass({
                      ...Class,
                      ClassStatus: e.target.value,
                    })
                  }
                >
                  <option value="">Choose ClassStatus</option>
                  <option value="active">Active</option>
                  <option value="blocked">Blocked</option>
                  <option value="pending">Bending</option>
                </select>
              </div>

              <div
                className="col-6 "
                style={{ width: "80%", margin: "0 auto" }}
              >
                <button
                  type="submit"
                  className="btn btn-primary mt-4"
                  style={{ width: "40%" }}
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ClassUpdate;
