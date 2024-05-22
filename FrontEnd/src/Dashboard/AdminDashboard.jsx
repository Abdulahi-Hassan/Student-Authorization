import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import "../index.css";

// let User = JSON.parse(localStorage.getItem("user")) && JSON.parse(localStorage.getItem("user"));
// let user = JSON.parse(localStorage.getItem("AllUser")) && JSON.parse(localStorage.getItem("AllUser"));

// let student = JSON.parse(localStorage.getItem("student")) &&  JSON.parse(localStorage.getItem("student"));
// let Class = JSON.parse(localStorage.getItem("class")) && JSON.parse(localStorage.getItem("class"));;
// let receipt = JSON.parse(localStorage.getItem("receipt")) && JSON.parse(localStorage.getItem("receipt"));


export const AdminDashboard = () => {
  const Handle = () => {
    let user = document.querySelector(".user");
    user.classList.toggle("open");
  };
  const SingleDashboard = () => {
    const singleuser = document.querySelector(".singleuser");
    singleuser.classList.toggle("open");
  };
  return (
    <div className="row">
      <div className="col-3 ">
        <div className="user">
          <TiThMenu className="iconMenu" onClick={Handle} />
          {/* <Link  className="bg">
            <img
             
              className="image"
              src={`http://localhost:3000/images/` + user.Avator}
              alt=""
            />
          </Link> */}
          {/* <Link
            to="/AdminDashboard "
            className="bg-white text-danger "
            style={{ lineHeight: "45px" }}
          >
            {user.UserName}
          </Link> */}
          <Link to="/Student">Student</Link>
          <Link to="/Class">Class</Link>
          <Link to="/User">User</Link>
          <Link to="/Receipt">Payment</Link>
        </div>
      </div>
      {/* <div className="col counter mt-5">
        <div className="count text-center text-white  ">
          Student
          <div className="text-white fs-2">{student.length}</div>
        </div>
        <div className="count text-center text-white  ">
          User
          <div className="text-white fs-2">{User.length}</div>
        </div>
        <div className="count text-center text-white  ">
          Class
          <div className="text-white fs-2">{Class.length}</div>
        </div>
        <div className="count text-center text-white  ">
          Receipt
          <div className="text-white fs-2">{receipt.length}</div>
        </div>
      </div> */}
    </div>
  );
};
