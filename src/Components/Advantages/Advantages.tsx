import img from "../../assets/download.svg";

interface IAdvantagesProps {
  bg: string;
}

const Advantages: React.FC<IAdvantagesProps> = ({ bg }) => {
  const data = [
    {
      image: img,
      title: "İşçilərin yüksək peşəkarlığı",
    },
    {
      image: img,
      title: "Xarici auditorlarla iş təcrübəsi",
    },
    {
      image: img,
      title: "Beynəlxalq audit standartlarına uyğunluq",
    },
    {
      image: img,
      title:
        "Hər bir müştəriyə fərdi yanaşma, münasibətlərdə dürüstlük və açıqlıq",
    },
    {
      image: img,
      title: "İnkişaf edilmiş daxili standartlar sistemi",
    },
    {
      image: img,
      title: "Müştərilərlə münasibətlərdə dürüstlük və açıqlıq",
    },
  ];
  return (
    <section className="py-10" style={{ backgroundColor: bg }}>
      <div className=" mx-auto w-5/6 text-center">
        <h1 className="text-[42px] font-semibold mb-16">Üstünlüklərimiz</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((d, index) => (
            <div key={index} className="py-8">
              <div className="flex flex-col items-center text-center">
                <img
                  src={d.image}
                  alt="icon"
                  className="w-16 h-16 mb-6 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-800 leading-relaxed">
                  {d.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
