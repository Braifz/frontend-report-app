import { useState } from "react";

interface FAQsProps {
  label: string;
  content: string;
}

export const FAQs = ({ label, content }: FAQsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={handleIsOpen}
      className="bg-gradient-to-br from-primary to-dark text-secondary  w-[300px] md:w-[500px] lg:w-1/2 flex flex-col items-center justify-center p-[16px] border-2 border-secondary cursor-pointer m-[8px] rounded-lg shadow-md shadow-dark"
    >
      <p className="text-l  border-b-2 border-secondary text-center">{label}</p>
      {isOpen ? <p className="p-[16px]">{content}</p> : null}
    </div>
  );
};
