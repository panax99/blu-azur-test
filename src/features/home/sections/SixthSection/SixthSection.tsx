import Button from "../../../../components/ui/Button/Button";


const SixthSection = () => {
  return (
    <div
      className="relative z-10 w-full h-[100dvh] md:h-[100dvh] flex flex-col items-center justify-center object-cover bg-cover text-white py-10 lg:py-0 overflow-hidden"
      style={{
        backgroundImage: `url("/images/residence-pierre-vacances-la-corniche-d-or1 (1).png")`,
      }}
    >
      <img
        src="/images/Rectangle 5.png"
        className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
        alt="reservationImg"
      />
      <div className="w-11/12 lg:w-6/12 z-20 flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-4xl">Réservations</h1>
        <p className="text-lg text-center">
          <span className="font-bold">Offrez-vous un séjour inoubliable</span>{" "}
          dans l’un de nos appartements Blu Azur. Profitez d’un cadre
          exceptionnel, entre confort, détente et découvertes, au cœur de
          Saint-Raphaël
        </p>
        <Button
          className="font-extrabold hover:bg-transparent hover:ring-1 hover:ring-white w-9/12 lg:w-5/12"
          bgColor="bg-primary"
          textColor="text-white"
          ringColor="ring-primary"
        >
          Réservez dès maintenant votre séjour !
        </Button>
      </div>
    </div>
  );
};

export default SixthSection;
