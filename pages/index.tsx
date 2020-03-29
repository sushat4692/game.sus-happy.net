import React from "react";
import Link from "next/link";
import HeadMeta from "../components/HeadMeta";
import {formatDistanceToNow, parseISO} from "date-fns";

import {MetaData as Octopath} from "./post/switch-octopath-traveler.mdx";
import {MetaData as DQ11S} from "./post/switch-dq11s.mdx";
import {MetaData as First} from "./post/ds-dq7.mdx";
import {MetaData as Second} from "./post/ios-ff4ta.mdx";
import {MetaData as Third} from "./post/ios-ff4ta.mdx";

import styles from "./index.module.css";

const Posts = [
  Octopath,
  DQ11S,
  First,
  Second,
  Third
];

const Index: React.FC = () => {
  return <>
    <HeadMeta
      title={`${process.env.siteTitle} - ${process.env.siteDescript}`}
      description={process.env.siteDescript}
      image=""
      url="https://game.sus-happy.net/"
      type="blog"
    />

    <div className={styles.visual}>
      <h1 className={styles.visualText}>{process.env.siteTitle}</h1>
      <p className={styles.visualDesc}>{process.env.siteDescript}</p>
    </div>

    <main className={styles.main}>
      {
        Posts.map(post => {
          if (!post.tags) {
            post.tags = [];
          }

          return (
            <Link key={post.slug} href={`./post/${post.slug}`}>
              <a className={styles.anchor}>
                <h2 className={styles.title}>{post.title}</h2>
                <div className={styles.meta}>
                  {post.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                  <time className={styles.time}>{ formatDistanceToNow(parseISO(post.date)) }</time>
                </div>
                <p className={styles.description}>{post.description}</p>
              </a>
            </Link>
          );
        })
      }
    </main>
  </>;
};

export default Index;
