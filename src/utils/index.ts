import { API_KEY } from "@/constant";

// === fetch the movie details with ISR ===
export const getMovieDetails = async (id: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
      {
        next: {
          revalidate: 60, // revalidate after every 60 seconds
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

// === fetch the movie recommendations with ISR ===
export const getMovieRecommendations = async (movieId: number) => {
  try {
    const recommendationResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}`,
      {
        next: {
          revalidate: 60, // revalidate after every 60 seconds
        },
      }
    );
    const data = await recommendationResponse.json();
    const recommendations = data?.results;
    return recommendations;
  } catch (error) {
    console.error("Error fetching movie recommendations:", error);
    return null;
  }
};
