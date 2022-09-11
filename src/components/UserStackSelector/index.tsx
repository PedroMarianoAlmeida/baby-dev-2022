import { useState } from "react";

import styles from "./UserStackSelector.module.css";

import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";

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

export default UserStackSelector;
