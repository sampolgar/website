import Layout from "../components/layout";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

// change getStaticProps to getServerSideProps to run on every request
// get static props is a function that gets called at build time on server-side
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

//static props then sent to the Home component as a prop
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Sam's Blog</title>
      </Head>
      <p>My name is Sam, I'm an engineer and product person</p>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}