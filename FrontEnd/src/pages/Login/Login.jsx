import { useState } from "react";
import { Link } from "react-router-dom";
import UseLogin from "../../Api/Login/UseLogin";
const Login = () => {
  const [login, setlogin] = useState({
    Email: "",
    Password: "",
  });
  const {uselogin}=UseLogin()
  const HandleLogin = (e) => {
    e.preventDefault();
    uselogin(login);
  };
  return (
    <div
      className="contaier d-flex align-items-center  text-center mt-5  justify-content-center  bg-dark login"
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "450px", borderRadius: "12px", height: "340px" }}
      >
        <div
          className="card-title "
          style={{ fontSize: "38px", fontWeight: "bold" }}
        >
          {" "}
          login
        </div>

        <div className="card-body ">
          <form onSubmit={HandleLogin}>
            <div className="row">
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Your Email"
                  value={login.Email}
                  onChange={(e) =>
                    setlogin({ ...login, Email: e.target.value })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Password"
                  value={login.Password}
                  onChange={(e) =>
                    setlogin({ ...login, Password: e.target.value })
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
                  login
                </button>
              </div>

              <div
                className="col-6 mt-2 "
                style={{ width: "80%", margin: "0 auto" }}
              >
                <Link to="/forgetpassword">ForgetPassword</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
