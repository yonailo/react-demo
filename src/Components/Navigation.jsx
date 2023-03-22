import Button from "@mui/material/Button";

function Nav() {
  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <Button href="/" variant="contained">
        Homepage
      </Button>
      <Button href="/counter" variant="contained">
        Counter
      </Button>
      <Button href="/login" variant="contained">
        Login
      </Button>
      <Button href="/planet" variant="contained">
        Planet API
      </Button>
      <Button href="/register" variant="contained">
        Register
      </Button>
      <Button href="/dashboard" variant="contained">
        Dashboard
      </Button>
      <Button href="/createPost" variant="contained">
        Create posts
      </Button>
      <Button href="/listPosts" variant="contained">
        Lists posts
      </Button>
    </div>
  );
}

export default Nav;
