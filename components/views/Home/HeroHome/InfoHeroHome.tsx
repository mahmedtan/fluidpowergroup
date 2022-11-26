import Anchor from "@/modules/Anchor";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const InfoHeroHome = () => {
  return (
    <div className="md:w-1/2  h-full flex flex-col  justify-center    gap-4 items-center text-center md:text-left md:items-start ">
      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold">
        Welcome to Fluidpower
      </h1>
      <h2 className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        laudantium sint velit eos veniam possimus impedit atque ratione et sed,
        fugiat, alias itaque aut pariatur quia, nemo quasi dolorem recusandae?
      </h2>
      <Anchor href="/catalogue" className="hover:no-underline">
        <button className="max-w-max pl-6 pr-4  lg:pl-8 lg:pr-6 flex items-center gap-2 mt-4 text-lg lg:text-xl hover:text-yellow-400">
          Browse Products <FiChevronRight className="text-2xl" />
        </button>
      </Anchor>
    </div>
  );
};

export default InfoHeroHome;
