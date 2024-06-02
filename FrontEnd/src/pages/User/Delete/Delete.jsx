import { useParams } from "react-router-dom";
import UseUser from "../../../Api/User/UseUser";
const DeleteUser = () => {
  let { id } = useParams();
  const { useuserdelete } = UseUser();
  useuserdelete({id});
};

export default DeleteUser;
