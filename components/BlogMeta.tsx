import React from "react";
import PropTypes from "prop-types";
import {formatDistanceToNow, parseISO} from "date-fns";

import HeadMeta from "./HeadMeta";

import styles from "./BlogMeta.module.css";

type Props = {
  title: string,
  date: string,
  slug: string,
  tags?: string[],
  description?: string
}

const BlogMeta: React.FC<Props> = ({title, date, slug, tags, description}) => {
  if (!tags) {
    tags = [];
  }

  return (
    <>
      <HeadMeta
        title={`${title} | ${process.env.siteTitle}`}
        description={description}
        image=""
        url={`https://game.sus-happy.net/post/${slug}`}
        type="article"
      />

      <div>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.meta}>
            {tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
            <time className={styles.time}>{formatDistanceToNow(parseISO(date))}</time>
          </div>
        </div>
        { description ? <p>{description}</p> : null}
      </div>
    </>
  );
};

BlogMeta.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array,
  description: PropTypes.string
};

export default BlogMeta;
