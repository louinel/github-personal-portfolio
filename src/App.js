import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile userName="louinel" />} />
          <Route path="/projects" element={<Projects userName="louinel" />} />
          <Route
            path="/projects/:name"
            element={<ProjectDetail userName="louinel" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
