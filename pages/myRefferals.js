import React from "react";
import MyRefferals from "../Component/MyRefferals";
import Head from "next/head";
import {getSession} from 'next-auth/react';

const myrefers = () => {
  return (
    <div>
      <Head>
        <title>My Refferals</title>
      </Head>

      <MyRefferals />
    </div>
  );
};

export default myrefers;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
