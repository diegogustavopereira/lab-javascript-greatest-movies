// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    
    const diretores = moviesArray.map((item) => {
        return item.director;
    });

    return diretores;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesDirector = moviesArray.filter((item) => {
        return item.director === "Steven Spielberg"
    });

     const moviesDrama = moviesDirector.filter((item1) => {
        return item1.genre.includes("Drama")

    });

    return moviesDrama.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (!moviesArray.length) {
        return 0;
    }
    
    const scoreArray = moviesArray.map((item) => {
        if (item.score > 0) {
            return item.score;
        } else{
            return 0;
        }
    });

    const somaTotal = scoreArray.reduce((soma, valorAtual) => {
        return soma + valorAtual 

    });

    let media = somaTotal / moviesArray.length;

    media = parseFloat(media.toFixed(2));

    return media;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    

    const moviesDrama = moviesArray.filter((item1) => {
        return item1.genre.includes("Drama")
    });

    if (!moviesDrama.length) {
        return 0;
    }
    
    const scoreArray = moviesDrama.map((item) => {
        if (item.score > 0) {
            return item.score;
        } else{
            return 0;
        }
    });

    const somaTotal = scoreArray.reduce((soma, valorAtual) => {
        return soma + valorAtual 

    });

    let media = somaTotal / moviesDrama.length;

    media = parseFloat(media.toFixed(2));

    return media;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const cloneMovies = moviesArray.map((item) => {
        return item});
    
        
        cloneMovies.sort(function(a,b) {
          if(a.title < b.title){
            return -1;
        } else {
          return true;
        }
        });
    
        const orderYear = cloneMovies.sort((a, b) =>  a.year - b.year);
    
        
      return orderYear;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const cloneMovies = moviesArray.map((item) => {
        return item});

        cloneMovies.sort(function(a,b) {
            if(a.title < b.title){
              return -1;
          } else {
            return true;
          }
          });
    
        let registros = cloneMovies.length;
        
        if (registros > 20){
          cloneMovies.splice(20, registros);
        }
    
        const orderAlfa = cloneMovies.map((item) => {
          return item.title;
        });
    
        return orderAlfa;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
