import Head from "next/head";
import { getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session && !router.query.login) return <Login />;

  return (
    <>
      <Head>
        <title>PicaBook</title>
        <meta name="description" content="A social Media Platform made by Caffine Coders in 24rs Hackathon." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <LeftSidebar />
        <RightSidebar />
        <Feed />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
