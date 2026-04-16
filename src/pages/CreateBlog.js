import { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const CreateBlog = () => {
  const { createBlog } = useContext(BlogContext);

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog(form);
    setForm({ title: "", content: "" });
  };

  return (
    <div className="container">
      <h1>Create Blog</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) =>
            setForm({ ...form, content: e.target.value })
          }
        />

        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;