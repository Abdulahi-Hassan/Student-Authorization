import { Link } from "react-router-dom";
import UseStudent from "../Api/Student/UseStudent";
export const AllStudent = () => {
  const { GetAllstudent } = UseStudent();
  localStorage.setItem("student", JSON.stringify(GetAllstudent));
  return (
    <div
      className="container mt-5"
      style={{ marginTop: "10px", padding: "0 4%" }}
    >
      <Link to={`/student/signup`} className="btn btn-info mt-5 mx-2">
        Create +
      </Link>
      <table className="table  mt-5 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Address</th>
            <th>Balace</th>
            <th>Status</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {GetAllstudent &&
            GetAllstudent.map((data, index) => (
              <tr key={index}>
                <td>{data._id}</td>
                <td>{data.Name}</td>
                <td>{data.Email.Email}</td>
                <td>{data.Address}</td>
                <td>{data.Balance}</td>
                <td>{data.Status}</td>

                <td>
                  {
                    <div>
                      <Link
                        to={`/student/update/${data._id}`}
                        className="btn btn-primary mx-2"
                      >
                        Edit
                      </Link>
                      |
                      <Link
                        to={`/student/delete/${data._id}`}
                        className="btn btn-danger mx-2"
                      >
                        Delete
                      </Link>
                    </div>
                  }
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
