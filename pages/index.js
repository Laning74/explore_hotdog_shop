import Head from "next/head";
import { HotdogCard } from "../components/hotdogCard";
//Når jeg henter inn map kommer window feilen og hvis jeg tar bort map så kommer det undefined data
import Map from "../components/Map/map";

export default function Home({ data }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Hotdog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HotdogCard data={data} />
      <Map data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const { hotdog_shops } = await import("/data/data.json");
  return {
    props: {
      data: hotdog_shops,
    },
  };
}
