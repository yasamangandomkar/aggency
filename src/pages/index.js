import Hero from "@/components/Hero";
import Layout from "../components/Layout";
import Agency from "@/components/Agency";
import Expertise from "@/components/Expertise";
import Banner from "@/components/Banner";
import About from "@/components/About";
import ShowCase from "@/components/ShowCase";
import Brands from "@/components/Brands";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Layout>
        <Hero />
        <Agency />
        <Expertise />
        <Banner />
        <About />
        <ShowCase />
        <Brands />
        <Articles />
      </Layout>
    </div>
  );
}
