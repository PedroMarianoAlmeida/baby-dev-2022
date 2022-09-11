import JobCard from "src/components/JobCard";

const sampleCardData = {
  company: {
    logo: "https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png",
    name: "iFood",
  },
  job: {
    title: "Padawan",
    place: "SP/Remoto",
  },

  stack: ["HTML", "React Native", "Node", "JavaScript", "MySQL"],
};

const JobsPage = () => {
  return (
    <>
      <JobCard cardData={sampleCardData} />
    </>
  );
};

export default JobsPage;
