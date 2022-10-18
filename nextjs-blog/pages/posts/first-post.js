import Link from "next/link";
import Image from "next/image";
import profilePic from "/public/images/sam.png";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function Main() {
  return (
    <Layout>
      <Head>
        <title>Sam's Blog</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`script loaded`)}
      />
      <h1>First Post Header</h1>
      <Image src={profilePic} alt="Sam" />
      <h2>
        <Link href="/">back home</Link>
      </h2>
    </Layout>
  );
}
