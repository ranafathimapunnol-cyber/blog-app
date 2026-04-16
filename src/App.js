import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import BlogList from "./pages/BlogList";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BlogProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;