import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/blogs/");
    setBlogs(res.data);
  };

  const createBlog = async (blog) => {
    await axios.post("http://127.0.0.1:8000/api/blogs/", blog);
    fetchBlogs();
  };

  const deleteBlog = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/blogs/${id}/`);
    fetchBlogs();
  };

  const updateBlog = async (id, blog) => {
    await axios.put(`http://127.0.0.1:8000/api/blogs/${id}/`, blog);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, createBlog, deleteBlog, updateBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
