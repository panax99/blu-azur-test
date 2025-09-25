import ImageSwiper from "../../components/ImageSwiper/ImageSwiper";
import { inclusionList, slideImages } from "../../constants/first-section-data";

const FirstSection = () => {
  return (
    <div className="relative w-full h-full md:h-[95dvh] py-10 lg:py-0 flex flex-col lg:flex-row items-center justify-end gap-12 bg-white">
      <div className="w-11/12 h-full relative flex flex-col items-center lg:flex-row justify-between">
        <div className="flex flex-col w-11/12 lg:w-6/12 lg:px-10">
          <h1 className="font-normal text-4xl lg:text-[2.5rem]">
            Le confort et la sérénité d’un
          </h1>
          <h1 className="font-bold text-4xl lg:text-[2.7rem] mb-5">
            appartement privé
          </h1>
          <p className="text-xs xl:text-sm text-justify mb-7">
            Blu Azur vous propose des appartements élégants et spacieux, conçus
            pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et
            moderne, ils sont parfaits pour une escapade détente ou un séjour
            prolongé.
          </p>
          <p className="text-lg mb-2">Les inclusions :</p>
          <ul className="text-xs xl:text-sm flex flex-col w-full gap-1">
            {inclusionList.map((el, index) => (
              <li key={index} className="flex gap-3 items-start justify-start">
                <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                <p className="w-11/12 -mt-1">{el}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex flex-col w-full md:w-1/2 xl:w-5/12 h-12/12">
          <ImageSwiper images={slideImages} isFirstSection />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
