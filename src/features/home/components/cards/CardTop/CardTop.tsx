import React from "react";
import type { SectionItem } from "../../../types/fifth-section-type";

interface CardTopProps {
  item: SectionItem;
}

const CardTop = ({ item }: CardTopProps) => {
  return (
    <div
      className="rounded-4xl w-full h-[75dvh] md:h-[55dvh] bg-cover overflow-hidden object-cover bg-center"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
    >
      <div className="flex flex-col gap-1 px-7 w-full h-full">
        <p className="font-bold text-lg mt-[35%] sm:mt-[50%] lg:mt-[30%] 2xl:mt-[25%] w-8/12">
          {item.title}
        </p>
        <p className="text-xs 2xl:text-sm">{item.description}</p>
        <p className="text-xs 2xl:text-sm mt-4">
          {`À voir: `}
          {item.links.map((el, index) => (
            <React.Fragment key={index}>
              <a
                href={el.link}
                className={`${
                  el.link ? "text-primary" : "text-white"
                } hover:underline`}
              >
                {el.text}
              </a>
              {index < item.links.length - 1 && ", "}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default CardTop;
