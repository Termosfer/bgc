import { Route, Routes } from "react-router";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Contact from "../Pages/Contact/Contact";
import Layout from "../Layout/Layout";

const PublicRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default PublicRoutes;
