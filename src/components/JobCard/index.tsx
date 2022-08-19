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
    <div>
      <img src={logo} />
      <h4>{name}</h4>
      <h3>{title}</h3>
      <h4>{place}</h4>
      <div>
        {stack.map((tec) => (
          <h6>{tec}</h6>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
