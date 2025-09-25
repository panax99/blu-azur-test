
import { activityData } from "../../constants/second-section-data";
import ActivityItem from "./ActivityItem";

const SecondSection = () => {
  return (
    <div
      className="relative w-full h-full py-10 md:py-0 md:h-[100dvh] flex flex-col items-center justify-center gap-12 object-center bg-cover bg-primary text-white"
      style={{
        backgroundImage: `url("/images/Piscine 4.png")`,
      }}
    >
      <div className="flex flex-col items-center justify-center text-center w-10/12 md:w-6/12">
        <h1 className="font-normal text-4xl lg:text-[2.5rem]">
          Saint Raphaël, l’endroit parfait pour
        </h1>
        <h1 className="font-bold text-4xl lg:text-[2.7rem] mb-3">
          vivre la Côte d Azur
        </h1>

        <p className="text-xs xl:text-sm text-center">
          Avec ses plages dorées, ses 300 jours de soleil et ses calanques
          sauvages, Saint-Raphaël est une destination de rêve. Entre mer
          turquoise et rochers rouges de l’Estérel, elle offre un cadre
          idyllique pour la détente et l’aventure.
        </p>
      </div>

      <div className="flex flex-wrap justify-between w-10/12 gap-3">
        {activityData.map((data, index) => (
          <ActivityItem key={index} item={data} />
        ))}
      </div>

      <div className="text-center w-10/12 md:w-6/12 text-xs xl:text-sm">
        Flânez sur la Promenade des Bains, explorez les criques secrètes ou
        partez en mer depuis son port de plaisance. Saint-Raphaël, c’est la Côte
        d’Azur dans toute sa splendeur !
      </div>
    </div>
  );
};

export default SecondSection;
