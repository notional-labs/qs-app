import React, { useEffect } from "react";
import Head from "next/head";
import style from '@/styles/Home.module.css'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <div class={`${style.bg}`}>
        <img src="/imgs/background.svg" alt="" />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};
export default Layout;

