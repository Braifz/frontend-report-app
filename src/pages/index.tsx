import { Navbar } from "@/components/Navbar/Navbar";
import { Presentation } from "@/components/Presentation/Presentation";
import { Layout } from "@/components/Layout/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Presentation />
      </Layout>
    </div>
  );
}
