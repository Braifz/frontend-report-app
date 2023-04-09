import Image from "next/image";

import InfractionImage from "../../../assets/image-infraction.png";

export const Presentation = () => {
  return (
    <main className="bg-secondary h-auto flex flex-col justify-center items-center pt-[32px] pb-[32px]">
      <h1 className="text-2xl text-dark text-center font-bold w-2/3 mb-[16px]">
        Bienvenido a la aplicación de denuncias viales de la Provincia de
        Córdoba
      </h1>
      <h2 className="text-l text-center text-dark mt-[16px] w-2/3 ">
        Aquí podrás hacer tus denuncias para que juntos mejoremos la Ciudad
      </h2>
      <Image src={InfractionImage} alt="infraction image" />
      <button className="bg-primary p-3 text-secondary rounded-lg hover:saturate-150">
        Conoce más
      </button>
    </main>
  );
};
