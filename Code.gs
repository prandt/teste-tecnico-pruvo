const api = "https://api.themoviedb.org/3/movie/"
const params = "?api_key=5daf9668427fd23acaa5814b559f70ed&language=pt-BR"

function createMenu(){
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Menu')
    .addItem('Buscar filmes', 'addData')
    .addItem('Apagar Dados', 'clearRows')
    .addToUi();
}

function clearRows(){
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.clearContents();
  sheet.appendRow(['Nome','Status','IMDB','Gêneros','ID']);
}

function onOpen()  {
  createMenu();
}

async function addData()  {
  const sheet = SpreadsheetApp.getActiveSheet();
  const movies = await getMovies();
  for(let movie in movies){
    sheet.appendRow([movies[movie].title,movies[movie].status, movies[movie].imdb_id, movies[movie].genres, movies[movie].id]);
  }
}






