import { useParams } from "react-router-dom";
import UseClass from "../../../Api/Class/UseClass";
const ClassDelete = () => {
  let { id } = useParams();
  const { deleteclass } = UseClass();
  deleteclass({ id });
};

export default ClassDelete;
