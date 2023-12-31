// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";

// import { useEffect, useState } from "react";
// import { CharacterType } from "@/types/customTypes";

// const inter = Inter({ subsets: ["latin"] });

// const characterEndPoint = "https://rickandmortyapi.com/api/character/";
// const characterPaginationEndPoint =
//   "https://rickandmortyapi.com/api/character/?page=2";

// export async function getServerSideProps() {
//   const res = await fetch(characterEndPoint);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

// export default function Home({ data }) {
//   const [characters, setCharacters] = useState<>();
//   // const { results = [] } = data;

//   const loadMore = async () => {
//     if (data.info.next != null) {
//       // const res = await fetch(data.info.next);
//       // console.log("object :>> ", data.info.next);
//       // // console.log("res :>> ", await res.json());
//       // const result = await res.json();
//       // console.log("result :>> ", result.results);
//       // setCharacters(result.results);
//       // console.log("data :>> ", characters);
//     }
//   };
//   useEffect(() => {}, [characters]);
//   return (
//     <>
//       <Head>
//         <title>Rick & Morty</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className={`${styles.main} ${inter.className}`}>
//         <div>
//           <h1>Rick & Morty API</h1>
//           <div>
//             <ul className={`${styles.characterList}`}>
//               {/* {data.results.map((result) => { */}
//               {characters &&
//                 characters.map((result) => {
//                   const { id, name, image } = result;
//                   return (
//                     <li className={`${styles.characterCard}`} key={id}>
//                       <div className={`${styles.imgBoxOnCard}`}>
//                         <img src={image} alt={`Image of ${name}`} />
//                       </div>
//                       <div className={`${styles.textBoxOnCard}`}>
//                         <ul>
//                           <li> {name}</li>
//                         </ul>
//                       </div>
//                     </li>
//                   );
//                 })}
//             </ul>
//             <button onClick={loadMore}>Load more</button>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
