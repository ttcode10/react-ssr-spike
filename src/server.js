import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";
import { ServerStyleSheet } from 'styled-components';

const PORT = 9000;

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  const sheet = new ServerStyleSheet();

  try {
    const content = renderToString(sheet.collectStyles(<Home />));
    const styles = sheet.getStyleTags();
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>React SSR Spike</title>
          <link rel="shortcut icon" href="assets/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <link rel="preconnect" href="https://fonts.gstatic.com">
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,700&display=swap" rel="stylesheet">
          ${ styles }
        </head>
        <body>
          <div id="root">${ content }</div>
          <script src="bundle.js"></script>
        </body>
      </html>
    `;
    res.send(html);
  } catch(error) {
    console.error(error);
  } finally {
    sheet.seal();
  };
});

app.listen(PORT, () => {
  console.log(`App launched at new PORT ${PORT}`);
});
