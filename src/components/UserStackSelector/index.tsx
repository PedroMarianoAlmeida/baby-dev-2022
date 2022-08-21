import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./UserStackSelector.module.css";

import StackBadge from "src/components/StackBadge";
import useDebounce from "src/hooks/useDebounce";

const initialSelected = [
  { id: "html", name: "html" },
  { id: "react_native", name: "React Native" },
  { id: "javascript", name: "JavaScript" },
];
const UserStackSelector = () => {
  const [selected, setSelected] = useState(initialSelected);
  return <UserStackSelectorUI selected={selected} />;
};

interface UserStackSelectorUiProps {
  selected: { id: string; name: string }[];
}

const UserStackSelectorUI = ({ selected }: UserStackSelectorUiProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isMouseLeavesMenu, setIsMouseLeavesMenu] = useState(false);
  const debouncedIsMouseLeavesMenu = useDebounce(isMouseLeavesMenu, 350);

  const { root, searchContainer, selectedContainer, stackContainer } = styles;

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
        <div id={selectedContainer}>
          {selected.map((stack) => (
            <StackBadge key={stack.id} name={stack.name} />
          ))}
        </div>
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
