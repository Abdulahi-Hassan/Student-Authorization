import UseClass from "../../Api/Class/UseClass"
import moment from "moment";
import UseStudent from "../../Api/Student/UseStudent";
import UseUser from "../../Api/User/UseUser";

const Table = () => {
  const {useclassget}=UseClass();
  const {GetStudent}=UseStudent();
  const {Getuser}=UseUser();
 
  return (
    <div
      className="container mt-5"
      style={{ marginTop: "10px", padding: "0 4%" }}
    >
     

      <table className="table  mt-5 text-center">
        <thead>
          <tr>
            <th>Class</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        <tr >
                <td>{useclassget.ClassName}</td>
                <td>{useclassget.ClassStatus}</td>
                <td>{useclassget && moment(useclassget.ClassDate).format("l")}</td>
              </tr>
        </tbody>

        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
        <tr >
                <td>{Getuser.Email}</td>
                <td>{Getuser.Name}</td>
                <td>{Getuser.Role}</td>
              </tr>
        </tbody>
        <thead>
          <tr>
            <th>Name</th>
            <th>Balace</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        <tr >
                <td>{GetStudent.Name}</td>
                <td>{GetStudent.Balance}</td>
                <td>{GetStudent.Status}</td>
              </tr>
        </tbody>
        
      </table>

    

    </div>
  )
}

export default Table
