import { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export default function CreateBlog() {
  const { createBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog({ title, body });
  };

  return (
    <div className="form">
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
        <button>Create</button>
      </form>
    </div>
  );
}
<div className="container">
  <div className="form">
    {/* form content */}
  </div>
</div>