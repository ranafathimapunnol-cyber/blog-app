import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import CreateBlog from "./pages/CreateBlog";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import "./App.css";

function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;