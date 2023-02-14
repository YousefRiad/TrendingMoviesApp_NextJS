import Image from "next/image";

// export async function generateStaticParams() {
//   const data = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
//   );
//   const res = await data.json();
//   return res.results.map((movie) => ({
//     movie: toString(movie.id),
//   }));
// }

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 0 } }
  );
  const res = await data.json();
  return (
    <main>
      <div>
        <h2 className="text-4xl text-center">{res.title}</h2>
        <h2 className="text-lg text-center">{res.release_date}</h2>
        <h2 className="text-lg text-center">Runtime: {res.runtime} mins</h2>
        <h2 className="bg-green-600 inline-block py-2 px-2 rounded-tr-lg">
          {res.status}
        </h2>
        <Image
          className=""
          src={imagePath + res.backdrop_path}
          width={2000}
          height={2000}
          alt={res.title}
          priority
        />
        <p className="text-sm my-4 mx-4">{res.overview}</p>
      </div>
    </main>
  );
}
