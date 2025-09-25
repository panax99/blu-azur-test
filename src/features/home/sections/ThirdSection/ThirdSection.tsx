import Button from "../../../../components/ui/Button/Button";

const ThirdSection = () => {
  return (
    <div
      className="relative w-full h-[150dvh] md:h-[100dvh] flex flex-col lg:flex-row items-center justify-center gap-12 object-center bg-cover"
      style={{
        backgroundImage: `url("/images/Capture d’écran 2025-02-16 212802 copie.png")`,
      }}
    >
      <div className="flex flex-col lg:flex-row py-10 lg:py-0 justify-between items-center w-10/12 gap-10">
        <div className="flex flex-col w-11/12 lg:w-5/12 lg:ml-10">
          <h1 className="font-normal text-3xl">Où se trouve Blu Azur à</h1>
          <h1 className="font-bold text-3xl text mb-3">
            Saint-Raphaël ?
          </h1>
          <p className="text-xs xl:text-sm font-bold text-justify mb-7">
            Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur
            de l une des plus belles stations balnéaires de France. Nos
            appartements se trouvent dans un domaine privé sécurisé, entouré de
            verdure, à quelques minutes à pied de la plage sablonneuse de Santa
            Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la
            résidence permet un accès facile aux boutiques, restaurants et
            animations locales. Une station d’arrêt d’autobus est située à la
            sortie du site, facilitant les déplacements, et une boulangerie à
            proximité vous offre du pain frais chaque matin pour bien commencer
            la journée.
          </p>
          <Button
            className="w-2/3 lg:w-1/2 px-7 hover:text-white"
            bgColor="bg-white"
            ringColor="ring-primary"
            textColor="text-primary"
          >
            Comment s'y rendre ?
          </Button>
        </div>

        {/* map image & icon*/}
        <div className="relative w-11/12 lg:w-4/12 mt-10 lg:mt-0 lg:mr-7">
          <img
            src="/images/map.png"
            className="w-20 h-20 absolute -top-10 -left-7"
            alt="mapIcon"
          />
          <img
            loading="lazy"
            decoding="async"
            width="800"
            height="1100"
            src="https://bluazur.com/wp-content/uploads/2025/03/Map-image-858x1024.png.webp"
            className="attachment-large size-large wp-image-529"
            alt="Map-image"
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
