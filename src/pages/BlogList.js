import { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";

const BlogList = () => {
  const { blogs, deleteBlog, updateBlog } = useContext(BlogContext);

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    body: "",   // ✅ use body (same as backend)
  });

  const startEdit = (blog) => {
    setEditingId(blog.id);
    setEditData({
      title: blog.title,
      body: blog.body,   // ✅ FIX
    });
  };

  const handleUpdate = () => {
    if (!editData.title.trim() || !editData.body.trim()) {
      alert("Fields cannot be empty!");
      return;
    }

    updateBlog(editingId, editData); // ✅ already correct now
    setEditingId(null);
  };

  return (
    <div className="container">
      <h1>All Blogs</h1>

      {blogs.length === 0 ? (
        <p className="empty">No blogs yet 🚀</p>
      ) : (
        blogs.map((blog) => (
          <div className="card" key={blog.id}>
            {editingId === blog.id ? (
              <>
                <input
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      title: e.target.value,
                    })
                  }
                />

                <textarea
                  value={editData.body}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      body: e.target.value,
                    })
                  }
                />

                <button onClick={handleUpdate}>Save</button>
              </>
            ) : (
              <>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p> {/* ✅ already correct */}

                <button onClick={() => startEdit(blog)}>
                  Edit
                </button>

                <button onClick={() => deleteBlog(blog.id)}>
                  Delete
                </button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;