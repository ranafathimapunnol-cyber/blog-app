import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Blog App</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </div>
    </div>
  );
};

export default Navbar;