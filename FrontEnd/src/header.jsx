import { Link, useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import cookie from "universal-cookie";
export const Header = () => {
  let Cookie = new cookie();
  let { user } = Cookie.get("user");
  const Handle = () => {
    let nav = document.querySelector("nav");
    nav.classList.toggle("menu");
  };
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  const HandleLoginOut = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/login");
    });
  };
  return (
    <div className="container lii ">
      <header>
        <div>
          <Link className="logo">Student</Link>
        </div>
        <nav className="ms-5 ">
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          {user && <Link to="/UserDashboard">User</Link>}
          <Link to="/contuct">Contuct</Link>
        </nav>
        <div className="signup">
          {!token && (
            <>
              <Link style={{ textDecoration: "none" }} to="/login">
                SignIn
              </Link>
              <Link style={{ textDecoration: "none" }} to="/register">
                SignUp
              </Link>
            </>
          )}

          {token && (
            <>
              <Link onClick={HandleLoginOut} style={{ textDecoration: "none" }}>
                SignOut
              </Link>
            </>
          )}
        </div>

        <div className="icons">
          <TiThMenu onClick={Handle} />
        </div>
      </header>
    </div>
  );
};
