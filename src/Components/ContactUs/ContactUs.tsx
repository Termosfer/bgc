import phone from "../../assets/basic_smartphone.svg";
import location from "../../assets/basic_geolocalize01.svg";
import envelope from "../../assets/envelope_e-mail_mail_post_contact_send.svg";

interface ContactUsProps {
  bg: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ bg }) => {
  const data4 = [
    {
      image: phone,
      title: "Telefon",
      subtitle: ["+99412 568 00 89", "+99450 250 83 30"],
    },
    {
      image: location,
      title: "Ünvan",
      subtitle: [
        "Bakı şəh., Binəqədi rayonu,",
        "Rəsulzadə qəsəbəsi, İ.Cümşüdov küçəsi 2F",
      ],
    },
    {
      image: envelope,
      title: "Email",
      subtitle: ["info@bgc.az"],
    },
  ];

  return (
    <section style={{ backgroundColor: bg }}>
      <div className="max-w-screen-xl mx-auto px-4 py-20">
        <div className="flex items-center justify-center mb-16">
          <h3 className="text-[36px] sm:text-[40px] font-semibold">Əlaqə</h3>
        </div>

        <div className="flex flex-col items-center md:items-baseline gap-14 lg:flex-row lg:justify-evenly">
          {data4.map((d, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 items-center justify-center text-center"
            >
              <img src={d.image} alt={d.title} className="w-16" />
              <h4 className="font-bold text-[22px]">{d.title}</h4>
              <div className="font-light space-y-1 text-[16px] ">
                {d.subtitle.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
