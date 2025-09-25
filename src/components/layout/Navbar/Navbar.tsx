import { menuNavbar } from "../../../features/home/constants/menuNavbar";
import Menu from "../../ui/Menu/Menu";

const Navbar = () => {
  const logoUrl = "/images/logo.png";

  return (
    <div className="flex flex-col ml-[12%] mr-[6%] pt-2 font-semibold">
      <div className="py-6 bg-transparent flex justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <a href="#" className="w-28">
            <img src={logoUrl} className="object-cover" alt="logo" />
          </a>
          <ul className="hidden lg:flex gap-10 justify-center items-center">
            {menuNavbar.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`${
                    item.name == "Réservé"
                      ? "rounded-full py-2 px-5 bg-blue-400 text-white"
                      : "text-white"
                  } text-sm`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <Menu/>
          </ul>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white"></div>
    </div>
  );
};

export default Navbar;
