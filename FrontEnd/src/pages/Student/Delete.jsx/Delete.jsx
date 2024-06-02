import UseStudent from "../../../Api/Student/UseStudent";
import { useParams } from "react-router-dom";
const DeleteStudent = () => {
  let { id } = useParams();
  const { deletestudent } = UseStudent();
    deletestudent({id});
}
export default DeleteStudent;
