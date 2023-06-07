export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;
  return (
    <div className="">
      <img height={300} src={imageUrl} alt={movie.title} />
    </div>
  );
}
