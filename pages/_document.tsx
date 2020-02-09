import React from "react";
import Document, {Html, Head, Main, NextScript} from "next/document";

import HeadComponent from "../components/Head";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>

        <body>
          <HeadComponent></HeadComponent>

          <div className="u-container">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
