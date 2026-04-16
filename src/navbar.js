import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>📝 Blog App</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/createblog">Create</Link>
      </div>
    </div>
  );
}