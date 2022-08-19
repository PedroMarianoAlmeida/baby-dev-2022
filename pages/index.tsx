import type { NextPage } from "next";
import Head from "next/head";
import JobCard from "../src/components/JobCard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baby Dev</title>
        <meta name="description" content="Sua 1a vaga na área TECH está aqui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <JobCard />
      </main>
    </div>
  );
};

export default Home;
