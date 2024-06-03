import { useState } from "react";
import {Link} from 'react-router-dom'
import UseChange from "../../Api/Change/UseChange";
const Change = () => {
  const [Change, setChange] = useState({
    Email: "",
    Password: "",
    Confirm: "",
  });
  const { usechange } = UseChange();
  const HandleChange = (e) => {
    e.preventDefault();
    usechange(Change);
  };
  return (
    <div
      className="contaier d-flex align-items-center  text-center mt-5  justify-content-center  bg-dark login"
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "400px", borderRadius: "12px", height: "400px" }}
      >
         <div
          className="card-title   "
          style={{ fontSize: "38px", fontWeight: "600" }}
        >
          <strong className="ms-5">Create student</strong>
          <Link
            to="/login"
            className=" btn btn-danger mt-2 mx-2"
            style={{ float: "right" }}
          >
            X
          </Link>
        </div>

        <div className="card-body ">
          <form onSubmit={HandleChange}>
            <div className="row">
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Your Email"
                  value={Change.Email}
                  onChange={(e) =>
                    setChange({ ...Change, Email: e.target.value })
                  }
                />
              </div>
              
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Password"
                  value={Change.Password}
                  onChange={(e) =>
                    setChange({ ...Change, Password: e.target.value })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Confirm"
                  value={Change.Confirm}
                  onChange={(e) =>
                    setChange({ ...Change, Confirm: e.target.value })
                  }
                />
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
                  Change
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Change;
