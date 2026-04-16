import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { BlogContext } from "../context/BlogContext";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs, updateBlog } = useContext(BlogContext);

  const blog = blogs.find((b) => b.id === Number(id));

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // 🔥 Set initial data
  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setBody(blog.body);
    }
  }, [blog]);

  const handleUpdate = () => {
    updateBlog(id, { title, body });
    navigate("/"); // go back after update
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Edit Blog</h2>

      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}