import React from "react";
import Link from "next/link";

import {MetaData as DQ11S} from "./post/2020-02-09_dq11.mdx";
import {MetaData as First} from "./post/2019-08-13_ds-dq7.mdx";
import {MetaData as Second} from "./post/2019-05-03_2019-05-03_ios-ff4ta.mdx";
import {MetaData as Third} from "./post/2019-04-14_ios-ff4ta.mdx";

import styles from "./index.module.css";

const Posts = [
  DQ11S,
  First,
  Second,
  Third
];

const Index: React.FC = () => {
  return <>
    <h1 className={styles.name}>SUSH-i Game</h1>

    <main>
      {
        Posts.map(post =>
          <Link key={post.slug} href={`./post/${post.slug}`}>
            <a className={styles.anchor}>
              <h2 className={styles.title}>{post.title}</h2>
              <time>{post.date}</time>
              <p className={styles.description}>{post.description}</p>
            </a>
          </Link>
        )
      }
    </main>
  </>;
};

export default Index;
