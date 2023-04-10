import { useState } from "react";

interface InputTextProps {
  onChange: any;
}

export const InputText = (onChange: any): JSX.Element => {
  return (
    <div>
      <textarea name="text" id="" cols={30} rows={10} />
    </div>
  );
};
