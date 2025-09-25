import CardBottom from "../../components/cards/CardBottom/CardBottom";
import CardTop from "../../components/cards/CardTop/CardTop";
import { data } from "../../constants/fifth-section-data";

const FifthSection = () => {
  const filteredDataTop = data.filter((el) => el.id < 3);
  const filteredDataBottom = data.filter((el) => el.id >= 3);

  return (
    <div
      className="relative w-full h-full md:h-[165dvh] py-10 md:py-0 flex flex-col items-center justify-center object-cover bg-cover text-white"
      style={{
        backgroundImage: `url("/images/PicDeLours5 (1).png")`,
      }}
    >
      <div className="relative w-10/12 h-10/12 flex flex-col gap-5">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredDataTop.map((data, index) => (
            <CardTop key={index} item={data} />
          ))}
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDataBottom.map((data, index) => (
            <CardBottom key={index} item={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
