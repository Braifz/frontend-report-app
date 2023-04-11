import { useState } from "react";

interface InputTextProps {
  onChange: any;
}

export const InputText = ({ descriptionChangeHandler }: any): JSX.Element => {
  return (
    <div>
      <textarea
        className="rounded-lg p-[16px] mt-[16px]  text-dark text-l"
        placeholder="Agregue su descripción aqui..."
        name="text"
        id="text"
        cols={25}
        rows={8}
        onChange={descriptionChangeHandler}
      />
    </div>
  );
};
