import Head from "next/head";
import Game from "../components/Game";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Space Shape Escape</title>
        <meta name="description" content="Space Shape Escape game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex items-center justify-center">
        <Game />
      </main>
    </div>
  );
}
