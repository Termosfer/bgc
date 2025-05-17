import ContactUs from "../../Components/ContactUs/ContactUs";
import img from "../../assets/3071.jpg.webp";
const Qida = () => {
  const data = [
    " BGC sizə Qida təhlükəsizliyi sahəsində kompleks həllər təklif edir.",
    "Qida təhlükəsizliyi üzrə konsaltinq xidməti qida sənayesi müəssisələrinə məhsullarının təhlükəsizliyini və keyfiyyətini təmin etməyə kömək edən tədbirlər kompleksidir",
    " Qida istehsalı ilə məşğul olan müəssisələrin Azərbaycan Respublikasının Qida Təhlükəsizliyi Agentliyi tərəfindən qeydiyyata alınması prosesini qısa zamanda və peşəkar şəkildə həyata keçiririk.",
    "Biz iaşə obyektləri və qida məhsullarının istehsalı ilə məşğul olan sahibkarlara qida təhlükəsizliyi standartlarına uyğunluqla bağlı bütün prosedurlarda dəstək verir, lazımi sənədləşməni aparır, yoxlamalar və auditlər həyata keçiririk.",
    "Qida Təhlükəsizliyi Agentliyi tərəfindən tələb olunan qayda və standartların tətbiqi, eləcə də bu proseslərin davamlı monitorinqi mütəxəssislərimiz tərəfindən yerinə yetirilir.",
    "İstehsal müəssisələrinin mövcud texniki normativ-hüquqi aktlara və qida təhlükəsizliyi standartlarına uyğun şəkildə qurulması sahə üzrə ixtisaslaşmış aparıcı mütəxəssislərimiz tərəfindən həyata keçirilir.",
    "Keyfiyyətə nəzarət və qida təhlükəsizliyi üzrə konsaltinqi bizə etibar edin!"
  ]
  return (
    <>
      <div className="w-full h-[50vh] md:h-[90vh]">
        <img src={img} alt="img" className=" w-full h-full" />
      </div>
      <section className="bg-white py-16">
        <div className="w-11/12 max-w-6xl mx-auto px-4 md:px-8 pb-40">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Qida təhlükəsizliyi sahəsində göstərilən xidmətlər
          </h1>
          
           <ul className="list-disc list-outside pl-3 2xl:pl-3 text-black space-y-3 text-base md:text-[16px] font-light text-black">
            {data.map((d, index) => {
              return <li key={index}>{d}</li>;
            })}
          </ul>
        </div>
      </section>
      <ContactUs bg={"#f5f5f5"} />
    </>
  );
};

export default Qida;
