import Image from "next/image";

import { useState } from "react";
import { useAccount } from "wagmi";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import { Layout } from "@/components/Layout/Layout";
import { InputFile } from "@/components/InputFile/InputFile";
import { InputText } from "@/components/InputText/InputText";
import { Instructions } from "@/components/Instructions/Instructions";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const User = () => {
  const [selectFile, setSelectedFile] = useState<string | null>();
  const [isFilePicked, setIsFilePicked] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [imgConverted, setImgConverted] = useState("");
  const [files, setFiles] = useState([]);
  const { address, isConnected } = useAccount();

  const fileChangeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    setImgConverted(URL.createObjectURL(event.target.files[0]));
  };

  const descriptionChangeHandler = (event: any) => {
    setDescription(event.target.value);
  };

  // const handleUploadClick = () => {
  //   if (!file) {
  //     return;
  //   }

  //   fetch("URL", {
  //     method: "POST",
  //     body: file,
  //     // 👇 Set headers manually for single file upload
  //     headers: {
  //       "content-type": file.type,
  //       "content-length": `${file.size}`, // 👈 Headers need to be a string
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // };

  const handleSubmit = () => {
    const obj = {
      description: description,
      file: selectFile,
    };
    console.log({ obj });
  };

  return (
    <Layout>
      <div className="bg-secondary h-screen flex flex-col items-center justify-center">
        <h1 className="text-center text-dark text-xl md:text-2xl mt-[32px] ">
          <strong className="block mb-[16px] text-3xl md:text-4xl">
            ¡Bienvenido!
          </strong>{" "}
          Acá podrá hacer su Crypto Multa
        </h1>
        <Instructions />

        <div className="bg-gradient-to-r  md:w-[600px] from-primary to-dark flex flex-col items-center justify-center h-auto rounded-lg p-[16px]  shadow-lg shadow-dark mb-[32px]">
          <InputFile fileChangeHandler={fileChangeHandler} />
          <FilePond
            className="bg-secondary"
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={true}
            maxFiles={3}
            name="files"
            labelIdle="Drag & Drop your files"
          />
          {isFilePicked ? (
            <Image
              className="rounded-lg m-[8px]"
              src={imgConverted}
              alt="fileimage"
              width={150}
              height={150}
            />
          ) : null}
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
  );
};

export default User;
