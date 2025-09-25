import { Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const logoUrl = "/images/logo.png";
  return (
    <div className="w-full h-[70vh] text-white">
      <div className="w-full h-[83%] bg-primary flex justify-center items-center">
        <div className="w-5/12 flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between">
          <a href="#" className="w-[13rem]">
            <img src={logoUrl} className="object-cover" alt="logo" />
          </a>
          <div className="flex flex-col gap-2">
            <span className="font-bold mb-3 text-lg">Contactez-nous</span>
            <div className="flex items-center gap-2">
              <div className="rounded-full w-5 h-5 p-1 flex justify-center items-center bg-white relative">
                <Mail
                  size={12}
                  color="white"
                  className="absolute fill-primary stroke-1 stroke-white"
                />
              </div>
              <p>info@bluazur.com</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full w-5 h-5 p-1 flex justify-center items-center bg-white relative">
                <Phone
                  size={12}
                  color="white"
                  className="absolute fill-primary stroke-1 stroke-white"
                />
              </div>
              <p>+1 555 555-5555</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full w-5 h-5 p-1 flex justify-center items-center bg-white relative">
                <Facebook
                  size={12}
                  color="white"
                  className="absolute fill-primary stroke-1 stroke-white"
                />
              </div>
              <p>@ BLU Azur</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[17%] bg-secondary flex items-center justify-center font-bold">
        © Tous droits réservés à Blu Azur
      </div>
    </div>
  );
};

export default Footer;
