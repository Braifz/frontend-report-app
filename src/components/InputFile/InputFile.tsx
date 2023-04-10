import { useState } from "react";

interface InputFileProps {
  fileChangeHandler: any;
}

export const InputFile = ({ fileChangeHandler }: any) => {
  return (
    <div className="flex items-center flex-col justify-center text-secondary">
      <input type="file" name="file" onChange={fileChangeHandler} />
    </div>
  );
};
