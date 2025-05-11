import img from "../../assets/3071.jpg.webp";
import ContactUs from "../../Components/ContactUs/ContactUs";
const Audit = () => {
  return (
     <>
      <div className="w-full h-[50vh] md:h-[90vh]">
        <img src={img} alt="img" className=" w-full h-full" />
      </div>
      <section className="bg-white py-16">

      </section>
      <ContactUs bg={"#f5f5f5"} />
    </>
  )
}

export default Audit