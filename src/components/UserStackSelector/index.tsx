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

  const removeSelected = (id: string) => {
    const newSelected = selected.filter((stack) => stack.id !== id);
    setSelected(newSelected);
  };

  return (
    <UserStackSelectorUI selected={selected} removeSelected={removeSelected} />
  );
};

interface UserStackSelectorUiProps {
  selected: { id: string; name: string }[];
  removeSelected(id: string): void;
}

const UserStackSelectorUI = ({
  selected,
  removeSelected,
}: UserStackSelectorUiProps) => {
  const [showOptions, setShowOptions] = useState(false);

  const {
    root,
    searchContainer,
    selectedContainer,
    stackBadgeContainer,
    stackContainer,
  } = styles;

  const handleRemoveSelected = (
    e: React.SyntheticEvent<EventTarget>,
    id: string
  ) => {
    removeSelected(id);
    e.stopPropagation();
  };

  return (
    <div id={root}>
      <div id={searchContainer} onClick={() => setShowOptions(!showOptions)}>
        <Image src={"/icons/magnifying-glass.svg"} width={22} height={22} />
        <div id={selectedContainer}>
          {selected.map((stack) => (
            <div
              onClick={(e) => handleRemoveSelected(e, stack.id)}
              key={stack.id}
              id={stackBadgeContainer}
            >
              <StackBadge name={stack.name}>
                <Image src={"/icons/close.svg"} width={8} height={8} />
              </StackBadge>
            </div>
          ))}
        </div>
      </div>
      <BottomContainer
        showOptions={showOptions}
        setShowOptions={setShowOptions}
      />
    </div>
  );
};
const BottomContainer = ({ showOptions, setShowOptions }) => {
  const [isMouseLeavesMenu, setIsMouseLeavesMenu] = useState(false);
  const debouncedIsMouseLeavesMenu = useDebounce(isMouseLeavesMenu, 350);

  useEffect(() => {
    if (debouncedIsMouseLeavesMenu) {
      setShowOptions(false);
      setIsMouseLeavesMenu(false);
    }
  }, [debouncedIsMouseLeavesMenu]);

  const { stackContainer } = styles;
  return (
    <>
      {showOptions ? (
        <div
          id={stackContainer}
          onMouseLeave={() => setIsMouseLeavesMenu(true)}
          onMouseEnter={() => setIsMouseLeavesMenu(false)}
        ></div>
      ) : null}
    </>
  );
};
export default UserStackSelector;
