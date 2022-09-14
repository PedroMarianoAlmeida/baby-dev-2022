import { useState } from "react";

import styles from "./UserStackSelector.module.css";

import TopContainer from "./TopContainer";
import BottomContainer from "./BottomContainer";

const initialSelected = ["HTML", "React Native", "JavaScript"];

const allOptions = [
  {
    name: "Linguagens de Programação",
    stack: ["JavaScript", "PHP", "Ruby", "Java", "C#"],
  },
  {
    name: "Frontend",
    stack: [
      "HTML",
      "CSS",
      "React",
      "Angular",
      "Vue",
      "Svelte",
      "Next",
      "Nuxt",
      "Oxygen",
    ],
  },
  {
    name: "Backend",
    stack: ["Node", "Laravel", "Elixir", "Springboot", "Ruby on Rails"],
  },
  {
    name: "Mobile",
    stack: ["React Native", "Flutter", "Android", "iOS", "Ionic"],
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

  const removeSelected = (name: string) => {
    const newSelected = selected.filter((stack) => stack !== name);
    setSelected(newSelected);
  };

  const addSelected = (name: string) => {
    const newSelected = [...selected, name]
    setSelected(newSelected);
  }

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
        selected={selected}
        addSelected={addSelected}
      />
    </div>
  );
};

export default UserStackSelector;
