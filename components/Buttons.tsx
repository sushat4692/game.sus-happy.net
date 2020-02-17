import React from "react";
import Link from "next/link";

import styles from "./Buttons.module.css";

export const Buttons: React.FC = () => {
  return <div className={styles.wrap}>
    <div className={`${styles.prev} ${styles.nav}`}>
      {/* <Link href="/"><a className={styles.button}>Prev</a></Link> */}
    </div>
    <div className={`${styles.home} ${styles.nav}`}>
      <Link href="/"><a className={styles.button}>Top</a></Link>
    </div>
    <div className={`${styles.next} ${styles.nav}`}>
      {/* <Link href="/"><a className={styles.button}>Next</a></Link> */}
    </div>
  </div>;
};

export default Buttons;
