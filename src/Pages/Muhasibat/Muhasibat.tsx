import img from "../../assets/3071.jpg.webp";
import ContactUs from "../../Components/ContactUs/ContactUs";
const Muhasibat = () => {
  const data = [
    "İlkin sənədlərin hazırlanması",
    "Mədaxil və məxaric sənədlərinin işlənməsi",
    "Əmək haqqlarının hesablanması",
    "Bank və ödəniş sənədlərinin işlənməsi",
    "Maya dəyərinin hesablanması",
    "Kalkulyasiyanın hesablanması",
    "Anbar üzrə uçotun aparılması",
    "Ciddi hesabat blanklarının alınması",
    "Dövriyyə cədvəlləri, baş kitab və balansın hazırlanması",
    "Satış qaimələrinin, vergi hesab fakturaların və invoiceların hazırlanması",
    "Vergi bəyannamələrinin hazırlanması və təqdim edilməsi",
    "DSMF və Statistika hesabatlarının hazırlanması və təqdim edilməsi",
    "Əsas vəsaitlərin balansa götürülməsi və köhnəlməsinin hesablanması",
  ];
  const data1 = [
    
    {
      id: 1,
      title:
        "Bank əməliyyatları ilə bağlı bütün prosedurların həyata keçirilməsi",
    },
    { id: 2, title: "Kassa əməliyyatları üzrə qeyd jurnalının hazırlanması" },
    { id: 3, title: "Sifarişçilər ilə hesablaşmalara nəzarət" },
    { id: 4, title: "Malsatan və podratçılar ilə hesablaşmalara nəzarət" },
    {
      id: 5,
      title:
        "Təhtəlhesab şəxs ilə hesablaşmalar üzrə avans hesabatların yaradılması",
    },
    { id: 6, title: "Mal-material ehtiyatları üzrə anbar uçotunun qurulması" },
    {
      id: 7,
      title:
        "Əsas vəsaitlərin qeydiyyatı, amortizasiyası, köhnəlməsi və silinməsinə nəzarət",
    },
    { id: 8, title: "Əmək haqqı hesablama cədvəllərinin hazırlanması" },
    {
      id: 9,
      title: "Uçot siyasətinin və metodunun işlənib hazırlanması və tətbiqi",
    },
    {
      id: 10,
      title: "Maliyyə hesabatlarının hazırlanması (aylıq, rüblük, illik)",
    },
    { id: 11, title: "Mühasibat uçotunun bərpası" },
    { id: 12, title: "Mühasibat uçotunun təşkili və aparılması" },
    { id: 13, title: "Xərclərə nəzarət sisteminin qurulması" },
    { id: 14, title: "Büdcə (gəlir və xərclər) planlaşdırılması" },
    { id: 15, title: "Mühasibat uçotunun Beynəlxalq və ya Milli Standartları" },
    { id: 16, title: "Maliyyə hesabatlarının Beynəlxalq standartları" },
    { id: 17, title: "Mühasibat uçotu üzrə proqram təminatının qurulması" },
    { id: 18, title: "Bank və Kassa" },
    { id: 19, title: "Təhtəlhesab şəxs" },
    { id: 20, title: "Əsas vəsaitlər və Mal Material" },
  ];
  return (
    <>
      <div className="w-full h-[50vh] md:h-[90vh]">
        <img src={img} alt="img" className=" w-full h-full" />
      </div>
      <section className="bg-white py-16">
        <div className="flex sm:flex-row flex-col  justify-center mx-auto mb-10 px-5 gap-5">
          <p className="sm:w-[45%] xl:w-[45%] 2xl:w-[35%]  text-[20px] leading-[2] font-[300] order-1 sm:order-none">
            Mühasibat uçotunun şəffaflığı istənilən biznesin təməlidir. Biz,
            uçotu Beynəlxalq və ya Milli standartlara əsasən aparırıq, bütün
            hesabatları və bəyannamələri hazırlayıb təhvil veririk.
          </p>
          <h3 className="text-[32px] font-semibold mb-10  mt-4 pt-5 border-t-1 order-0 sm:order-none">
            Mühasibat uçotu
          </h3>
        </div>
        <ul className="space-y-2 md:text-[18px] text-base font-[300] mx-auto md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 px-5 sm:px-5 md:px-4 lg:px-7 xl:px-4 2xl:px-14 list-disc list-inside text-black ">
          {data.map((d) => {
            return <li>{d}</li>;
          })}
        </ul>
 
        <h4 className="text-[40px] font-semibold mb-10 mx-auto text-center text-wrap pt-40 pb-10 px-10">İlkin mühasibat uçotunun təşkili və idarə edilməsi</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto w-10/12">
          {data1.map((item) => (
            <div
              key={item.id}
              className="flex  space-x-6  p-4 rounded-lg"
            >
              <span className="text-[20px] flex items-center justify-center font-semibold rounded-full p-8 w-15 h-15 bg-gray-100">{item.id}</span>
              <span className="text-lg">{item.title}</span>
            </div>
          ))}
        </div>
      </section>
      <ContactUs bg={"#f5f5f5"} />
    </>
  );
};

export default Muhasibat;
