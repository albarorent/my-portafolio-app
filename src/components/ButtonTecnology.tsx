import React from "react";

interface Props {
  name: string;
}
const ButtonTecnology = ({ name }: Props) => {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
        {name}
      </div>
    </li>
  );
};

export default ButtonTecnology;
