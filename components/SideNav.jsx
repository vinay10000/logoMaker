import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useState } from "react";

const SideNav = ({ selectedIndex}) => {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="border-4 border-black shadow-2xl h-screen ">
      <div>
        {menuList.map((menu, index) => (
          <h2
            key={index}
            onClick={() => {setActiveIndex(index); selectedIndex(index)}}
            className={`text-2xl px-7 p-2 text-blue-950 my-2 mt-9 cursor-pointer hover:bg-zinc-800 hover:text-white flex items-center gap-2 ${
              activeIndex === index && "bg-black text-white"
            }`}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
