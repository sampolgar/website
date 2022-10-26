import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import Form from "../components/form";
import { GetStaticProps } from "next";

//static props then sent to the Home component as a prop
//default function takes in props arguments, that's why we need to use strongly typed props
// TODO What is {" "} doing?
export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>hi my name is sam</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// change getStaticProps to getServerSideProps to run on every request
// get static props is a function that gets called at build time on server-side
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
