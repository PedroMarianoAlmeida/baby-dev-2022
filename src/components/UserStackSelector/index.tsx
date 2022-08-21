import Image from "next/image";
import styles from "./UserStackSelector.module.css";

const UserStackSelector = () => {
  return <UserStackSelectorUI />;
};

const UserStackSelectorUI = () => {
  const { searchContainer, stackContainer } = styles;
  return (
    <div>
      <div id={searchContainer}>
        <Image src={"/icons/magnifying-glass.svg"} width={22} height={22} />
      </div>
      <div id={stackContainer}></div>
    </div>
  );
};

export default UserStackSelector;
