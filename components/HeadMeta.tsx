/*
 * 下記ページの内容をほぼほぼそのまま引用させていただいています。
 * https://t-cr.jp/memo/2201639257480a359
 */
import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

interface Props {
  title: string;
  description: string;
  image?: string;
  url: string;
  type: string;
}

const HeadMeta: React.FC<Props> = ({
  title,
  description,
  image,
  url,
  type
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      {
        (image) ? <meta property="og:image" content={image} /> : null
      }
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@sushat4692" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      {/* <link
        rel="shortcut icon"
        href={
          "https://cdn.qiita.com/assets/favicons/public/production-4ff10c1e1e2b5fcb353ff9cafdd56c70.ico"
        }
      />
      <link
        rel="apple-touch-icon"
        href={
          "https://cdn.qiita.com/assets/favicons/public/apple-touch-icon-f9a6afad761ec2306e10db2736187c8b.png"
        }
      /> */}
    </Head>
  );
};

HeadMeta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default HeadMeta;
