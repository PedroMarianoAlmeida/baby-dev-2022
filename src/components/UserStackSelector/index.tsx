import { useState } from "react";

import styles from "./UserStackSelector.module.css";

import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";

const initialSelected = [
  { id: "html", name: "html" },
  { id: "react_native", name: "React Native" },
  { id: "javascript", name: "JavaScript" },
];

const allOptions = [
  {
    name: "Linguagens de Programação",
    stack: ["JavaScript", "PHP", "Ruby", "Java", "C#"],
  },
  {
    name: "Frontend",
    stack: ["HTML", "CSS", "React", "Angular", "Vue", "Svelte", "Next"],
  },
  {
    name: "Backend",
    stack: ["Node", "Laravel", "Elixir", "Springboot", "Ruby on Rails"],
  },
  {
    name: "Low Code",
    stack: ["Wordpress", "Vtex", "Service Now"],
  },
  {
    name: "Devops",
    stack: ["AWS", "Docker", "Terraform"],
  },
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
        options={allOptions}
      />
    </div>
  );
};

export default UserStackSelector;
