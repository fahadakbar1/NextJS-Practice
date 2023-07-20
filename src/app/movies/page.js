import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movies = async () => {
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
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {movies_data.map((movie) => {
              return <MovieCard key={movie.id} {...movie} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movies;
