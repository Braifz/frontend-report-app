import { useState } from "react";
import { NavbarReport } from "@/components/NavbarReport/NavbarReport";
import { useAccount } from "wagmi";
import { InputFile } from "@/components/InputFile/InputFile";
import { InputText } from "@/components/InputText/InputText";

const User = () => {
  const [] = useState();
  const { address, isConnected } = useAccount();
  return (
    <>
      <NavbarReport />
      <div className="min-h-full bg-secondary w-full flex flex-col items-center justify-center">
        <h1 className="text-center text-dark text-xl mt-[32px] ">
          <strong className="block mb-[16px] text-3xl">¡Bienvenido!</strong> Acá
          podrá hacer su Crypto Multa
        </h1>
        <div className="bg-gradient-to-r p-[32px] m-[16px] rounded-xl shadow-lg shadow-dark from-primary to-dark flex flex-col items-center max-w-4xl justify-center text-secondary">
          <p className="border-solid border-b-2 text-lg mb-[16px] border-secondary">
            Siga con las siguientes intrucciones :
          </p>
          <ol className="pl-[24px]">
            <li> 1. Conecte su Wallet.</li>
            <li>2. Suba la foto del reporte.</li>
            <li>3. Escriba una breve descripcion del reporte.</li>
            <li>4. Envia el reporte.</li>
          </ol>
        </div>
        {isConnected ? <h1> address connected: {address}</h1> : null}

        <div className="bg-gradient-to-r from-primary to-dark flex flex-col items-center justify-center m-[16px] max-w-4xl rounded-lg p-[24px] h-[400px] shadow-lg shadow-dark mb-[32px]">
          <InputFile />
          <InputText />
          <button
            type="button"
            className="bg-button mt-[8px] text-dark p-[8px] rounded-xl shadow-sm shadow-dark font-bold"
          >
            Enviar
          </button>
        </div>
      </div>
      <footer>
        <h1 className="text-center bg-gradient-to-r text-secondary from-primary to-dark">
          @Cordobyte 2023
        </h1>
      </footer>
    </>
  );
};

export default User;
