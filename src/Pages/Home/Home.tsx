import Slide from "../../Components/Slide/Slide";
import img from "../../assets/download.svg";
import scale from "../../assets/6715.jpg.webp";
import muhasibat from "../../assets/mhasibat_ikon.png.webp";
import maliyye from "../../assets/maliyye_ikon.png.webp";
import audit from "../../assets/audit_ikon.png.webp";
import meslehet from "../../assets/2169346.png";
import autsorsinq from "../../assets/autsorsinq.png.webp";
import vergi from "../../assets/vergitutma.png.webp";
import huquq from "../../assets/hquq_v_vkil.png.webp";
import hr from "../../assets/hr.png.webp";
import c from "../../assets/11256101.png";

import AboutUs from "../../Components/AboutUs/AboutUs";
import Advantages from "../../Components/Advantages/Advantages";
import ContactUs from "../../Components/ContactUs/ContactUs";
const Home = () => {
  const data2 = [
    {
      image: muhasibat,
      title: "Mühasibat uçotu",
    },
    {
      image: maliyye,
      title: "Maliyyə konsaltinq",
    },
    {
      image: audit,
      title: "Audit xidməti",
    },
    {
      image: meslehet,
      title: "Qida Təhlükəsizliyi",
    },
    {
      image: autsorsinq,
      title: "Dövlət satınalmaları",
    },
    {
      image: vergi,
      title: "Vergi məsələləri ",
    },
    {
      image: huquq,
      title: "Hüquqi məsləhət və vəkil xidməti",
    },
    {
      image: hr,
      title: "İnsan Resursları (HR) üzrə xidmətlər",
    },
    {
      image: c,
      title: "1C 8.3 Müəssisə proqram təminatı üzrə xidmətlər",
    },
  ];

  const data3 = [
    {
      image: img,
      title: "Telekommunikasiya",
    },
    {
      image: img,
      title: "Qida sənayesi",
    },
    {
      image: img,
      title: "Sənaye istehsalı",
    },
    {
      image: img,
      title: "Xidmət sektoru",
    },
    {
      image: img,
      title: "Media və kommunikasiya",
    },
    {
      image: img,
      title: "Topdan və pərakəndə ticarət",
    },
    {
      image: img,
      title: "Tikinti",
    },
    {
      image: img,
      title: "Hotelçilik",
    },
    {
      image: img,
      title: "Turizm",
    },
    {
      image: img,
      title: "Logistika və nəqliyyat",
    },
    {
      image: img,
      title: "İçtimai iaşə",
    },
  ];

  return (
    <>
      <Slide />
      <AboutUs />
      <Advantages bg={"#f5f5f5"} />
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:w-5/6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="mb-6 lg:mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-6">
                  Əsas məqsədlərimiz
                </h2>
                <div className="w-24 h-[2px] bg-[#000000]"></div>
              </div>

              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Sahibkarlıq subyektlərinin cari problemlərin həll etməsinə
                  yardımçı olmaq, biznes proseslərinin optimallaşdırması,
                  hüquqazidd müdaxilələrin minimuma endirilməsi, biznesin
                  inkişaf etdirilməsində tövsiyələrin verilməsi, xərclərə hüquq
                  müstəvisində nəzarətin təmin olunması və inkişaf
                  strategiyasının həyata keçirməsi, nəticədə mümkün problemlərin
                  yaranmasının qarşısının alınmasıdır.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Fəaliyyət dövrü ərzində ölkənin qanunlarının icrasına nail
                  olmaqda vasitəçi rolunu aparmaq.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
                <img
                  src={scale}
                  alt="Əsas məqsədlərimiz"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="text-center  mx-auto">
          <h3 className="text-[40px] font-semibold mb-10">Xidmətlərimiz</h3>
          <p className="px-5 md:px-0  xl:w-[45%] 2xl:w-[35%] mx-auto text-[20px] leading-[2] font-[300]">
            Digər konsaltinq şirkətlərindən fərqli olaraq Biznes Qarant
            Konsaltinq sahibkarın maraqlarını diqqətdə saxlayaraq qarşılıqlı
            razılaşma əsasında müəyyən güzəştlər tətbiq edir. Hədəfimiz istər
            kiçik, istərsə də iri sahibkarları aşağıdakı sahələr üzrə yüksək
            keyfiyyətli və etibarlı xidmətlərlə təmin etməkdir.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8 w-4/5 mx-auto py-20
  [&>*]:border-b-2 [&>*]:border-[#667a94]
  [&>*:last-child]:border-b-0
  lg:[&>*]:border-b-0
  lg:[&>*:not(:nth-child(4n))]:border-r-2 lg:[&>*]:border-[#667a94]"
        >
          {data2.map((d, index) => (
            <div className="flex flex-col items-center py-6 px-10" key={index}>
              <img
                src={d.image}
                alt={d.title}
                className="h-24 mb-4 object-contain"
              />
              <h4 className="text-[20px] font-bold text-center">{d.title}</h4>
            </div>
          ))}
        </div>
        <div className="w-3/5 mx-auto  bg-gradient-to-r from-transparent via-black to-transparent h-[2px]"></div>
      </section>
      <section className="w-full">
        <div className="text-center">
          <h3 className="text-[40px] font-semibold mb-10">
            Fəaliyyət Sahələri
          </h3>
          <p className="xl:w-[45%] 2xl:w-[35%] mx-auto text-[20px] leading-[2] font-[300]">
            Biznes Qarant Konsaltinq sənaye müəssisələri, kiçik və orta biznes subyektləri, eləcə də iri və çoxşaxəli şirkətlərlə əməkdaşlıq edir.
          </p>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 mx-auto w-full  md:w-3/4  lg:mx-[20%] sm:px-5 py-20">
          {data3.map((d, index) => {
            return (
              <div
                className="flex items-center justify-start gap-5 py-6 px-5 sm:px-10"
                key={index}
              >
                <img src={d.image} alt="image" className="w-8" />
                <span className="text-[18px] font-semibold text-nowrap">
                  {d.title}
                </span>
              </div>
            );
          })}
        </div>
      </section>
      <ContactUs bg={"#f5f5f5"} />
    </>
  );
};

export default Home;
