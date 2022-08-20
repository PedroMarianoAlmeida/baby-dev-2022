import Image from "next/image";
import styles from "./JobCard.module.css";

interface JobCardProps {
  cardData: {
    company: {
      logo: string;
      name: string;
    };
    job: {
      title: string;
      place: string;
    };

    stack: string[];
  };
}

const JobCard = ({ cardData }: JobCardProps) => {
  const { company, job, stack } = cardData;
  const { logo, name } = company;
  const { title, place } = job;

  return (
    <div id={styles.root}>
      <Image id={styles.logo} src={logo} height={44} width={44} />
      <h4 id={styles.name}>{name}</h4>
      <h3 id={styles.title}>{title}</h3>
      <h5 id={styles.place}>{place}</h5>
      <div id={styles.stack}>
        {stack.map((tec) => (
          <h6>{tec}</h6>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
