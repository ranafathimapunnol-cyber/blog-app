import { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const CreateBlog = () => {
  const { createBlog } = useContext(BlogContext);

  const [form, setForm] = useState({
    title: "",
    body: "",   // ✅ use body (match backend)
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sending:", form);

    // ✅ validation
    if (!form.title.trim() || !form.body.trim()) {
      alert("Please fill all fields!");
      return;
    }

    createBlog(form);  // ✅ now sends { title, body }

    setForm({ title: "", body: "" });
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
          value={form.body}
          onChange={(e) =>
            setForm({ ...form, body: e.target.value })
          }
        />

        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;