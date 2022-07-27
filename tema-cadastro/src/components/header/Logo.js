import { FaEarlybirds } from "react-icons/fa";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <FaEarlybirds style={{ fontSize: "50" }} />
    </Link>
  );
}

export default Logo;
