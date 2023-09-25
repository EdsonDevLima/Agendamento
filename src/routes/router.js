import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/home";
import Header from "../components/header/header";
const RouterApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterApp;
