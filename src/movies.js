// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((element) => element.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (element) =>
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let avarageSum = moviesArray.reduce((first, second) => {
    return first + Number(second.score || 0);
  }, 0);

  return avarageSum > 0
    ? Number((avarageSum / moviesArray.length).toFixed(2))
    : avarageSum;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let avarageArray = moviesArray.filter((element) =>
    element.genre.includes("Drama")
  );

  let avarageSum = avarageArray.reduce((first, second) => {
    return first + Number(second.score || 0);
  }, 0);

  return avarageSum > 0
    ? Number((avarageSum / avarageArray.length).toFixed(2))
    : avarageSum;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.toSorted((element, secElem) => {
    return (
      element.year - secElem.year || element.title.localeCompare(secElem.title)
    );
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let dummyArr = [];
  //debugger;
  let sth = moviesArray.toSorted((element, secElem) => {
    return element.title.localeCompare(secElem.title);
  });

  sth.forEach((element) => {
    dummyArr.push(element.title);
  });

  return dummyArr.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
