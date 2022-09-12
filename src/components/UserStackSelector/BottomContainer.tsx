import { useEffect, useState } from "react";

import useDebounce from "src/hooks/useDebounce";
import styles from "./UserStackSelector.module.css";
import StackBadge from "src/components/StackBadge";

interface BottomContainerProps {
  showOptions: boolean;
  setShowOptions(option: boolean): void;
  options: { name: string; stack: string[] }[];
}

const BottomContainer = ({
  showOptions,
  setShowOptions,
  options,
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
  return (
    <>
      {showOptions ? (
        <div
          id={stackContainer}
          onMouseLeave={() => setIsMouseLeavesMenu(true)}
          onMouseEnter={() => setIsMouseLeavesMenu(false)}
        >
          {options.map((optionGroup) => (
            <OptionGroup key={optionGroup.name} optionGroup={optionGroup} />
          ))}
        </div>
      ) : null}
    </>
  );
};

interface OptionGroupProps {
  optionGroup: { name: string; stack: string[] };
}

const OptionGroup = ({ optionGroup }: OptionGroupProps) => {
  const { name, stack } = optionGroup;

  return (
    <>
      <h4>{name}</h4>
      {stack.map((option) => (
        <StackBadge name={option} key={`${name}-${option}`} />
      ))}
    </>
  );
};

export default BottomContainer;
