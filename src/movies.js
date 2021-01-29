// Iteration 1: All directors? - Get the array of all directors.
//Use .map() to map through the array, and get only directiors
function getAllDirectors(dirArr) {
    return dirArr.map((movie) => {
        return movie.director
    })
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    return array.filter((movie) => {
      const directedStevenS = movie.director == 'Steven Spielberg';
      const dramaMovie = movie.genre.includes('Drama');
      return directedStevenS && dramaMovie;
    }).length;
  }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    return (
      Number(
        (
          array.reduce((acc, movie) => {
            return (acc += movie.rate || 0);
          }, 0) / array.length
        ).toFixed(2)
      ) || 0
    );
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let filteredDramaMovies  = array.filter((eachMovie) => {
        return eachMovie.genre.includes('Drama')
    })
    return ratesAverage(filteredDramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    console.log(array);
    const result = array.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (b.year > a.year) {
        return -1;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
    return [...result];
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
 function orderAlphabetically(array) {
     let sortedArray = [...array].sort((a, b) => {
         return a.title.localeCompare(b.title)
     })
     let first20titles = sortedArray.slice(0, 20).map((item) => {
         return item.title
     })
     return first20titles
 }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    let newArr = arr.map((movie) => {
      let eachMovie = { ...movie };
      let words = eachMovie.duration.split(' ');
      let hours = parseInt(words[0]);
      if (words[0].includes('m')) {
        eachMovie.duration = parseInt(words[0]);
      } else {
        let minutes = 0;
        if (words[1]) {
          minutes = parseInt(words[1]);
        }
  
        let totalTime = hours * 60 + minutes;
        eachMovie.duration = totalTime;
      }
      return eachMovie;
    });
    console.log(arr);
    console.log(newArr);
    return newArr;
  }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(array) {

}