import MovieCard from "../components/MovieCard";

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b105c7f598msh8fdd7b45f7cdd95p1d3a49jsna653d2890760",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const movies_data = data.titles;

  return (
    <>
      <h1>Series & Movies</h1>
      {movies_data.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
      })}
    </>
  );
};

export default Page;