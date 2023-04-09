import { NavbarReport } from "@/components/NavbarReport/NavbarReport";
import { useAccount } from "wagmi";

const User = () => {
  const { address, isConnected } = useAccount();
  return (
    <>
      <NavbarReport />
      <h1>Bienvenido! Acá podrá hacer su Crypto Multa</h1>
      {isConnected ? <h1> address connected: {address}</h1> : null}
    </>
  );
};

export default User;
