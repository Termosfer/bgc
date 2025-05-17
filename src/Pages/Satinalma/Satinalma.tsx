import ContactUs from "../../Components/ContactUs/ContactUs";
import img from "../../assets/3071.jpg.webp";
const Satinalma = () => {
  const data = [
    "Dövlət satınalmaları sahəsində satınalan və təchizatçılara peşəkar xidmətlərin göstərilməsi.",
    "BGC satınalan təşkilatlar üçün kompleks xidmətlər təklif edir. Bu xidmətlərə satınalma planın hazırlanması, ehtimal qiymətinin hesablanması, satınalma prosesi üçün tələb olunan sənədlərin hazırlanması,şərtlər toplusunun hazırlanması, satınalma bütün mərhələlərində peşəkar dəstəyin göstərilməsi aiddir. Bütün xidmətlərin göstərilməsi zamanı qanunvericilik və normativ-hüquqi aktların tələblərinə riayiət edilməsinə xüsusi diqqət yetirilir.",
    "Təchizatçılar üçün göstərilən xidmətlər isə A – dan Z – yə bütün satınalma mərhələlərini əhatə edir. Təchizatçının profilinə uyğun satınalmaların axtarılması, tələb edilən sənədlərin hazırlması, şərtlər toplusunun təhlili kimi bu xidmətlərdən yalnız bir neçəsidir.",
    "Eyni zamanda BGC həm satınalan həm də təchizatçılar üçün peşəkar təlimçilər tərəfindən təşkil edilən fərdi və korporativ təlimlər təkli edir.",
  ];
  const data1 = [
    "Satınalma planının hazırlanması",
    "Portalda istifadə olunan sənədlərin yığılması",
    "Satınalma planına uyğun şərtlər toplusunun yığılmasına dəstək",
    "Satınalma prosesinin təşkil olunmasına dəstək",
    "Satınalmada iştirak edən müəssisələrin qiymətləndirilməsinə dəstək",
    "Satınalma prosesinin yekun protokolunun və digər vacib sənədlərin tərtib olunmasına dəstək",
  ];
  const data2 = [
    "Müəssisənin fəaliyyət tipinə uyğun satınalmaların axtarışı",
    "Satınalmalarda iştirak üçün tələb edilən sənədlərin hazırlanması",
    "Qiymət təklifinin formalaşdırılmasına dəstək",
    "Satınalma portalından istifadə dəstəyi",
    "Satınalma prosesində yaranan problemlər və danışıqların aparılmasında konsultasiya",
  ];
  const data3 = [
    "Online və əyani təlimlərin təşkil olunması",
    "Müəssisələr üçün xüsusi təlimlərin təşkil olunması",
    "Dövlət satınalmaları haqqında Azərbaycan Respublikasının qanununun vacib nyuanslarının izahı",
    "Satınalmalarda sənədləşdirilmənin aparılması",
    "Satınalma metodları və təchizatçıların satınalmalarda iştirakı",
    "Təlim prosesindən real baş tutmuş satınalma nümunələrinə əsaslanan təlim proqramı",
  ];
  return (
    <>
      <div className="w-full h-[50vh] md:h-[90vh]">
        <img src={img} alt="img" className=" w-full h-full" />
      </div>
      <section className="bg-white py-16">
        <div className="w-11/12 max-w-6xl mx-auto px-4 md:px-8 pb-40" >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" data-aos="fade-up">
            Dövlət satınalmaları sahəsində xidmətlər
          </h1>
          <ul className="list-disc list-outside pl-3 2xl:pl-3 text-black space-y-3 text-base md:text-[16px] font-light text-black">
            {data.map((d, index) => {
              return <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>{d}</li>;
            })}
          </ul>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 my-10">
            Dövlət satınalmaları portalından istifadə xidmətlərimiz
          </h1>
          <div className="mb-20">
            <h1 className="text-3xl md:text-2xl font-bold text-gray-800 mb-6">
              Satınalan təşkilatlara dəstək xidmətləri
            </h1>
            <ul className="list-disc list-outside pl-3 2xl:pl-3 text-black space-y-3 text-base md:text-[16px] font-light text-black">
              {data1.map((d, index) => {
                return <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>{d}</li>;
              })}
            </ul>
          </div>
          <div className="mb-20">
            <h1 className="text-3xl md:text-2xl font-bold text-gray-800 mb-6">
              Təchizatçı müəssisələrə dəstək xidmətləri
            </h1>
            <ul className="list-disc list-outside pl-3 2xl:pl-3 text-black space-y-3 text-base md:text-[16px] font-light text-black">
              {data2.map((d, index) => {
                return <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>{d}</li>;
              })}
            </ul>
          </div>
          <div className="mb-20">
            <h1 className="text-3xl md:text-2xl font-bold text-gray-800 mb-6">
              Dövlət satınalmaları təlimləri
            </h1>
            <ul className="list-disc list-outside pl-3 2xl:pl-3 text-black space-y-3 text-base md:text-[16px] font-light text-black">
              {data3.map((d, index) => {
                return <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>{d}</li>;
              })}
            </ul>
          </div>
        </div>
      </section>
      <ContactUs bg={"#f5f5f5"} />
    </>
  );
};

export default Satinalma;
