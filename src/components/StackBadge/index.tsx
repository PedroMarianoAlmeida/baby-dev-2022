import styles from "./StackBadge.module.css";

interface StackBadgeProps {
  name: string;
}

const StackBadge = ({ name }: StackBadgeProps) => (
  <h6 id={styles.root}>{name}</h6>
);
export default StackBadge;
