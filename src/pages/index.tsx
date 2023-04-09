import { Navbar } from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-8xl h-100 bg-blue flex content-center justify-center">
          {" "}
          hello
        </h1>
      </div>
    </>
  );
}
