import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> Mohamed Elshahat Blogs</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link className="createBlog" to="/create">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
