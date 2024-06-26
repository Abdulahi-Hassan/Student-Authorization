import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UseStudent from "../../../Api/Student/UseStudent";
export const UpdateStudent = () => {
  let navigate=useNavigate()
  const { id } = useParams();
  let StudentData=JSON.parse(localStorage.getItem("student"));
  if(!StudentData){
    navigate("/Student")
  }
  const StudentExist=StudentData.filter(data=>data._id===id)[0];
  const {Email,Gender,Address,Phone}=StudentExist;
  
  const [student, setstudent] = useState({
    Email:  Email.Email,
    Phone: Phone,
    Gender: Gender,
    Address: Address,
  });
  const {updatestudent}=UseStudent()
  const studentLogin = async (e) => {
    e.preventDefault();
    updatestudent({ student, id });
  };
  return (
    <div
      className="contaier d-flex align-items-center  text-center  justify-content-center  bg-dark login"
      style={{ height: "600px" }}
    >
      <div
        className="card"
        style={{ width: "380px", borderRadius: "12px", height: "440px" }}
      >
        <div
          className="card-title   "
          style={{ fontSize: "38px", fontWeight: "600" }}
        >
          <strong className="ms-5">Update</strong>
          <Link
            to="/student"
            className=" btn btn-danger mt-2 mx-2"
            style={{ float: "right" }}
          >
            X
          </Link>
        </div>
        <div className="card-body ">
          <form onSubmit={studentLogin}>
            <div className="row">
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your E-mail"
                  value={student.Email}
                  onChange={(e) =>
                    setstudent({
                      ...student,
                      Email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Enter Your Phone"
                  value={student.Phone}
                  onChange={(e) =>
                    setstudent({
                      ...student,
                      Phone: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <select
                  className="form-control mt-4"
                  value={student.Gender}
                  onChange={(e) =>
                    setstudent({
                      ...student,
                      Gender: e.target.value,
                    })
                  }
                >
                  <option value="">Choose Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="col-6" style={{ width: "80%", margin: "0 auto" }}>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="form-control mt-4"
                  value={student.Address}
                  onChange={(e) =>
                    setstudent({
                      ...student,
                      Address: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-6" style={{ width: "30%", margin: "0 auto" }}>
                <button
                  type="text"
                  className="form-control btn btn-primary mt-4"
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
