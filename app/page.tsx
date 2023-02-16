import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Movie from "./Movie";
const inter = Inter({ subsets: ["latin"] });

type Movie = {
  id: number,
  title: string,
  poster_path: string,
  release_date: string
}

async function getData(): Promise<Movie[]> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  if(!res.ok){
    throw new Error('failed to fetch')
  }
  console.log("*****************")
  const response = await res.json()
  console.log(response);
  return response;
}

export default async function Home() {
  const data = await getData()
  return (
    <main>
      <h1>MovieLand</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {data['results'].map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}          />
        ))}
      </div>
    </main>
  );
}
