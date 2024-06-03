import { useState } from "react";
import UseSignUp from "../../../Api/User/UseUser";
import { Link, Navigate } from "react-router-dom";
const SignUp = () => {
  let token=localStorage.getItem('token')
  
  const [user, setuser] = useState({
    Name: "",
    Email: "",
    Password: "",
    Gender: "",
  });
  const { useusersignup } = UseSignUp();
  const Handleuser = (e) => {
    e.preventDefault();
    useusersignup(user);
  };
  return (
    <div
      className="contaier d-flex align-items-center  text-center mt-5  justify-content-center  bg-dark login"
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "350px", borderRadius: "12px", height: "400px" }}
      >
        <div
          className="card-title   "
          style={{ fontSize: "38px", fontWeight: "600" }}
        >
          <strong className="ms-5">Create User</strong>
        {token ? 
         <Link to="/user"
         className=" btn btn-danger mt-2 mx-2"
         style={{ float: "right" }}
       >
         X
       </Link>




         :  <Link to="/login"
         className=" btn btn-danger mt-2 mx-2"
         style={{ float: "right" }}
       >
         X
       </Link>}
        </div>

        <div className="card-body ">
          <form onSubmit={Handleuser}>
            <div className="row">
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Your Name"
                  value={user.Name}
                  onChange={(e) => setuser({ ...user, Name: e.target.value })}
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Email"
                  value={user.Email}
                  onChange={(e) => setuser({ ...user, Email: e.target.value })}
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Password"
                  value={user.Password}
                  onChange={(e) =>
                    setuser({ ...user, Password: e.target.value })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Gender"
                  value={user.Gender}
                  onChange={(e) => setuser({ ...user, Gender: e.target.value })}
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
                  user
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
