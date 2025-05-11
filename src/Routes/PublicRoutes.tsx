import { Route, Routes } from "react-router";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Layout from "../Layout/Layout";
import Audit from "../Pages/Audit/Audit";
import Muhasibat from "../Pages/Muhasibat/Muhasibat";
import Vergi from "../Pages/Vergi/Vergi";
import HR from "../Pages/HR/HR";
import Maliyye from "../Pages/Maliyye/Maliyye";
import Huquq from "../Pages/Huquq/Huquq";
import Meslehet from "../Pages/Meslehet/Meslehet";

const PublicRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/haqqımızda" element={<About />} />
        <Route path="/əlaqə" element={<Contact />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/muhasibat" element={<Muhasibat />} />
        <Route path="/vergi" element={<Vergi />} />
        <Route path="/hr" element={<HR />} />
        <Route path="/maliyye" element={<Maliyye />} />
        <Route path="/huquq" element={<Huquq />} />
        <Route path="/meslehet" element={<Meslehet/>} />
      </Routes>
    </Layout>
  );
};

export default PublicRoutes;
