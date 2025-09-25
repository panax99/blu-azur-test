import React from "react";
import { CircleChevronRight } from "lucide-react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  textColor?: string;
  ringColor?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  bgColor = "bg-blue-500",
  textColor = "text-white",
  ringColor = "ring-white",
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`rounded-full flex justify-between items-center text-xs 2xl:text-sm font-bold px-4 py-2.5 transition-colors duration-200 hover:opacity-90 hover:bg-primary cursor-pointer focus:outline-none ring-1 ${ringColor} ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      <p>{children}</p>

      <CircleChevronRight size={20}/>
    </button>
  );
};

export default Button;
