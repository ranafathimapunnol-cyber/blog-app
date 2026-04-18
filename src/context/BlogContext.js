import { createContext, useState, useEffect } from "react"; 
import axios from "axios";

export const BlogContext = createContext(); 

export const BlogProvider = ({ children }) => { // 🗂️ State to hold blogs , children means the components that will use this context
  const [blogs, setBlogs] = useState([]);  //backend API URL

  const API = "http://127.0.0.1:8000/api/blogs/"; 

  // 🔄 GET
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(API); 
      setBlogs(res.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  // ➕ CREATE
  const createBlog = async (blog) => {
    try {
      console.log("Sending to backend:", blog);

      // ✅ ensure correct fields
      await axios.post(API, {
        title: blog.title,
        body: blog.body,   // 🔥 important
      });

      fetchBlogs();
    } catch (error) {
      console.error("Create Error:", error.response?.data);
    }
  };

  // ❌ DELETE
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`${API}${id}/`); 
      fetchBlogs();
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  // ✏️ UPDATE
  const updateBlog = async (id, blog) => {
    try {
      await axios.put(`${API}${id}/`, {
        title: blog.title,
        body: blog.body,   // 🔥 important
      });

      fetchBlogs();
    } catch (error) {
      console.error("Update Error:", error.response?.data);
    }
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