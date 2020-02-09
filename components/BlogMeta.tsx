import React from "react";
import PropTypes from "prop-types";

import styles from "./BlogMeta.module.css";

type Props = {
  title: string,
  date: string,
  tags?: string[],
  description?: string
}

const BlogMeta: React.FC<Props> = ({title, date, description}) => (
  <div>
    <div className={styles.info}>
      <h1 className={styles.title}>{title}</h1>
      <time className={styles.time}>{date}</time>
    </div>
    { description ? <p>{description}</p> : null}
  </div>
);

BlogMeta.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.array,
  description: PropTypes.string
};

export default BlogMeta;
