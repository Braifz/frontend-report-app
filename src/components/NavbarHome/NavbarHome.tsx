import Link from "next/link";
import Image from "next/image";

import Logo from "../../../assets/logo.png";

export const NavbarHome = () => {
  return (
    <nav className="bg-gradient-to-r from-primary to-dark w-100 h-[100px] flex flex-row justify-between items-center pl-[8px] pr-[8px]">
      <div className="flex">
        <Image src={Logo} alt="report-logo" width={60}></Image>
        <h1 className="text-xl pl-[8px] flex items-center font-bold text-secondary">
          Report App
        </h1>
      </div>
      <div>
        <Link
          href={"/report"}
          className="bg-secondary text-dark pl-[8px] pr-[8px] hover:saturate-150 text-center flex items-center rounded-xl  h-[40px]"
        >
          Reportar
        </Link>
      </div>
    </nav>
  );
};
