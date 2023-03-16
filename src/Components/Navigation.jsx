import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/styles";

function Nav() {
  const theme = useTheme();

  return (
    <div style={{ display: "flex" }}>
      <Link to="/" style={theme.a}>
        Homepage
      </Link>
      <Link to="/counter" style={theme.a}>
        Counter
      </Link>
      <Link to="/login" style={theme.a}>
        Login
      </Link>
      <Link to="/planet" style={theme.a}>
        Planet API
      </Link>
      <Link to="/register" style={theme.a}>
        Register
      </Link>
      <Link to="/dashboard" style={theme.a}>
        Dashboard
      </Link>
      <Link to="/createPost" style={theme.a}>
        Create posts
      </Link>
      <Link to="/listPosts" style={theme.a}>
        Lists posts
      </Link>
    </div>
  );
}

export default Nav;
