import img from "../../assets/8975.jpg.webp";
import ContactUs from "../../Components/ContactUs/ContactUs";
const Contact = () => {
  return (
    <div>
      <img src={img} alt="img" className="w-full"/>
      <ContactUs bg={"#fff"}/>
    </div>
  );
};

export default Contact;
