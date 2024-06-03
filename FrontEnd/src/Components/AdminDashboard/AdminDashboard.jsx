import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import UseUser from "../../Api/User/UseUser";
import { UpdateUserProfile } from "../UserDashboard/Update.Profile";
const AdminDashboard = () => {
  const { Getuser } = UseUser();
  const Handle = () => {
    let user = document.querySelector(".user");
    user.classList.toggle("open");
  };
  const SingleDashboard = () => {
    const singleuser = document.querySelector(".singleuser");
    singleuser.classList.toggle("open");
    let singleuserimage = document.querySelector(".singleuserimage");
    singleuserimage.classList.remove("open");
  };
  const ImageEdit = () => {
    let singleuserimage = document.querySelector(".singleuserimage");
    singleuserimage.classList.toggle("open");
    const singleuser = document.querySelector(".singleuser");
    singleuser.classList.remove("open");
  };

  return (
    <div className="row">
      <div className="col-3">
        <div className="user">
          <TiThMenu className="iconMenu" onClick={Handle} />
          <Link to={`/Profile/${Getuser._id}`} className="bg">
            <img
              onClick={ImageEdit}
              className="image"
              src={`http://localhost:3000/images/` + Getuser.Profile}
              alt=""
            />
          </Link>
          <Link
            to="/UserDashboard "
            className="bg-white text-danger "
            style={{ lineHeight: "45px" }}
          >
            {Getuser.Name}
          </Link>
          <Link
            to="/UserDashboard"
            onClick={SingleDashboard}
            className="active SingeUser text-light fs-5"
          >
            Dashboard
          </Link>
          <Link to="/User">User</Link>
          <Link to="/Student">Student</Link>
          <Link to="/Class" onClick={ImageEdit}>
            Class
          </Link>
          <Link to="/Payment" onClick={ImageEdit}>
            Payment
          </Link>
        </div>
      </div>
      <div className="col singleuser">
        {/* <Table /> */}
      </div>
      <div className="col singleuserimage">
      
        <UpdateUserProfile />
        
      </div>
    </div>
  );
};
export default AdminDashboard;
