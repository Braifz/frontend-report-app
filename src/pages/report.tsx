import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useSigner } from "wagmi";

import Logo from "../../assets/logo.png";

const User = () => {
  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();
  return (
    <>
      <nav className="bg-primary w-100 h-[100px] flex flex-row justify-between items-center pl-[8px] pr-[8px]">
        <Link href="/" className="flex">
          <Image src={Logo} alt="report-logo" width={60}></Image>
          <h1 className="text-xl ml-[8px] flex items-center font-bold text-secondary">
            Report App
          </h1>
        </Link>
        <ConnectButton />
      </nav>
      {isConnected ? <h1>{address}</h1> : null}
    </>
  );
};

export default User;
