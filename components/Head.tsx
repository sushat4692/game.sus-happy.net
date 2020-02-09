import React from "react";
import Link from "next/link";

import styles from "./Head.module.css";

const Head: React.FC = () => <header className={styles.header}>
  <div className="u-container">
    <p className={styles.name}>
      <Link href="/"><a className={styles.anchor}>SUSH-i Game</a></Link>
    </p>
  </div>
</header>;

export default Head;
