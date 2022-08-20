import type { NextPage } from "next";
import Head from "next/head";
import JobCard from "../src/components/JobCard";
import styles from "../styles/Home.module.css";

const sampleCardData = {
  company: {
    logo: "",
    name: "iFood",
  },
  job: {
    title: "Padawan",
    place: "SP/Remoto",
  },

  stack: ["HTML", "React Native", "Node", "JavaScript", "MySQL"],
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baby Dev</title>
        <meta name="description" content="Sua 1a vaga na área TECH está aqui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <JobCard cardData={sampleCardData} />
      </main>
    </div>
  );
};

export default Home;
