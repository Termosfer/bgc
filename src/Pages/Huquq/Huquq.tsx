import img from "../../assets/3071.jpg.webp";
import ContactUs from "../../Components/ContactUs/ContactUs";
const Huquq = () => {
  const data = [
    "Hüquqi şəxslərin yaradılması üzrə (təsis müqaviləsi, qərar, nizamnamə və s.) hazırlanması",
    "Hüquqi şəxslərin təsis sənədlərinə və dövlət qeydiyyat məlumatlarına dəyişikliklərin edilməsi üzrə sənədlərin hazırlanması",
    "Kontragentlərə pretenziyaların hazırlanması",
    "Kontraqentlər tərəfindən təqdim olunan müqavilələrin təhlili (analizi) və rəyin verilməsi",
    "Dövlət orqanlarına məktubların və müraciətlərin hazırlanması",
    "Daxili sənədlərin (qərar, əmr, sərəncam və s.) hazırlanması",
    "Daxili sənədlər (qərar, əmr, sərəncam və s.) üzrə hüquqi rəyin hazırlanması",
    "Hər növ müqavilələrin hazırlanması",
    "Sənədlərin Türk, Rus və İngilis dillərindən Azərbaycan dilinə tərcüməsi",
    "Qanunvericilik üzrə yazılı rəylərin verilməsi(hər bir məsələ üzrə)",
    "Məhkəmələr və dövlət orqanlarda təmsilçilik",
    "Hüquq və azadlığın müdafiəsi",
    "Məhkəmələrdə nümayəndəlik",
    "Mülki hüquq münasibətlər üzrə",
    "Əmək hüquq münasibətlər üzrə",
    "Ailə hüquq münasibətlər üzrə",
    "Mənzil hüquq münasibətlər üzrə",
    "Vərəsəliyn açılması və bərpası",
    "Miqrasiya və vətəndaşlıq məsələləri",
    "Şəxsin şərəf və ləyaqətinin müdafiəsi",
    "Daşınar və daşınmaz əmlak mübahisələri",
    "Dövlət və bələdiyyə orqanlarının hərəkət və hərəkətsizliyindən müdafiyə",
    
  ];
  return (
    <>
      <div className="w-full h-[50vh] md:h-[90vh]">
        <img src={img} alt="img" className=" w-full h-full" />
      </div>
      <section className="bg-white py-16">
        <div className="w-11/12 max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Hüquqi xidmətlər
          </h1>
          <ul className="list-disc list-outside pl-3 2xl:pl-3 text-black space-y-3 text-base md:text-[16px] font-light ">
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

export default Huquq;
