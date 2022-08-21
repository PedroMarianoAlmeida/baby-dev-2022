import styles from "./StackBadge.module.css";

interface StackBadgeProps {
  name: string;
  isSelected: boolean;
}

const StackBadge = ({ name, isSelected }: StackBadgeProps) => {
  const { root, selected } = styles;

  return (
    <h6 id={root} className={isSelected ? selected : ""}>
      {name}
    </h6>
  );
};
export default StackBadge;
