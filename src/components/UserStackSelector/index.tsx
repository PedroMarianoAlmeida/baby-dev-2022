import { useState } from "react";
import Image from "next/image";
import styles from "./UserStackSelector.module.css";

const UserStackSelector = () => {
  return <UserStackSelectorUI />;
};

const UserStackSelectorUI = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { root, searchContainer, stackContainer } = styles;

  return (
    <div id={root}>
      <div id={searchContainer} onClick={() => setShowOptions(!showOptions)}>
        <Image src={"/icons/magnifying-glass.svg"} width={22} height={22} />
      </div>
      {showOptions ? <div id={stackContainer}></div> : null}
    </div>
  );
};

export default UserStackSelector;
