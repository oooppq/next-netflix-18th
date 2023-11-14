export async function getMovies(type: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  const movies = data.results.map((movie: any) => ({
    id: movie.id,
    poster_path: movie.poster_path,
    title: movie.title,
  }));

  return movies;
}

export const getSearchedMovies = async (query: string, page: number = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
