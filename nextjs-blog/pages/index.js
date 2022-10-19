import Layout from "../components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sam's Blog</title>
      </Head>
      <p>My name is Sam, I'm an engineer and product person</p>
    </Layout>
  );
}
