import img from "../../assets/3071.jpg.webp";
import ContactUs from "../../Components/ContactUs/ContactUs";
const HR = () => {
  const data = [
    "İşyerlərinin attestasiyası",
    "İşçilərin korrupsiyaya dözümlülüyünün yoxlanılması",
    "İşçilərin “outsorce” firmalara qeydiyyatı və işin təşkili",
  ];
  const data1 = [
    "Əmrlərin yazılması",
    "Əmək müqavilələrinin hazırlanması",
    "Ciddi hesabat blanklarının alınması",
    "Əmək kitabçalarının alınması və işlənməsi",
    "Əmək müqavilələrinin elektron qeydiyyatı, dəyişiklik və xitamlar verilməsi, bildirişlərin alınması",
    "İşçilərin şəxsi işlərinin yaradılması və mütəmadi işlənməsi",
    "Kadr işləri üzrə lazımi bütün iş cədvəlləri, sənədlər, kitab və jurnallar, müqavilə və təlimatlarla təmin edilməsi",
  ];
  return (
    <>
      <div className="w-full h-[50vh] md:h-[90vh]">
        <img src={img} alt="img" className=" w-full h-full" />
      </div>
      <section className="bg-white py-16">
        <div className="w-11/12 max-w-6xl mx-auto px-4 md:px-8 pb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
            İnsan Resursları (HR) üzrə xidmətlər
          </h1>
          <div className="flex justify-center">
            <ul className="list-disc  space-y-4 text-black text-base md:text-[20px] font-light text-black max-w-2xl pl-4 md:pl-0">
              {data.map((d, index) => (
                <li key={index} className="text-left">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-11/12 max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
            Kadrlar üzrə uçotun aparılmasına aiddir:
          </h1>
          <div className="flex justify-center">
            <ul className="list-disc  space-y-4 text-black text-base md:text-[18px] font-light  pl-5 text-black  md:pl-30 lg:pl-25">
              {data1.map((d, index) => (
                <li key={index} className="max-w-[580px]">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactUs bg={"#f5f5f5"} />
    </>
  );
};

export default HR;
