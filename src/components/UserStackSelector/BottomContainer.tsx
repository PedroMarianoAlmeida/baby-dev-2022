import { useEffect, useState } from "react";

import useDebounce from "src/hooks/useDebounce";
import styles from "./UserStackSelector.module.css";
import StackBadge from "src/components/StackBadge";

interface BottomContainerProps {
  showOptions: boolean;
  setShowOptions(option: boolean): void;
  options: { name: string; stack: string[] }[];
  selected: string[];
  addSelected(name: string): void;
}

const BottomContainer = ({
  showOptions,
  setShowOptions,
  options,
  selected,
  addSelected,
}: BottomContainerProps) => {
  const [isMouseLeavesMenu, setIsMouseLeavesMenu] = useState(false);
  const debouncedIsMouseLeavesMenu = useDebounce(isMouseLeavesMenu, 350);

  useEffect(() => {
    if (debouncedIsMouseLeavesMenu) {
      setShowOptions(false);
      setIsMouseLeavesMenu(false);
    }
  }, [debouncedIsMouseLeavesMenu]);

  const { stackContainer } = styles;

  if (!showOptions) return;

  return (
    <div
      id={stackContainer}
      onMouseLeave={() => setIsMouseLeavesMenu(true)}
      onMouseEnter={() => setIsMouseLeavesMenu(false)}
    >
      {options.map((optionGroup) => (
        <OptionGroup
          optionGroup={optionGroup}
          selected={selected}
          addSelected={addSelected}
        />
      ))}
    </div>
  );
};

interface OptionGroupProps {
  optionGroup: { name: string; stack: string[] };
  selected: string[];
  addSelected(name: string): void;
}

const OptionGroup = ({
  optionGroup,
  selected,
  addSelected,
}: OptionGroupProps) => {
  const { name, stack } = optionGroup;

  const { stackGroupTitle, stacksGroupContainer } = styles;
  return (
    <>
      <h3 className={stackGroupTitle}>{name}</h3>
      <div className={stacksGroupContainer}>
        {stack.map((option) => (
          <div
            key={`${name}-${option}`}
            onClick={() => addSelected(option)}
            className="cursor-pointer"
          >
            <StackBadge name={option} isSelected={selected.includes(option)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BottomContainer;
