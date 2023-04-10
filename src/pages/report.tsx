import { useState } from "react";
import { Layout } from "@/components/Layout/Layout";
import { useAccount } from "wagmi";
import { InputFile } from "@/components/InputFile/InputFile";
import { InputText } from "@/components/InputText/InputText";

const User = () => {
  const [selectFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const { address, isConnected } = useAccount();

  const fileChangeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const descriptionChangeHandler = (event: any) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    const obj = {
      description: description,
      file: selectFile,
    };

    console.log({ obj });
  };

  return (
    <>
      <Layout>
        <div className="h-screen bg-secondary w-full flex flex-col items-center justify-center">
          <h1 className="text-center text-dark text-xl md:text-2xl mt-[32px] ">
            <strong className="block mb-[16px] text-3xl md:text-4xl">
              ¡Bienvenido!
            </strong>{" "}
            Acá podrá hacer su Crypto Multa
          </h1>
          <div className="bg-gradient-to-r  md:w-[600px] p-[24px] m-[16px] rounded-xl shadow-lg shadow-dark from-primary to-dark flex flex-col items-center justify-center text-l md:text-xl text-secondary">
            <p className="border-solid border-b-2 mb-[16px] border-secondary">
              Siga con las siguientes intrucciones :
            </p>
            <ol>
              <li> 1. Conecte su Wallet.</li>
              <li>2. Suba la foto del reporte.</li>
              <li>3. Escriba una breve descripcion del reporte.</li>
              <li>4. Envia el reporte.</li>
            </ol>
          </div>
          {isConnected ? <h1> address connected: {address}</h1> : null}

          <div className="bg-gradient-to-r md:w-[600px] from-primary to-dark flex flex-col items-center justify-center m-[16px] rounded-lg p-[24px] h-[400px] shadow-lg shadow-dark mb-[32px]">
            <InputFile fileChangeHandler={fileChangeHandler} />
            <InputText descriptionChangeHandler={descriptionChangeHandler} />
            <button
              type="button"
              className="bg-button mt-[8px] text-dark p-[8px] rounded-xl shadow-sm shadow-dark font-bold"
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default User;
