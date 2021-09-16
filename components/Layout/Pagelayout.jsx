import React from "react";
import Navbar from "../Navbar/Navbar";
import Head from "next/head";
import ProjectNav from "../projIndex/index"

export default function Pagelayout({ children }) {
  return (
    <div>
      <Head>
        <title>Demo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link  rel="preconnect" href="https://fonts.gstatic.com"    />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap"
          rel="stylesheet"
        /> */}
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@200;300;500&display=swap" rel="stylesheet"></link>
      </Head>
      <ProjectNav/>
      {children}
    </div>
  );
}
