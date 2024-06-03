import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UseUser from "../../Api/User/UseUser";
export const UpdateUserProfile = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let UserExist = JSON.parse(localStorage.getItem("single"));
  if (!UserExist) {
    navigate("/login");
    return;
  }

  const { Profile, Name, Email } = UserExist;

  const [user, setuser] = useState({
    Name: Name,
    Profile: '',
    Email: Email,
  });

  const { useuserupdate } = UseUser();
  const HandleProfile = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("Name", user.Name);
    formdata.append("Profile", user.Profile);
    formdata.append("Email", user.Email);
    useuserupdate({ formdata,id });
  };
  return (

    <div
      className="contaier d-flex align-items-center  text-center mt-5  justify-content-center  bg-dark login"
      style={{ height: "600px" }}
    >

      <div
        className="card"
        style={{ width: "450px", borderRadius: "12px", height: "400px" }}
      >
        <div
          className="card-title "
          style={{ fontSize: "38px", fontWeight: "bold" }}
        >
           <img
            src={`${
              user.Profile
                ? URL.createObjectURL(user.Profile)
                : "http://localhost:3000/images/" + Profile
            }`}
            style={{
              width: "70px",
              borderRadius: "50%",
              height: "70px",
              margin: "4px auto",
            }}
            alt=""
          />
          
        </div>

        <div className="card-body ">
          <form onSubmit={HandleProfile}>

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
                  type="file"
                  className="form-control mt-4"
                  placeholder="Enter Your Profile"
                  onChange={(e) =>
                    setuser({ ...user, Profile: e.target.files[0] })
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
