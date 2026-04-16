import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const API = "http://127.0.0.1:8000/api/blogs/";

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(API);
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const createBlog = async (blog) => {
    await axios.post(API, blog);
    fetchBlogs();
  };

  const deleteBlog = async (id) => {
    await axios.delete(`${API}${id}/`);
    fetchBlogs();
  };

  const updateBlog = async (id, blog) => {
    await axios.put(`${API}${id}/`, blog);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider
      value={{ blogs, createBlog, deleteBlog, updateBlog }}
    >
      {children}
    </BlogContext.Provider>
  );
};