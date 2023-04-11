export const Instructions = () => {
  return (
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
  );
};
