import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }: any) => {
  return (
    <div className="bg-secondary h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};
