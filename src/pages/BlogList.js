import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

export default function BlogList() {
  const { blogs, deleteBlog } = useContext(BlogContext);

  return (
    <div className="container">
      <h1>Blogs</h1>

      {blogs.length === 0 ? (
        <p>No blogs yet 😢</p>
      ) : (
        blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>

            <Link to={`/blogs/${blog.id}`}>View</Link>
            <button onClick={() => deleteBlog(blog.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
