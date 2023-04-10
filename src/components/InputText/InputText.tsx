import { useState } from "react";

interface InputTextProps {
  onChange: any;
}

export const InputText = ({ descriptionChangeHandler }: any): JSX.Element => {
  return (
    <div>
      <textarea
        name="text"
        id=""
        cols={30}
        rows={10}
        onChange={descriptionChangeHandler}
      />
    </div>
  );
};
