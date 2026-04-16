import { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";

const BlogList = () => {
  const { blogs, deleteBlog, updateBlog } = useContext(BlogContext);

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    content: "",
  });

  const startEdit = (blog) => {
    setEditingId(blog.id);
    setEditData({
      title: blog.title,
      content: blog.content,
    });
  };

  const handleUpdate = () => {
    updateBlog(editingId, editData);
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
                  value={editData.content}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      content: e.target.value,
                    })
                  }
                />
                <button onClick={handleUpdate}>Save</button>
              </>
            ) : (
              <>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>

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