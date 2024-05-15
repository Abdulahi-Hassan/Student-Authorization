import { Link } from "react-router-dom";
import imagelogo from "../Images/f.png";
import { TiThMenu } from "react-icons/ti";
import "../index.css";
// import { SingleDash } from './SingleDashboard';
import { User } from "../Components/AllUser/User";
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
      <div className="col-3">
        <div className="user">
          <TiThMenu className="iconMenu" onClick={Handle} />
          <Link to="/contuct" className="bg">
            <img className="image" src={imagelogo} alt="" />
          </Link>
          <Link
            to="/AdminDashboard"
            onClick={SingleDashboard}
            className="active SingeUser text-light fs-5"
          >
            Dashboard
          </Link>
          <Link to="/Student">Student</Link>
          <Link to="/Class">Class</Link>
          <Link to="/User">User</Link>
          <Link to="/Receipt">Payment</Link>
        </div>
      </div>
      <div
        className="col-8 bg-dark singleuser  text-white"
        style={{ width: "900px" }}
      >
        fdklfsda
        <User />
      </div>
    </div>
  );
};
