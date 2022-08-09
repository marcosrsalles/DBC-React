//components
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">DBC pessoas</Link>
      <ul>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/login">Login</NavLink>

        <NavLink to="/register">Register</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
