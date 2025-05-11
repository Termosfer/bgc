import img from "../../assets/3071.jpg.webp";
import ContactUs from "../../Components/ContactUs/ContactUs";
const Meslehet = () => {
  const data = [
    "Beynəlxalq müqavilələrin hazırlanması və incələnməsi",
    "AR Vergi, Cinayət, Əmək və Mülki Məcəllələrinin müəssisənin fəaliyyətinə və mənafeyinə aid maddələrinin izah edilməsi, konktret məsləhətlər verilməsi",
    "Gömrük məsələləri üzrə xidmətlər",
    "Müəssisənin fəaliyyətinə və mənafeyinə aid bütün hüquqi aktların ayrı-ayrı müddəalarının tətbiqi əsələlərinə dair konkret məsləhətlər verilməsi",
    "Hüquqi şəxs (şirkət, müəssisə, firma və s.) və fiziki şəxslərin vergi və digər orqanlarda qeydiyyatı və ləğvi",
    "Vəkil məsləhəti xidmətlər",
  ];
  return (
    <>
      <div className="w-full h-[50vh] md:h-[90vh]">
        <img src={img} alt="img" className=" w-full h-full" />
      </div>
      <section className="bg-white py-16">
        <div className="w-11/12 max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Məsləhət xidməti
          </h1>
          <p className="text-blacktext-base md:text-[16px] font-light mb-8 leading-relaxed">
            Biznesinizin inkişafına lazım olan addımların atılmasında və
            qarşılaşa biləcəyiniz istənilən problemin həllində öz
            təcrübələrimizi sizinlə bölüşməyə hazırıq.
          </p>
          <ul className="list-disc list-outside pl-5  2xl:pl-4 text-black space-y-3 text-base md:text-[16px] font-light marker:text-[20px] marker:text-black">
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

export default Meslehet;
