import img from "../../assets/3071.jpg.webp";
import ContactUs from "../../Components/ContactUs/ContactUs";
const Muhasibat = () => {
  return (
    <>
      <div className="w-full h-[50vh] md:h-[90vh]">
        <img src={img} alt="img" className=" w-full h-full" />
      </div>
      <ContactUs bg={"#f5f5f5"} />
    </>
  );
};

export default Muhasibat;
