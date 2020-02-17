import React from "react";
import Link from "next/link";

const Head: React.FC = () => <header className="l-header">
  <div className="u-container">
    <p className="l-header__name">
      <Link href="/"><a className="l-header__anchor">SUSH-i Game</a></Link>
    </p>
  </div>
</header>;

export default Head;
