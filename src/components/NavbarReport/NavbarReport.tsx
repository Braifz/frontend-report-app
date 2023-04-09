import Link from "next/link";
import Image from "next/image";

import Logo from "../../../assets/logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const NavbarReport = () => {
  return (
    <nav className="bg-primary w-100 h-[100px] flex flex-row justify-between items-center pl-[8px] pr-[8px]">
      <Link href="/" className="flex">
        <Image src={Logo} alt="report-logo" width={60}></Image>
        <h1 className="text-xl ml-[8px] flex items-center font-bold text-secondary">
          Report App
        </h1>
      </Link>
      <ConnectButton />
    </nav>
  );
};
