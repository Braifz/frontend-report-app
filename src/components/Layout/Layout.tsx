import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }: any) => {
  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="mt-[48px] h-screen mb-[48px]">{children}</div>
      <Footer />
    </div>
  );
};
