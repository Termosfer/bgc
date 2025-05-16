import img from "../../assets/3071.jpg.webp";
import ContactUs from "../../Components/ContactUs/ContactUs";
const Maliyye = () => {
  const data = [
    "Layihənin fəaliyyətinin / tərəqqisinin optimallaşdırılması üçün təklif və tövsiyələrin hazırlanması",
    "Mövcud risklərin qiymətləndirilməsi, onların həyata keçirilmə ehtimalı və həyata keçirilmə nəticələrinin dəyəri",
    "Əməliyyat fəaliyyətləri barədə məlumatların və məlumatların etibarlılığının təhlili və qiymətləndirilməsi",
    "Gəlir və xərc göstəricilərinin formalaşdırılmasının təhlili, həqiqi nəticələrə əsasən planlaşdırılan göstəricilər və proqnozlarla müqayisə",
    "Performans təhlili və sənayenin orta göstəriciləri ilə müqayisə",
    "Daxili sənədlərin (qərar, əmr, sərəncam və s.) hazırlanması",
    "İdarəetmə hesabat məlumatlarının təhlili",
    "Büdcələrin faktiki icrasının təhlili",
    "Davamlı böyümə modelinin qurulması",
    "Problemli fəaliyyət sahələrinin təhlili və müəyyənləşdirilməsi",
    "Qarşı tərəflərlə bağlanmış müqavilələrin etibarlılığının və 'bazara uyğunluğunun' təhlili",
    "Əmlak və xidmətlərin alınması üzrə əməliyyatların təhlili",
    "Müəssisə / layihə idarəetmə sisteminin təhlili",
    "Pulsuz pul axınının hesablanmasının təsdiqlənməsi",
    "Binaların alqı-satqısı əməliyyatlarının təhlili və təsdiqlənməsi və s.",
  ];
  const data1 = [
    "borc vəsaitlərinə ehtiyacın müəyyənləşdirilməsi",
    "Kredit / investisiya müraciəti çərçivəsində potensial borcalanın sənədlərinin tam paketinin formalaşdırılması",
    "konsepsiyaların, investisiya layihələrinin həyata keçirilməsi üçün iş planlarının, ərazilərin vahid inkişafı strategiyalarının işlənməsi və optimallaşdırılması",
    "maliyyə modelləşdirmə, investisiya layihələrinin həyata keçirilməsinin iqtisadi və büdcə səmərəliliyinin qiymətləndirilməsi",
    "kredit üçün girovun bazar dəyərinin təhlili və qiymətləndirilməsi, habelə Layihə Təşəbbüskarının qeyri-pul töhfəsinin qiymətləndirilməsi",
    "kadastr uçot sənədlərinin tərtib edilməsi, daşınmaz əmlak ipotekası müqaviləsinin qeydiyyata alınması prosedurlarının aparılması",
    "Müştərinin imkanlarını və Bankların və Fondların tələblərini nəzərə alaraq maliyyələşdirmə cəlb etmək üçün əməliyyatların strukturlaşdırılması",
    "borcun yenidən qurulması strategiyasını inkişaf etdirmək",
  ];
  const data2 = [
    "İnvestisiya layihələrinin həyata keçirilməsi üçün konsepsiyaların, biznes planların, ərazilərin vahid inkişafı strategiyalarının işlənməsi və optimallaşdırılması",
    "Maliyyə modelləşdirmə, investisiya layihələrinin iqtisadi və büdcə səmərəliliyinin qiymətləndirilməsi",
    "Borcun yenidən qurulması strategiyasının hazırlanması"
  ];
  return (
    <>
      <div className="w-full h-[50vh] md:h-[90vh]">
        <img src={img} alt="img" className=" w-full h-full" />
      </div>
      <section className="bg-white py-16">
        <div className="w-11/12 max-w-6xl mx-auto px-4 md:px-8 pb-40">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Maliyyə əməliyyat nəzarəti
          </h1>
          <p className="text-blacktext-base md:text-[16px] font-light  leading-relaxed">
            «Biznes-Qarant Konsaltinq» mütəxəssisləri şirkətlərin (Bank
            borcalanları) maliyyə-təsərrüfat fəaliyyətlərinin monitorinqi üçün
            bütün xidmətləri göstərir.
          </p>
          <ul className="list-disc list-outside pl-3 2xl:pl-3 text-black space-y-3 text-base md:text-[16px] font-light text-black">
            {data.map((d, index) => {
              return <li key={index}>{d}</li>;
            })}
          </ul>
        </div>
        <div className="w-11/12 max-w-6xl mx-auto px-4 md:px-8 pb-40">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Maliyyələşdirmə üçün sənədlərin hazırlanması
          </h1>

          <p className="text-blacktext-base md:text-[16px] font-light py-10 leading-relaxed">
            Biznes Qarant Konsaltinq, kredit təşkilatlarının və
            ixtisaslaşdırılmış fondların maliyyələşdirilməsi üçün bir sıra
            xidmətlər, habelə kredit portfelinin yenidən qurulması və yenidən
            maliyyələşdirilməsi xidmətləri göstərir:
          </p>
          <ul className="list-disc list-outside pl-3 2xl:pl-3 text-black space-y-3 text-base md:text-[16px] font-light text-black">
            {data1.map((d, index) => {
              return <li key={index}>{d}</li>;
            })}
          </ul>
        </div>
        <div className="w-11/12 max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Maliyyə modellərinin və biznes planlaşdırmasının inkişafı
          </h1>

          <p className="text-blacktext-base md:text-[16px] font-light py-10 leading-relaxed">
            Maliyyələşdirmənin cəlb edilməsində məsləhətçi yardımı göstərən
            Biznes Qarant Konsaltinq, biznes planları və texniki-iqtisadi
            əsaslarını təşkil edən maliyyə modellərini peşəkar şəkildə inkişaf
            etdirir. Bəzi hallarda, gələcəkdə Biznes Qarant Konsaltinq
            investisiya planının əsas planlaşdırılmış öhdəliklərinin
            (öhdəliklərinin) yerinə yetirilməsi barədə investorlara hesabat
            hazırlamaqla, biznes planlarının icrasına nəzarət
            edir.Mühəndislərin, hüquqşünasların, inşaatçıların, vergi
            məsləhətçilərinin heyəti bizə genişmiqyaslı investisiya
            layihələrinin planlaşdırılması və həyata keçirilməsində kompleks
            vəzifələri həll etməyə imkan verir.
          </p>
          <ul className="list-disc list-outside pl-3 2xl:pl-3 text-black space-y-3 text-base md:text-[16px] font-light text-black">
            {data2.map((d, index) => {
              return <li key={index}>{d}</li>;
            })}
          </ul>
        </div>
      </section>
      <ContactUs bg={"#f5f5f5"} />
    </>
  );
};

export default Maliyye;
