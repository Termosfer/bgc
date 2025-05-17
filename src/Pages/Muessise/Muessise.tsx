import ContactUs from "../../Components/ContactUs/ContactUs";
import img from "../../assets/3071.jpg.webp";
const Muessise = () => {
  const data = [
    "Sifarişçi müəssisənin fəaliyyətinin analizi və onun tələblərinə uyğun proqramda əlavə və dəyişikliklərin edilməsi",
    "Proqramda iş fəaliyyətinin distant və ya lokal formada təmin edilməsi",
    "İşçi heyətinə müvafiq proqrama uyğun təlimlərin keçirilməsi",
    "1C üzrə fəaliyyətin optimallaşdırılması və səhvlərin aradan qaldırılması üçün konsultasiya xidməti",
    "1C proqram təminatına daimi və ya birdəfəlik dəstəyin göstərilməsi",
  ];

  const data1 = [
    "Online və əyani, fərdi və qrup halında təlimlərin təşkil olunması",
    "Keçirilmiş dərslər üzrə ödənişsiz sınaq imtahanlarının təşkil olunması",
    "Praktiki məşğələlərin təşkil olunması (Real fəaliyyət göstərən müəssisələrin uçot fəaliyyətinə izləmək imkanı)",
    "Təlimlər əsnasında peşəkar təlimçi tərəfindən ödənişsiz konsultasiyaların təşkil edilməsi",
  ];
  const data2 = [
    "Müəssisənin iş fəaliyyətinin analizinin aparılması",
    "İşçi heyəti üçün yenidən təlimlərin və maarifləndirmənin aparılması",
    "Yaranan səhvlərin izahlı olaraq aradan qaldırılması",
    "Proqram fəaaliyyətinin ümumi və hissəli auditinin təşkil olunması",
    "Müəssisənin keçmiş dövrlərdə baş tutmuş əməliyyatlarının mütəxəssislər tərəfindən 1C-də əks edilməsi",
    "1C proqram təminatına daimi və ya birdəfəlik dəstəyin göstərilməsi",
  ];
  return (
    <>
      <div className="w-full h-[50vh] md:h-[90vh]">
        <img src={img} alt="img" className=" w-full h-full" />
      </div>
      <section className="bg-white py-16">
        <div className="w-11/12 max-w-6xl mx-auto px-4 md:px-8 pb-40">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            1C 8.3 Müəssisə proqram təminatı üzrə xidmətlərimiz
          </h1>
          <p className="text-blacktext-base md:text-[16px] font-light  leading-relaxed">
            BGC 1C Mühasibat sistemlərinin yazılması ilə yanaşı peşəkar texniki
            dəstək və təlimlər təqdim edir.
            1C Mühasibat proqram təminatının hazırlanması zamanı diqqət tələb
            edən əsas məqam proqramın sifarişçi müəssisənin fəaliyyətinə tam
            uyğun olmasıdır. Bunun təmin edilməsi məqsədilə proqram təminatının
            hazırlanmasından əvvəl sifarişçinin bütün tələbləri ətraflı şəkildə
            öyrənilir, müəssisənin fəaliyyəti təhlil olunur, uçot
            əməliyyatlarının xüsusiyyətləri araşdırılır və yalnız bundan sonra
            sifarişə uyğun təkmilləşdirilmiş proqram təminatı yazılır.
            Eyni zamanda, təqdim olunan proqram təminatına uyğun fərdi və
            korporativ təlimlərin təşkili də təklif olunur. Proqram təminatının
            sabit və effektiv işləməsi isə göstərdiyimiz texniki dəstək
            sayəsində daha da asanlaşdırılır. Təlimlər və texniki dəstək peşəkar
            və təcrübəli əməkdaşlarımız tərəfindən həyata keçirilir.
          </p>
          
          <div className="my-20">
            <h1 className="text-3xl md:text-2xl font-bold text-gray-800 mb-6">
              1C proqram təminatı ilə uçotun qurulması
            </h1>
            <ul className="list-disc list-outside pl-3 2xl:pl-3 text-black space-y-3 text-base md:text-[16px] font-light text-black">
              {data.map((d, index) => {
                return <li key={index}>{d}</li>;
              })}
            </ul>
          </div>
          <div className="mb-20">
            <h1 className="text-3xl md:text-2xl font-bold text-gray-800 mb-6">
              1C proqram təminatı üzrə təlimlərin keçirilməsi
            </h1>
            <ul className="list-disc list-outside pl-3 2xl:pl-3 text-black space-y-3 text-base md:text-[16px] font-light text-black">
              {data1.map((d, index) => {
                return <li key={index}>{d}</li>;
              })}
            </ul>
          </div>
          <div>
            <h1 className="text-3xl md:text-2xl font-bold text-gray-800 mb-6">
              1C proqram təminatı üzrə fəaliyyət göstərən müəssisələrə
              konsultasiya xidməti
            </h1>
            <ul className="list-disc list-outside pl-3 2xl:pl-3 text-black space-y-3 text-base md:text-[16px] font-light text-black">
              {data2.map((d, index) => {
                return <li key={index}>{d}</li>;
              })}
            </ul>
          </div>
        </div>
      </section>
      <ContactUs bg={"#f5f5f5"} />
    </>
  );
};

export default Muessise;
