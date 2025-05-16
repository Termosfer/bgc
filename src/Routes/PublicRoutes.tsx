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
import Qida from "../Pages/Qida/Qida";
import Satinalma from "../Pages/Satinalma/Satinalma";
import Muessise from "../Pages/Muessise/Muessise";

const PublicRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/haqqımızda" element={<About />} />
        <Route path="/əlaqə" element={<Contact />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/mühasibat" element={<Muhasibat />} />
        <Route path="/vergi" element={<Vergi />} />
        <Route path="/hr" element={<HR />} />
        <Route path="/maliyyə" element={<Maliyye />} />
        <Route path="/hüquq" element={<Huquq />} />
        <Route path="/qida" element={<Qida/>} />
        <Route path="/satınalma" element={<Satinalma/>} />
        <Route path="/1c-proqramı" element={<Muessise/>} />
      </Routes>
    </Layout>
  );
};

export default PublicRoutes;
