import Image from "next/image";

const UserStackSelector = () => {
  return <UserStackSelectorUI />;
};

const UserStackSelectorUI = () => {
  return (
    <div>
      <div>
        <Image
          // id={styles.logo}
          src={"/icons/magnifying-glass.svg"}
          width={22}
          height={22}
        />
      </div>
      <h2>UserStackSelector</h2>
    </div>
  );
};

export default UserStackSelector;
