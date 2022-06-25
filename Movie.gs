function getIdOfLasMovie(){
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  if(sheet.getDataRange().getLastRow() > 1.0){
    for(let i = 0; i < data.length; i++){
      if((data.length - 1) == i){
       return data[i][4]
      }
    }
  }
}

function setNextMovieId(){
  const movieId = getIdOfLasMovie();
  if(movieId != null){
    return movieId;
  }
  else {
    return 76340;
  }
}

async function getMovies() {
  const movies = [];
  var data = "";
  var movieId = setNextMovieId();

  while(movies.length != 10 && movieId < 77000){
    movieId++;
    try{
       data = JSON.parse(UrlFetchApp.fetch(api + movieId + params))
       data = {
         "title" : data.title,
         "genres" : formatGenres(data.genres),
         "imdb_id" : data.imdb_id,
         "status" : data.status,
         "id": data.id
       }
       movies.push(data)
    }
    catch {

    }
  }
  return movies;

}


