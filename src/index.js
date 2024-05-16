import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddMachinePage from "./Pages/AddMachinePage";
import NotFound from "./Pages/404";
import AboutMachinePage from "./Pages/AboutMachinePage";
import LoginPage from "./Pages/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="add-machine" element={<AddMachinePage />} />
          <Route path="machine-detail" element={<AboutMachinePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
