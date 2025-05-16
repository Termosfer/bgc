import AboutUs from "../../Components/AboutUs/AboutUs";
import Advantages from "../../Components/Advantages/Advantages";
import ContactUs from "../../Components/ContactUs/ContactUs";

const About = () => {
  return (
    <>
      <AboutUs />
      <div className="w-3/5 mx-auto  bg-gradient-to-r from-transparent via-black to-transparent h-[1px] my-30"></div>
      <Advantages bg={"#fff"} />
      <ContactUs bg={"#f5f5f5"}/>
    </>
  );
};

export default About;
