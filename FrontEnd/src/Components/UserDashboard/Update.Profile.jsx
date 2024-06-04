import { useState } from "react";
import { useParams } from "react-router-dom";
import UseUser from "../../Api/User/UseUser";
import { endpoint } from "../../main";
export const UpdateUserProfile = () => {
  let { id } = useParams();
  const liibaan = JSON.parse(localStorage.getItem("single"));
  const { useuserupdate, Getuser } = UseUser();
  localStorage.setItem("single", JSON.stringify(Getuser));
  const [user, setuser] = useState({
    Confirm: liibaan.Confirm,
    Profile: "",
    Email: liibaan.Email,
  });

  const HandleProfile = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("Confirm", user.Confirm);
    formdata.append("Profile", user.Profile);
    formdata.append("Email", user.Email);
    useuserupdate({ formdata, id });
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
                :  endpoint +"/images/" + Getuser.Profile
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
                  placeholder="Enter Your Email"
                  value={user.Email}
                  onChange={(e) => setuser({ ...user, Email: e.target.value })}
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Confirm"
                  value={user.Confirm}
                  onChange={(e) =>
                    setuser({ ...user, Confirm: e.target.value })
                  }
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
