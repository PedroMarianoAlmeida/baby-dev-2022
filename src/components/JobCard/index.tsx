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
  console.log(cardData);
  return <h2 className={styles.error}>Job Card</h2>;
};

export default JobCard;
