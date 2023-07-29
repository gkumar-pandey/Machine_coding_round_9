import styles from "./grid.module.css";

// eslint-disable-next-line react/prop-types
const Grid = ({ children }) => {
  return (
    <>
      <div className={styles.grid}>{children}</div>
    </>
  );
};

export { Grid };
