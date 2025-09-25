import Button from "../../../../../components/ui/Button/Button";
import type { SectionItem } from "../../../types/fifth-section-type";

interface CardBottomProps {
  item: SectionItem;
}

const CardBottom = ({ item }: CardBottomProps) => {
  return (
    <div
      className="rounded-4xl w-full h-[78dvh] bg-cover object-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
    >
      <div className="flex flex-col gap-1 px-7 w-full h-full">
        <p className="font-bold text-lg mt-[45%] sm:mt-[50%] lg:mt-[75%] 2xl:mt-[65%] w-12/12">
          {item.title}
        </p>
        <p className="text-xs 2xl:text-sm">{item.description}</p>
        {item.links.length !== 0 && (
          <p className="text-xs 2xl:text-sm mt-4">
            {`À voir: `}
            {item.links.map((el, index) => (
              <span
                key={index}
                className={`${el.link !== "" ? "text-primary" : "text-white"}`}
              >
                {el.text}
              </span>
            ))}
          </p>
        )}

        {item.buttonLink.text !== "" && (
          <Button
            className="mt-4 hover:text-white"
            ringColor="ring-primary"
            textColor="text-primary"
            bgColor="bg-transparent"
          >
            {item.buttonLink.text}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CardBottom;
