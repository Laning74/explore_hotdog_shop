// import Link from "next/link";
// import Image from "next/image";
import Card from "../components/card";

const HomePage = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

export default HomePage;

// export const HomePage = ({ data }) => (
//   <div className="home_body">
//     {data?.map((ev) => (
//       <Link key={ev.id} href={`/about-us/${ev.id}`} passHref>
//         <div className="image">
//           <Image width={300} height={200} alt={ev.name_shop} src={ev.image} />
//         </div>
//         <div className="content">
//           <h2> {ev.name_shop} </h2>
//         </div>
//       </Link>
//     ))}
//   </div>
// );
