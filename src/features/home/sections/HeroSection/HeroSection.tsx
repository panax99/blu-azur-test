import Button from "../../../../components/ui/Button/Button";
import ImageSwiper from "../../components/ImageSwiper/ImageSwiper";
import Navbar from "../../../../components/layout/Navbar/Navbar";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const HeroSection = () => {
  const slideImages = [
    "/images/residence-pierre-vacances-la-corniche-d-or1.png",
    "/images/Piscine2.png",
  ];

  return (
    <div
      className="relative w-full h-[150dvh] lg:h-[100dvh] object-cover bg-cover text-white overflow-hidden"
      style={{
        backgroundImage: `url("/images/Gemini_Generated_Image_s7tyrvs7tyrvs7ty.png")`,
      }}
    >
      {/* ✅ Dark gradient overlay (behind content) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/70 via-black/40 to-black/10" />

      {/* ✅ All visible content goes here */}
      <div className="relative z-10 h-full">
        <Navbar />

        <div className="absolute z-10 top-0 left-0 w-[5%] flex flex-col items-center justify-end gap-5 py-16 h-full bg-blue-500/50 text-white">
          <Facebook />
          <Youtube />
          <Twitter />
          <Instagram />
        </div>

        <div className=" ml-[10%] mr-[5%] h-[70vh] mt-[3%] p-2 lg:p-5 bg-transparent flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="flex flex-col w-full md:w-1/2 xl:w-4/12">
            <h1 className="font-bold text-[2.7rem]">Votre évasion</h1>
            <h1 className="font-normal text-[2.5rem] -mt-3 mb-3">
              sur la Côte d’Azur !
            </h1>
            <p className="text-xs xl:text-sm text-justify mb-16">
              Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une
              destination d’exception nichée entre Cannes et Saint-Tropez. Nos
              appartements tout équipés, situés dans un domaine privé sécurisé,
              offrent un cadre verdoyant et paisible, à quelques pas de la
              marina de Santa Lucia, des plages de sable fin et du centre-ville
              animé. Profitez d’un séjour alliant confort, sérénité et élégance
              au cœur de la Riviera française !
            </p>
            <Button bgColor="bg-transparent">
              Réservez dès maintenant votre séjour !
            </Button>
          </div>
          <div className="w-11/12 lg:w-4/12 relative lg:absolute flex items-center justify-center lg:end-0 lg:right-0 lg:-bottom-8 lg:h-[60%]">
            <ImageSwiper images={slideImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
