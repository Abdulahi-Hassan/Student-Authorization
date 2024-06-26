import { Link } from "react-router-dom";
import moment from "moment";
import UseUser from "../../Api/User/UseUser";
import axios from "axios";
axios.defaults.withCredentials = true;
const AllUser = () => {
  const { GetAlluser } = UseUser();
  localStorage.setItem("user", JSON.stringify(GetAlluser));
  return (
    <div
      className="container mt-5"
      style={{ marginTop: "10px", padding: "0 4%" }}
    >
      <Link to={`/signup`} className="btn btn-info  mt-5 mx-2">
        Create +
      </Link>
      <table className="table  text-center mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Password</th>
            <th>Role</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {GetAlluser.map((data, index) => (
            <tr key={index}>
              {/* <td>
                {
                  <img
                    src={
                      "http://localhost:3000/images/Profile_1716650838504.png"
                    }
                    style={{
                      width: "70px",
                      borderRadius: "50%",
                      height: "70px",
                      margin: "auto",
                    }}
                    alt=""
                  />
                }
              </td> */}
              <td>{data.Name}</td>
              <td>{data.Email}</td>
              <td>{data.Confirm}</td>
              <td>{data.Role}</td>
              <td>{data.Status}</td>
              <td>{moment(data.Date).format("ll")}</td>
              <td>
                <Link
                  to={`/user/update/${data._id}`}
                  className="btn btn-info mx-2"
                >
                  Update
                </Link>
                |
                <Link
                  to={`/user/delete/${data._id}`}
                  className="btn btn-danger mx-2"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
