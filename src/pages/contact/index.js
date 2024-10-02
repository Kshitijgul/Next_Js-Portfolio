import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Inner from "../../components/Layout/Inner";
import { useRouter } from "next/router";
import Header from "../../components/Contact_Page/Header";
import Loco from "../../components/Layout/Loco";


const index = () => {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState("About"); // Default title

  useEffect(() => {
    // Listen for route changes
    const handleRouteChange = (url) => {
      // Set the title based on the new URL
      if (url === "/contact") {
        setPageTitle("Contact");
      } else if (url === "/work") {
        setPageTitle("Work");
      } else if (url === "/") {
        setPageTitle("Home");
      } else if (url === "/about") {
        setPageTitle("About");
      } // Add more routes as needed
    };

    // Subscribe to route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up the subscription
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <title>Kshitij Guladhe &#x2022; Frontend developer </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="fevicon.png" />
      </Head>
      <Inner pageTitle={pageTitle}>
        <Loco>
          <Header></Header>
        </Loco>
      </Inner>
    </>
  );
};

export default index;
