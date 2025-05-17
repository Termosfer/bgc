import img from "../../assets/3071.jpg.webp";
import ContactUs from "../../Components/ContactUs/ContactUs";
import img1 from "../../assets/0dd32cc5-2a92-4cc7-9.png.webp";
import img2 from "../../assets/0dd32cc5-2a92-4cc7-9.png (1).webp";
import img3 from "../../assets/0dd32cc5-2a92-4cc7-9.png (2).webp";
import img4 from "../../assets/0dd32cc5-2a92-4cc7-9.png (3).webp";
const Audit = () => {
  const data = [
    {
      image: img1,
      title: "Sərbəst audit",
    },
    {
      image: img2,
      title: "Xüsusi audit",
    },
    {
      image: img3,
      title: "Daxili audit",
    },
    {
      image: img4,
      title: "Flexibility",
    },
  ];
  const data1 = [
    "Maliyyə hesabatlarının auditi",
    "Müəssisənin maliyyə-təsərrüfat fəaliyyətinin tam auditi",
  ];
  const data2 = [
    "Direktorun fəaliyyətinin auditi",
    "Baş mühasibin fəaliyyətinin auditi",
    "Kassirin fəaliyyətinin auditi",
    "Təsərrüfat fəaliyyətinin auditi",
    "Büdcə ilə hesablaşmaların auditi",
    "Kadrlar üzrə uçotun auditi",
    "Gömrük əməliyyatlarının auditi",
    "Əməliyyat auditi",
    "Uyğunluq auditi",
    "Mal-material və əsas vəsaitlərin auditi (inventarizasiyası)",
    "Təhtəlhesab şəxslərin (təhcizatın) fəaliyyətinin auditi",
    "Filial və ya departamentin fəaliyyətinin auditi",
  ];
  const data3 = [
    "Daxili auditin təşkili",
    "Proqram təminatının təşkili",
    "Daxili audit departamentinə işçilərin seçilməsi",
    "Daxili audit departamentinin işçilərinin öyrədilməsi və təlimatlandırılmas",
    "Daxili audit departamentinin işinə mütəmadi nəzarət edilməsi",
  ];
  const data4 = [
    "Bütün otel gəlir xidmətlərinin (gəlir / xərclər) yoxlanılması",
    "Bütün otel xətti xidmətlərinin auditi",
    "Bir otel şirkətinin maliyyə auditi",
    "Audit və otel əməliyyat xərclərinin optimallaşdırılması",
    "Otel və otel komplekslərinin vergi yoxlaması",
    "Otel komplekslərinin məcburi auditi",
    "Otel və mehmanxana komplekslərinin ekspress auditi",
    "Mühəndislik şəbəkələrinin və əməliyyat xərclərinin optimallaşdırılması",
  ];
  return (
    <>
      <div className="w-full h-[50vh] md:h-[90vh]">
        <img src={img} alt="img" className=" w-full h-full" />
      </div>
      <section className="bg-white py-16 ">
        <div className="grid md:grid-cols-2 gap-5 items-center md:px-20 px-5">
          <div className="">
            <h1 className="text-[40px] font-semibold mb-6">Audit Xidmətləri</h1>
            <p className="text-[18px] leading-8 font-light lg:w-4/5">
              Müstəqil audit biznesin inkişafının əsasıdır. Biz, əsaslı və dəqiq
              audit yoxlamaları aparmağa üstünlük veririk və rəyimiz öz
              etibarlılığı ilə seçilir.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {data.map((d, index) => (
              <div
                key={index}
                className="w-[150px] h-[150px] lg:w-[200px]  lg:h-[200px] xl:w-[250px] xl:h-[250px] flex flex-col items-center justify-center text-center bg-[#ebebeb] rounded-full "
              >
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-[60px] w-[60px] lg:w-[100px] lg:h-[100px] object-contain mb-3"
                />
                <p className="text-[18px] font-bold">{d.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto md:w-4/5 lg:w-4/5 px-5">
          <div className="grid md:grid-cols-[200px_1fr] gap-5 my-20 items-start justify-center">
            <h2 className="text-[20px] font-semibold text-black">
              Sərbəst audit
            </h2>
            <ul className="list-disc  font-light leading-7 space-y-2 text-black px-5">
              {data1.map((d, index) => (
                <li key={index}>{d}</li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-5 mb-20 items-start">
            <h2 className="text-[20px] font-semibold text-black">
              Xüsusi audit
            </h2>
            <ul className="list-disc  font-light leading-7 space-y-2 text-black px-5">
              {data2.map((d, index) => (
                <li key={index}>{d}</li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-5 mb-20 items-start">
            <h2 className="text-[20px] font-semibold text-black">
              Daxili audit
            </h2>
            <ul className="list-disc  font-light leading-7 space-y-2 text-black px-5">
              {data3.map((d, index) => (
                <li key={index}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-10 px-5 md:px-0">
          <div className="flex sm:flex-row flex-col  justify-center mx-auto mb-10 md:px-5 gap-5 lg:gap-18">
            <p className="sm:w-[45%] xl:w-[45%] 2xl:w-[35%]  text-[20px] leading-[2] font-[300] order-1 sm:order-none">
              Biznes Qarant Konsaltinq illərdir otel və restoranlarda yüksək
              keyfiyyətli audit keçirir. Əvvəla, otellərdə yoxlama apararkən
              idarəetmədə yol verilən səhvlərin aşkarlanmasına diqqət yetiririk.
            </p>
            <h3 className="text-[32px] font-semibold mb-10  mt-4 pt-5 border-t-1 order-0 sm:order-none">
              Otel işinin auditi
            </h3>
          </div>
          <p className="md:w-3/4 lg:w-3/4 xl:w-2/3 2xl:w-[53%] mx-auto text-[20px] leading-[2] font-[300]">
            Otel biznesi müəssisələrində apardığımız audit, şirkətinizə bütün
            maliyyə axınlarını optimallaşdırmağa, səmərəli mühasibat sistemini
            yaratmağa, mühasibat uçotunu optimallaşdırmağa, vergi və digər
            ödənişləri minimuma endirməyə və ən əsası, bütün otel xidmətləri
            üçün yüksək keyfiyyətli maliyyə strategiyası yaratmağa imkan
            verəcəkdir. Otelçilik işinin auditi, eyni zamanda otel kompleksinin
            fərdi xidmətlərinin seçmə yoxlamaları sahiblər üçün yalnız
            əhəmiyyətli maliyyə mənbələrinə qənaət etməklə yanaşı, müəssisənin
            cari maliyyə göstəricilərini də yaxşılaşdıra bilər.
          </p>
          <ul className="space-y-2 text-[18px] text-base font-[300] mx-auto md:w-9/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 px-5 sm:px-5 md:px-4 lg:px-5 xl:px-4 2xl:px-9 list-disc  md:list-outside text-black ">
            {data4.map((d, index) => {
              return <li key={index}>{d}</li>;
            })}
          </ul>
        </div>
      </section>
      <ContactUs bg={"#f5f5f5"} />
    </>
  );
};

export default Audit;
