import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./UserStackSelector.module.css";
import useDebounce from "src/hooks/useDebounce";

const UserStackSelector = () => {
  return <UserStackSelectorUI />;
};

const UserStackSelectorUI = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isMouseLeavesMenu, setIsMouseLeavesMenu] = useState(false);
  const debouncedIsMouseLeavesMenu = useDebounce(isMouseLeavesMenu, 350);

  const { root, searchContainer, stackContainer } = styles;

  useEffect(() => {
    if (debouncedIsMouseLeavesMenu) {
      setShowOptions(false);
      setIsMouseLeavesMenu(false);
    }
  }, [debouncedIsMouseLeavesMenu]);

  return (
    <div id={root}>
      <div id={searchContainer} onClick={() => setShowOptions(!showOptions)}>
        <Image src={"/icons/magnifying-glass.svg"} width={22} height={22} />
      </div>
      {showOptions ? (
        <div
          id={stackContainer}
          onMouseLeave={() => setIsMouseLeavesMenu(true)}
          onMouseEnter={() => setIsMouseLeavesMenu(false)}
        ></div>
      ) : null}
    </div>
  );
};

export default UserStackSelector;
