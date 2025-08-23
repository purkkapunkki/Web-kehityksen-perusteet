"use strict";

const numberOfMovies = parseInt(
  prompt("Syötä arvosteltavien elokuvien määrä:")
);
const movies = [];
for (let i = 0; i < numberOfMovies; i++) {
  const movieName = prompt("Syötä elokuvan nimi:");

  let movieRating;
  let ratingQuestion = "Syötä elokuvan arvosana (1-5):";
  while (true) {
    movieRating = parseInt(prompt(ratingQuestion));
    if (movieRating >= 1 && movieRating <= 5) {
      break;
    } else {
      ratingQuestion = "Arvosana ei kelpaa. Syötä elokuvan arvosana (1-5):";
    }
  }

  const movie = { name: movieName, rating: movieRating };
  movies.push(movie);
}

if (movies.length > 0) {
  const sortedMovies = movies.toSorted((a, b) => b.rating - a.rating);

  const target = document.getElementById("target");

  const bestMovie = document.createElement("p");
  bestMovie.innerHTML = `Paras elokuva: ${sortedMovies[0].name}`;
  target.append(bestMovie);

  const movieListHeader = document.createElement("p");
  movieListHeader.innerHTML = "Elokuvat arvosanan mukaan:";
  target.append(movieListHeader);

  const movieListElement = document.createElement("ol");
  for (const movie of sortedMovies) {
    const movieElement = document.createElement("li");
    movieElement.innerHTML = `${movie.name}: (${movie.rating})`;
    movieListElement.append(movieElement);
  }
  target.append(movieListElement);
}
