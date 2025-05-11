import img from "../../assets/3071.jpg.webp";
import ContactUs from "../../Components/ContactUs/ContactUs";
import icon from "../../assets/download (1).svg";
const Vergi = () => {
  const data = [
    {
      image: icon,
      title: "Vergi uçotunun kompleks aparılması",
      description:
        "We are a leading firm in providing quality and value to our customers. Each member of our team has at least 5 years of legal experience. We like what we do.",
    },
    {
      image: icon,
      title: "Vergi münaqişələrinin həll edilməsi",
      description:
        "Each member of our team has at least 5 years of legal experience. They use their knowledge to make our clients' lives better.",
    },
    {
      image: icon,
      title: "Vergi yoxlamalarında iştirak edilməsi",
      description:
        "Our managers are always ready to answer your questions. You can call us at the weekends and at night. You can also visit our office for a personal consultation.",
    },
    {
      image: icon,
      title: "Mənfəət vergisinə təsir edən xərc sənədlərinin hazırlanması",
      description:
        "Our company works according to the principle of individual approach to every client. This method allows us to achieve success in problems of all levels.",
    },
    {
      image: icon,
      title: "Vergi planlaşdırma və vergilərin minimallaşdırılma",
      description:
        "Our prices are fixed for some standard services and we offer discounts for regular clients. Also, we ask our new clients about their birthday and prepare cool presents.",
    },
  ];
  return (
    <>
      <div className="w-full h-[50vh] md:h-[90vh]">
        <img src={img} alt="img" className=" w-full h-full" />
      </div>
      <section className="bg-white py-16">
        <div className="text-center pb-20 px-5">
          <h3 className="text-[32px] font-semibold mb-10">Vergitutma</h3>
          <p className="xl:w-[45%] 2xl:w-[35%] mx-auto text-[20px] leading-[2] font-[300]">
            Vergi uçotunun aparılması təkcə vergi bəyannamələrinin hazırlanması
            deyil - biz, vergi əməliyyatlarından gəlir əldə etməyiniz və
            firmanızın tələblərinə cavab verən vergi uçotunuzun təşkili üçün
            çalışırıq.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 w-5/6 mx-auto ">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 border border-[#eee] p-6 rounded-lg hover:shadow-lg transition-shadow bg-white"
            >
              <img src={item.image} alt={item.title} className="w-8 mb-4" />
              <div className="flex flex-col  gap-3">
                <h4 className="text-[20px] font-semibold mb-3">{item.title}</h4>
                <p className="text-[16px] text-[#555] leading-[1.6] font-[300]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactUs bg={"#f5f5f5"} />
    </>
  );
};

export default Vergi;
