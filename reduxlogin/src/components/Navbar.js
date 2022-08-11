//components
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { isAuth } from "../store/actions/AuthAction";
import { FaHome, FaSignInAlt, FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { Nav } from "./Navbar.styled";
import { handleLogout } from "../store/actions/AuthAction";

function Navbar({ auth }) {
  return (
    <Nav>
      {/* <Link to="/">DBC pessoas</Link> */}
      <ul>
        {isAuth ? (
          <>
            <NavLink to="/">
              <FaHome size={24} />
            </NavLink>
            <NavLink to="/pessoa">
              <FaUserAlt size={24} />
            </NavLink>

            <NavLink to="/login">
              <FaSignOutAlt size={24} onClick={handleLogout} />
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <FaSignInAlt size={24} />
            </NavLink>
          </>
        )}
      </ul>
    </Nav>
  );
}

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth,
});

export default connect(mapStateToProps)(Navbar);
