function formatGenres(data){
  let genres = ""
  for(let genre in data){
    if(genre == 0){
      genres += data[genre].name;
    }
    else {
      genres += ", " +data[genre].name;
    }
  }
  return genres;
}