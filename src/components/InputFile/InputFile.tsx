import { useState } from "react";

export const InputFile = () => {
  return (
    <div className="flex items-center flex-col justify-center text-secondary">
      <label htmlFor="">Suba la foto</label>
      <input type="file" />
    </div>
  );
};
