import Layout from "../components/Tcs/Layout/Layout";
import Banner from "../components/Tcs/Banner/Banner";
import PartA from "../components/Tcs/PartA/PartA";
import PartB from "../components/Tcs/PartB/PartB";
import PartC from "../components/Tcs/PartC/PartC";
import PartD from "../components/Tcs/PartD/PartD";
import Course from "../components/Tcs/Course/Course";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Skill Garage | Our Courses" />

      <Layout>
        <Banner />
        <PartA />
        <PartB />
        <PartC />
        <PartD />
        <Course />
      </Layout>
    </>
  );
}
