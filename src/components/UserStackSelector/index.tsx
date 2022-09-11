import { useEffect, useState } from "react";

import styles from "./UserStackSelector.module.css";
import useDebounce from "src/hooks/useDebounce";

import TopContainer from "./TopContainer";

const initialSelected = [
  { id: "html", name: "html" },
  { id: "react_native", name: "React Native" },
  { id: "javascript", name: "JavaScript" },
];
const UserStackSelector = () => {
  const [selected, setSelected] = useState(initialSelected);
  const [showOptions, setShowOptions] = useState(false);

  const removeSelected = (id: string) => {
    const newSelected = selected.filter((stack) => stack.id !== id);
    setSelected(newSelected);
  };

  const { root } = styles;

  return (
    <div id={root}>
      <TopContainer
        selected={selected}
        removeSelected={removeSelected}
        showOptions={showOptions}
        setShowOptions={setShowOptions}
      />
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
