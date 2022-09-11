import { useEffect, useState } from "react";

import useDebounce from "src/hooks/useDebounce";
import styles from "./UserStackSelector.module.css";

interface BottomContainerProps {
  showOptions: boolean;
  setShowOptions(option: boolean): void;
}

const BottomContainer = ({
  showOptions,
  setShowOptions,
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
        ></div>
      ) : null}
    </>
  );
};

export default BottomContainer;
