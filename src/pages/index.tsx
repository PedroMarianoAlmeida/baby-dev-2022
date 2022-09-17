import type { NextPage } from "next";
import Head from "next/head";
import UserStackSelector from "../components/UserStackSelector";
import styles from "src/styles/Home.module.css";

const initialSelected = ["HTML", "React Native", "JavaScript"];

const allOptions = [
  {
    name: "Linguagens de Programação",
    stack: ["JavaScript", "PHP", "Ruby", "Java", "C#"],
  },
  {
    name: "Frontend",
    stack: [
      "HTML",
      "CSS",
      "React",
      "Angular",
      "Vue",
      "Svelte",
      "Next",
      "Nuxt",
      "Oxygen",
    ],
  },
  {
    name: "Backend",
    stack: ["Node", "Laravel", "Elixir", "Springboot", "Ruby on Rails"],
  },
  {
    name: "Mobile",
    stack: ["React Native", "Flutter", "Android", "iOS", "Ionic"],
  },
  {
    name: "Low Code",
    stack: ["Wordpress", "Vtex", "Service Now"],
  },
  {
    name: "Devops",
    stack: ["AWS", "Docker", "Terraform"],
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baby Dev</title>
        <meta name="description" content="Sua 1a vaga na área TECH está aqui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UserStackSelector initialSelected={initialSelected} allOptions={allOptions}/>
      </main>
    </div>
  );
};

export default Home;
