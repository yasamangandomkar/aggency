import Hero from "@/components/Hero";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Agency from "@/components/Agency";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Layout>
        <Hero />
        <Agency />
      </Layout>
    </div>
  );
}
