import img from "../../assets/8975.jpg.webp";
import ContactUs from "../../Components/ContactUs/ContactUs";
const Contact = () => {
  return (
    <div>
      <div className="w-full h-[70vh] md:h-[90vh]">
      <img src={img} alt="img" className="w-full h-full"/>
      </div>
      <ContactUs bg={"#fff"}/>
    </div>
  );
};

export default Contact;
