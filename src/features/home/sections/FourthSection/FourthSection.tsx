const FourthSection = () => {
  return (
    <div
      className="relative w-full h-full md:h-[100dvh] flex items-center justify-center object-cover bg-cover text-white"
      style={{
        backgroundImage: `url("/images/PicDeLours5.png")`,
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center w-11/12 lg:w-10/12 lg:px-12 gap-10 py-10 lg:py-0">
        <div className="relative w-11/12 lg:w-4/12">
          <img
            loading="lazy"
            decoding="async"
            width="800"
            height="1100"
            src="/images/Groupe 9 1.png"
            className="attachment-large size-large wp-image-529"
            alt="Map-image"
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>
        <div className="flex flex-col w-11/12 lg:w-5/12 lg:pl-[-10px]">
          <h1 className="font-normal text-3xl text-end">Un point de départ idéal</h1>
          <h1 className="font-bold text-3xl text mb-3 text-end">
            <span className="font-normal">pour</span> découvrir la Côte d’Azur !
          </h1>
          <p className="text-xs xl:text-sm font-bold text-justify mb-7">
            Entre mer et montagne, Saint Raphaël est une destination idéale pour
            les amateurs de plein air et de découvertes. Randonnées dans le
            Massif de l’Estérel, sports nautiques sur les eaux cristallines de
            la Méditerranée, balades en bateau vers les îles de Lérins ou encore
            golf et cyclisme sur des parcours panoramiques, chaque journée offre
            son lot d aventures. Entre marchés provençaux, villages perchés et
            animations locales, l art de vivre azuréen se dévoile à chaque
            instant, faisant de Saint Raphaël un lieu vibrant et inoubliable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
