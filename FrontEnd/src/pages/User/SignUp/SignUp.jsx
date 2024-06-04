import { useState } from "react";
import UseSignUp from "../../../Api/User/UseUser";
import { Link } from "react-router-dom";
const SignUp = () => {
  let token=localStorage.getItem('token')
  const [user, setuser] = useState({
    Profile: "",
    Email: "",
    Password: "",
    Gender: "",
  });
  const { useusersignup } = UseSignUp();
  const Handleuser = (e) => {
    e.preventDefault();
    let formdata=new FormData();
    formdata.append("Profile", user.Profile);
    formdata.append("Gender", user.Gender);
    formdata.append("Password", user.Password);
    formdata.append("Email", user.Email);
    useusersignup({formdata});
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
                <select
                  className="form-control mt-4"
                  value={user.Gender}
                  onChange={(e) =>
                    setuser({
                      ...user,
                      Gender: e.target.value,
                    })
                  }
                >
                  <option value="">Choose Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="file"
                  className="form-control mt-4 "
                  onChange={(e) => setuser({ ...user, Profile: e.target.files[0] })}
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
                  SignUp
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
