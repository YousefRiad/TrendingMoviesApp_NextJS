import Link from "next/link";
import Image from "next/image";



const Movie = ({ title, id, poster_path, release_date}) => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h2 className="mx-10 text-xl">{title}</h2>
      <p className="mx-10 text-sm bg-yellow-600 inline-block py-1 px-1 rounded-lg">{release_date}</p>
      <Link href={`/${id}`}>
        <Image
          className="movie"
          src={imagePath + poster_path}
          width={1000}
          height={1000}
          alt={title}
          priority
        />
      </Link>
    </div>
  );
};

export default Movie;
